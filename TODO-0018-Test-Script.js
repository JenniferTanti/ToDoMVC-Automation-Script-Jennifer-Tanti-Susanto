const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0018 Test Case -- 
Clear all Completed Items in Active Tabs.*/ 
async function ClearCompletedbutinActiveTab() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('12324561211');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('tesu121');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('123jo2192');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Check one or more Words available in To-Do Item List.
        await driver.findElement(By.xpath('(//*[@class="toggle"])[1]')).click(); //Test Data 1
        await driver.findElement(By.xpath('(//*[@class="toggle"])[3]')).click(); //Test Data 3

        //8. Click "Active" Tab
        await driver.findElement(By.xpath('//*[@href="#/active"]')).click(); //See Active

        //9. Click “Clear Completed” button.
        await driver.findElement(By.className('clear-completed')).click(); 
    
        //10. Click “Completed” Tab.
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); //See Completed
        
    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
ClearCompletedbutinActiveTab();