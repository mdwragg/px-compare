px-compare, using headless chrome to capture and compare 100's of polymer components:
- `px-compare-create-originals` :	Run this first on your known 'good' repos, this will create screenshots in a folder called `screenshots`.
- `px-compare-create-changed`   :	Run this after you have made your changes and want togenerate the potentially updated set of screenshots. Puts the results into `screenshots-<current-time>`.
- `px-compare-create-diffs`     :	Compare the control folder 'screenshots' against a given other folder (supplied with the `<compare-folder>`) argument, e.g. `px-compare-create-diffs --compare-folder="screenshot-10:12:30"`.
- `px-compare-create-snapshot`  :	Run this in a single folder to open up the index.html of the repo, capture the screenshot of the page to 'screenshot.png'.

- `px-compare`                  :	Print this help text.
