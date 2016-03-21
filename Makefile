XPI=deurchin.xpi
CRX=deurchin.zip
SOURCES=deurchin.js
SOURCES_FFX=$(SOURCES) \
            deurchin-firefox.js
SOURCES_CHR=$(SOURCES) \
            deurchin-chrome.js

.PHONY: all clean

all: $(XPI) $(CRX)

$(XPI): build/firefox
	zip -j $@ $^/*

$(CRX): build/chrome
	zip -j $@ $^/*

build/firefox: $(SOURCES_FFX)
	mkdir -p $@
	cp $^ $@
	./manifest.sh firefox >$@/manifest.json

build/chrome: $(SOURCES_CHR)
	mkdir -p $@
	cp $^ $@
	./manifest.sh chrome >$@/manifest.json

clean:
	rm -rf build $(XPI) $(CRX)
