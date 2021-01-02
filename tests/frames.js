const { assert } = require("chai")

describe('Actions',()=>{

    it('Naviagte',() =>{
        browser.url('http://the-internet.herokuapp.com/')
        browser.maximizeWindow()
    })

    
    it('Alerts',() =>{
      
     
      $('=Frames').click();
      $('=iFrame').click();
      const iframe = $('#mce_0_ifr');
      
      browser.switchToFrame(iframe);
      
      const text = $('p=Your content goes here.').getText();
      console.log(text);

      browser.switchToFrame(null);
      //browser.switchToParentFrame();

      const text1 = $('h3=An iFrame containing the TinyMCE WYSIWYG Editor').getText();
      console.log(text1);
     

      
      
      
    })
})