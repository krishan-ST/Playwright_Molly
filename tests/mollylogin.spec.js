import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/login';

test ('test', async ({page}) =>{

    const Login = new LoginPage(page)

    await Login.goto();
    await page.pause();
    await Login.loginMethod('udari+31@smashtaps.com','Smash@123');


})
