echo '\n\n Request all heroes'
curl localhost:3000/heroes

echo ' \n\n Request by id'
curl localhost:3000/heroes/1

echo '\n\n Resquest with whong body'
curl --silent -X POST \
--data-binary '{"invalid": "data"}' \
localhost:3000/heroes
