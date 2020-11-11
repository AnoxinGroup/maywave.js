'use strict'

const { app } = require('electron')
const Window = require('./Window')

function main() {
    const win = new Window({
        file: './public/index.html'
    })
}

app.on('ready', main)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
})