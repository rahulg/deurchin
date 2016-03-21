#!/usr/bin/env bash
set -e -u

function build() {

	browser=${1:-firefox}
	version=$(git describe --tags --always --abbrev=7)
	product=""
	case $browser in
		firefox)
			product=deurchin.xpi
			;;
		chrome)
			product=deurchin.zip
			;;
		*)
			echo >&2 "bad browser: ${browser}"
	esac

	echo "building deurchin v${version}@${browser}"

	mkdir -vp build/${browser}
	cp -v deurchin.js build/${browser}/
	manifest >build/${browser}/manifest.json

	zip -j build/${product} build/${browser}/*

}

function manifest() {
	cat <<-EOF
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

	[[ ${browser} = firefox ]] && cat <<-EOF
		"applications": {
			"gecko": {
				"id": "deurchin@rahulg.io"
			}
		},
	EOF

	cat <<-EOF
		"manifest_version": 2
	}
	EOF
}

case ${1:-all} in
	firefox)
		build firefox
		;;
	chrome)
		build chrome
		;;
	all)
		build firefox
		build chrome
		;;
esac
