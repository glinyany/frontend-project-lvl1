
all: help

install:
	npm ci

brain-games:
	node bin/brain-games.js

help:
	echo help

babel:
	babel lib/ -d src/

test: babel
	mocha -R spec

eslint:
	DEBUG="eslint:cli-engine" eslint .

watch:
	watchd lib/**.js test/**.js package.json -c 'bake babel'

release: version push publish

version:
	standard-version -m '%s'

push:
	git push origin master --tags

publish:
	npm publish
