//scrapers.js

const puppeteer = require('puppeteer');

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

    const mp3 = await page.evaluate(() =>

        Array.from(document.querySelectorAll('div.sample_player_small a.mp3_file')).map((partner) => partner.innerText)

    );


    console.log(titles);
    console.log(mp3);
    console.log(descriptions);



    browser.close()


};

scrapeProduct('https://freesound.org/search/?q=ocean&f=duration%3A%5B0+TO+*%5D+is_geotagged%3A1&s=avg_rating+desc&advanced=1&g=')