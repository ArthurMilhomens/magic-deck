const { resolve } = require('path');
const { app, Tray, Menu, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1100,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true
    },
    icon: resolve(__dirname, 'src/assets/logos', 'magic-icon.png'),
    alwaysOnTop: true,
    title: "Magic Deck Control",
  });

  win.loadURL('http://localhost:6063')
  win.webContents.openDevTools();
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});