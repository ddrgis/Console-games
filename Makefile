install:
	npm install

start:
	npm run babel-node -- bin/brain-even.js

publish:
	npm publish

lint:
	npm run eslint