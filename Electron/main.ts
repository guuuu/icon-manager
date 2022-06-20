import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    app.whenReady().then(() => {
        new BrowserWindow({
            width: 1280,
            height: 720,
            autoHideMenuBar: true,
            resizable: false,
            frame: false
        }).loadURL("http://127.0.0.1:3000")
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

createWindow();