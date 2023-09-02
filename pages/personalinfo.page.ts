import { expect, Page } from "@playwright/test";

export default class PersonalInfoPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
    emailClick = () => this.page.getByPlaceholder('Enter your email address');

    firstNameClick = () => this.page.getByPlaceholder('Enter your first name');
    firstNameFill = () => this.page.getByPlaceholder('Enter your first name');
    lastNameClick = () => this.page.getByPlaceholder('Enter your last name');
    lastNameFill = () => this.page.getByPlaceholder('Enter your last name');
    dateClick = () => this.page.getByPlaceholder('DD');
    dateFill = () => this.page.getByPlaceholder('DD');
    monthClick = () => this.page.getByPlaceholder('MM');
    monthFill = () => this.page.getByPlaceholder('MM');
    yearClick = () => this.page.getByPlaceholder('YYYY');
    yearFill = () => this.page.getByPlaceholder('YYYY');
    genderClick = () => this.page.locator('label').filter({ hasText: 'girl/woman' }).getByLabel('controlled');
    personalInfoNext = () => this.page.getByRole('button', { name: 'Next' });



    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async setFirstName(firstName: string) {

        await this.firstNameClick().click();
        await this.firstNameFill().fill(firstName);

    }

    public async setLastName(lastName: string) {

        await this.lastNameClick().click();
        await this.lastNameFill().fill(lastName);

    }
    public async setDateOfBirth(date: string, month: string, year: string) {

        await this.setDate(date);
        await this.setMonth(month);
        await this.setYear(year);


    }
    public async setDate(date: string) {

        await this.dateClick().click();
        await this.dateFill().fill(date);

    }

    public async setMonth(month: string) {

        await this.monthClick().click();
        await this.monthFill().fill(month);

    }
    public async setYear(year: string) {

        await this.yearClick().click();
        await this.yearFill().fill(year);

    }
    public async setGender(gender: string) {

        await this.genderClick().check();


    }
    public async clickPersonalInfoNext() {

        await this.personalInfoNext().click();
        await this.page.waitForTimeout(3400);


    }





}
