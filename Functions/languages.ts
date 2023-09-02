import { expect, Page } from "@playwright/test";
import LanguagePage from "../pages/languages.page";

export default class Causes{
    page: Page;
    languagePage: LanguagePage;

    constructor(page: Page) {
        this.page = page;        
        this.languagePage = new LanguagePage(this.page);
        
    }

    public async setLanguages(sinhala:number,english: number,tamil:number) {     

        await this.languagePage.setEnglishLanguage(sinhala);
        await this.languagePage.setSinhalaLanguage(english);
        await this.languagePage.setTamilLanguage(tamil);
        await this.languagePage.clickLanguageNextButton();

    }




}
