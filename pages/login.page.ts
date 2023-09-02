import { expect, Page } from "@playwright/test";

export default class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    emailClick = ()=>this.page.getByPlaceholder('Enter your email address');
    emailFill = ()=>this.page.getByPlaceholder('Enter your email address');
    pwdFill = ()=>this.page.getByPlaceholder('Enter your password');
    loginButton = ()=>this.page.getByRole('button', { name: 'Continue', exact: true });



    public async goto(){        
        await this.page.goto('https://next.gudppl.com');
    }

    public async login(email:string , pwd:string ){

        await this.emailClick().click();
        await this.emailFill().fill(email);
        await this.pwdFill().fill(pwd);
        await this.loginButton().click();        
        //console.log('email from Login = ' + email)        

    }



}
