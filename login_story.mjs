import Story from "./story.mjs";
import webdriver from './node_modules/selenium-webdriver';

export default class LoginStory extends Story{
    constructor(context){
    super(context);
    this.username="";
    this.password="";
    this.expected="";
    this.actual="";
    }

    //use this method to get the user name, password and expected message
    getMessage(context){
        let result=context.substr(context.indexOf("[")+1,context.indexOf("]")-context.indexOf("[")-1);
        return result;
    }
    Given(context){}

    When(context){
        if(/enter user name/.test(context))  this.username=this.getMessage(context);
        if(/enter password/.test(context))  this.password=this.getMessage(context);
    }

    Then(context){
    this.expected=this.getMessage(context);
    let driver= new webdriver.Builder().forBrowser("chrome").build();
    const msg_url='https://everdoc.github.io/hellojs/quize/login.html';
    driver.get(msg_url);
    //driver.wait(webdriver.until.urlIs(msg_url), 1000*10)
    //.then((success)=>{

        //send the username and password to the TextField
         driver.findElement(webdriver.By.id('name')).sendKeys(this.username);
         driver.findElement(webdriver.By.id('password')).sendKeys(this.password);
         driver.findElement(webdriver.By.className('ui button')).click();
         driver.findElement(webdriver.By.id('result')).getText().then((message)=>{

            //get the successful message and verify it
            this.actual=message;
            if(this.expected===this.actual.toLowerCase())  console.log("The case is PASS");      
            else console.log("The case is FAIL");
            driver.quit();             
            }
         );
         //},
         (reason)=>{
             // do nothing
             console.log(reason);
             driver.quit();
     }
    //);    
    }
}