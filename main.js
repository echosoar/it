const electron = require('electron')

const path = require('path')
const url = require('url')

let { app, BrowserWindow } = electron;

let windowObj = null;


function fun_window() {
	windowObj = new BrowserWindow({width: 480, height: 200, transparent: true, frame: false, resizable: false});
	windowObj.loadURL(url.format({
		pathname: path.join(__dirname, 'it.html'),
		protocol: 'file:',
		slashes: true
	}))
	windowObj.on('closed', function () {
		windowObj = null
	})
}

app.on('ready', fun_window);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (d3kabWin === null) {
    createWindow()
  }
})