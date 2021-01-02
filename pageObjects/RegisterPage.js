class RegisterPage
{
    get firstName()
    {
       return $('#FirstName')
    }


    get lastName()
    {
       return  $('#LastName')
    }

    get email()
    {
       return  $('#Email')
    }

    fillRegisterForm(fn,ln,em)
    {
        this.firstName.setValue(fn)
        this.lastName.setValue(ln)
        this.email.setValue(em)
    }
}



export default new RegisterPage()