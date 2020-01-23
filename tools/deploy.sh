#!/bin/sh

printf "\nenter tag: "
read tag
printf "\n"
./tools/build.sh $tag
./tools/stop.sh
./tools/start.sh $tag
