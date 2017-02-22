const $ = function(sel) { return document.querySelector(sel); };

const electron = require('electron');

const ipcRenderer = electron.ipcRenderer;

$('.step1').onclick = $('.step2Path').onclick = function() {
	ipcRenderer.send('openDirectory');
}

ipcRenderer.on('openedDirectory', function(e, path) {
	if(!path) return;
	$('.step1').style.display = 'none';
	$('.step2').style.display = 'block';
	$('.step2Path').innerHTML = path;
})