const puppeteer = require('puppeteer');
const faker = require('faker');

const newPerson = faker.helpers.createCard();
const password = '12345678';
const adminEmail = 'joie@email.com';
const recipe = 'chicken, onions';
const suggestion = 'More beets please!!!!';
let url = 'http://localhost:3000';
let opts = {
  headless:false, args:[`--window-size=${1366},${768}`], slowMo:100
};
let browser;
let page;
if(false) {
   url = 'https://rocky-refuge-16506.herokuapp.com'
}

  (async () => {
  browser = await puppeteer.launch(opts);
  page = await browser.newPage();
  await page.setViewport({width: 1366, height: 768});

  await page.goto(url);
    await page.screenshot({path: 'test/screenshots/initialSignUpPage.png'});

    await page.waitForSelector('input[name="name"]');
    await page.click('input[name="name"]');
    await page.keyboard.type(newPerson.name);

    await page.waitForSelector('input[name="email"]');
    await page.click('input[name="email"]');
    await page.keyboard.type(newPerson.email);

    await page.waitForSelector('input[name="password"]');
    await page.click('input[name="password"]');
    await page.keyboard.type(password);

    await page.click('.button-line > div:nth-child(1) > button:nth-child(1)');
    await page.screenshot({path: 'test/screenshots/login.png'});

    await page.waitForSelector('input[name="email"]');
    await page.click('input[name="email"]');
    await page.keyboard.type(newPerson.email);

    await page.waitForSelector('input[name="password"]');
    await page.click('input[name="password"]');
    await page.keyboard.type(password);

    await page.click('.button-line > div:nth-child(1) > button:nth-child(1)');
    await page.screenshot({path: 'test/screenshots/dashboard.png'});

    await page.click('a.MuiButtonBase-root-59:nth-child(2)');
    await page.screenshot({path: 'test/screenshots/inventory.png'});

    await page.click('a.MuiButtonBase-root-59:nth-child(3)');
    await page.click('.MuiInput-input-80');
    await page.keyboard.type(recipe);
    await page.click('button.MuiButtonBase-root-59:nth-child(2)');
    await page.screenshot({path: 'test/screenshots/mealPlan.png'});

    await page.click('a.MuiButtonBase-root-59:nth-child(4)');
    await page.click('textarea[name="comments"]');
    await page.keyboard.type(suggestion);
    await page.click('button.MuiButtonBase-root-59');
    await page.screenshot({path: 'test/screenshots/sugs.png'});

    await page.click('.container > div:nth-child(1)');
    await page.screenshot({path: 'test/screenshots/clearSugsAlert.png'});

    await page.click('a.MuiButtonBase-root-59:nth-child(5) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1)');
    await page.screenshot({path: 'test/screenshots/helpPage.png'});

    await page.click('a.MuiButtonBase-root-59:nth-child(6)');
    await page.screenshot({path: 'test/screenshots/logout.png'});

    await browser.close();
  })();
//
