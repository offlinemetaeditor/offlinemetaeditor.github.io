---
title: Privacy and security
description: Where your data and your access token live, what the editor sends and to whom, and how to remove everything.
---

Offline Meta Editor runs on your computer. There is no account to create with us, and your data never goes
through a server of ours: the editor talks to Meta directly, with your token. The formal version is the
[privacy policy](/privacy-policy/), and [Data deletion](/data-deletion/) says how to remove everything.

## Who the editor talks to

- **Meta's Graph API** (`graph.facebook.com`): to download your accounts, check and push your changes, search
  places and interests, and read event counts and audiences.
- **Meta's image servers**: to show thumbnails and previews, from the links Meta gives in its answers.
- **Our login server**, only when you click **Log in with Facebook**: Meta sends your browser back to it,
  it hands Meta's answer to the editor and, when needed, extends the token to about 60 days. It keeps
  nothing.

That is all. The editor sends no analytics, no usage data and no crash reports. When you click **Meta's
preview** or a link to a post, it opens in your browser.

## Your access token

- It is read from the environment variable or from Windows Credential Manager, or used only for the session
  when you paste it that way.
- The editor never shows it (Settings shows its first three characters and its length), never writes it to a
  file and never puts it in the logs.
- It is sent only to Meta, with each request, and to our login server while you log in with Facebook.
- The editor saves it in Credential Manager itself, through Windows' own credential functions, so no
  other program sees it.

## Your data

Everything the editor downloads (the accounts, pixels, audiences, thumbnails) and everything you edit stays
in the [data folder](/reference/settings-and-data/#data-folder) on your computer, `%LOCALAPPDATA%\meta-ads-editor`.
Delete that folder to remove it all.

## Customer lists

When you create an audience from a customer list, emails, phones and names are normalized and **hashed with
SHA-256 on your computer**. Only the hashes go to Meta, as Meta requires.

## This website

This documentation is a static site hosted on GitHub Pages. It has no cookies and no analytics of its own;
GitHub may log visits as described in its privacy statement.
