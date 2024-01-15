import { app, BrowserWindow, ipcMain, IpcMainInvokeEvent } from 'electron'
import path from 'path'

let mainWindow: BrowserWindow | null

function createWindow(): void {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preloader.js'),
            contextIsolation: true
        }
    })
    mainWindow.loadFile(path.join(__dirname, '..', 'renderer', 'index.html'))
    mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)
app.on('activate', () => mainWindow && mainWindow.show())
app.on('window-all-closed', () => process.platform !== 'darwin' && app.quit())

ipcMain.handle('toMain', async (event: IpcMainInvokeEvent, data: any): Promise<any> => {
    console.log(data)
    const response = 'Received your message!'
    return response
})