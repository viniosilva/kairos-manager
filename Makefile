docker/build:
	docker build --target production \
		--tag viniosilva/kairos-manager:latest .

docker/up:
	docker-compose up --build -d
	sleep 1

docker/down:
	docker-compose down --remove-orphans

docker/db/up:
	docker-compose up --build -d db adminer
	sleep 1

docker/db/down:
	docker-compose down --remove-orphans db adminer

docker/db/migrate: docker/db/up
	npm run db:migrate

install:
	npm install

.PHONY: test
test: docker/db/migrate
	npm test

.PHONY: test/unit
test/unit:
	npm run test:unit

.PHONY: test/integration
test/integration: docker/db/migrate
	npm run test:integration

.PHONY: test/e2e
test/e2e: docker/db/migrate
	npm run test:e2e

.PHONY: test/coverage
test/coverage: docker/db/migrate
	npm run test:coverage

lint:
	npm run lint

lint/fix:
	npm run lint:fix

start:
	npm start

start/dev:
	npm run dev
