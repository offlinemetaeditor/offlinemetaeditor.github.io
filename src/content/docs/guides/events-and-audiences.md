---
title: Events Manager and Audiences
description: The account's pixels, event activity and custom conversions, and its audiences, with the ad sets that use each one.
---

**Events Manager** and **Audiences** are in the toolbar and in the **Tools** menu. Each opens in a window of
its own, beside the editor: move it to another monitor, resize it and keep it open while you work. Its title
names the account of the active tab, and it follows when you switch tabs.

Pixels, custom conversions and audiences are downloaded with the account, so both windows work offline.
**⟳ Refresh from Meta** downloads them again.

## Events Manager

- **Datasets (pixels)**: last event received, automatic advanced matching, first-party cookies and the
  business that owns each one.
- **Event activity**: how many times each event arrived in the last 7 days, with a bar per day. These numbers
  are read from Meta when you open the pixel (Meta's counts run a few hours behind) and kept for offline use.
- **Ad sets optimizing on the pixel**, grouped by event. Click one to show it in the editor.
- **Custom conversions**: what each one counts (for example *Purchase where URL contains /thanks*), its last
  event, and the ad sets that optimize for it. You can create, rename and delete them.

## Audiences

- **Custom, lookalike and saved audiences**, with type, size, status and how many ad sets include or
  exclude each one. Sort by clicking a column title, filter by type and search by name or id.
- **Details** of an audience: what it collects (for example *website visitors where URL contains /checkout,
  14 days*), the source of a lookalike, and the ad sets that use it.
- **Include**, **Exclude** or **Remove** puts the audience in, or takes it out of, the ad sets selected in the
  main window. That is a normal edit of their targeting: check and push it like any other change.

### New audiences

- **Website visitors**: a pixel, an event or any page, an optional URL filter, and 1 to 180 days.
- **Lookalike**: the source audience, the country and 1% to 10%.
- **Customer list** from a CSV file. Email, phone and name columns are recognized in English or Portuguese.
  Every value is normalized (phones get the country code from the account's currency) and hashed with
  SHA-256 **on your computer**: Meta receives only the hashes.

:::caution[These apply on Meta at once]
Meta has no draft for audiences and custom conversions. Creating, renaming and deleting them happens right
away, as in Ads Manager (deleting asks first), and cannot be undone with <kbd>Ctrl</kbd>+<kbd>Z</kbd>.
Saved audiences can only be read through Meta's API.
:::
