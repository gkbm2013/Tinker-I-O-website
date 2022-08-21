# Tinker I/O offical website

This repository is the source code of Tinker I/O official website ([https://tio.gkbsite.org](https://tio.gkbsite.org)).

## About
This website is a static website written in Vue.js and Nuxt.js. The website provides simple introduction, download counts, and download links of Tinker I/O.

## How it works?
Though this is a static website, the download counts and links are automatically updated. We create a [Google Apps Script program](https://github.com/gkbm2013/Tinker-IO-Downloads-Crawler) to get the mod file information. The information is processed and written into a Google spreadsheet. Then, we use Google Sheets API with javascript on the front end to get the download count and links from the spreadsheet.

## Report Issue
If there are any issue related to the website, please report it in the [Tinker I/O repository](https://github.com/gkbm2013/tinker-IO).

## Translation guide
It is welcome for everyone to translate this website or the mod itself. If you are interested in translating this website, please fork this repository and translate the language file. The language files are located at the [`locales` directory](https://github.com/gkbm2013/Tinker-I-O-website/tree/main/locales). For translation, you can copy `en.js`, and rename the new file to the name of the target language (e.g. `en_gb.js`). Next, translate the new file, and commit it to the forked repository.

After translation, you can create a pull request in this repository. Once the pull request is accepted, your GitHub name will be displayed on the website to appreciate your contribution.

If you are interested in translating Tinker I/O mod, please go to the [Tinker I/O main repository](https://github.com/gkbm2013/tinker-IO).

If you have any question, feel free to contact us by creating an issue in the [Tinker I/O main repository](https://github.com/gkbm2013/tinker-IO).

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).
