import { expect, Page } from "@playwright/test";
import HomeLandingPage from "../pages/homeLanding.page";

export default class HomeLanding{
    page: Page;
    homeLandingPage: HomeLandingPage;

    constructor(page: Page) {
        this.page = page;        
        this.homeLandingPage = new HomeLandingPage(this.page);
        
    }

    public async assertWormText(wording:string) {
        await this.homeLandingPage.clickWorkText();
        await this.homeLandingPage.assertWormText(wording);
    }




}
