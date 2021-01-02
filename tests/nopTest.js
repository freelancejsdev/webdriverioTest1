import BasePage from "../pageObjects/BasePage";
import HomePage from "../pageObjects/HomePage";
import RegisterPage from "../pageObjects/RegisterPage";

describe('test',()=>{

    before(function (){
        BasePage.navigateToUrl()
    })

    it('Click Register Link',()=>{
       HomePage.clickRegisterLink()
        //browser.pause(3000)

    })

    it('Fill Form', ()=>{
        BasePage.pageRefresh()
        RegisterPage.fillRegisterForm('test','user','testuser1@nop.com')
        browser.pause(3000)
    })

})