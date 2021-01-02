describe('Webdriver IO test spec',() => {

  it('launch browser',()=>{

      browser.url('http://www.example.com')
      //browser.pause(3000)
      browser.maximizeWindow()
      expect(browser).toHaveUrl('http://www.example.com/')
      expect(browser).toHaveTitle('Example Domain')


  })

    it('verify h1 element',()=>{

        const heading = $('h1')
        expect(heading).toBeDisplayed()
    })

    it('verify text',() =>  {

        const headingText = $('h1').getText()
        const heading = $('h1')
        heading.waitForExist()
        expect(heading).toBeVisible()
        expect(heading).toHaveText('Example Domain')


    })



})