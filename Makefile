docker/build:
	docker build --target production \
		--tag viniosilva/kairos-manager:latest .

docker/up:
	docker-compose up --build -d

docker/down:
	docker-compose down --remove-orphans

install:
	npm install

.PHONY: test
test:
	npm test

.PHONY: test/unit
test/unit:
	npm run test:unit

.PHONY: test/integration
test/integration:
	npm run test:integration

.PHONY: test/e2e
test/e2e:
	npm run test:e2e

.PHONY: test/coverage
test/coverage:
	npm run test:coverage

lint:
	npm run lint

lint/fix:
	npm run lint:fix

start:
	npm start

start/dev:
	npm run dev
