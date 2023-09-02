import { expect, Page } from "@playwright/test";
import CausesPage from "../pages/causes.page";

export default class Causes{
    page: Page;
    causesPage: CausesPage;

    constructor(page: Page) {
        this.page = page;        
        this.causesPage = new CausesPage(this.page);
        
    }

    public async setCauses(animalWelfare: string) {     

        await this.causesPage.setAnimalWelfare();

    }




}
