///<reference types="cypress"/>

import { Login } from "../../pageObjects/login"

const login=new Login()

describe("login test with POM", () => {
    it("TC003 positive scenario", () => {
        login.navigate()
        login.title()

    })
    it("TC004 positive scenario", () => {
        login.navigate()
        login.title()
        login.loginBtn()
        login.username()
        login.password()
        login.submit()
        login.assert()

    })
})