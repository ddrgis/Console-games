install:
	npm install

install-games:
	sudo npm install my-minigame-011235 -g

uninstall-games:
	sudo npm uninstall my-minigame-011235 -g

update-games:
	sudo npm update my-minigame-011235 -g

even:
	npm run babel-node -- src/bin/brain-even.js

calc:
	npm run babel-node -- src/bin/brain-calc.js

balance:
	npm run babel-node -- src/bin/brain-balance.js

gcd:
	npm run babel-node -- src/bin/brain-gcd.js

progression:
	npm run babel-node -- src/bin/brain-progression.js

prime:
	npm run babel-node -- src/bin/brain-prime.js

publish:
	npm publish

lint:
	npm run eslint