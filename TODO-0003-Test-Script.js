const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0003 Test Case -- 
            Add Words, which exist Words appear in To-do Items List*/ 
async function AddExistWordsintoWordList() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        //1. Navigate to Website
        await driver.get('https://todomvc.com');
        
        //2. Click React Menu
        await driver.findElement(By.xpath(('//*[@class="link"][1]'))).click();

        //await driver.manage().setTimeouts({implicit: 3000});
        //Pre-requisites:
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement((By.id('todo-input'))).sendKeys('Abcd1234');
        await driver.findElement((By.id('todo-input'))).sendKeys(Key.RETURN);
        
        //3. Input the word that already existed in the To-do Items List.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement((By.id('todo-input'))).clear();
        await driver.findElement((By.id('todo-input'))).sendKeys('Abcd1234'); //Word existed in Item List
        //4. Press Enter in Keyboard. (Actual Results: Did not display error message, 
        //so it obviously failed)
        await driver.findElement((By.id('todo-input'))).sendKeys(Key.RETURN);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
AddExistWordsintoWordList();