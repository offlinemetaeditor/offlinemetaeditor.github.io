---
title: Troubleshooting and FAQ
description: What to do when the token, Meta's limits or a push get in the way, and answers to common questions.
---

## Problems

### "No Meta access token found"

The editor found no token in the environment variable or in Credential Manager. Paste one in **⚙ Settings**
and click **Use for this session** or **Save**. See [Access token](/access-token/).

### Save does not store the token

**Save** uses PowerShell SecretManagement, which Windows does not have by default. Run the
[one-time setup](/access-token/#save-it-in-windows-credential-manager), or keep the token in the
`META_ACCESS_TOKEN` environment variable instead.

### Error 190, or "invalid or expired" in Settings

The token expired, was revoked, or the person who created it lost access. Generate a new one and give it to
the editor. Nothing on your computer is lost.

### "Missing ads_management" (or ads_read)

The token lacks a permission. Without `ads_read` nothing downloads; without `ads_management` nothing uploads.
Generate a token with both.

### "API limited until 18:42"

Meta blocked calls for that account for a while. Wait until the time shown: retrying makes the lock longer.
Your edits are safe, and a push that stopped continues where it left off. See
[API limits](/reference/how-sync-works/#api-limits).

### A change shows CONFLICT

Someone changed the same field on Meta after your download. Download again to see their value (your other
edits are kept), then decide; or push with **Overwrite even if changed on Meta since download**.

### Meta refuses to change the conversion event or the attribution

Meta locks both once an ad set is published. Duplicate the ad set, set them on the copy, pause the original
and push.

### An ad went back to review after I changed its text

That is expected. Meta does not let anyone edit a creative, so the ad gets a new one with your text, and new
creatives are reviewed. Ads Manager does the same thing behind the scenes.

### The download stopped and says a file cannot be read

The account's file on your computer exists but is damaged or locked by another program. The editor stops
instead of replacing it, so your pending edits are not lost. Close other programs that might be using it, or
move the file named in the log out of the `workspaces` folder and download again.

### Images do not show

Thumbnails and previews come from Meta the first time they show, and are then kept for offline use. Without
internet, images never seen before cannot show. Meta's image links expire, and the editor asks Meta for new
ones when that happens.

### The editor closed unexpectedly

It wrote what happened to `crash.log` in the [data folder](/reference/settings-and-data/#data-folder), and
shows it in the Log the next time it starts. Your edits up to that moment are saved. If you report the
problem, include that file (it holds no token).

### Windows says the program is not safe

The programs are not code-signed yet, so SmartScreen warns on the first start. Click **More info**, then
**Run anyway**.

## Questions

### Is this an official Meta product?

No. Offline Meta Editor is an independent tool that uses Meta's public Marketing API, with your own access
token.

### Does it change anything on Meta without me knowing?

No. Your edits reach Meta only when you push, after you see the list and confirm. The exceptions are the
actions Meta has no draft for: creating, renaming and deleting audiences and custom conversions, which apply
at once (deleting asks first). Downloads, Check and the searches only read.

### Can I use it with several ad accounts?

Yes. Download as many as you like and open each one in a tab. Each account is a separate file.

### Can two people edit the same account?

Each person has their own copy. If both change the same field, the second push reports a
[conflict](/reference/how-sync-works/#conflicts) instead of overwriting.

### Does it work on Mac or Linux?

Not for now: the programs are for Windows 10 and 11.

### Can I upload new images and videos?

Not yet. Upload them in Ads Manager, then pick them in the ad's Media.

### Does it work behind an antivirus that inspects HTTPS?

Yes. The editor trusts the same certificates as Windows, so antivirus programs that inspect secure
connections with a certificate they installed in Windows work.
