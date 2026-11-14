---
title: Spreadsheets
description: Export a level to Excel or Google Sheets, edit it there and import it back, or paste rows straight from a spreadsheet.
---

Any level can go to a spreadsheet and come back as local edits. It is the fastest way to change many
different values at once, such as a different budget for each ad set.

## Export

**File → Export to CSV** picks the level (Campaigns, Ad sets or Ads). To export only some rows, select them and
use **More ▾ → Export selection to CSV**. Files end in `.csv` (comma) or `.tsv` / `.txt` (tab), and are saved as
UTF-8 with a BOM, so Excel shows accents correctly.

The Ads file includes each ad's texts and URL parameters. Texts with several variations are written as a JSON
list: `["text 1","text 2"]`.

## Import

**File → Import CSV…** (<kbd>Ctrl</kbd>+<kbd>I</kbd>) reads the file back as local edits, which you then check
and push as usual.

- Comma, semicolon (what Excel saves in Portuguese and other languages) and tab are detected by themselves;
  Excel's "Unicode text" works too.
- **An empty cell means "leave as it is".** Only cells with a value change something.
- **A row with an empty `id` creates a new item.** New ad sets need `campaign_id` and new ads need
  `adset_id`.
- Money accepts `1.234,56` and `1,234.56`.
- The level is found from the column names.
- Changing an ad's texts or URL parameters changes only that ad, as in the editor.

The import ends with a summary (rows read, items changed, created, errors), errors go to the Log, and the
table switches to **Show: pending changes** so you see what came in.

## Import from text

**File → Import from text…** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>I</kbd>, or
<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>B</kbd>, *Make multiple changes*) takes rows from the clipboard
instead of a file. Copy the rows in Excel or Google Sheets, with the header line, and press
<kbd>Ctrl</kbd>+<kbd>V</kbd> in the window (or click **📋 Paste**). It shows how many rows and columns it
read, the first rows and the level it found, before **Import**.

Pressing <kbd>Ctrl</kbd>+<kbd>V</kbd> in the main window with rows from a spreadsheet opens this window
too.

## Copying rows from the editor

<kbd>Ctrl</kbd>+<kbd>C</kbd> on selected rows puts them on the clipboard as a table with the same columns as
the export. Paste them in a spreadsheet, change what you need, copy them back and paste them in **Import from
text**. Inside the editor, <kbd>Ctrl</kbd>+<kbd>V</kbd> pastes copies of the items instead; see
[Bulk changes, copy and undo](/guides/bulk-changes/#copy-cut-and-paste).

Every import is one step of undo: <kbd>Ctrl</kbd>+<kbd>Z</kbd> takes it all back.
