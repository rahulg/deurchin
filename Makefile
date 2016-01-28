XPI=deurchin.xpi
CRX=deurchin.zip
SOURCES=deurchin.js
SOURCES_XPI=$(SOURCES) \
			firefox/deurchin-firefox.js \
			firefox/manifest.json 
SOURCES_CRX=$(SOURCES) \
			chrome/deurchin-chrome.js \
			chrome/manifest.json 

.PHONY: all clean

all: $(XPI) $(CRX)

$(XPI): $(SOURCES_XPI)
	zip -j $@ $^

$(CRX): $(SOURCES_CRX)
	zip -j $@ $^

clean:
	rm -f $(XPI) $(CRX)
