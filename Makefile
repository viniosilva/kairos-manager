docker/up:
	docker-compose up --build -d

docker/down:
	docker-compose down --remove-orphans

docker/db/up:
	docker-compose up --build -d db adminer

docker/db/down:
	docker-compose down --remove-orphans db adminer

docker/db/migrate:
	npx sequelize-cli --config src/config/database.js --migrations-path src/database/migrations db:migrate

docker/build/development:
	docker build --target development -t viniosilva/kairos-manager:dev .

docker/build/production:
	docker build --target production -t viniosilva/kairos-manager:latest .
