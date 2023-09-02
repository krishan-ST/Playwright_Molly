import { expect, Page } from "@playwright/test";

export default class LanguagePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Locators    

    english = () => this.page.getByRole('row', { name: 'English' }).getByRole('checkbox')
    sinhala = () => this.page.getByRole('row', { name: 'Sinhala delete' }).getByRole('checkbox');
    tamil = () => this.page.getByRole('row', { name: 'Tamil delete' }).getByRole('checkbox');
    languageNextButton = () => this.page.getByRole('button', { name: 'Next' });


    ////////////////
    // Getter for firstNameClick   
    // Setter for firstNameClick
    public async setSinhalaLanguage(sinhala:number) {

        await this.sinhala().nth(sinhala).check();

    }
    public async setEnglishLanguage(english:number) {

        await this.english().nth(english).check();
    }
    public async setTamilLanguage(tamil:number) {

        await this.tamil().nth(tamil).check();
    }
    public async clickLanguageNextButton() {

        await this.languageNextButton().click()
        await this.page.waitForTimeout(3400);

    }




}
