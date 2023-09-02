import { expect, Page } from "@playwright/test";

export default class CausesPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators    
    
    animalWelfare = () => this.page.getByLabel('Animal welfare');
    causesNextButton = () => this.page.getByRole('button', { name: 'Next' });
  



    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async setAnimalWelfare() {

        await this.animalWelfare().click();        
        await this.causesNextButton().click();
        await this.page.waitForTimeout(4000);


    }

    
    
    



}
