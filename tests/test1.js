describe('Nop Commerce',() =>{
     it('Search Product', () =>{
         browser.url('https://demo.nopcommerce.com/');
         browser.maximizeWindow();
         /*
         browser.getTitle().then((title) =>{
             console.log('Title is: ' + title);
         })

          */


         $('#small-searchterms').setValue('laptop');
         $('.search-box-button').click();
         const asus =  $('=Asus N551JK-XO076H Laptop').getText();
         console.log(asus);
        



     })



})