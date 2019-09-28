# Introduction

Connected Carousel

## Stack

- Angular v8.1.3
- Electron v6.0.2
- Electron Builder v21.2.0

## Getting Started

Clone this repository locally :

``` bash
git clone https://github.com/stangahh/connected-kiosk-carousel.git
```

Install dependencies with npm :

``` bash
npm install
```

>**Note:** There is an issue with `yarn` and `node_modules` that are only used in electron on the backend when the application is built by the packager. Please use `npm` as dependencies manager.

If you want to generate Angular components with Angular-cli , you **MUST** install `@angular/cli` in npm global context.
Please follow [Angular-cli documentation](https://github.com/angular/angular-cli) if you had installed a previous version of `angular-cli`.

``` bash
npm install -g @angular/cli
```

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser with hot reload |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

>**Note:** When running `npm run ng:serve:web` **you can't use Electron or NodeJS native libraries.** Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.
