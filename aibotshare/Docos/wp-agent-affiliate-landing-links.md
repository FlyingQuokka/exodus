# Affiliate links to marketing pages, with a coupon and the creative

For the WordPress agent. The owner's decisions of 18 November 2026. The app is building this (brief `docs/briefs/affiliate-landing-links.md`). This note says what reaches the marketing site and what is left for the WordPress side.

**Status: complete, 18 November 2026.** The app side and plugin 2.0.22 are on `dev`. Until FluentAffiliate's referral variable is set to `r` (item 1a), referrals through affiliate links are not recorded.

## What reaches the marketing site

An affiliate's link goes through the app's redirect, which sends the visitor to a page of the marketing site with up to three parameters:

- `cpn`: a coupon code, such as `cpn=founder50`
- `utm_campaign`: the creative, such as `utm_campaign=m-12` for material item 12
- `r`: the referral parameter (the app's Marketing Paths setting `referral_parameter` carrying the affiliate's FluentAffiliate id

Example: `https://botterverse.debbie/pricing?cpn=founder50&utm_campaign=m-12&r=abc123`

The path is any page of the marketing site. Staff set a landing path with any query, such as `/pricing?cpn=founder50`, on each material item in the Back Office. The app parses it and adds `utm_campaign` and `r`. Members can also link to any page themselves.

## What the app does

- The redirect, the material links, the click counts for each creative and the Back Office and member views.
- **Applying the coupon at checkout**, in the plugin `btv_checkout_guard` (version 2.0.22). The plugin keeps a `cpn` it sees in a first-party cookie for a set number of days. At a plan checkout it applies the coupon where the cart holds none, after the founders and carried coupon rules. That keeps every automatic coupon in the one plugin, in one order.

## What the WordPress side needs to do

1. **Answered, 18 November 2026:** FluentAffiliate's visit table holds `utm_source`, `utm_medium` and `utm_campaign` and its referral table holds `utm_campaign`. The app reads the referral's `utm_campaign` for sales per creative.
2. **Check nothing on the marketing site strips the query string** before the page loads: a caching plugin, a redirect or a page builder setting. A visitor landing on `/pricing?cpn=...&utm_campaign=...&r=...` must keep all three. Check the redirect from `/pricing` to `/pricing/` keeps them. **A page cache must not serve a page with `cpn` in its query without running PHP** or the plugin's cookie `btv_cpn` is never set and the coupon is never applied. Check the page cache's query string setting. That is the option that decides whether a URL with a query string is cached. It is also the list of query strings the cache ignores when it makes its cache key. `cpn` must not be on the ignore list. A cached page must not be served to a URL that carries it. The same goes for a cache held by the web server.
3. **Check FluentAffiliate's own cookie and the plugin's `cpn` cookie can live side by side** under the consent banner's settings. Both are first-party and needed for the service the visitor came for.
4. **Create the banners and landing pages** and give the coordinator, for each material item: its title, image, alt text, landing path and coupon code. Staff enter these in the Back Office.
5. **Coupons for affiliate links** are ordinary FluentCart coupons. For one to keep its discount on renewals it must be a recurring discount, as the founders coupons are.
6. **The deploy step for live:** copy the plugin folder `btv_checkout_guard` (version 2.0.22) in the same release as the app.

Report what you find for items 2 and 3 to the coordinator.
