# deurchin

Annoyed by all the annoying URI parameter cruft that looks like this:
`?utm_content=buffercruft&utm_medium=social&utm_source=facebook.com&utm_campaign=buffercruft`?

This plugin gets rid of them.

# Requirements

* Firefox 45+
* Google Chrome

# Installation

Chrome: [Chrome Web Store](https://chrome.google.com/webstore/detail/kojlolmppeefdcgjjegaoldegjphhjfg)

Firefox: [Mozilla Addons](https://addons.mozilla.org/en-US/firefox/addon/de-urchin/)

# Build

* `git clone https://github.com/rahulg/deurchin`
* `cd deurchin`
* `make`

# Installing Your Own Builds

## Firefox

* Navigate to `about:config`.
* Search for `xpinstall.signatures.required` and set it to `false`.
* Navigate to some site, doesn't matter which. (Local installs are broken on `about:config`, `about:blank` and new tab pages.)
* `ctrl-o` or File -> Open File, navigate to the `deurchin` directory above, and open `deurchin.xpi`. 
* Answer in the affirmative to any questions Firefox asks you.

## Chromium

* Navigate to `chrome://extensions`.
* Enable developer mode.
* Click `Load unpacked extension`.
* Navigate to the `chrome` subdirectory of the `deurchin` directory from above.
