const {By, Builder, Key, until, Actions} = require('selenium-webdriver');
const assert = require('assert');
const { Test } = require('mocha');

/*This is Automation Test Script for TODO-0004 Test Case -- Edit Existed Words in To-do Items List*/ 
async function EditWordinItem() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        //1. Navigate to Website
        await driver.get('https://todomvc.com');
        
        //2. Click React Menu
        await driver.findElement(By.xpath(('//*[@class="link"][1]'))).click();

        //await driver.manage().setTimeouts({implicit: 3000});
        var Stringing = 'BackLog102'
        //3. Input the word in Item.
        await driver.findElement(By.id('todo-input')).click();
        //await driver.findElement(By.id('todo-input')).sendKeys('BackLog102');
        await driver.findElement(By.id('todo-input')).sendKeys(Stringing);

        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        
        //5. Double click the existing Words in To-do Items List.
        let Awa = await driver.findElement(By.xpath('(//*[@data-testid="todo-item-label"])[1]'))
        //await driver.findElement(By.xpath('//a[@data-testid="todo-item-label"][1]')).click();
        driver.actions().doubleClick(Awa).perform();
        
        
        /*await driver.findElement(By.xpath('(//input[@id="todo-input"])[2]')).click();*/
        
        //6. Input new Words
        await driver.findElement(By.xpath('//label[contains(.,"Edit Todo Input")]')).sendKeys('');
        await driver.findElement(By.xpath('//label[contains(.,"Edit Todo Input")]')).sendKeys('BackLog344');
        
        //7. Press Enter in Keyboard.
        await driver.findElement(By.xpath('//label[contains(.,"Edit Todo Input")]')).sendKeys(Key.RETURN);
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
EditWordinItem();