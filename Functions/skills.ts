import { expect, Page } from "@playwright/test";
import SkillsPage from "../pages/skills.page";

export default class SDG{
    page: Page;
    skillsPage: SkillsPage;

    constructor(page: Page) {
        this.page = page;        
        this.skillsPage = new SkillsPage(this.page);
        
    }

    public async setSkills(skillOne: string) {     

        await this.skillsPage.setSkills(skillOne);

    }




}
