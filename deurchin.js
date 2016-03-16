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
