const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0008 Test Case -- 
Check all Items in To-do Items List in All Tab*/ 
async function UnCheckAllItemsInItemList() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('klojs23');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('aksjam12');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('zquapq2ue');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Check icon that is located beside “Add Item” Input.
        await driver.findElement(By.className('toggle-all')).click();
        
        //8. Repeat step 7 for uncheck all Items.
        await driver.findElement(By.className('toggle-all')).click();
        
        //9. Click “Active” or “Complete” Tab.
        await driver.findElement(By.xpath('//*[@href="#/active"]')).click(); //See Active
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); //See Completed

    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
UnCheckAllItemsInItemList();