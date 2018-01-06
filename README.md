# Webloc to Markdown converter

This script lets you convert a set of Apple `*.webloc` files to a Markdown
list of hyperlinks.

## Install

```sh
git clone git@github.com:jeffs/wl2md.git
cd wl2md
git submodule update --init --recursive
cd submodules/webloc-parser
yarn     # or npm install
cd -
ln -s "$PWD/index.js" ~/bin/wl2md # assuming `~/bin` is in your `PATH`
```

## Run

```sh
wl2md ~/*.webloc > ~/links.md   # or wherever you have/want your files
```

## TO DO

* Add `package.json`, and publish to NPM.
* Process `*.webloc` by default
