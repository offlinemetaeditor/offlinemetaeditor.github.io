---
title: Settings and data folder
description: What each setting does, where the editor keeps your accounts and preferences, and the environment variables it reads.
---

## Settings

Open **⚙** at the right end of the toolbar, **File → Settings…** or <kbd>Ctrl</kbd>+<kbd>,</kbd>. The command
line uses the same settings.

- **Meta account and access token**: test the token, use another one (for this session, or saved in
  Windows Credential Manager), log out, log back in and delete the stored token. You can also change which
  environment variable, secret and vault the token is read from. See [Access token](/access-token/).
- **Download and upload**: the Graph API version, whether downloads include archived items by default, and
  the pause between writes when pushing (300 ms by default).
- **Appearance**: the theme (follow Windows, Light, Dark or Frutiger Aero), the Windows font (Segoe UI) and
  the zoom.
- **Data**: the data folder, and the size of the image cache with a button to clear it.

## Data folder

Everything the editor keeps is in one folder:

```text
%LOCALAPPDATA%\meta-ads-editor
```

Paste that in the Windows Explorer address bar to open it, or use **File → Open data folder**.

| File or folder | What it holds |
|---|---|
| `workspaces\act_<id>.json` | One file per downloaded account: Meta's values and your pending edits |
| `settings.json` | Your settings |
| `view.json` | Columns, sorting and Show of each level |
| `session.json` | The open tabs |
| `favorites.json` | Your favorites |
| `thumbs\` | Images seen in previews and thumbnails, for offline use |
| `crash.log` | Written if the editor stops unexpectedly (see [Troubleshooting](/reference/troubleshooting/#the-editor-closed-unexpectedly)) |

Your edits are saved here by themselves a moment after you make them, and when the editor closes.

**Backing up** is copying the folder. **Moving to another computer** is copying it to the same place there.
**Removing everything** is deleting it (a token saved in Credential Manager stays there; delete it in
Settings first if you want it gone too).

To keep the data somewhere else, set the environment variable `MAE_DATA_DIR` to another folder.

## Environment variables

| Variable | What it does |
|---|---|
| `META_ACCESS_TOKEN` | The access token, checked before Credential Manager |
| `MAE_TOKEN_ENV` | Read the token from a variable with another name |
| `MAE_SECRET_NAME`, `MAE_SECRET_VAULT` | The secret and vault in Credential Manager (default `Meta-Long-Lived-Access-Token` in `Local`) |
| `MAE_DATA_DIR` | Another data folder |
| `MAE_ACCOUNT` | The account the command line uses |
| `MAE_API_VERSION` | The Graph API version |
| `MAE_PERF` | `1` shows how long each frame takes in the title bar, to look into slowness |
