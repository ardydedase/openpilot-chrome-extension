# Openpilot Chrome Extension (Unofficial)

![build](https://github.com/ardydedase/openpilot-chrome-extension/workflows/build/badge.svg)

Shop for cars in autotrader.com, autotrader.ca and curbie.ca knowing which ones are supported by Openpilot.

[Install from chrome webstore](https://chrome.google.com/webstore/detail/openpilot-supported-cars/kcpamfgakhobnodajoddnakkbknmclgp/related)

[Blog post: Chrome Extension for Openpilot Supported Cars (Unofficial)](https://blog.ardy.me/chrome-extension-for-openpilot-supported-cars-unofficial-fa2fa2f179d)


![Chrome extension icon](https://cdn-images-1.medium.com/max/800/1*z3Jq465cV41L60F7njTBaw.png)

![Chrome extension on autotrader.ca](https://cdn-images-1.medium.com/max/800/1*AhQXp9LBa6G_44v42lB-xg.png)

## Supported websites
The extension currently works the following web pages: 
* [autotrader.com/cars-for-sale/all-cars](https://www.autotrader.com/cars-for-sale/all-cars)
* [autotrader.ca/new](https://www.autotrader.ca/new) e.g. https://www.autotrader.ca/new/hatchback,suv/?srt=1&make=Honda,Hyundai,Toyota
* [curbie.ca/cars](https://curbie.ca/cars)

### Adding a new website to support

If you want to support a new website, e.g. carmarketplace.com. Add a new class `CarmarketPlaceCom` that implements the Website interface. Refer to the existing Website interface [implementations](src/websites/) for details.

## Supported cars data source

Supported cars data is from [Openpilot's README](https://github.com/commaai/openpilot/blob/master/README.md#supported-cars).

Comma.ai has an API that returns supported vehicle compatibility data. However, it's not as up-to-date as Openpilot's README. I used tableconvert.com to convert this markdown table from Openpilot's README into JSON.

This manual step is not glamorous. However, I could readily assign comma's API response to the `compatibleCars` constant if ever I decide to use it in the future.

To update the supported cars JSON:
- Copy the table in markdown format from the [Openpilot README](https://github.com/commaai/openpilot/blob/master/README.md) 
- Convert the table markdown to JSON using [tableconvert.com](https://tableconvert.com/)
- Update the `cars` array in [supported.ts](src/compatible_cars/supported.ts) and [community.ts](src/compatible_cars/community.ts).
- Supported car sources: 
    - https://github.com/commaai/openpilot/blob/master/README.md#supported-cars
    - https://github.com/commaai/openpilot/blob/master/README.md#community-maintained-cars-and-features

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
