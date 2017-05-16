#! /usr/bin/env node

const helpText = `px-compare, using headless chrome to capture and compare 100's of polymer components:
- px-compare-create-originals :\tRun this first on your known 'good' repos, this will create screenshots in a folder called 'screenshots'.
- px-compare-create-changed   :\tRun this after you have made your changes and want to\
generate the potentially updated set of screenshots. Puts the results into 'screenshots-<current-time>'.
- px-compare-create-diffs     :\tCompare the control folder 'screenshots' against a given other folder (supplied with the '<compare-folder>') argument,\
 e.g. px-compare-create-diffs --compare-folder="screenshot-10:12:30".
- px-compare-create-snapshot  :\tRun this in a single folder to open up the index.html of the repo, capture the screenshot of the page to 'screenshot.png'.

- px-compare                  :\tPrint this help text.`;

console.log(helpText);
