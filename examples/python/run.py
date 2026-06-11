"""
leboncoin-listings — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/leboncoin-listings
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'searchText': 'vélo',
    'ownerType': 'all',
    'sort': 'relevance',
    'maxItems': 100,
    'proxyConfiguration': {   'useApifyProxy': True,
                              'apifyProxyGroups': ['RESIDENTIAL'],
                              'apifyProxyCountry': 'FR'}}

run = client.actor("bovi/leboncoin-listings").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
