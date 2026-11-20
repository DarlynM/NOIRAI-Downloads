# The receiving desk

Two deliveries arrived against one order. Three blue washers are missing and a box has one extra red cap. Run the calculation on your own PC, add a washer, and watch the counts change. The calculation works without a model download, API key or provider charge.

**[Download Noir for Windows](https://github.com/DarlynM/NOIRAI-Downloads/releases/latest)** · **[Download the sample project](https://raw.githubusercontent.com/DarlynM/NOIRAI-Downloads/main/receiving-desk/Noir-receiving-desk.zip)** · **[Print the worksheet](https://raw.githubusercontent.com/DarlynM/NOIRAI-Downloads/main/receiving-desk/Noir-receiving-desk.pdf)**

## Use the sample project in Noir

1. Install Noir on Windows x64 and open **NOIRAI**. Setup needs internet to fetch the runtimes. The current installer is unsigned. Windows publisher signing is one of NoirGen's funding goals.
2. Download the sample project. In File Explorer, choose **Extract All**. In Noir, choose **Open project** by the Projects heading and select the extracted folder containing `receiving.csv` and `reconcile.py`.
3. Open **Activity** at the bottom of the project chat. Choose **python** as the command runtime, enter `reconcile.py` under command arguments, and select **Run**. The totals should be **3 missing, 1 extra**.
4. Enter `reconcile.py --receive "Blue washers" 1` and select **Run** again. Blue washers now show 28 received. The totals should be **2 missing, 1 extra**. An extra delivery applies to that run only.

To use different quantities, edit and save the CSV in the project and run the calculation again. Each row has a unique item name and three whole numbers. The calculator adds the two deliveries, compares the result with that item's order, and totals shortages and extras separately.

| Item | Ordered | Slip A | Slip B | Received | Difference |
| --- | ---: | ---: | ---: | ---: | --- |
| Blue washers | 30 | 18 | 9 | 27 | 3 short |
| Green tape | 12 | 7 | 5 | 12 | Exact |
| Red caps | 9 | 6 | 4 | 10 | 1 extra |

## Try a model explanation

Once you have the counts, paste the calculated output into a local Noir chat and ask "Which bins need a recount, and what should the shift lead check first?" Compare the explanation with the rows above. If you switch to a cloud provider, review the text and history in the sharing preview before sending.

## Share your experience or support Noir

Tell NoirGen which Windows PC you tried, the two totals you saw, and anything that slowed you down. Use fictional data in public feedback. For a partnership, investment conversation or team evaluation, contact NoirGen directly.

[Report a result](https://github.com/DarlynM/NOIRAI-Downloads/issues/new?template=windows-pilot.yml) · [Contact NoirGen](mailto:social@noirgen.com) · [Support Windows signing and development](https://www.gofundme.com/f/help-build-noir-free-local-ai-for-everyone)
