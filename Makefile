
all: help

install:
	npm ci

brain-games:
	node bin/brain-games.js

lint:
	npx eslint .

help:
	echo help

eslint:
	DEBUG="eslint:cli-engine" eslint .


release: version push publish

version:
	standard-version -m '%s'

push:
	git push origin master --tags

publish:
	npm publish --dry-run
