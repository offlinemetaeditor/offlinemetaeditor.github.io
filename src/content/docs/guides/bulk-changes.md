---
title: Bulk changes, copy and undo
description: Change many rows at once, copy and paste campaigns, ad sets and ads, and undo any edit.
---

Select the rows (<kbd>Ctrl</kbd>+click, <kbd>Shift</kbd>+click or <kbd>Ctrl</kbd>+<kbd>A</kbd> for every row
shown) and the actions for them appear above the table. Everything below is a local edit: nothing reaches
Meta until you [push](/guides/check-and-push/).

## Status

**▶ Activate** and **⏸ Pause** appear only when they would change something
(<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>A</kbd> and <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>).
**More ▾ → Archive** archives. **🗑 Delete** (or the <kbd>Delete</kbd> key) marks the rows for deletion on
push; items that exist only on your computer disappear at once.

## Budgets

**Budget ▾** (<kbd>Ctrl</kbd>+<kbd>B</kbd>), on campaigns and ad sets:

- **−20%**, **−10%**, **+10%**, **+20%** or **+50%** on every selected budget;
- **Set to** a value, for example `75,00`; <kbd>Enter</kbd> applies it.

Only rows with a budget of their own change: for a campaign budget, select the campaign; for ad set budgets,
the ad sets. The status bar says how many budgets changed.

## Names

**Rename ▾** works on all the selected names at once:

- **Find** and **Replace with** (<kbd>Ctrl</kbd>+<kbd>H</kbd>);
- **Add prefix** and **Add suffix** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>H</kbd>);
- **Capitalization** (<kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>H</kbd>): *Each Word*, *First letter*,
  *UPPERCASE* or *lowercase*. *Each Word* and *First letter* only raise first letters, so acronyms such as
  "CBO" stay as they are.

Press <kbd>Enter</kbd> in any box, or click **Rename selected**.

## Duplicate

**Duplicate ▾ → Only the selected** or **With everything inside** (a campaign with its ad sets and ads, an
ad set with its ads). Copies get " - Copy" at the end of the name, start paused and are created on push.

## Copy, cut and paste

- <kbd>Ctrl</kbd>+<kbd>C</kbd> copies the selected rows. They also go to the clipboard as a table, so a
  spreadsheet pastes them as cells. <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>C</kbd> copies just the names.
- <kbd>Ctrl</kbd>+<kbd>V</kbd> pastes copies, with what is inside them: ad sets go into the campaigns
  selected on the Campaigns level, ads into the selected ad sets. With none selected, or into their own
  campaign or ad set, the copy goes next to the original. Pasted copies keep the name and start paused.
- <kbd>Ctrl</kbd>+<kbd>X</kbd> then <kbd>Ctrl</kbd>+<kbd>V</kbd> **moves**: copies are made where you
  paste, and the originals are deleted on push. Meta cannot move an ad set to another campaign or an ad to
  another ad set, so a move is always a copy plus a delete, and the copies start without the originals'
  results.

Rows copied from a spreadsheet open in **Import from text** when you press <kbd>Ctrl</kbd>+<kbd>V</kbd>, so
you can look at them before they come in. See [Spreadsheets](/guides/spreadsheets/).

## Revert and undo

- **↺ Revert** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>R</kbd>) puts the selected rows back the way they
  are on Meta. In Properties, the **↺** next to a field puts back just that field. **Edit → Revert ALL local
  changes** drops every pending change of the account.
- <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes the last edit and <kbd>Ctrl</kbd>+<kbd>Y</kbd> (or
  <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>Z</kbd>) redoes it. The Edit menu names the step, for example
  *Undo rename*. Typing in one field counts as one step, and the editor keeps 100 steps per account.

The undo history starts over after a download or a push. Creating, renaming or deleting audiences and custom
conversions happens on Meta at once, so it cannot be undone here.
