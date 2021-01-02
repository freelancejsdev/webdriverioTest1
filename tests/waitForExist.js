describe('Waits',()=>{

    it('Navigate to url',()=>{
        browser.url('https://demo.nopcommerce.com/')
        browser.maximizeWindow()
    })

    it('Wait For Exist',()=>{
        const prod1 = $('=Build your own computer')
        prod1.waitForExist();
        prod1.click();

        


        
    })

    it('Wait For Exist Reverse',()=>{
      
        const fn = $('#FirstName');
        fn.waitForExist({reverse: true});

        
    })

    
})