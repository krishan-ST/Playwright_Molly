import { expect, Page } from "@playwright/test";

export default class SkillPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators    
    
    accountClick = () => this.page.getByPlaceholder('Add skills and talents');
    accountFill = () => this.page.getByPlaceholder('Add skills and talents');
    //accountSelect = () => this.page.getByRole('option', { name: 'Accounting' });
  



    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async setSkills(skill:string) {
        
        await this.accountClick().click();
        await this.accountFill().fill(skill);        
        await this.page.getByRole('option', { name: skill }).click();


    }
    

    
    
    



}
