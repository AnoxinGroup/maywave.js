'use strict'

const RadioBrowser = require('radio-browser')

let stream = new Audio()

let radio_button = document.querySelector(".button-radio");
let clicked_state = 1;
radio_button.addEventListener("click", function () {
  radio_button.innerText = clicked();
});

document.querySelector('.searchButton').addEventListener('click', () => {

    let text = document.querySelector('.sear').value;

    let filter = {
        limit: 1,         
        by: 'name',     
        searchterm: text 
    }

    RadioBrowser.getStations(filter)
        .then(data => {
            document.querySelector('.bitrate').innerHTML  = 'Bitrate: ' + data[0].bitrate;
            document.querySelector('.language').innerHTML = 'Language: ' + data[0].language;
            document.querySelector('.country').innerHTML  = 'Country: ' + data[0].country;
            if (!data[0].tags) data[0].tags = "None";
            document.querySelector('.tags').innerHTML     = 'Tags: ' + data[0].tags;
            document.querySelector('.favicon').src        = data[0].favicon;
            
            stream.src = data[0].url
            console.log(data)
        })
        .catch(error => { 
            alert(error)
        })
});

function playStream() { stream.play(); }
function pauseStream() { stream.pause(); }

function clicked() {
    if (clicked_state == 0) {
        pauseStream()
      clicked_state = 1;
      return "Start";
    }
    if (clicked_state == 1) {
        playStream()
      clicked_state = 0;
      return "Stop";
    }
  }
  