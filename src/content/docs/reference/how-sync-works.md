---
title: How syncing works
description: What a download keeps and replaces, how a push is ordered, how conflicts are found, and how the editor handles Meta's API limits.
---

## Two versions of everything

For every campaign, ad set, ad and creative, the account's file keeps two versions: **Meta's**, as of the
last download, and **yours**. A pending change is a field where they differ. That is why the editor can show
Meta's value next to yours, revert a single field, and know exactly what to send.

New items exist only in your version, with a temporary id (`new_1`, `new_2`…) until a push creates them.

## Downloading again

A download merges three things: what Meta has now, what Meta had at your last download, and your edits.

- Fields you **did not** change take Meta's current value.
- Fields you **did** change keep your value.
- If Meta also changed a field you changed, you get a conflict notice in the log, and your value is kept.
- Items deleted on Meta disappear, unless you have edits on them.

So you can download again at any time without losing work. If the account's file exists but cannot be read,
the download stops instead of replacing it, and the log names the file to move away.

**Speed.** Campaigns, ad sets and ads come in parallel, and each creative's content is fetched once, however
many ads share it. Meta never changes a creative's content, so later downloads skip the creatives they
already have: the first download of an account with 2,000 ads takes about 20 seconds, the next ones a few
seconds.

## Pushing

1. The editor builds the list of operations from your pending changes: what to create, update and delete.
2. It reads again from Meta the items it is about to change, to find [conflicts](#conflicts).
3. It sends campaigns first, then ad sets, creatives and ads, so a new ad set can go into a new campaign and a
   new ad into a new ad set. Temporary ids are replaced by Meta's ids as items are created.
4. After every successful write it saves the account's file. An interrupted push simply continues where it
   stopped the next time.

**Creatives are never edited.** Meta does not allow it. A changed ad gets a new creative with your content,
created just before the ad is updated; links to images are refreshed right before, because Meta's image links
expire.

## Conflicts

If someone changed **the same field** in Ads Manager after your download, the push skips that change and
shows **CONFLICT**, so you don't overwrite their work without seeing it. Download again to see the new value
(your other edits stay), or push with **Overwrite even if changed on Meta since download** (`--force` on the
command line).

## API limits

Meta limits the calls each ad account and each app can make, and reports the usage with every answer. The
editor:

- shows the account's usage after its name in the toolbar, **API 52%** (amber from 75%, red from 90%); point
  at it for every counter;
- slows down as the usage grows (2 seconds between calls from 75%, 8 seconds from 90%);
- **stops at once** when Meta blocks the account, keeps what was done, and shows when calls work again,
  for example *API limited until 18:42*. Meta's lock often lasts 15 to 30 minutes, and retrying makes it
  longer;
- waits out Meta's short per-call limits (such as "1 call per 30 seconds") and tries once more.

`mae limits` reads the account's usage with one light call. Apps on Meta's development access tier have much
lower limits than apps with standard access.

Downloads and pushes can be cancelled with **✖ Cancel** in the toolbar. A download cancelled while fetching
creatives keeps everything else, and the next download fetches the missing creatives.
