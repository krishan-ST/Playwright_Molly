import { expect, Page } from "@playwright/test";
import LoginPage from "../pages/login.page";

export default class Home {
    page: Page;
    loginPage: LoginPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page)
    }

    public async login(email: string, pwd: string) {
        await this.loginPage.goto();
        //await this.loginPage.login(email,pwd);
        await this.loginPage.emailClick().click();
        await this.loginPage.emailFill().fill(email);
        await this.loginPage.pwdFill().fill(pwd);
        await this.loginPage.loginButton().click();

    }




}
