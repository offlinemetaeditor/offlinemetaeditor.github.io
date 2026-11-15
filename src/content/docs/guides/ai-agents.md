---
title: AI agents (MCP)
description: "Let Claude or another AI agent read and change your ad accounts through the editor. Nothing reaches Meta until you push."
---

`mae mcp` turns the editor into an MCP server. MCP is the standard way AI agents such as Claude Code and Claude
Desktop use other programs. The agent works on the same copy of the account as the editor window: it can read it,
change it and ask Meta to check the changes. Nothing reaches Meta until you push.

## What an agent can do

- **Read** the accounts on this computer: campaigns, ad sets and ads with their status, delivery, budget and
  pending changes, and everything about one item, including an ad's texts, image or video per placement, Facebook
  page and Instagram account.
- **Change** fields, statuses, budgets (`+20%`, `-15%` or `=50.00`), names, an ad's texts and media, targeting
  (places and interests from Meta's search, ages, gender, custom audiences), copies and new items, and whole tables
  of changes, as the [spreadsheet import](/guides/spreadsheets/) does. Each change is pending, as if you had made it
  in the editor.
- **Review**: list what a push would send, field by field, and have Meta check it without applying anything, as
  **Check** does.
- **Download** an account or refresh it, read its pixels and audiences, a pixel's recent events, and Meta's preview
  of an ad.

The agent follows the editor's rules: money in the currency's normal units, a change to an ad's content gives that
ad its own copy of the creative, and a download keeps the changes not pushed yet. It has no performance data
(spend, results): the editor does not download it.

## Add it to your agent

The agent starts `mae.exe` by itself. Tell it where the file is (here, in `C:\Programs\Offline Meta Editor`).

**Claude Code.** Run once in PowerShell:

```powershell
claude mcp add --scope user meta-ads-editor -- "C:\Programs\Offline Meta Editor\mae.exe" mcp
```

**Claude Desktop and other agents** read a settings file with a list of MCP servers (in Claude Desktop,
`claude_desktop_config.json`). Add the editor to it and restart the agent:

```json
{
  "mcpServers": {
    "meta-ads-editor": {
      "command": "C:\\Programs\\Offline Meta Editor\\mae.exe",
      "args": ["mcp"]
    }
  }
}
```

The agent uses the editor's [access token](/access-token/) and never sees it. With several accounts downloaded, the
agent says which one each time, or you can set one: `mae.exe -a act_1234567890 mcp`.

## With the editor open

The agent and the editor window can work on the same account at the same time. What the agent changes shows in the
window within a second or two, as pending changes, and **Ctrl+Z** in the window takes it back out. Neither side
writes over the other's changes. When both change the same field of the same item, the value saved last stays, and
the window's log says so.

## Pushing

By default the agent cannot push. When its changes are ready, review them in the editor and click
**Push**, or run `mae push`.

To let the agent push too, use `mae mcp --allow-push` in the command above. The agent then has to show you the list
of pending changes first, and the push only goes through if the changes are still exactly those. If anything
changed after that list, the agent has to show it again. Agents such as Claude Code also ask your permission before
they push, unless you have allowed it for good.

:::caution
Ads that become active start spending money. Keep pushing in your hands unless you read every list the agent shows
you.
:::

## Things to ask

- "In the Black Friday campaign, raise the budget of every active ad set by 15% and pause the ones in Portugal."
- "Change the headline of every ad in the Remarketing ad set to 'Last day' and check the changes with Meta."
- "Copy the Curitiba ad set with its ads into the Leads campaign, for women aged 25 to 45, and leave it paused."
- "List the ads that Meta rejected and what it said about each one."
