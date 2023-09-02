import { expect, Page } from "@playwright/test";
import SDGPage from "../pages/sdg.page";

export default class SDG{
    page: Page;
    sdgPage: SDGPage;

    constructor(page: Page) {
        this.page = page;        
        this.sdgPage = new SDGPage(this.page);
        
    }

    public async setSDG(climate_action: string,life_water:string) {     

        await this.sdgPage.clickClimateAction();
        await this.sdgPage.clickLifeWater();
        await this.sdgPage.clickSDGNEXT();

    }




}
