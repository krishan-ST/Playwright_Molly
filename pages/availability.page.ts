import { expect, Page } from "@playwright/test";

export default class AvailabilityPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators
        monday = () => this.page.getByRole('row', { name: 'Monday' }).getByRole('checkbox');
        tuesday = () => this.page.getByRole('row', { name: 'Tuesday' }).getByRole('checkbox');
        wednesday = () => this.page.getByRole('row', { name: 'Wednesday' }).getByRole('checkbox');
        availabilityNextButton = () => this.page.getByRole('button', { name: 'Next' }); 

    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async clickAvailabilityNextButton() {
        
        await this.availabilityNextButton().click();
        await this.page.waitForTimeout(4000);
    }
    public async setMonday(time:number) {
        
        await this.monday().nth(time).check()        
    }    
    public async setTuesday(time:number) {
        
        await this.tuesday().nth(time).check()        
    }
    public async setWednesday(time:number) {
        
        await this.wednesday().nth(time).check()        
    }
    
    



}
