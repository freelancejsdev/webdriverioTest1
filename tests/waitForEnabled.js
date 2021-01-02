describe('Waits',()=>{

    it('Navigate to url',()=>{
        browser.url('https://demo.nopcommerce.com/')
        browser.maximizeWindow()
    })

    
    it('Wait For Enabled',()=>{
        const register = $('=Register')
        register.click();

        const firstName = $('#FirstName');
        firstName.waitForEnabled();

        
    })
    

    it('Wait For Disabled',()=>{
        const register = $('=Register')
        register.click();
        const email = $('#Em');
        email.waitForEnabled({reverse: true});

        
    })

   

    
})