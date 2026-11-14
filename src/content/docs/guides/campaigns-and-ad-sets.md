---
title: Campaigns and ad sets
description: Editing names, status, budgets and schedules, and an ad set's conversion, targeting, attribution and frequency cap.
---

Click a campaign or an ad set and its fields appear in **Properties**, on the right. Every edit stays on your
computer, marked as pending, until you [push](/guides/check-and-push/).

## Name, status and budget

- **Status**: click the status and pick Active, Paused, Archived or Deleted. In the table, the status of
  each row works the same way.
- **Budgets** are typed in the account's currency, with a comma or a period: `50,00` and `50.00` are the
  same. Currencies without cents (such as JPY or PYG) take whole numbers. Leave a budget empty for none.
  When a campaign has its own budget, its ad sets don't get one.
- **Bid strategy**, **bid amount** and **spend cap** are in the same list.

Fields that Meta does not let you change after creation appear in gray, with a note when you point at them.

## Start and end times

Times are shown and picked on **your computer's clock**: a calendar and the hour, sent to Meta with your
computer's time zone. When the ad account uses another time zone, its time appears under the field. An empty
end means the ad set runs until you stop it; an end before the start is flagged.

## New campaigns and ad sets

**➕ New campaign** (on the Campaigns level) creates a paused campaign to fill in. **➕ New ad set** goes into
the selected campaign, and **➕ New ad** into the selected ad set. New items have a temporary id (`new_1`,
`new_2`…) until the push creates them on Meta.

**Duplicate ▾** copies the selected rows: **Only the selected**, or **With everything inside** (a campaign
with its ad sets and ads). Copies start paused, and start or end dates already in the past are left out.

## Conversion

For ad sets that optimize for conversions, **Conversion** sets the **pixel** and the **event**:

- the standard events the campaign's objective accepts (a Leads campaign does not take Purchase);
- the custom events your pixel receives, or **Another custom event** to type an exact name;
- the custom conversions of that pixel.

**How often does the pixel receive it?** reads the last 7 days of the pixel and shows each event's count, so
you can see an event that never arrived.

:::caution[Meta locks the conversion after publishing]
Once an ad set is published, Meta does not let anyone change its pixel or event. **Duplicate** the ad set,
pick the event in the copy, pause the old one and push.
:::

## Targeting

**Targeting** shows the ad set's audience the way Ads Manager does:

- **Advantage+ audience** on or off.
- **Places** as chips. Search Meta's places (countries, regions, cities and more) to include or exclude;
  click a city or pin to change its radius (17 to 80 km, or 10 to 50 mi, for cities).
- **Age**, suggested age, **gender** and **languages**.
- **Custom audiences** to include or exclude (they come from [Audiences](/guides/events-and-audiences/)).
- **Detailed targeting**: people who match any of a list, *and also* any of another, *excluding* others.
  Search Meta's interests, behaviors, job titles and more.
- **Placements**: Advantage+ or manual, by platform and position, and **devices**.

The searches ask Meta as you type (they need the internet) and remember the answers for the session.
Anything else in the targeting stays as it is and is listed under *Also set*. **Edit as JSON** changes any
part of it in Meta's own format.

## Attribution and frequency cap

- **Attribution** (click, view and engaged-view windows) can be set on new and duplicated ad sets. Meta does
  not accept a new window on an ad set that already exists, so there it is read-only.
- **Frequency cap** (impressions per person every so many days) is for ad sets optimized for reach.

## Advanced

Fields with no form of their own are under **Advanced**, in the JSON format of the Marketing API. The
campaign and ad set an item belongs to are under **Details**.
