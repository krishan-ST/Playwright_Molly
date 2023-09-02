import { expect, Page } from "@playwright/test";
import CompleteProfilePage from "../pages/completeProfile.page";

export default class CompleteProfile{
    page: Page;
    completeProfilePage: CompleteProfilePage;

    constructor(page: Page) {
        this.page = page;        
        this.completeProfilePage = new CompleteProfilePage(this.page);
        
    }

    public async setCompleteProfile(phoneNumber:string,country:string,city:string,aboutYou:string) {     

        await this.completeProfilePage.setPhoneNumber(phoneNumber);
        await this.completeProfilePage.setCountry(country);
        await this.completeProfilePage.setCity(city);
        await this.completeProfilePage.setAboutYou(aboutYou);
        await this.completeProfilePage.clickCompleteProfileNextButton();

    }




}
