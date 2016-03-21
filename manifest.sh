#!/usr/bin/env bash

version=$(git describe --tags --always --abbrev=7)
browser=${1:-firefox}

case $browser in
	firefox|chrome)
		;;
	*)
		echo >&2 "bad browser: ${browser}"
esac

cat <<EOF
{
	"name": "Deurchin",
	"version": "${version}",
	"description": "Strips various analytics fragments from URIs.",
	"background": {
		"scripts": [
			"deurchin.js"
		]
	},
	"permissions": [
		"webRequest",
		"webRequestBlocking",
		"<all_urls>"
	],
EOF

[[ ${browser} = firefox ]] && cat <<EOF
	"applications": {
		"gecko": {
			"id": "deurchin@rahulg.io"
		}
	},
EOF

cat <<EOF
	"manifest_version": 2
}
EOF
