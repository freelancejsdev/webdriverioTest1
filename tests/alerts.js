const { assert } = require("chai")

describe('Actions',()=>{

    it('Naviagte',() =>{
        browser.url('http://the-internet.herokuapp.com/')
        browser.maximizeWindow()
    })

    
    it('Alerts',() =>{
      
     
      $('=JavaScript Alerts').click();
      $('//button[text()="Click for JS Alert"]').click();
      browser.pause(2000);
      browser.acceptAlert();
      browser.pause(2000);
      assert.equal($('#result').getText(),'You successfuly clicked an alert');

      
      
      
    })
})