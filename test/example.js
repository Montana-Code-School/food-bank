const puppeteer = require('puppeteer');
const faker = require('faker');

const newPerson = faker.helpers.createCard();
const password = '12345678';
let url = 'http://localhost:3000';
let opts = {};
if(true) {
   url = 'https://rocky-refuge-16506.herokuapp.com'
   opts = {headless:true, slowMo:100}
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  await page.screenshot({path: 'test/screenshots/initialSignUpPage.png'});

  //
  await page.waitForSelector('input[name="name"]');
  await page.click('input[name="name"]');
  await page.keyboard.type(newPerson.name);
  //
  // await page.waitForSelector('input[name="email"]');
  // await page.click('input[name="email"]');
  // await page.keyboard.type(newPerson.email);
  //
  // await page.waitForSelector('input[name="password"]');
  // await page.click('input[name="password"]');
  // await page.keyboard.type(password);
  //
  // await page.click('#react-app > div > div.container > div > form > div.button-line > div > button > div > div > span');
  //
  // await page.screenshot({path: 'test/screenshots/login.png'});
  //
  // await page.waitForSelector('input[name="email"]');
  // await page.click('input[name="email"]');
  // await page.keyboard.type(newPerson.email);
  //
  // await page.waitForSelector('input[name="password"]');
  // await page.click('input[name="password"]');
  // await page.keyboard.type(password);
  //
  // await page.click('#react-app > div > div.container > div > form > div.button-line > div > button > div > div > span');
  //
  // await page.screenshot({path: 'test/screenshots/dashboard.png'});
  //
  // await page.click('button[type="delete"]');
  //
  // await page.screenshot({path: 'test/screenshots/doneHomescreen.png'});
  //
  await browser.close();
})();
