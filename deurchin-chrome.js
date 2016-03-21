"use strict";

chrome.webRequest.onBeforeRequest.addListener(
	stripUrchins,
	{urls: ["<all_urls>"]},
	["blocking"]
);
