"""Reconcile a receiving slip with Noir's local Python runtime."""
import argparse
import csv
from pathlib import Path

FIELDS = ["item", "ordered", "delivery_a", "delivery_b"]


def count(text):
    if text is None or not text.strip().isascii() or not text.strip().isdecimal():
        raise ValueError(f"Expected a nonnegative whole number, got {text!r}")
    return int(text)


def reconcile(path, arrival):
    results = {}
    with path.open(encoding="utf-8-sig", newline="") as source:
        rows = csv.DictReader(source)
        if rows.fieldnames != FIELDS:
            raise ValueError("Expected the header " + ",".join(FIELDS))
        for row in rows:
            name = (row["item"] or "").strip()
            if None in row or not name or name in results:
                raise ValueError(f"Check the item name and field count on row {rows.line_num}")
            ordered, a, b = (count(row[field]) for field in FIELDS[1:])
            results[name] = (ordered, a + b)
    if not results:
        raise ValueError("Enter at least one item")
    if arrival:
        item, amount = arrival
        if item not in results:
            raise ValueError(f"Unknown item {item!r}")
        ordered, received = results[item]
        results[item] = (ordered, received + count(amount))
    return results


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--receive", nargs=2, metavar=("ITEM", "COUNT"),
                        help="Include an additional delivery in this run")
    args = parser.parse_args()
    try:
        rows = reconcile(Path(__file__).with_name("receiving.csv"), args.receive)
    except (ValueError, OSError, csv.Error) as error:
        parser.exit(2, f"{error}\n")
    missing = extra = 0
    recount = []
    for name, (ordered, received) in rows.items():
        short = max(ordered - received, 0)
        over = max(received - ordered, 0)
        missing += short
        extra += over
        if short or over:
            recount.append(name)
        print(f"{name} | ordered {ordered} | received {received} | missing {short} | extra {over}")
    print(f"Total missing {missing} | Total extra {extra}")
    print("Recount " + ", ".join(recount) if recount else "All quantities match")


if __name__ == "__main__":
    main()
