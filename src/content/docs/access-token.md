---
title: Access token
description: Which Meta access token the editor needs, how to get one, and the three ways to give it to the editor.
---

The editor talks to Meta's Marketing API with an access token: a long string that starts with `EAA`. It acts
with your permissions, so it reaches the same ad accounts you reach in Ads Manager.

## Permissions

| Permission | Needed for |
|---|---|
| `ads_read` | Downloading accounts, checking changes, searching places and interests |
| `ads_management` | Uploading changes, and creating audiences and custom conversions |

Settings shows a red warning when the token lacks either of them. Depending on how your business is set
up, page names, profile pictures or Instagram usernames may need page or Instagram permissions too; without
them those details show as ids, and editing still works.

## Getting a token

Meta changes these screens often, so the names below may differ a little.

**For everyday use: a system user token.** In Meta Business Suite, open *Business settings → Users →
System users*, add a system user, give it access to your ad accounts (and the pages the ads run as), then
click **Generate new token**. Pick your app, tick `ads_read` and `ads_management`, and choose an expiry.
A system user token can be set never to expire. You need a Meta app for this, which you create once at
[developers.facebook.com](https://developers.facebook.com/apps/).

**For a quick try: Graph API Explorer.** Open the
[Graph API Explorer](https://developers.facebook.com/tools/explorer/), choose your app, add the
`ads_read` and `ads_management` permissions and click **Generate Access Token**. That token lasts about an
hour. Paste it in the [Access Token Debugger](https://developers.facebook.com/tools/debug/accesstoken/)
and click **Extend Access Token** to get one that lasts about 60 days.

:::tip
Every token also has a *data access* date, after which Meta asks the person to authorize the app again.
**Test token** in Settings shows both dates.
:::

## Giving the token to the editor

A token pasted for the session is used until the editor closes. Otherwise the editor looks for one in this
order:

1. The environment variable `META_ACCESS_TOKEN`.
2. Windows Credential Manager, read through PowerShell SecretManagement.

### Paste it for this session

Open **⚙ Settings** (<kbd>Ctrl</kbd>+<kbd>,</kbd>), paste the token under *Use a different access token*
and click **Use for this session**. Nothing is stored: when the editor closes, the token is gone. This is
the simplest way to start.

### Keep it in an environment variable

Set `META_ACCESS_TOKEN` for your Windows user, in PowerShell:

```powershell
[Environment]::SetEnvironmentVariable('META_ACCESS_TOKEN', 'EAA...your token...', 'User')
```

Close and open the editor again so it sees the variable. The variable is checked first, so it wins over a
stored token. Keep in mind that environment variables are plain text in your Windows profile: any program
you run can read them.

### Save it in Windows Credential Manager

**Save** in Settings stores the token in Windows Credential Manager through PowerShell SecretManagement.
That needs a one-time setup in PowerShell (answer *Yes* if it asks to install NuGet or to trust the
PowerShell Gallery):

```powershell
Install-Module Microsoft.PowerShell.SecretManagement -Scope CurrentUser
Install-Module SecretManagement.JustinGrote.CredMan -Scope CurrentUser
Register-SecretVault -Name Local -ModuleName SecretManagement.JustinGrote.CredMan
```

After that, **Save** keeps the token as the secret `Meta-Long-Lived-Access-Token` in the vault `Local`,
and the editor reads it from there every time it starts. Other scripts that read the same secret get the
new token too. Under *Where the token is read from* in Settings you can use another variable, secret or
vault name.

From the command line, the same:

```powershell
Get-Clipboard | mae token set     # store the token you copied
mae token status                  # where it comes from, whose it is, permissions, expiry
```

## Testing, logging out and deleting

- **Test token** asks Meta who the token belongs to, through which app, with which permissions, and when it
  and its data access expire.
- **Log out** makes the editor stop using the token. A stored token stays stored for your other tools, and
  **Log in with the stored token** brings it back.
- **Delete the stored token…** removes it from Credential Manager after a confirmation. Every tool that
  reads it stops working until a new token is stored.

Command line: `mae token logout`, `mae token login`, `mae token delete --yes`.

## When the token stops working

Meta answers with error **190** when a token expired, was revoked or lost access, and the editor says so
in the log. Generate a new token and give it to the editor in any of the ways above. Your downloaded
accounts and pending edits are not affected: they stay on your computer.

The editor never shows the token (Settings shows its first three characters and its length), never writes
it to disk and sends it only to Meta. See [Privacy and security](/reference/privacy/).
