# Chrome Extension TypeScript Starter

![build](https://github.com/chibat/chrome-extension-typescript-starter/workflows/build/badge.svg)

Chrome Extension, TypeScript and Visual Studio Code

## Prerequisites

* [node + npm](https://nodejs.org/) (Current Version)

## Option

* [Visual Studio Code](https://code.visualstudio.com/)

## Includes the following

* TypeScript
* Webpack
* React
* Jest
* Example Code
    * Chrome Storage
    * Options Version 2
    * content script
    * count up badge number
    * background

## Project Structure

* src/typescript: TypeScript source files
* src/assets: static files
* dist: Chrome Extension directory
* dist/js: Generated JavaScript files

## Setup

```
npm install
```

## Import as Visual Studio Code project

...

## Build

```
npm run build
```

## Build in watch mode

### terminal

```
npm run watch   
```

### Visual Studio Code

Run watch mode.

type `Ctrl + Shift + B`

## Load extension to chrome

Load `dist` directory

## Test
`npx jest` or `npm run test`

## Data import

- Import table in markdown format and convert it to JSON.
- Use this tool: https://tableconvert.com/
- Use the JSON output in supported_cars.ts
- Sources: 
    - https://github.com/commaai/openpilot/blob/master/README.md#supported-cars
    - https://github.com/commaai/openpilot/blob/master/README.md#community-maintained-cars-and-features

## How it works
- Retrieve Car Elements
- Filter Supported Makes -> Generic function
- FIlter Supported Model and Year -> Specific to websites e.g. Autotrader.ca / Curbie.ca
