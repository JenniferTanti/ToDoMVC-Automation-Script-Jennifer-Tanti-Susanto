const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0013 Test Case -- 
Uncheck all Items in To-do Items List in Complete Tab*/ 
async function UnCheckAllItemsInItemListCompleted() {
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
        await driver.findElement(By.id('todo-input')).sendKeys('3872hdbd');
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('aiw1349');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('reoq1031');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //6. Select “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/"]')).click();

        //7. Check icon that is located beside “Add Item” Input.
        await driver.findElement(By.className('toggle-all')).click();
        
        //8. Select "Completed" Tab
        await driver.findElement(By.xpath('//*[@href="#/completed"]')).click(); 

        //9. Repeat step 7 for uncheck all Items.
        await driver.findElement(By.className('toggle-all')).click();
        
        //10. Click “Active” or “All” Tab.
        await driver.findElement(By.xpath('//*[@href="#/active"]')).click(); //See Active
        await driver.findElement(By.xpath('//*[@href="#/"]')).click(); //See All

    } catch(e) {
        console.log(e);
    } finally {
        await driver.manage().setTimeouts({'implicit': 10000, 'pageload': 10000});
        await driver.quit();
    }
}
UnCheckAllItemsInItemListCompleted();