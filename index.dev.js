/**
 * This file is used specifically and only for development.
 */

process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'main';
require('babel-register')({ ignore: /node_modules/ });
// require('electron-debug')({ showDevTools: true });

require('electron').app.on('ready', () => {
  let installExtension = require('electron-devtools-installer')
  installExtension.default(installExtension.REACT_DEVELOPER_TOOLS)
    .then(() => {})
    .catch(err => {
      console.log('Unable to install `react-devtools`: \n', err)
    });
  // installExtension.default(installExtension.REDUX_DEVTOOLS)
  //   .then(() => {})
  //   .catch(err => {
  //     console.log('Unable to install `react-devtools`: \n', err)
  //   })
});

// Require `main` process to boot app
require('./app/index');
