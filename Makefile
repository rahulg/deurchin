SOURCES=deurchin.js

.PHONY: all clean

all: build/deurchin.xpi build/deurchin.zip

build/deurchin.xpi: build/firefox
	zip -j $@ $^/*

build/deurchin.zip: build/chrome
	zip -j $@ $^/*

build/firefox: $(SOURCES)
	mkdir -p $@
	cp $^ $@
	./manifest.sh firefox >$@/manifest.json

build/chrome: $(SOURCES)
	mkdir -p $@
	cp $^ $@
	./manifest.sh chrome >$@/manifest.json

clean:
	rm -rf build
