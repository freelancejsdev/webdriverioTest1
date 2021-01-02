describe('Assertions',()=>{
    it('nopCommerceTest',()=>{
        //browser.url('https://demo.nopcommerce.com/');
        browser.navigateTo('https://demo.nopcommerce.com/')
        browser.maximizeWindow();
    })

    it('verify element is visible',()=>{
       const welcomeMsg = $('h2=Welcome to our store');
       expect(welcomeMsg).toBeVisible();
       
    })

    it('check link has value',()=>{
        const regLink = $('=Register');
        expect(regLink).toHaveLink('https://demo.nopcommerce.com/register?returnUrl=%2F');
    })
})