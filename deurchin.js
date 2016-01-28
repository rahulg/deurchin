"use strict";

var urchins = /^utm_(?:content|campaign|source|medium)=/;

function stripUrchins(details) {

	var hashSplit = details.url.split("#");
	var uriFragment = hashSplit[1];

	var paramSplit = hashSplit[0].split("?");
	if (paramSplit.length < 2) {
		return {};
	}

	var uriBase = paramSplit[0];
	var params = paramSplit[1].split("&");

	var filteredParams = params.filter(function(element) {
		return !element.match(urchins);
	});

	if (filteredParams.length === params.length) {
		return {};
	}

	var newUri = uriBase + "?" + filteredParams.join("&");
	if (uriFragment) {
		newUri += "#" + uriFragment;
	}

	return {redirectUrl: newUri};

}

chrome.webRequest.onBeforeSendHeaders.addListener(
	stripUrchins,
	{urls: ["<all_urls>"]},
	["blocking"]
);
