import { test, expect } from '@playwright/test';
import { timeout } from '../playwright.config';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

test('test @reg', async ({ page, context }) => {
    const randomNumber = getRandomNumber(1, 100588);
    console.log(randomNumber);
    const jobName = 'Dev'+randomNumber;
    console.log(jobName);  
    
await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/');
// await page.pause()
await page.locator(`//span[normalize-space()="Dev19721"]`).click();
await page.getByRole('link', { name: 'Edit', exact: true }).click();
//await page.pause();

});

test('test1 @smoke @reg', async ({ page, context}) => {
    const randomNumber = getRandomNumber(1, 100588);
    console.log(randomNumber);
    const jobName = 'Dev'+randomNumber;
    console.log(jobName);  
    
await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/');
//await page.pause()
await page.locator(`//span[normalize-space()="Dev19721"]`).click();
await page.getByRole('link', { name: 'Edit', exact: true }).click();
//await page.getByLabel('Salary is negotiable').check();
//await page.getByLabel('Salary is negotiable').uncheck();
///await page.waitForTimeout(15000);
await page.locator(`//input[@id='basic_isNegotiable']`).click();
await expect.soft(page.locator(`//input[@id='basic_isNegotiable']`).isChecked()).toBeTruthy();

//await page.pause();



await expect.soft(page.locator(`(//*[@class="ant-checkbox ant-checkbox-checked"])[1]`)).toBeVisible();
await expect.soft(page.locator(`(//*[@class="ant-checkbox ant-checkbox-checked"])[2]`)).toBeVisible();


await expect.soft(page.getByLabel('Salary is negotiable').isChecked()).toBeTruthy();
    expect.soft(page.getByLabel('Salary is negotiable').isChecked()).toBeFalsy();
    await expect.soft(page.getByLabel('Salary is negotiable')).toBeChecked();
await page.pause();

});
test('test2', async ({ page, context }) => {
    const randomNumber = getRandomNumber(1, 100588);
    console.log(randomNumber);
    const jobName = 'Dev'+randomNumber;
    console.log(jobName);  
    
await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/');
// await page.pause()
await page.locator(`//span[normalize-space()="Dev19721"]`).click();
await page.getByRole('link', { name: 'Edit', exact: true }).click();
//await page.pause();

});