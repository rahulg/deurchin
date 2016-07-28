"use strict";

function filterParams(pattern) {
	var first = new RegExp("\\\?" + pattern + "=[^&#]*&?");
	var rest = new RegExp("&" + pattern + "=[^&#]*", "g");

	return function(details) {

		var url = new URL(details.url);
		var newUrl = new URL(details.url);

		newUrl.search = url.search
			.replace(rest, "")
			.replace(first, "?");

		if (newUrl.search !== url.search) {
			return {redirectUrl: newUrl.href};
		}

		return {};
	}
}

var filters = [
	{
		urls: ["<all_urls>"],
		fn: filterParams("utm_(?:content|campaign|source|medium|term)")
	},
	{
		urls: ["*://*.aliexpress.com/*"],
		fn: filterParams("(?:ws_ab_test|btsid)")
	}
];

for (var idx = 0; idx < filters.length; idx++) {
	chrome.webRequest.onBeforeRequest.addListener(
		filters[idx].fn,
		{urls: filters[idx].urls},
		["blocking"]
	);
}
