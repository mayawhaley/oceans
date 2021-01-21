//scrapers.js


// var p = document.getElementById("sound-title")
// p.innerText = "titles[random]";

const puppeteer = require('puppeteer');


var url = 'https://freesound.org/search/?q=ocean&f=duration%3A%5B0+TO+*%5D+is_geotagged%3A1&s=avg_rating+desc&advanced=1&g=';

// function test() {
//     var max = 14;
//     var random = Math.floor(Math.random() * Math.floor(max));
//     var t, d = scrapeProduct('https://freesound.org/search/?q=ocean&f=duration%3A%5B0+TO+*%5D+is_geotagged%3A1&s=avg_rating+desc&advanced=1&g=');
//     var doc = document.getElementById("sound-title");
//     doc.value = t[random];
// }
var max = 14;
var random = Math.floor(Math.random() * Math.floor(max));
// console.log(titles);

// function test(url) {
//     var max = 14;
//     var random = Math.floor(Math.random() * Math.floor(max));
//     var t, d = scrapeProduct(url);
//     var doc = window.document.getElementById("sound-title");
//     doc.value = t[random]
// }




async function scrapeProduct(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(url)


    const titles = await page.evaluate(() => {

        Array.from(document.querySelectorAll('div.sample_player_small a.title')).map((partner) => partner.innerText)

        document.querySelector("#sound-title").value = "words"

    });


    // const jsHandle = await page.evaluateHandle(() => {
    //     const el = document.getElementById("sound-title")
    //     return el
    // })
    // console.log(jsHandle)

    // const result = await page.evaluate(e => e[0].innerHTML, jsHandle);
    // console.log(result); // it will log the string 'Example Domain'


    // var t_selected = await page.evaluate(() =>

    //     document.getElementsByClassName("sound-title").value = titles[random]

    //     // Array.from(document.querySelectorAll('div.sample_player_small div.metadata a')[0].getAttribute('href')).map((partner) => partner)

    // );


    // console.log(t_selected)

    const descriptions = await page.evaluate(() =>

        Array.from(document.querySelectorAll('div.sample_player_small p.description')).map((partner) => partner.innerText)

    );

    var s = "https://freesound.org/";
    var mp3 = await page.evaluate(() =>

        document.querySelectorAll('div.sample_player_small div.metadata a')[0].getAttribute('href')

        // Array.from(document.querySelectorAll('div.sample_player_small div.metadata a')[0].getAttribute('href')).map((partner) => partner)

    );
    var c = "https://freesound.org/"
    var ogg = await page.evaluate(() =>

        document.querySelectorAll('div.sample_player_small div.metadata a')[1].getAttribute('href')

        // Array.from(document.querySelectorAll('div.sample_player_small div.metadata a')[0].getAttribute('href')).map((partner) => partner)

    );



    // var t, d = scrapeProduct(url);
    // var doc = window.document.getElementById("sound-title");
    // doc.value = t[random]




    // console.log("titles: ", titles[random]);

    // console.log(titles);

    // console.log("descriptions: ", descriptions);
    // console.log("mp3: ", mp3)




    // const web_url_mp3 = s.concat(mp3);
    // const web_url_ogg = c.concat(ogg);

    // console.log(web_url_mp3)
    // console.log(web_url_ogg)


    browser.close()
    return titles, descriptions

};

// function test(url) {
//     var p, c = scrapeProduct(url);
//     console.log("inside test: ", p)
// }

// test(url);
// console.log("p:", p)

function togglePlay() {

    var audioElement = document.getElementById("myAudio");
    var playBtn = document.getElementById("play");
    var pauseBtn = document.getElementById("pause");

    playBtn.style.opacity = "0";
    pauseBtn.style.opacity = "100";


    if (audioElement.paused) {

        audioElement.play();
        playBtn.style.opacity = "0";
        pauseBtn.style.opacity = "100";

    }
    else {

        audioElement.pause();
        playBtn.style.opacity = "100";
        pauseBtn.style.opacity = "0";


    }
}

// console.log("titles:", titles)

// function test() {
//     // some ocde
//     var max = 14;
//     var random = Math.floor(Math.random() * Math.floor(max));
//     var d = document.getElementById("sound-title").innerHTML = titles[random]
// }
// document.getElementById("sound-title").innerHTML = "words"



// var t, d = scrapeProduct('https://freesound.org/search/?q=ocean&f=duration%3A%5B0+TO+*%5D+is_geotagged%3A1&s=avg_rating+desc&advanced=1&g=');

// console.log(test(url))

scrapeProduct(url);
