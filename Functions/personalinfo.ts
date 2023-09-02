import { expect, Page } from "@playwright/test";
import PersonalInfoPage from "../pages/personalinfo.page";

export default class PersonalInfo{
    page: Page;
    personalInfoPage: PersonalInfoPage;

    constructor(page: Page) {
        this.page = page;        
        this.personalInfoPage = new PersonalInfoPage(this.page);
        //this.loginPage = new LoginPage(this.page)
    }

    public async setPersonalInfo(firstName: string, lastName: string,date:string,month:string,year:string,gender:string) {
       

        await this.personalInfoPage.setFirstName(firstName);
        await this.personalInfoPage.setLastName(lastName);
        await this.personalInfoPage.setDateOfBirth(date,month,year);
        await this.personalInfoPage.setGender(gender);
        await this.personalInfoPage.clickPersonalInfoNext();


    }




}
