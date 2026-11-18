# Report to the coordinator: affiliate landing links, WordPress side (18 November 2026)

From the WordPress agent. This answers items 2 and 3 of `wp-agent-affiliate-landing-links.md` (status complete, 18 November 2026) and adds what else was checked. Everything below was read on the live site (botterverse.com) and the local site. Nothing was changed in the app repository or the FluentCart system pages.

## Item 2: the query string and the page cache

- **The query string is kept.** `https://botterverse.com/pricing?cpn=founder50&utm_campaign=m-12&r=abc123` answers 301 to `/pricing/?cpn=founder50&utm_campaign=m-12&r=abc123` with all three parameters. The local site does the same. `/founders?cpn=founder50` also keeps the parameter.
- **There is no page cache on live.** There is no caching plugin among the active plugins. `WP_CACHE` is off. The `.htaccess` has no cache rules. The responses carry no cache headers. The server is LiteSpeed but nothing is caching pages. So a URL with `cpn` always reaches PHP and the plugin's `btv_checkout_guard` cookie `btv_cpn` can be set.
- **If a page cache is added later:** `cpn` must not be on its ignore list and a URL carrying `cpn` must bypass the cache (or at least run PHP). The same goes for `r` and `utm_campaign` and for the cart and checkout and account pages. Tell the owner before adding one.

## Item 3: the consent banner

The home page has no cookie consent banner. Nothing blocks the Fluent Affiliate cookie `f_aff` or the app's `btv_cpn` cookie. If a consent banner is added later both cookies need to be listed as needed for the service.

## Other points

1. **Referral variable.** FluentAffiliate's referral variable is `r` on live and on local. Affiliate links with `?r=ID` are recorded.
2. **Coupon on a link.** The WordPress side had built a short route that applied `?cpn=` to the cart when a plan was added. It was removed on 18 November 2026 (live and local). The app's `btv_checkout_guard` is now the only place that applies a `cpn` coupon. The website only keeps the query string.
3. **`utm_campaign`.** FluentAffiliate's visit table holds `utm_source` and `utm_medium` and `utm_campaign`. Its referral table holds `utm_campaign`. Clicks on links that carry no `r` are not recorded by FluentAffiliate.
4. **Coupons.** FOUNDER50 is a recurring discount (`is_recurring` is yes). FOUNDER40 was created on 18 November 2026 on live and local with the same plan products and the same recurring setting. It starts at 00:00:00 US Eastern on 4 December 2026 (05:00:00 UTC) and ends at 23:59:59 US Eastern on 1 January 2027. The app must recognise FOUNDER40 as a Founder coupon in the same way as FOUNDER50. The FOUNDER50 end date was changed on 18 November 2026 to 23:59:59 US Eastern on 1 December 2026 (04:59:59 UTC on 2 December) on live and local.
5. **Affiliate link format.** An affiliate's link is `https://botterverse.com/?r=VALUE`. The path style `/r/VALUE` is not supported by FluentAffiliate. The app's redirect adds `?r=` so it is not needed.
6. **Banners and landing pages (item 4).** Not started. The owner is reviewing the campaign copy first (`Docos/bfcm-festive-copy-v1.md`). The landing path for both deals is `/founders` with `?cpn=founder50` or `?cpn=founder40`.
7. **Deployment (item 6).** The `btv_checkout_guard` plugin folder is copied to live by the app with its release. It is not copied by this project.
