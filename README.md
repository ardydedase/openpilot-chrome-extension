# Openpilot Chrome Extension (Unofficial)

![build](https://github.com/ardydedase/openpilot-chrome-extension/workflows/build/badge.svg)

Shop for cars knowing that they are supported by Openpilot.

Blog post: <Insert here>

## Supported cars data source

Comma.ai has an API that returns supported vehicle compatibility data. However, it's not as up-to-date as Openpilot's README on supported cars. I'm using tableconvert.com to convert this markdown table from Openpilot's README into JSON.

To update the supported cars JSON:
- Copy the table in markdown format from the [Openpilot README](https://github.com/commaai/openpilot/blob/master/README.md) 
- Convert the table markdown to JSON using [tableconvert.com](https://tableconvert.com/)
- Update the `cars` array in [supported.ts](src/compatible_cars/supported.ts) and [community.ts](src/compatible_cars/community.ts).
- Supported car sources: 
    - https://github.com/commaai/openpilot/blob/master/README.md#supported-cars
    - https://github.com/commaai/openpilot/blob/master/README.md#community-maintained-cars-and-features

I know that this manual step is not glamorous. However, I could readily assign comma's API response to the `compatibleCars` constant if ever I decide to use it in the future.

## Supported websites
The extension currently supports the browse pages of: 
* autotrader.ca e.g. https://www.autotrader.ca/new/hatchback,suv/?srt=1&make=Honda,Hyundai,Toyota
* curbie.ca e.g. https://curbie.ca/cars


### Adding a new website to support

If you want to support a new website, e.g. carmarketplace.com. Add a new class `CarmarketPlaceCom` that implements the Website interface. Refer to the existing Website interface [implementations](src/websites/) for details.


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
