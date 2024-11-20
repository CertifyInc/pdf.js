# PDF.js -- Certify Edition

## Local Development
To build and test:
```
npm install -g gulp-cli
npm install
gulp generic
```

In order to test this within CertifyApp, you need to link the package into the CertifyApp project and then run `npm run update-pdfjs`
to copy the library to the public-facing directory. Instructions on npm linking can be found [here](https://chromeriver.atlassian.net/wiki/spaces/CE/pages/2310012973/Dependency+package+development+with+npm). Ensure that you're linking
from the `build/generic` folder, as that's what contains the built out version of the library.

## Releasing
A Github Action is available for releasing a new version of the package [here](https://github.com/CertifyInc/pdf.js/actions/workflows/npm-publish.yml).
Select "Run workflow" in the top-right, base off of `master`, and select the appropriate Release Type in accordance with semantic versioning.

## Merging the Latest Upstream Version
If unable to Sync the latest version because of conflicts, you can merge in the latest version (and fix conflicts) by doing this:
```
git checkout master
git pull
git remote add upstream git@github.com:mozilla/pdf.js.git
(if there is an error doing the above step, do this: git remote add upstream https://github.com/mozilla/pdf.js.git)
git fetch upstream
git merge upstream/master
``
From here you can fix conflicts, put into a branch, and create a PR