import { expect, Page } from "@playwright/test";

export default class CompleteProfilePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
        
        phoneNumberClick = () => this.page.getByPlaceholder('Your phone number');
        phoneNumberFill = () => this.page.getByPlaceholder('Your phone number');

        selectCountryOpen = () => this.page.getByLabel('Open')
        selectCountryFill = () => this.page.getByPlaceholder('Select your country');
        
        
        selectCityOpen = () => this.page.locator('.css-10w2b80-Rd');
        selectCityFill = () => this.page.locator('#react-select-3-input');
        
        
        aboutYouClick = () => this.page.getByPlaceholder('Write few sentences about you');
        aboutYouFill = () => this.page.getByPlaceholder('Write few sentences about you');
        
        completeProfileNextButton = () => this.page.getByRole('button', { name: 'Complete' });
        
       

    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async clickCompleteProfileNextButton() {        
        await this.completeProfileNextButton().click();
        await this.page.waitForTimeout(3500);
    }
    public async setPhoneNumber(phoneNumber:string) {        
        await this.phoneNumberClick().click();
        await this.phoneNumberFill().fill(phoneNumber);        
    }
    public async setCountry(country:string) {        
        await this.selectCountryOpen().click();
        await this.selectCountryFill().fill(country);
        await this.page.getByRole('option', { name: country }).click();        
    }
    public async setCity(city:string) {        
        await this.selectCityOpen().click();
        await this.selectCityFill().fill(city);
        await this.page.getByText(city, { exact: true }).click({ timeout: 2000 });        
    }
    public async setAboutYou(aboutYou:string) {        
        await this.aboutYouClick().click();
        await this.aboutYouFill().fill(aboutYou);
              
    }
    
    



}
