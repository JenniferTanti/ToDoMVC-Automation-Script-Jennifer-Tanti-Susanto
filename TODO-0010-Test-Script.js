const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0010 Test Case -- 
Check one or more Items in To-do Items List in Active Tab*/ 
async function CheckItemsInItemListActive() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('oaoak192');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('ahdne28');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('apedm33');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('BCGs');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select Active Tab.
        await driver.findElement(By.xpath('//*[@href="#/active"]')).click();

        //7. Check one of the Words available in To-Do Item List.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[2]')).click(); //Test Data 2

        //8. Repeat step 7 for another words.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[3]')).click(); //Test Data 3

        //9. Click "All" or “Complete” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click(); //See Active
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); //See Completed

    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
CheckItemsInItemListActive();