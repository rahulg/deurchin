"use strict";

function filterParams(pattern) {
	var first = new RegExp("\\\?" + pattern + "=[^&#]*&?");
	var rest = new RegExp("&" + pattern + "=[^&#]*", "g");

	return function(details) {

		var newUrl = details.url
			.replace(rest, "")
			.replace(first, "?");

		if (newUrl !== details.url) {
			return {redirectUrl: newUrl};
		}

		return {};
	}
}

var filters = [
	{
		urls: ["<all_urls>"],
		fn: filterParams("utm_(?:content|campaign|source|medium)")
	}
];

function event() {
	if (chrome.runtime.id === "deurchin@rahulg.io") {
		return chrome.webRequest.onBeforeSendHeaders;
	} else {
		return chrome.webRequest.onBeforeRequest;
	}
}

for (var idx = 0; idx < filters.length; idx++) {
	event().addListener(
		filters[idx].fn,
		{urls: filters[idx].urls},
		["blocking"]
	);
}
