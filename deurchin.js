"use strict";

var urchins = /([?&])utm_(?:content|campaign|source|medium)=[^&#]+/g;

function stripUrchins(details) {

	function replaceSeparator(match, sep) {
		return sep === "?" ? "?" : "";
	}

	var newUrl = details.url.replace(urchins, replaceSeparator);

	if (newUrl !== details.url) {
		return {redirectUrl: newUrl};
	}

	return {};

}

var listeners = [
	{
		urls: ["<all_urls>"],
		fn: stripUrchins
	}
];

function event() {
	if (chrome.runtime.id === "deurchin@rahulg.io") {
		return chrome.webRequest.onBeforeSendHeaders;
	} else {
		return chrome.webRequest.onBeforeRequest;
	}
}

for (var idx = 0; idx < listeners.length; idx++) {
	event().addListener(
		listeners[idx].fn,
		{urls: listeners[idx].urls},
		["blocking"]
	);
}
