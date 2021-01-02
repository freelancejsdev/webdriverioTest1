import BasePage from "./BasePage";

class HomePage
{
       get registerLink()
       {
           return $('.ico-register')
       }

       

       clickRegisterLink()
       {
           this.registerLink.click()
       }
}

export default new HomePage()