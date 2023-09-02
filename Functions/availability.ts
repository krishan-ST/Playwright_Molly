import { expect, Page } from "@playwright/test";
import AvailabilityPage from "../pages/availability.page";

export default class Availability{
    page: Page;
    availabilityPage: AvailabilityPage;

    constructor(page: Page) {
        this.page = page;        
        this.availabilityPage = new AvailabilityPage(this.page);
        
    }

    public async setAvailability(monday:number,tuesday:number,wednesday:number) {     

        await this.availabilityPage.setMonday(monday);
        await this.availabilityPage.setTuesday(tuesday);
        await this.availabilityPage.setWednesday(wednesday);
        await this.availabilityPage.clickAvailabilityNextButton();

    }




}
