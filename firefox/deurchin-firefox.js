"use strict";

chrome.webRequest.onBeforeSendHeaders.addListener(
	stripUrchins,
	{urls: ["<all_urls>"]},
	["blocking"]
);
