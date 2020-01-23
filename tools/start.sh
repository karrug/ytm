#!/bin/sh


docker ps
tag=$1
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8002
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8003
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8004
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8005
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8006
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8007
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8008
docker run -d --rm --net host karrug/ytm:$tag uwsgi --http :8009
docker ps
