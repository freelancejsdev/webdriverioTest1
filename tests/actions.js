describe('Actions',()=>{

    it('Naviagte',() =>{
        browser.url('https://demo.nopcommerce.com/')
        browser.maximizeWindow()
    })


    it('Enter keyboard Action',() =>{
        $('#small-searchterms').setValue('laptop');
        $('#small-searchterms').keys('Enter')
        $('.search-button').click()
       const text =  $('=Asus N551JK-XO076H Laptop').getText()
        console.log(text);
    })


    it('Mouse Hover',() =>{
      
      $('=Computers').moveTo();
      $('=Desktops').click();
      $('=Build your own computer').getText().then((text) =>{
          console.log(text);
      })
      $('=Build your own computer').click();
    })
})