const {By, Builder, Key, until} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0005 Test Case -- 
Edit Existed Words in To-do Items List, which the name is as 
same as another existing words in the same list*/ 
async function EditWordthatExistedinItemList() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        //1. Navigate to Website
        await driver.get('https://todomvc.com');
        
        //2. Click React Menu
        await driver.findElement(By.xpath(('//*[@class="link"][1]'))).click();

        //await driver.manage().setTimeouts({implicit: 3000});
        //3. Input the word in Item.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).sendKeys('BackLog101');

        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        //Pre-Requisite:

        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).sendKeys('BackLog699');

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        
        //5. Double click the existing Words in To-do Items List, 
        // which there is already existing another word in the To-do Items List.
        let Awa = await driver.findElement(By.xpath('//[@data-testid="todo-item-label"])[1]'))
        //await driver.findElement(By.xpath('//a[@data-testid="todo-item-label"][1]')).click();
        driver.actions().doubleClick(Awa).perform();

        //6. Input new Words
        await driver.findElement(By.xpath('//label[contains(.,"Edit Todo Input")]')).sendKeys('');
        await driver.findElement(By.xpath('//label[contains(.,"Edit Todo Input")]')).sendKeys('BackLog699');
        
        //7. Press Enter in Keyboard. (Actual Results: Failed because no Error message after input the
        //same words in another to-do Items list)
        await driver.findElement(By.xpath('//label[contains(.,"Edit Todo Input")]')).sendKeys(Key.RETURN);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
EditWordthatExistedinItemList();