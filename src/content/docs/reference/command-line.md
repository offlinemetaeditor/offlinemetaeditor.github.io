---
title: Command line
description: "mae.exe runs the same operations as the editor from PowerShell or a script: download, edit, check and push."
---

`mae.exe` uses the same engine and the same files as the editor: an account downloaded in one is open in the
other, and edits made in one are pending in both. Use it for scripts, scheduled tasks or quick changes.

## A typical session

```powershell
mae accounts                                   # the ad accounts your token can reach
mae pull act_1234567890                        # download one (edits you already have are kept)
mae ls adsets --search "remarketing"           # find what to change
mae set 120200000000000001 status=PAUSED       # change it
mae budget 120200000000000002,120200000000000003 +20%
mae diff                                       # every pending change, field by field
mae check                                      # Meta validates them, applies nothing
mae push                                       # upload (asks before sending)
```

## Choosing the account

With a single downloaded account, every command uses it. With more, pick one with `-a act_1234567890` (or
`-a 1234567890`), or set the environment variable `MAE_ACCOUNT`.

## Commands

| Command | What it does |
|---|---|
| `accounts` | List the ad accounts your token can access |
| `local` | List the accounts already downloaded on this computer |
| `pull` | Download or refresh an account; your edits are kept. `--archived` also brings archived items; `--campaign <id>` (repeatable) brings only those campaigns |
| `status` | Summary of the pending changes |
| `diff` | Every pending change, field by field |
| `ls` | List items: `mae ls adsets`, `mae ls ads --parent <ad set>`; also `--search <text>` and `--changed` |
| `show` | Every field of one item, yours and Meta's when different: `mae show <id>` |
| `set` | Set fields: `mae set <ids> status=PAUSED daily_budget=50,00 name="New name"` |
| `text` | Change a text: `mae text <ad or creative id> <slot> <values>`, where the slot is `primary_text`, `headline`, `description`, `link` or `call_to_action` |
| `media` | `mae media <ad id>` lists an ad's media per placement; `mae media <ad id> <line or all> <image hash or video id>` puts one on a line |
| `budget` | `mae budget <ids> +20%`, `-15%` or `=50,00` |
| `duplicate` | `mae duplicate <id>` (copies start paused); `--deep` copies what is inside, `--into <parent>` puts the copy under another campaign or ad set |
| `new` | `mae new campaign`, `mae new adset --parent <campaign>`, `mae new ad --parent <ad set>`; `--name` names it |
| `delete` | Mark items for deletion: `mae delete <ids>` (items that exist only here are removed at once) |
| `revert` | Drop pending changes: `mae revert <ids>`, or `mae revert --all` |
| `export` | Export a level to CSV or TSV: `mae export adsets adsets.csv`; `--delimiter` takes `,` `;` or `tab` |
| `import` | Import an edited file as pending changes: `mae import adsets.csv`; `--kind` when the level is not found from the columns |
| `check` | Ask Meta to validate every change, applying nothing |
| `push` | Upload the pending changes; options below |
| `preview` | Link to Meta's preview: `mae preview <ad or creative id>`; `--format INSTAGRAM_STORY` (or `MOBILE_FEED_STANDARD`, `INSTAGRAM_STANDARD`, `INSTAGRAM_REELS`…), `--open` opens it |
| `limits` | The account's API limits now (one light call) |
| `library` | Pixels, custom conversions and audiences, and where they are used; `--refresh` downloads them again |
| `events` | Event counts of a pixel, read from Meta: `mae events [pixel id] --days 7` |
| `audience` | `mae audience <id>` shows an audience; `mae audience <id> include <ad set ids>` (or `exclude`, `remove`) changes ad sets, as a local edit |
| `token` | The access token: `status`, `set`, `logout`, `login`, `delete`. See [Access token](/access-token/) |
| `gui` | Open the editor |
| `path` | Print the path of the account's file |

Ids separated by commas (`id1,id2,id3`) work wherever a command takes several ids.

## Details

**Text with an ad id or a creative id.** `mae text <ad id> …` changes only that ad, as the editor does.
`mae text <creative id> …` changes every ad that uses that creative. Flexible creatives take several values:
`mae text 1202… headline "First" "Second"`.

**Money.** Budgets are in the account's currency with a comma or a period: `50,00` or `50.00`.

**Push options.** `--yes` skips the confirmation (for scripts). `--force` sends your values even where
someone changed the same field on Meta since your download. `--only` pushes just those items. `--delay-ms`
is the pause between writes, 300 ms by default.

**Global options.** `-a, --account` (or `MAE_ACCOUNT`), `-w, --workspace` to use another account file, and
`--api-version` (or `MAE_API_VERSION`) for the Graph API version, `v26.0` by default.

Run `mae --help`, or `mae <command> --help`, for the full list.
