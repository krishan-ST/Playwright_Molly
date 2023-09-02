import { expect, Page } from "@playwright/test";

export default class SDGPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators    

    climateAction = () => this.page.getByRole('button', { name: 'climate_action' })
    lifeWater = () => this.page.getByRole('button', { name: 'life_water' })
    SDGNextButton = () => this.page.getByRole('button', { name: 'Next' })




    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async clickClimateAction() {

        await this.climateAction().click();

    }

    public async clickLifeWater() {

        await this.lifeWater().click();

    }
    public async clickSDGNEXT() {

        await this.SDGNextButton().click();
        await this.page.waitForTimeout(3400);

    }






}
