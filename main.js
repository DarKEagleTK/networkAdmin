const { app, BrowserWindow } = require('electron');
const path = require('path');
require('./server.js')

const createWindows = () => {
    const win = new BrowserWindow({
        width: 1920,
        height: 1080,
    });

    win.loadURL('http://localhost:8080/');
};

app.whenReady().then(() => {
    createWindows();

    app.on('activate', () => {
        if (BrowserWindows.getAllWindows().length === 0) {
            createWindows();
        }
    });
});

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});