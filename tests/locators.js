describe('locators test',()=>{

    before(()=>{
        browser.url('https://devexpress.github.io/testcafe/example/')
        browser.maximizeWindow()
    })


    it('using id',()=>{
        $('#remote-testing').click()
    })

    it('using xpath',()=>{
        const el = $('//p[text()="This webpage is used as a sample in TestCafe tutorials."]')


        const text = el.getText()
        console.log(text)
    })
})