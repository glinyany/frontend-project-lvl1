
all: help

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js

lint:
	npx eslint .

push:
	git push origin master --tags

publish:
	npm publish --dry-run
