 class BasePage
{
    navigateToUrl()
    {
        browser.url('https://demo.nopcommerce.com/')
        browser.maximizeWindow()
    }

    pageRefresh()
    {
        browser.refresh()
    }


}

export default new BasePage()