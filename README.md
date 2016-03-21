# deurchin

Annoyed by all the annoying URI parameter cruft that looks like this:
`?utm_content=buffercruft&utm_medium=social&utm_source=facebook.com&utm_campaign=buffercruft`?

This plugin gets rid of them.

# Requirements

* Firefox 42+
* Google Chrome

# Installation

Chrome: [Chrome Web Store](https://chrome.google.com/webstore/detail/kojlolmppeefdcgjjegaoldegjphhjfg)

Firefox: [Mozilla Addons](https://addons.mozilla.org/en-US/firefox/addon/deurchin/)

# Build

* `git clone https://github.com/rahulg/deurchin`
* `cd deurchin`
* `make`

# Development & Debugging

## Firefox

(Assumes Firefox 45+)

* Head to `about:debugging`
* Click 'Load Temporary Add-on'
* You may want to enable add-on debugging with the checkbox

## Chromium

* Navigate to `chrome://extensions`
* Enable developer mode
* Click `Load unpacked extension`
* Select `deurchin/build/chrome`
