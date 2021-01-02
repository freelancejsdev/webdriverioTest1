describe('Assertions',()=>{



    it('validations',()=>{
        browser.url('https://demo.nopcommerce.com/');
        browser.maximizeWindow();
        
        const regsiterLink = $('=Register');


        // verify element is clickable
        const isRegClick =  regsiterLink.isClickable();
        console.log(isRegClick);

        // to wait until element is clickable
       browser.waitUntil(()=>regsiterLink.isClickable())

        $('=Register').click();
        browser.refresh();

        // verify element is displayed
        console.log('element is displayed: ' +  $('=Register').isDisplayed());

        const checkbox1 = $('#gender-male')
       
       // browser.waitUntil(()=> checkbox1.isEnabled())
        //verify element is enabled
        console.log('element is enabled: ' + checkbox1.isEnabled());
         
   
        // verify element is selected
        const day = $('[name="DateOfBirthDay"]');
        day.selectByAttribute('value','9');
        console.log('option 9 is selected: ' + $('(//option[@value="9"])[1]').isSelected())

        // verify element is existing - to verify element exists on dom
        console.log('is element existing: ' + day.isExisting())

        

    })
})