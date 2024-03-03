const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0017 Test Case -- 
Clear all Completed Items in different tabs, but Active Items are still available*/ 
async function ClearCompletedbutActiveisAvailable() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('123245612');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('yes22322');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('123joe123');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Check icon that is located beside “Add Item” Input.
        await driver.findElement(By.className('toggle-all')).click();

        //8. Uncheck one or more words in the Items List.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[1]')).click(); //Test Data 1
        await driver.findElement(By.xpath('(//*[@class="toggle"])[2]')).click(); //Test Data 2
    
        //9. Click “Clear Completed” button.
        await driver.findElement(By.className('clear-completed')).click(); 
        
    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
ClearCompletedbutActiveisAvailable();