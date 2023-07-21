import { test, expect } from '@playwright/test';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

test('test', async ({ page, context }) => {
    const randomNumber = getRandomNumber(1, 100588);
    console.log(randomNumber);
    const jobName = 'Dev'+randomNumber;
    console.log(jobName);
   
    
  await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/');
  // await page.pause()
  
  // await page.getByLabel('Email').click();
  // await page.getByLabel('Email').fill('udari+31@smashtaps.com');
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').click();
  // await page.getByLabel('Password').fill('Smash@123');
  // await page.getByRole('button', { name: 'loading Log In' }).click();


await page.locator(`//span[normalize-space()="Dev19721"]`).click();


await page.getByRole('link', { name: 'Edit', exact: true }).click();


const jT =   await page.locator(`//input[@id='basic_title']`).inputValue();
console.log(jT);
const des = await page.locator(`//input[@id='basic_title']`).text
console.log(des);
const country =  await page.getByText('United Arab Emirates (the)').textContent();
console.log(country);

//await expect.soft(page.locator(`//input[@id='basic_title']`)).toHaveValue("samarakoon");
//await expect.soft(page.getByText('United Arab Emirates (the)')).toHaveText("United States of America (the)");
//await page.pause()

//await expect.soft( page.getByPlaceholder('Region, City or Zip code')).toHaveValue("samarakoon");
//await expect.soft(page.getByLabel('This will be a remote job')).isChecked;
// await expect.soft(page.locator('div').filter({ hasText: /^Part-time$/ }).nth(4)).toHaveValue("samarakoon");
// await expect.soft(page.getByTitle('4')).toHaveText("samare");
// await expect.soft(page.getByPlaceholder('From')).toHaveValue("222222");
// await expect.soft(page.getByPlaceholder('To')).toHaveValue("222222222");

// await page.getByLabel('Salary is negotiable').check();
// await page.getByLabel('Salary is negotiable').uncheck();

 await page.pause();

// await expect.soft(page.getByLabel('Salary is negotiable').isChecked()).toBeTruthy();
// await expect.soft(page.getByLabel('Salary is negotiable').isChecked()).toBeFalsy();
// await expect.soft(page.getByLabel('Salary is negotiable')).toBeChecked();

//////////////////////--- edit ---//////////////////
await page.getByText('United Arab Emirates (the)').click();
await page.getByText('Ukraine').click();
//await page.getByPlaceholder('Region, City or Zip code').click();
await page.getByPlaceholder('Region, City or Zip code').fill('30555');
await page.getByText('Part-time').click();
await page.getByText('Contract', { exact: true }).click();


////////////////////////////////////////////////////

await page.getByRole('button', { name: 'Next' }).click();
//await page.pause();

//await expect.soft(page.getByText('Q2')).toHaveValue("namaste");
//await expect.soft(page.getByText('Q1')).toHaveValue("namaste");


await page.getByRole('button', { name: 'Next' }).click();

await page.pause();
///////////////////////////////////////////////

await page.locator('div:nth-child(7) > div:nth-child(2) > div > div > div > div > .anticon > svg').click();
await page.getByRole('button', { name: 'plus Add Stage' }).click();
await page.locator('#stages_5').click();
await page.locator('#stages_5').fill('hold for sl');

/////////////////////////////////////////////////////////////

// await expect.soft(page.locator('#stages_0')).toHaveValue("namaste");
// await expect.soft(page.locator('#stages_1')).toHaveValue("namaste");
// await expect.soft(page.locator('.ant-input-affix-wrapper').first()).toHaveValue("namaste");
// await expect.soft(page.locator('#stages_2')).toHaveValue("namaste");
// await expect.soft(page.locator('#stages_3')).toHaveValue("namaste");
// await expect.soft(page.locator('#stages_4')).toHaveValue("namaste");
// await expect.soft(page.locator('#stages_5')).toHaveValue("namaste");

await page.getByRole('button', { name: 'Next' }).click();
await page.pause();

await page.getByText('Sheldon Cooper (admin)').click();
await page.getByRole('button', { name: 'Save' }).click();
await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/d978edee-e619-4835-b383-53ee3a1468ac');
await page.pause();









});