const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0012 Test Case -- 
Uncheck one or more Items in To-do Items List in Complete Tab*/ 
async function CheckItemsInItemListCompleted() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('ieued123');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('yuyu111');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('lksowp057');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Check one of the Words available in To-Do Item List.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[2]')).click(); //Test Data 2

        //Pre-requisite: Repeat step 7 for another words.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[3]')).click(); //Test Data 3

        //8. Click "Complete" Tab
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); //See Completed

        //9. Uncheck one of the words in Step 7.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[2]')).click(); //Test Data 2

        //10. Repeat step 6 – 9 for another words in To-Do Items List. (already in Pre-requisite step)
        await driver.findElement(By.xpath('(//*[@class="toggle"])[3]')).click(); //Test Data 3

        //11. Click “Active” or “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/active"]')).click(); //See Active
        await driver.findElement(By.xpath('//*[@href="#/"]')).click(); //See All

    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
CheckItemsInItemListCompleted();