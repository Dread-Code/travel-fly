# Getting Started with Travel Fly

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Tecnologies
* React
* Sass
* Semantic UI
* Formik and Yup
* React router DOM

## Best practices helpers
* Eslint
* Prettier

## Deploy
The App is deployed in Vercel https://travel-fly.vercel.app/home

<img src="https://user-images.githubusercontent.com/60331479/127055650-ec197959-5203-4689-b974-ea3615c4c042.png"/>

## Responsive
<img src="https://user-images.githubusercontent.com/60331479/127055834-aa64af4b-00aa-4ea7-8ae7-b1531c6fd140.png"/>
<img src="https://user-images.githubusercontent.com/60331479/127056362-ffb453c1-ee67-43a5-ad7e-63ab0c295037.png"/>

## Project Structure
```
.
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── README.md
└── src
    ├── App.js
    ├── assets
    │   └── images
    │       ├── travel_fly.jpg
    │       └── travel_fly_mobile.jpg
    ├── components
    │   ├── Footer
    │   │   ├── Footer.jsx
    │   │   ├── Footer.scss
    │   │   └── index.js
    │   ├── Header
    │   │   ├── Header.jsx
    │   │   ├── Header.scss
    │   │   ├── Header.test.jsx
    │   │   └── __snapshots__
    │   │       └── Header.test.jsx.snap
    │   ├── Menu
    │   │   ├── hook
    │   │   │   └── useMenu.jsx
    │   │   ├── index.js
    │   │   ├── Menu.jsx
    │   │   └── Menu.scss
    │   └── ModalBasic
    │       ├── index.js
    │       ├── ModalBasic.jsx
    │       └── ModalBasic.scss
    ├── hooks
    │   └── useWindowDimensions
    │       ├── index.js
    │       └── useWindowDimensions.jsx
    ├── index.js
    ├── layouts
    │   ├── AirLine
    │   │   ├── AirLine.jsx
    │   │   ├── AirLine.scss
    │   │   ├── hook
    │   │   │   ├── index.jsx
    │   │   │   └── useAirlineHook.jsx
    │   │   └── index.js
    │   └── Home
    │       ├── Home.jsx
    │       ├── Home.scss
    │       ├── hook
    │       │   ├── index.js
    │       │   └── useHome.jsx
    │       └── index.js
    ├── router
    │   └── AppRouter
    │       ├── AppRouter.jsx
    │       └── index.js
    ├── setupTests.js
    └── utils
        ├── capitalize
        │   ├── capitalize.js
        │   └── index.js
        ├── getDropDownOptions
        │   ├── getDropDownOptions.js
        │   └── index.js
        └── getOptions
            ├── getOptions.js
            └── index.js

```
