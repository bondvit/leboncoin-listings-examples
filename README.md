# Leboncoin Listings — examples

Runnable examples for the **[Leboncoin Scraper — France Classifieds Listings | $3/1K](https://apify.com/bovi/leboncoin-listings)** on Apify.

Scrape Leboncoin (France #1 classifieds): title, price, category, location, published date, images, and attributes. Uses the Next.js data route + Apify residential proxy (FR) to clear DataDome — no external key or setup needed. Pay per result.

## What you get per record
`ad_id` · `ad_type` · `attributes` · `attributes_map` · `bedrooms` · `category` · `category_id` · `description` · `energy_rate` · `expiration_date` · `fuel` · `gearbox` · `ges` · `has_phone` · `image_count` · `images` · `index_date` · `is_boosted` · `location_city` · `location_department` · `location_department_id` · `location_lat` · `location_lng` · `location_region` · `location_region_id` · `location_source` · `location_zipcode` · `mileage` · `monthly_price` · `old_price` · `owner_name` · `owner_siren` · `owner_store_id` · `owner_type` · `owner_user_id` · `page_number` · `parse_confidence` · `price` · `price_cents` · `price_currency` · `price_dropped` · `published_date` · `real_estate_type` · `registration_year` · `rooms` · `scraped_at` · `search_location` · `search_text` · `source` · `status` · `subcategory` · `surface_m2` · `thumbnail` · `title` · `urgency_level` · `url` · `vehicle_brand` · `vehicle_model` · `warnings`

## Who uses this
- **Deal sourcing / arbitrage** — new underpriced listings in a category the moment they post.
- **Real-estate & auto market research** — price-per-area trends from France's biggest classifieds.
- **Lead-gen** — sellers in a category + geography for B2B outreach.

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (real records) | [`examples/sample_output.json`](examples/sample_output.json) |

## Example input
```json
{
  "searchText": "vélo",
  "ownerType": "all",
  "sort": "relevance",
  "maxItems": 100,
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": [
      "RESIDENTIAL"
    ],
    "apifyProxyCountry": "FR"
  }
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/leboncoin-listings>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
