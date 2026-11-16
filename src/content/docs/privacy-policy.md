---
title: Privacy policy
description: How Offline Meta Editor and its Facebook login, Offline Ads Editor, handle your data.
---

_Last updated: 16 November 2026_

This policy covers Offline Meta Editor, a desktop program that edits Meta ad accounts, and its Facebook
login, which Facebook shows as **Offline Ads Editor**. The editor is published by **Gorgal Marketing LTDA**,
in Brazil, which is responsible for the data described here.

Contact: [lucas@gorgal.com](mailto:lucas@gorgal.com)

## In short

- The editor runs on your computer, and what it downloads from Meta stays there.
- We don't store your data on any server, we don't sell or share it, and the editor sends no analytics.
- Our only server is the login server. It completes your Facebook login and keeps nothing.

## What the editor receives from Meta

When you log in with Facebook and approve Offline Ads Editor, Meta gives the editor an access token with
these permissions:

| Permission | What the editor does with it |
|---|---|
| `public_profile` | Shows your name, so you know which Facebook account is connected |
| `ads_read` | Downloads your ad accounts, campaigns, ad sets, ads, audiences and pixels, and their results |
| `ads_management` | Checks your changes with Meta, and sends them when you push |
| `business_management` | Lists the ad accounts of your business portfolios |
| `pages_show_list` | Lists the Facebook Pages your ads can run as |
| `pages_read_engagement` | Reads those Pages' names and pictures and the Instagram accounts linked to them |

The editor uses this data only to show your accounts to you and to make the changes you ask for. It changes
nothing on Meta until you push.

## Where your data is kept

- **On your computer.** The accounts you download, your edits, your settings and image thumbnails are saved
  in the editor's data folder (`%LOCALAPPDATA%\meta-ads-editor` on Windows, see
  [Settings and data folder](/reference/settings-and-data/)).
- **Your access token** is saved in your system's password store (Windows Credential Manager). The editor
  sends it only to Meta, and to our login server while you log in.
- The editor talks to Meta's Graph API (`graph.facebook.com`) and loads images from Meta's servers. It
  sends nothing to us.

## The login server

When you click **Log in with Facebook**, Meta sends your browser back to a small server we run on Cloudflare
Workers (`offline-ads-editor.lucas1gorgal.workers.dev`). It hands Meta's answer to the editor on your
computer and, when needed, uses the app's secret to extend your token to about 60 days. It has no database
and doesn't log or keep tokens. Cloudflare runs it as our service provider.

## Sharing

We don't sell, rent or share your data. Besides Meta, which provides it, the only company involved is
Cloudflare, which runs the login server. If you connect an AI agent to the editor (`mae mcp`), that agent
reads your local data under your control and under its provider's terms.

## How long we keep it

We keep none of your Meta data: it stays on your computer until you delete it. If you email us, we keep the
email only as long as we need to answer it.

## Deleting your data

See [Data deletion](/data-deletion/). In short: delete the stored token in the editor, delete the data
folder, and remove Offline Ads Editor from your Facebook business integrations.

## Your rights

You can ask us what data we hold about you, and to correct or delete it, at
[lucas@gorgal.com](mailto:lucas@gorgal.com). Depending on where you live, laws such as Brazil's LGPD or the
European Union's GDPR give you these rights and the right to complain to your data protection authority.

## Children

The editor is a tool for people who manage ads for businesses. It is not meant for anyone under 18.

## Changes

When this policy changes, we update this page and the date at the top.
