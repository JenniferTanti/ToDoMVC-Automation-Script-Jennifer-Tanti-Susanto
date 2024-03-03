const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0011 Test Case -- 
Check all Items in To-do Items List in Active Tab*/ 
async function CheckAllItemsInItemListActive() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('ugqhfs203');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('asqorp102');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('zxejwr12');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select Active Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Check icon that is located beside “Add Item” Input.
        await driver.findElement(By.className('toggle-all')).click();
    
        //8. Click “All” or “Complete” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click(); //See All
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); //See Completed

    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
CheckAllItemsInItemListActive();