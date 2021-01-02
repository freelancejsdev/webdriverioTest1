describe('Waits',()=>{

    it('Navigate to url',()=>{
        browser.url('https://demo.nopcommerce.com/')
        browser.maximizeWindow()
    })

    it('Wait For Clickable',()=>{
        const registerLink = $('=Register')
        registerLink.waitForClickable(); // waits for default time
        registerLink.waitForClickable({ timeout: 3000 });//waits for given time
        //registerLink.click();


        
    })

    it('Wait For Clickable Reverse',()=>{
        const registerBtn = $('#register-button')
     // if executed without reverse true test case will fail because the lement didn't exist on the home page
       registerBtn.waitForClickable();
     // if executed with reverse true test case will pass because by default it's true...now it's set to false  
        registerBtn.waitForClickable({ reverse:true });

        // fail with customized message
        registerBtn.waitForClickable({timeoutMsg:'register button is not in home page'});
      


        
    })

    
})