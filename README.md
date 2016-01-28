# deurchin

Annoyed by all the annoying URI parameter cruft that look like this:
`?utm_content=buffercruft&utm_medium=social&utm_source=facebook.com&utm_campaign=buffercruft`?

This plugin gets rid of them.

# Requirements

* Firefox 45+

# Build

* `git clone https://github.com/rahulg/deurchin`
* `cd deurchin`
* `make`

# Installation

* Navigate to `about:config`.
* Search for `xpinstall.signatures.required` and set it to `false`.
* Navigate to some site, doesn't matter which. (Local installs are broken on `about:config`, `about:blank` and new tab pages.)
* `ctrl-o` or File -> Open File, navigate to the `deurchin` folder above, and open `deurchin.xpi`. 
* Answer in the affirmative to any questions Firefox asks you.
