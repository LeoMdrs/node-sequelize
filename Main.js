const { app, BrowserWindow } = require('electron')



function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadFile('index.html')
  // win.loadURL('http://localhost:3000/')
  // win.loadURL('http://192.168.100.10:3000/')

  //Ferramentas de desenvolvedor
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
