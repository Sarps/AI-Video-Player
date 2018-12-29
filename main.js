/*const setupEvents = require('./installers/setupEvents')

if (setupEvents.handleSquirrelEvent()) {
    return;
 }*/

var app = require('app');
var BrowserWindow = require('browser-window');
var Menu = require('menu')
var MenuItem = require('menu-item')
var ipcMain = require('ipc-main');
var shell = require('shell');

var mainWindow = null;

app.on('window-all-closed', function() {

  if (process.platform != 'darwin') {
    app.quit();
  }

});

app.on('ready', function() {

  mainWindow = new BrowserWindow({
    width: 1200, height: 800,
    frame: false,
    titleBarStyle: 'hidden'
  });

  mainWindow.loadURL('file://' + __dirname + '/public/test.html');

  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  //mainWindow.setMenu(null);

});

const template = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Open',
        accelerator: 'Ctrl+O',
        click: function(item, focusedWindow){
          focusedWindow.webContents.send('menu-open')
        }
      },
      {
        label: 'Save',
        accelerator: 'Ctrl+S',
        click: function(item, focusedWindow){
          focusedWindow.webContents.send('menu-save')
        }
      },
      {
        label: 'Save As',
        accelerator: 'Ctrl+Shift+S',
        click: function(item, focusedWindow){
          focusedWindow.webContents.send('menu-saveas')
        }
      },
    ]
  },
  {
    label: 'Generate',
    submenu: [
      {
        label: 'Hash',
        click: function(item, focusedWindow){
          focusedWindow.webContents.send('generate-hash')
        }
      }
    ]
  },
  {
    label: 'Must See',
    submenu: [
      {
        label: 'My Github Page',
        click: function(item, focusedWindow) {
          shell.openExternal('http://sarps.github.io/');
        }
      },
      {
        label: 'My Twitter Profile',
        click: function(item, focusedWindow) {
          shell.openExternal('https://twitter.com/Bishop_Sarpong')
        }
      },
      {
        label: 'My Facebook Profile',
        click: function(item, focusedWindow) {
          shell.openExternal('http://www.facebook.com/emm.sarpi')
        }
      },
      {
        label: 'My Github Projects',
        click: function(item, focusedWindow) {
          shell.openExternal('http://www.github.com/Sarps')
        }
      },
      {
        label: 'My Youtube Channel',
        click: function(item, focusedWindow) {
          shell.openExternal('https://www.youtube.com/channel/UCcM6IokN3o2mQDlyA18tVPg')
        }
      },
    ]
  },
  {
    label: 'About',
    submenu: [
      {
        label: 'Getting Started',
        click: function(item, focusedWindow) {
          console.log(ipcMain);
        }
      },
      {
        label: 'Learn More',
        click: function(item, focusedWindow) {
          console.log(ipcMain);
        }
      },
      {
        label: 'About Developer',
        click: function(item, focusedWindow) {
          console.log(ipcMain);
        }
      },
     {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click: function(item, focusedWindow) {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools()
        }
      },
    ]
  },
]

/*
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
*/

