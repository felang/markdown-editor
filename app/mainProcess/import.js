const ipc = require('electron').ipcMain;
const os = require('os')
const dialog = require('electron').dialog

ipc.on('open-file-dialog-for-file', function (event) {
    if(os.platform() === 'linux' || os.platform() === 'win32'){
       dialog.showOpenDialog({
           properties: ['openFile']
       }, function (files) {
          if (files) event.sender.send('selected-file', files[0]);
       });
   } else {
       dialog.showOpenDialog({
           properties: ['openFile', 'openDirectory']
       }, function (files) {
           if (files) event.sender.send('selected-file', files[0]);
       });
   }});