describe('Waits',()=>{

    it('Navigate to url',()=>{
        browser.url('https://demo.nopcommerce.com/')
        browser.maximizeWindow()
    })

    it('Wait Until',()=>{
       //Email-error
       $('=Log in').click();

       browser.refresh();

       $('.login-button').click();

       const text = $('#Email-error');
       
       browser.waitUntil(()=>{
          
          return text.isDisplayed() === true;
          //text.getText() === 'Please enter your email'
       },{
           timeout:5000,
           timeoutMsg: 'Waiting for error message'
       })

       
      

       console.log(text.getText())

        


        
    })

   
    
})