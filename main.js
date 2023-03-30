const { app, BrowserWindow } = require('electron');
require('./server.js')

const createWindows = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
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