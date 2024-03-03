const {By, Builder, Key} = require('selenium-webdriver');
const assert = require('assert');

/*This is Automation Test Script for TODO-0002 Test Case -- Add Words with less than 2 characters*/ 
async function AddWordsLessthanTwoChara() {
    //initialize Browser Build
    let driver = await new Builder().forBrowser('chrome').build(); 
    try{
        
        //1. Navigate to Website
        await driver.get('https://todomvc.com');
        
        //2. Click React Menu
        await driver.findElement(By.xpath(('//*[@class="link"][1]'))).click();
        //await driver.manage().setTimeouts({implicit: 3000});
        
        //3. Input the word in less than 2 characters.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).sendKeys('a'); //Test Data 1
        
        //4. Press Enter in Keyboard.
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        await driver.manage().setTimeouts({'implicit': 10000});

        //5. Repeat step 3 – 4 for adding another word.
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('o'); //Test Data 2
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);

        await driver.manage().setTimeouts({'implicit': 10000});
        
        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('6'); //Test Data 3

        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        await driver.manage().setTimeouts({'implicit': 10000});

        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('5'); //Test Data 4
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        await driver.manage().setTimeouts({'implicit': 10000});

        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('|'); //Test Data 5
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        await driver.manage().setTimeouts({'implicit': 10000});

        await driver.findElement(By.id('todo-input')).click();
        await driver.findElement(By.id('todo-input')).clear();
        await driver.findElement(By.id('todo-input')).sendKeys('*'); //Test Data 6
        await driver.findElement(By.id('todo-input')).sendKeys(Key.RETURN);
        await driver.manage().setTimeouts({'implicit': 10000});
        // Note: Some Special Characters, such as "", '', and \ cannot implement to automation
    } catch(e) {
        console.log(e);
    } finally {
        await driver.quit();
    }
}
AddWordsLessthanTwoChara();