---
title: Check and upload
description: How Check validates your changes with Meta, what the Push window shows, and what happens when Meta refuses something or the API limit is reached.
---

Every edit you make waits on your computer as a pending change. The toolbar counts them:
**⬆ Push 3 changes**. Two buttons send them to Meta.

## Check

**✔ Check** (<kbd>Ctrl</kbd>+<kbd>K</kbd>) sends every pending change to Meta with *validate only*: Meta
runs all of its checks (budgets, targeting, policies, required fields) and applies nothing. The answer for
each change shows in the **Results** tab at the bottom. Check as often as you like.

## Push

**⬆ Push N changes** (<kbd>Ctrl</kbd>+<kbd>P</kbd>) opens **Upload changes to Meta**, with everything that
will happen, grouped by type: how many to create, update and delete, and for each item the fields with their
old and new values. From there:

- **✔ Check first (validate only)** runs a check without leaving the window;
- **Overwrite even if changed on Meta since download**: see [Conflicts](#conflicts);
- **Pause between writes (ms)**: Meta limits bursts of edits, and the default (300 ms) keeps clear of that;
- **⬆ Push N change(s) now** sends them; **Cancel** closes the window and sends nothing.

The editor sends campaigns first, then ad sets, then creatives, then ads, so new ad sets can go into new
campaigns. Temporary ids (`new_1`…) are replaced by Meta's real ids as items are created. The account is
saved on your computer after every successful write: if the push stops halfway, push again and it continues
from where it stopped.

**✖ Cancel** in the toolbar stops a push after the requests already on their way.

## When Meta refuses something

A change Meta refuses stays pending with a red **!** in the table and *Last error* in Properties, with
Meta's message. The rest of the push goes on, except what depends on it: the ads of an ad set Meta refused
to create wait for it. Fix the field and push again.

Common refusals, and what to do:

| Meta says | What to do |
|---|---|
| The pixel or event of a published ad set cannot change | Duplicate the ad set, set the event in the copy, pause the old one |
| The attribution window of an existing ad set cannot change | Same: set it on a duplicate |
| An ad set under a campaign budget has its own budget | Remove the ad set's budget, or the campaign's |
| The token has no `ads_management` | Use a token with that permission ([Access token](/access-token/)) |

## Conflicts

Before writing, the editor reads again the items it is about to change. If someone changed **the same field**
in Ads Manager since your download, that change is skipped and shown as **CONFLICT**, so you don't overwrite
their work by accident. Download again to see their value (your other edits are kept), or tick **Overwrite
even if changed on Meta since download** to send yours anyway.

## API limits

Meta limits how many calls each ad account and app can make. The toolbar shows the account's usage after its
name (**API 52%**; amber from 75%, red from 90%). The editor slows down from 75%, and when Meta blocks the
account it stops at once, keeps what was done and tells you when calls work again, for example *API limited
until 18:42*. Wait until then: retrying makes Meta's lock longer. See
[How syncing works](/reference/how-sync-works/#api-limits).

## After the push

The pushed changes stop being pending, new items get their real ids, and the **Results** tab lists what was
done. Ads with new content go through Meta's review again, as they would in Ads Manager.
