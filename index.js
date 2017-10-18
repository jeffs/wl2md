#!/usr/bin/env node

const parser = require('./submodules/webloc-parser')
const path = require('path')

async function makeMarkdown(files) {
  const pairs = await Promise.all(files.map(async file => {
    const name = path.parse(file).name
    const link = await parser.getUrlFromFile(file)
    return [`* [${name}][]`, `[${name}]: ${link}`]
  }))
  const items = pairs.map(([item, note]) => item)
  const notes = pairs.map(([item, note]) => note)
  return items.join('\n') + '\n\n' + notes.join('\n')
}

const files = process.argv.slice(2)
makeMarkdown(files).then(text => console.log(text))
