//scrapers.js

const puppeteer = require('puppeteer');


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



async function scrapeProduct(url) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto(url)



    const titles = await page.evaluate(() =>

        Array.from(document.querySelectorAll('div.sample_player_small a.title')).map((partner) => partner.innerText)
    );

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



    const web_url_mp3 = s += mp3;
    const web_url_ogg = c += ogg;



    // var twitter_links = document.querySelectorAll('a[href*="https://freesound.org/search/?q=ocean&f=duration%3A%5B0+TO+*%5D+is_geotagged%3A1&s=avg_rating+desc&advanced=1&g="]');


    // const ogg = await page.evaluate(() =>

    //     Array.from(document.querySelectorAll('div.sample_player_small a,ogg_file').href).map((partner) => partner.innerText)



    // );




    // console.log(titles);
    // console.log(mp3)
    console.log(web_url_mp3)
    // console.log(descriptions);
    // console.log(l)
    console.log(web_url_ogg)


    browser.close()


};



scrapeProduct('https://freesound.org/search/?q=ocean&f=duration%3A%5B0+TO+*%5D+is_geotagged%3A1&s=avg_rating+desc&advanced=1&g=')