docker/db/up:
	docker-compose up --build -d

docker/db/down:
	docker-compose down --remove-orphans

docker/db/migrate:
	npx sequelize-cli --config src/config/database.js --migrations-path src/database/migrations db:migrate
