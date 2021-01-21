//app.js

var key = config.API_KEY;
var isPlaying = false;

const url = 'https://freesound.org/apiv2/search/text/?query=oceans&fields=name,description,download,duration,previews,url'

const headers = {
    method: 'GET',
    headers: {
        Authorization: `Token ${key}`,
    }
};

function random() {
    const max = 14;
    return Math.floor(Math.random() * Math.floor(max))

}

var rand = random()

async function getData() {
    let response = await fetch(url, headers);
    let data = await response.json()
    return data;
}


getData().then(data => {
    // console.log(data)
    var audioElement = document.getElementById("myAudio");

    document.getElementById('sound-title').textContent = data.results[`${rand}`].name

    document.getElementById('sound-desc').textContent = data.results[`${rand}`].description

    document.getElementById('myAudio').innerHTML = `"<source src=${data.results[`${rand}`].previews["preview-hq-mp3"]} type="audio/mpeg">`

    document.getElementById('myAudio').innerHTML += `"<source src=${data.results[`${rand}`].previews["preview-hq-ogg"]} type="audio/ogg">`

    document.getElementById('sound-link').innerHTML = `<a href=${data.results[`${rand}`].url} target="_blank"> link to this sound</a>`


    var nxt = document.getElementById('next');

    nxt.addEventListener("click", function () {
        var r = random();

        document.getElementById('sound-title').textContent = data.results[`${r}`].name
        document.getElementById('sound-desc').textContent = data.results[`${r}`].description
        document.getElementById('sound-link').innerHTML = `<a href=${data.results[`${r}`].url} target="_blank"> link to this sound</a>`

        audioElement.innerHTML = `"<source src=${data.results[`${r}`].previews["preview-hq-mp3"]} 
        type="audio/mpeg">`
        audioElement.innerHTML += `"<source src=${data.results[`${r}`].previews["preview-hq-ogg"]} type="audio/ogg">`

        audioElement.load();

        if (isPlaying == true) {
            audioElement.play();
        }



    })
});


function togglePlay() {

    var audioElement = document.getElementById("myAudio");
    var playBtn = document.getElementById("play");
    var pauseBtn = document.getElementById("pause");


    playBtn.style.opacity = "0";
    pauseBtn.style.opacity = "100";


    if (audioElement.paused) {

        audioElement.play();
        isPlaying = true;
        playBtn.style.opacity = "0";
        pauseBtn.style.opacity = "100";

    }

    else {

        audioElement.pause();
        isPlaying = false;
        playBtn.style.opacity = "100";
        pauseBtn.style.opacity = "0";

    }
}