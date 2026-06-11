/**
 * leboncoin-listings — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/leboncoin-listings
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
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
};

const run = await client.actor('bovi/leboncoin-listings').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
