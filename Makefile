XPI=deurchin.xpi
SOURCES=manifest.json \
		deurchin.js

.PHONY: clean

$(XPI): $(SOURCES)
	zip $@ $^

clean:
	rm -f $(XPI)
