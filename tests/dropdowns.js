 describe('Dropdown',()=>{


    it('register page dropdown',()=>{
        browser.url('https://demo.nopcommerce.com/');
        browser.maximizeWindow();
        $('=Register').click();
        browser.refresh();

        const day = $('[name="DateOfBirthDay"]');
       // $('[name="DateOfBirthDay"]').selectByAttribute('value','7');
       day.selectByAttribute('value','9');
        

        const month = $('[name="DateOfBirthMonth"]');
        month.selectByIndex(9);

       

        const year = $('[name="DateOfBirthYear"]');
         year.selectByVisibleText('1999');

         browser.pause(2000);







        

    })

 })



 