const ipc = require('electron').ipcRenderer;
const buttonCreated = document.getElementById('import-button');
const fs = require('fs');

buttonCreated.addEventListener('click', function (event) {

    ipc.send('open-file-dialog-for-file')
});

ipc.on('selected-file', function (event, path) {
    fs.readFile(path, (content) => {
        
    })
});
