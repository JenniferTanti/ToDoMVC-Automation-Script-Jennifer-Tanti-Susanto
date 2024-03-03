const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0014 Test Case -- Adding Words to a New List in Completed Tab*/ 
async function AddWordsintoWordListbutinCompleted() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        //1. Navigate to Website
        await driver.get('https://todomvc.com');
        
        //2. Click React Menu
        await driver.findElement(By.xpath(('//*[@class="link"][1]'))).click();
        //await driver.manage().setTimeouts({implicit: 3000});
        //3. Input the Words in Item.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).sendKeys('obor022');
        
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Click Completed Tab
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); 

        //6. Repeat step 3 – 4.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('ueinzm12');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
AddWordsintoWordListbutinCompleted();