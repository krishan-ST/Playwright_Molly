exports.LoginPage =  class LoginPage{

    constructor(page){
        this.page = page;
        this.username_textbox = page.locator('[id="email"]');
        this.password_textbox = page.locator('[id="password"]');        
        this.btnLogin = page.locator('//*[@type="submit"]');
        
    }

    async goto(){
        await this.page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/signin/');
    }

    async loginMethod(username,password){

        await this.username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.btnLogin.click();

    }



}