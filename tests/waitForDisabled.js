describe('Waits',()=>{

    it('Navigate to url',()=>{
        browser.url('https://the-internet.herokuapp.com/jqueryui/menu')
        browser.maximizeWindow()
    })

    
   
    it('Wait For Disabled',()=>{
       // this will fail because it won't be in disabled state all the time
        const ds = $('#ui-id-1');
        ds.waitForEnabled({reverse: true});

        
    })

   

    
})