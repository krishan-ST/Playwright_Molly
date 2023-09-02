import { expect, Page } from "@playwright/test";

export default class HomeLandingPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators    
    
    animalWelfare = () => this.page.getByLabel('Animal welfare');
    causesNextButton = () => this.page.getByRole('button', { name: 'Next' });
  
    wormText = () => this.page.getByText('Yay... you got the worm!');
        //await expect.soft(page.getByText('Yay... you got the worm!')).toHaveText("Yay... you got the worm!");


    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async clickWorkText() {

        await this.wormText().click();
    }
    public async assertWormText(wording:string) {

        await expect.soft(this.wormText()).toHaveText(wording);
    }

    
    
    



}
