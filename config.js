'use strict'

const path = require('path');

let config = {
  name: 'electron-youtube-app',
  eslint: true,
  port: 3080,
  building: {
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, 'app'),
    icon: path.join(__dirname, 'app/icons/icon.icns'),
    ignore: /\b(src|index\.ejs|icons)\b/,
    out: path.join(__dirname, 'builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all'
  }
};

config.building.name = config.name;
module.exports = config;
