# chrome extension for parsing resume

A chrome extension by Webpack5 + TS + React

## Usage

```bash
# install dependcy
npm i
# development
npm run dev
# build
npm run build
# analy build assets
npm run analy
```

## Run in browser

How to manually install
https://developer.chrome.com/docs/extensions/mv3/getstarted/

or run "CV-parser launch" from vs-code (.vscode/launch.json)
it should open separate instance of browser with pre-installed extension

## Content Scripts

All content script in `contents` directory will dynamic generate（**There can only be two levels of nesting**）

```txt
contents/test.ts 🆗

contents/test/index.ts 🆗

contents/test/a.ts 🚫

contents/test/t/index.ts 🚫
```

## Features

- Support manifest v3
- Support HMR
- Support react fast refresh
- Support auto reload when content scripts change
- Support dynamic generate content scripts
- Support use vscode to debug content scripts, popup page, options page and background
- Out of the box Eslint and Prettier configurations
- Intelligence when you change manifest config (only v2)

> Major features is by [chrome-extension-reloader-webpack-plugin](https://github.com/njzydark/chrome-extension-reloader-webpack-plugin), you can use this plugin to create own your project
