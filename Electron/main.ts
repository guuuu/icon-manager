import { app, BrowserWindow } from 'electron'
//import { ipcMain } from 'electron';
import path from "path";

const createWindow = () => {
    const splash = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        resizable: false,
        frame: false,
        alwaysOnTop: false
    });

    splash.loadFile(path.join(__dirname, "preload.html"));
    splash.center();

    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        autoHideMenuBar: true,
        resizable: false,
        frame: false,
        show: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    win.loadURL("http://127.0.0.1:3000");
    win.webContents.openDevTools();

    // win.once('ready-to-show', () => {
    //     splash.close();
    //     win.show();
    //     win.center();
    // })

    setTimeout(() => {
        splash.close();
        win.show();
        win.center();
    }, 10000)
}
app.whenReady().then(() => { createWindow(); });

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') { app.quit() }
});

// ipcMain.handle('close-app', () => {
//     const result = app.quit();
//     return result;
// })

//createWindow();