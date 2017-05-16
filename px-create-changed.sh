folderdate=$(date +"%T");
mkdir screenshots-$folderdate
mkdir diffs-$folderdate
echo $(pwd)
# run px-compare on all folders
find . -name "px-*" -maxdepth 1 -mindepth 1 -type d -exec sh -c "(echo {} && cd {} && \
px-compare-create-snapshot && \
mv screenshot.png ../screenshots-${folderdate}/{}.png && echo)" \;
