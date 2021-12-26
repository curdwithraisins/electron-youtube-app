'use strict'

var platform = require('os').platform()
const path = require('path')
// const ipc = require('ipc')
import { app, nativeImage, Tray, Menu, BrowserWindow, ipcMain } from 'electron'

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:${require('../config').port}`
  : `file://${__dirname}/index.html`

let tray = null;

console.log('ipcMain', ipcMain)

function createWindow () {
  mainWindow = new BrowserWindow({
    height: 400,
    width: 350,
    minHeight: 200,
    minWidth: 300,
    // maxHeight: 500,
    // maxWidth: 500,
    frame: false,
    // titleBarStyle: 'hidden-inset',
    alwaysOnTop: true,
    icon: path.join(__dirname, '/icons/icon.png')
  })

  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  let tryImg = null

  if (platform === 'darwin') {
    tryImg = `${__dirname}/icons/tray-icon.png`;
  } else if (platform === 'win32') {
    tryImg = `${__dirname}/icons/icon.png`;
  }

  const icon = nativeImage.createFromPath(tryImg);//.resize({width: 24, height: 24})

  tray = new Tray(icon)

  const contextMenu = [
    {
      label: 'Close App',
      click: () => app.quit()
    },
    {
      label: 'Play/Stop',
      click: () => mainWindow.webContents.send('play-stop')
    }
  ]

  const menu = Menu.buildFromTemplate(contextMenu);

  if (platform === 'darwin') app.dock.setMenu(menu)

  tray.setContextMenu(menu)
  tray.setToolTip('Electron YouTube App')

  console.log('mainWindow opened')
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
