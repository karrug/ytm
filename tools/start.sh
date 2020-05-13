#!/bin/sh


docker ps
tag=$1
key=$2
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8002
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8003
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8004
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8005
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8006
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8007
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8008
docker run -e PAFY_API_KEY=$key -d --rm --net host karrug/ytm:$tag uwsgi --http :8009
docker ps
