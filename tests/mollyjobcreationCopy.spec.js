import { test, expect } from '@playwright/test';

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

test('test', async ({ page, context }) => {
    const randomNumber = getRandomNumber(1, 100588);
    console.log(randomNumber);
    const jobName = 'Dev'+randomNumber;
    console.log(jobName);
   
    
  await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/signin/');
  await page.pause()
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('udari+31@smashtaps.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Smash@123');
  await page.getByRole('button', { name: 'loading Log In' }).click();
  //await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/');
  //await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/27305a6c-f895-4b1b-b512-8450a4f83368');
  await page.getByRole('link', { name: 'Add new job' }).click();
  await page.getByPlaceholder('ex: iOS Engineer').click();
  await page.getByPlaceholder('ex: iOS Engineer').fill(jobName);
  await page.getByRole('paragraph').click();
  await page.getByRole('paragraph').click();
  await page.locator('#basic_description div').nth(2).fill('ddddddddddddddddddddddddddddddddddd');
  await page.getByText('United States of America (the)').click();
  await page.getByText('United Arab Emirates (the)').click();
  await page.getByPlaceholder('Region, City or Zip code').click();
  await page.getByPlaceholder('Region, City or Zip code').fill('3055');
  await page.getByPlaceholder('Region, City or Zip code').dblclick();
  await page.locator('div:nth-child(2) > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-select > .ant-select-selector').first().click();
  await page.getByText('Part-time', { exact: true }).click();
  await page.locator('#basic div').filter({ hasText: /^Select$/ }).nth(4).click();
  await page.getByTitle('4').getByText('4').click();
  await page.getByPlaceholder('From').click();
  await page.getByPlaceholder('From').fill('500');
  await page.getByPlaceholder('To').click();
  await page.getByPlaceholder('To').fill('1000');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'plus Add question' }).click();
  await page.getByPlaceholder('Enter a question').click();
  await page.getByPlaceholder('Enter a question').fill('Q1');
  await page.getByRole('button', { name: 'plus Add question' }).click();
  await page.locator('#candidateQuestions_questions_1').click();
  await page.locator('#candidateQuestions_questions_1').fill('Q2');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'plus Add Stage' }).click();
  await page.locator('#stages_5').click();
  await page.locator('#stages_5').fill('new stage');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('div').filter({ hasText: /^Select$/ }).nth(4).click();
  await page.getByText('Sheldon Cooper (admin)').click();
  await page.locator('#assignManager').getByText('Sheldon Cooper (admin)').click();  
  await page.getByRole('button', { name: 'Save' }).click();

//////////////////////////////////////////////////////////////////



const newJobUrl = await page.$$eval('//a[contains(text(),"https://btzv69kv9w6am1-awya457kw2cgbp1.qa.mollyhq.")]', elements => {
  return elements.map(element => element.textContent);
});

console.log(newJobUrl); // Print the extracted values

// const linkLocator = await page.locator('//a[contains(text(),"https://btzv69kv9w6am1-awya457kw2cgbp1.qa.mollyhq.")]').textContent();
// console.log(linkLocator); // Print the extracted values







/////////////////////////////////////////////////////////////////////////////////////
 // Create a new page within the same context
 const page1 = await context.newPage();
 // Open the second page
 await page1.goto(newJobUrl.toString());

  
  //await page.getByRole('link', { name: 'https://btzv69kv9w6am1-awya457kw2cgbp1.qa.mollyhq.com/b310d562-b354-4e7e-b403-399733b46784' }).click();
  //await page1.goto('https://btzv69kv9w6am1-awya457kw2cgbp1.qa.mollyhq.com/050a898d-b2c4-4842-b864-3483ddba90f5');
  //await page1.goto('https://btzv69kv9w6am1-awya457kw2cgbp1.qa.mollyhq.com/050a898d-b2c4-4842-b864-3483ddba90f5/apply');
  //await page1.getByRole('link', { name: 'View job brief' }).click();
  await page1.getByRole('link', { name: 'Apply for this job' }).first().click();
  await page1.locator('#firstName').click();
  await page1.locator('#firstName').fill('carter');
  await page1.locator('#firstName').press('Tab');
  await page1.locator('#lastName').fill('mmm');
  await page1.locator('#lastName').press('Tab');
  await page1.locator('#email').fill('mm@gamil.com');
  await page1.locator('#email').press('Tab');
  await page1.locator('#mobile').fill('0774455889');
  //await page1.getByText('Attach resume').click();
  //await page1.getByText('Attach resume').click();

//    // Locate the file input element
//    const fileInput = await page1.$('input[type="file"]');
//      // Set the PDF file path
//   const filePath = 'C:/Users/krish/Downloads/dummy.pdf';

  //await page1.getByRole('button', { name: 'paper-clip Attach resume' }).first().setInputFiles(filePath);

  //await fileInput.setInputFiles(filePath);

////////////////

// Locate the file upload button
const fileUploadButton = await page1.$('.fileUpload_uploadBtn__24PYk');

// Click the file upload button to open the file selection dialog
//await fileUploadButton.click();

// Set the PDF file path
const filePath = 'C:/Users/krish/Downloads/dummy.pdf';
await page1.setInputFiles('input[type="file"]', filePath);





  
//////////////////////////  
  
  
  await page1.locator('#question0_id').click();
  await page1.locator('#question0_id').fill('ww');
  await page1.locator('#question1_id').click();
  await page1.locator('#question1_id').fill('www');
  await page1.getByRole('button', { name: 'Submit Application' }).click();
  

  // Get the list of open pages
const pages = await context.pages();
// Switch back to the first tab
await pages[0].bringToFront();
await page.pause()
//await pages[1].bringToFront();
//await page.pause()
// await pages[0].bringToFront();


await page.locator('//span[@class="AddNewJob_headerRight__3FxSe"]//*[name()="svg"]').click();
await page.pause()

// const linkLocator = await page.locator('//a[contains(text(),"https://btzv69kv9w6am1-awya457kw2cgbp1.qa.mollyhq.")]').textContent();
// console.log(linkLocator); // Print the extracted values
await page.locator(`//span[normalize-space()="${jobName}"]`).click();


await page.getByRole('link', { name: 'Edit', exact: true }).click();


const jT =   await page.locator(`//input[@id='basic_title']`).inputValue();
console.log(jT);
const des = await page.locator(`//input[@id='basic_title']`).text
console.log(des);
const country =  await page.getByText('United Arab Emirates (the)').textContent();
console.log(country);
//   await page.getByText('💼 Edit job1Job Details2Define Screening Questions3Manage Stages4Assign ManagerJ').click();
//   await page.getByPlaceholder('ex: iOS Engineer').click();
//   await page.getByPlaceholder('ex: iOS Engineer').click();
//   await page.getByPlaceholder('ex: iOS Engineer').click({
//     button: 'right'
//   });
//   await page.locator('#basic').getByText('United Arab Emirates (the)').click();
//   await page.getByPlaceholder('Region, City or Zip code').click();
//   await page.getByText('Part-time').click();
//   await page.getByPlaceholder('To').click();




await expect.soft(page.locator(`//input[@id='basic_title']`)).toHaveValue("samarakoon");
await expect.soft(page.getByText('United Arab Emirates (the)')).toHaveText("United States of America (the)");
await page.pause()















});