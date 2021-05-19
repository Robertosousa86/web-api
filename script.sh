echo '\n\nRequest all heroes'
curl localhost:3000/heroes

echo ' \n\nRequest by id'
curl localhost:3000/heroes/1

echo '\n\nResquest with whong body'
curl --silent -X POST \
--data-binary '{"invalid": "data"}' \
localhost:3000/heroes

echo '\n\ncreating Leão'
curl --silent -X POST \
--data-binary '{"name": "Leao", "age": 100, "attribute": "intelligence"}' \
localhost:3000/heroes
