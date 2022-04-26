
all: help

install:
	npm ci

brain-games:
	node bin/brain-games.js

brain-even:
	node bin/brain-evenStart.js

brain-calc:
	node bin/brain-calcStart.js

lint:
	npx eslint .

push:
	git push origin master --tags

publish:
	npm publish --dry-run
