const puppeter = require('puppeteer');

async function run(){
 const browser = await puppeter.launch();
 const page = await browser.newPage();
 await page.goto('https://en.prothomalo.com/');
//  await page.goto('https://www.geeksforgeeks.org/what-is-web-scraping-and-how-to-use-it/');

// await page.screenshot({path: 'prothomalo2.png', fullPage: true});
// await page.pdf({path: 'prothomalo2.pdf', format: 'A4'});

// const title =  await page.evaluate(() => document.title);

const text = await page.evaluate(() => document.body.innerText);

// const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), (e) => e.href));

// console.log(links);

const news = await page.evaluate(() =>
Array.from(document.querySelectorAll('#container '), (e) =>({
    title: e.querySelector('span').innerText,
    img: e.querySelector('img').src,
    description: e.querySelector('p').innerText
})))
console.log(news);
 await browser.close();
}
run();