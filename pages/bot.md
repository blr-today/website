---
layout: default
permalink: /bot
title: blr.today / bot
---

# blr.today indexer

blr.today runs a small crawler that collects public event listings in Bangalore, so they can
be shown on this site and published as [open data](/license). It's an indexer, like a search
engine's, but it only looks for events.

## How to recognise it

- **User-Agent** contains `blr.today-indexer (+https://blr.today/bot)`.
- **Signed requests** use [Web Bot Auth][wba] (HTTP Message Signatures, RFC 9421):
  - `Signature-Agent: "https://blr.today"`
  - Key directory: <https://blr.today/.well-known/http-message-signatures-directory>
  - Ed25519 key, `keyid="R8TfVhfuDBF7Uj2s4LTgaRVn2SWEIeumlCWVeJi5g8Y"`
- **Egress IP** is `139.59.48.222`, a static DigitalOcean IP in Bangalore.

## How it behaves

- Reads `robots.txt` first and obeys it, including `Crawl-delay`.
- Fetches robots.txt, then sitemaps, then individual event pages. It doesn't brute-force URLs.
- One request at a time per host, with at least 10 seconds between page loads.
- Runs four times a day (00:17, 06:17, 12:17 and 18:17 UTC).
- Never logs in, books tickets, submits forms or bypasses access controls.
- Keeps only public event details: title, dates, venue, price and a link back to you.

## Sites we index behind Cloudflare

These are fronted by Cloudflare, which verifies our signed requests:

| Site | Hosts |
| ---- | ----- |
| allevents | `allevents.in` |
| Artzo | `www.artzo.in` |
| Bangalore Chess Club | `bangalorechessclub.in` |
| Bangalore International Centre | `bangaloreinternationalcentre.org` |
| Bhaago India | `bhaagoindia.com` |
| BLR Birders | `blrbirders.com` |
| BookMyShow | `in.bookmyshow.com` |
| Broke Bibliophiles | `brokebibliophilesbangalore.substack.com` |
| Champaca | `champaca.in` |
| Courtyard Koota | `courtyardkoota.com` |
| HighApe | `www.highape.com` |
| Luma | `lu.ma` |
| Main Mission | `mainmission.in` |
| MAP | `map-india.org` |
| Putting Scene | `puttingscene.com` |
| Time and Space | `timeandspace.gallery` |
| Underline Center | `underline.center` |
| Urbanaut | `urbanaut.app`, `search-v2.urbanaut.app` |

Shopify storefronts also accept Web Bot Auth directly:

| Site | Hosts |
| ---- | ----- |
| Blue Tokai | `bluetokaicoffee.com` |
| The Paint Bar | `www.paintbar.in` |
| The White Box | `thewhiteboxco.in` |
| Trove | `troveexperiences.com` |

## Contact

If the crawler causes you trouble, or you'd like your events listed (or removed), write to
[security@blr.today](mailto:security@blr.today). We'll slow down or stop the same day.

[wba]: https://datatracker.ietf.org/doc/html/draft-ietf-webbotauth-httpsig-protocol
