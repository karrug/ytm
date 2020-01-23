#!/bin/sh


tag=$1
docker build --no-cache -t karrug/ytm:$tag -f docker/dockerfile .
