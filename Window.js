'use strict';

const { BrowserWindow } = require('electron')


// dafault window setting
const defaultProps = {
    width: 800,
    height: 600,
    show: false,

    // update for electron V5+
    webPreferences: {
        nodeIntegration: true
    }
}

class Window extends BrowserWindow {
    constructor ({ file, ...windowSetting }) {
        // call new BrowserWindow with these props
        super({ ...defaultProps, ...windowSetting })

        // load the html and open devtools
        this.loadFile(file)
        //this.webContents.openDevTools()

        this.once('ready-to-show', () => {
            this.show()
        })
    }
}

module.exports = Window