const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0015 Test Case -- Delete one or more Words in Items List*/ 
async function DeletetemsInItemList() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('261273');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('asna12127');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        //6. Select “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Click “x” for one of available Items in Item List.
        await driver.findElement(By.xpath('(//div[@class="view"])[1]')).click(); //Test Data 1
        await driver.findElement(By.xpath('(//button[@class="destroy"])[1]')).click(); //Test Data 1
        
    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
DeletetemsInItemList();