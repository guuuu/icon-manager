import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    app.whenReady().then(() => {
        const win = new BrowserWindow({
            width: 1280,
            height: 720,
            autoHideMenuBar: true,
            resizable: false,
            frame: false,
            webPreferences: {
                nodeIntegration: true
            }
        });

        win.loadURL("http://127.0.0.1:3000");
        win.webContents.openDevTools();
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

const {ipcMain} = require('electron')
ipcMain.on('close-me', (evt, arg) => {
    app.quit()
})

createWindow();