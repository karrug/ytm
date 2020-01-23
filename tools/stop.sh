#!/bin/sh


docker ps
docker ps | grep ytm | grep -o '\w*$' | xargs docker stop
docker ps
