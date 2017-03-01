"use strict";

function filterParams(pattern) {
	return function(details) {

		let url = new URL(details.url);
		let changed = false;

		for (let param of url.searchParams) {
			if (param[0].match(pattern)) {
				changed = true;
				url.searchParams.delete(param[0]);
			}
		}

		if (changed) {
			return {redirectUrl: url.href};
		} else {
			return {};
		}
	}
}

var filters = [
	{
		urls: ["<all_urls>"],
		fn: filterParams("^utm_(?:content|campaign|source|medium|term|id)")
	},
	{
		urls: ["*://*.aliexpress.com/*"],
		fn: filterParams("^(?:ws_ab_test|btsid)")
	}
];

for (var idx = 0; idx < filters.length; idx++) {
	chrome.webRequest.onBeforeRequest.addListener(
		filters[idx].fn,
		{urls: filters[idx].urls},
		["blocking"]
	);
}
