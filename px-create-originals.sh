#!/bin/sh

OPTIND=1

rm -Rf screenshots
mkdir screenshots

# Initialize our own variables:
timeout=""

while getopts "t:" opt; do
    case "$opt" in
    t)  timeout=$OPTARG
        ;;
    esac
done

shift $((OPTIND-1))

[ "$1" = "--" ] && shift

echo "timeout='$timeout'"

echo $(pwd)
echo $timeout
# run px-compare on all folders
find . -name "px-*" -maxdepth 1 -mindepth 1 -type d -exec sh -c "(echo {} && cd {} && px-compare-create-snapshot --timeout=$timeout && mv screenshot.png ../screenshots/{}.png)" \;
