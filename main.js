const { resolve } = require('path');
const { app, Tray, Menu, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    altura: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    },
    icon: resolve(__dirname, 'assets', 'magic-icon.png'),
    alwaysOnTop: true,
    title: "Magic Deck Control",
  });

  win.loadURL('http://localhost:6063')
  // win.webContents.openDevTools();
}

app.on('ready', () => {
  createWindow();
})

