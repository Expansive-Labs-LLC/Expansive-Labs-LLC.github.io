# [Eleventy Soft UI PRO](https://appseed.us/product/eleventy-soft-ui-pro)

> Eleventy (11ty) seed project - Features:

<br />

- UI Kit: **[Soft UI Design System PRO](http://bit.ly/3730QW3)** (Pro Version) by **Creative-Tim**
- Render Engine: Nunjunks / Markdown (for blog posts)
- CSS Pipeline (Sass, CleanCSS)
- JS Bundling (Webpack)
- SVG Icon Sprite Generation
- Critical CSS, HTML Minification
- Support via **Github** and [Discord](https://discord.gg/fZC6hup).

<br />

**Codebase Credits**

- Initially forked from [Eleventastic](http://github.com/maxboeck/eleventastic) / [Max Böck](https://github.com/maxboeck)
- More **11ty** inspiration from: [EleventyOne](https://github.com/philhawksworth/eleventyone), [Supermaya](https://github.com/MadeByMike/supermaya) 

<br />

> Links

- [Eleventy Soft UI PRO](https://appseed.us/product/eleventy-soft-ui-pro) - Product page
- [Eleventy Soft UI PRO Demo](https://eleventy-soft-ui-pro.appseed-srv1.com/) - LIVE Demo

<br />

![Soft UI Design System - Template project provided by AppSeed in Eleventy (11ty).](https://raw.githubusercontent.com/app-generator/eleventy-soft-ui-pro/main/media/eleventy-soft-ui-pro-intro.gif)

<br />

## Build from sources

```bash
$ # Clone the sources
$ git clone https://github.com/app-generator/priv-eleventy-soft-ui-pro.git
$ cd priv-eleventy-soft-ui-pro
$
$ # Install modules
$ npm install # OR `yarn`
$
$ # Start for development
$ npm start # OR `yarn start`
$
$ # Access the project in browser:
$ # http://127.0.0.1:8080/ 
$
$ # Production Build
$ npm build # OR `yarn build`
```

<br />

## Codebase structure

The project has a simple structure, represented as bellow:

```bash
< PROJECT ROOT >
   |
   |-- src/
   |    |-- data/
   |    |    |-- meta.json            # Provides META information 
   |    |    |-- app.json             # Provides APP information
   |    |
   |    |-- includes/                 # Page chunks, components
   |    |    |-- navigation.njk       # Top bar
   |    |    |-- sidebar.njk          # Left sidebar
   |    |    |-- scripts.njk          # JS scripts common to all pages
   |    |    |-- footer.njk           # The common footer
   |    |
   |    |-- layouts/                  # App Layouts (the master pages)
   |    |    |-- base.njk             # Used by common pages like index, UI
   |    |    |-- base-fullscreen.njk  # Used by auth pages (login, register)
   |    |   
   |    |-- index.njk                 # The default page
   |    |-- *.njk                     # All other pages provided by the UI Kit
   |
   |-- utils/                         # JS Helpers
   |
   |-- .eleventy.js                   # 11ty Config
   |-- netlify.toml                   # Netlify deployer
   |
   |-- ************************************************************************
```

<br />

## Deploy a fork of this template to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/app-generator/priv-eleventy-soft-ui-pro)

## CSS

Styling works with Sass. The main index file is in `src/static/assets/styles/main.scss`. Import any SCSS code you want in there; it will be processed and optimized. The output is in `dist/static/assets/styles/main.css`

## JS

Javascript can be written in ES6 syntax. The main index file is in `src/static/assets/scripts/main.js`. It will be transpiled to ES5 with babel, bundled together with webpack, and minified in production. The output is in `dist/static/assets/scripts/main.js`

## SVG Icons

All SVG files added to `src/static/assets/icons` will be bundled into a `symbol` sprite file. The SVG filename will then be used as the symbol identifier and the icon can be used as a shortcode.

For example, if you have a `github.svg` file in that folder, you can display it anywhere by using `{% icon "github" %}` in your templates.

## Critical CSS

Currently, critical CSS will only be inlined in the head of the homepage. This is done by using the [critical](https://github.com/addyosmani/critical) package in an automatic transform.

<br />

---
[Eleventy Soft UI PRO](https://appseed.us/product/eleventy-soft-ui-pro) - Provided by **AppSeed** [App Generator](https://appseed.us/app-generator).
