import { test, expect } from '@playwright/test';

// Request context is reused by all tests in the file.
let apiContext;
var accesstoken = "";

test.beforeAll(async ({ playwright }) => {

  // Load the JSON data from the file
  const data2 = require('../LoginAuth.json');
  let counter = 0;
  // Reset counter for the next loop
  counter = 0;

  // Loop through origins
  for (const origin of data2.origins) {
    counter++;
    console.log('Origin:', origin.origin);

    // Loop through localStorage for each origin
    for (const localStorageItem of origin.localStorage) {
      counter++;
      // console.log('Local Storage Name:', localStorageItem.name);
      // console.log('Local Storage Value:', localStorageItem.value);
      // Print other localStorage properties...

      // Check if it's the sixth element
      if (counter === 7) {
        console.log('Position Six found in localStorage:', localStorageItem.name);
        console.log('Position Six found in localStorage:', localStorageItem.value);
        accesstoken = localStorageItem.value;
      }
    }

    // Print other origin properties...

    // Check if it's the sixth element
    if (counter === 6) {
      console.log('Position Six found in origins:', origin);
    }
  }

  console.log('global variable', accesstoken);





  apiContext = await playwright.request.newContext({
    // All requests we send go to this API endpoint.
    baseURL: 'https://3a4avkn27vc2fmtminnljjj2pm.appsync-api.us-west-2.amazonaws.com/',
    extraHTTPHeaders: {
      // We set this header per GitHub guidelines.
      //'Accept': 'application/vnd.github.v3+json',
      // Add authorization token to all requests.
      // Assuming personal access token available in the environment.
      'Authorization': accesstoken,
    },
  });
});

test.afterAll(async ({ }) => {
  // Dispose all responses.
  await apiContext.dispose();
});


const data = {
  "query": "mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {\n  createJob(input: $input, condition: $condition) {\n    id\n    experience\n    jobRegion\n    questions\n    currency\n    stages\n    managerInCharge\n    country\n    isRemoteJob\n    deleted\n    minSalaray\n    jobType\n    maxSalary\n    handlers\n    description\n    title\n    isSalaryNegotiable\n    companyId\n    defaultSkillTestId\n    companyHandler\n    company {\n      id\n      ownerId\n      companyName\n      companyEmail\n      currentStage\n      website\n      size\n      companyHandler\n      industry\n      address\n      country\n      approved\n      active\n      deleted\n      phone\n      handlers\n      members {\n        nextToken\n      }\n      owner {\n        id\n        firstName\n        lastName\n        handlers\n        email\n        role\n        companyId\n        accountActivated\n        active\n        avatar\n        createdAt\n        updatedAt\n      }\n      steps\n      logo\n      createdAt\n      updatedAt\n    }\n    candidates {\n      items {\n        id\n        companyId\n        jobId\n        managerInCharge\n        stage\n        mobile\n        cv\n        handlers\n        lastName\n        firstName\n        answers\n        email\n        candidateTests\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n    published\n    createdAt\n    updatedAt\n  }\n}\n",
  "variables": {
    "input": {
      "experience": "4",
      "jobRegion": "{\"country\":\"USA\",\"zip\":\"222\"}",
      "currency": "USD",
      "stages": "[{\"order\":1,\"stage\":\"Inbox\",\"key\":\"Inbox\"},{\"order\":2,\"stage\":\"Screening\",\"key\":\"Screening\"},{\"order\":3,\"stage\":\"Interview\",\"key\":\"Interview\"},{\"order\":4,\"stage\":\"Offer\",\"key\":\"Offer\"},{\"order\":5,\"stage\":\"Hired\",\"key\":\"Hired\"},{\"order\":6,\"stage\":\"Rejected\",\"key\":\"Rejected\"}]",
      "managerInCharge": "3c8c9825-8171-4d9f-a48e-c794a6ef09c0",
      "isRemoteJob": false,
      "deleted": false,
      "minSalaray": "1000",
      "maxSalary": "5000",
      "jobType": "part-time",
      "description": "<p>ddd</p>",
      "title": "api80006",
      "defaultSkillTestId": [

      ],
      "isSalaryNegotiable": false,
      "companyId": "04fd9c94-d69b-47d5-84cb-9eefc04b80f8",
      "companyHandler": "btzv69kv9w6am1-awya457kw2cgbp1",
      "published": true,
      "handlers": [
        "04fd9c94-d69b-47d5-84cb-9eefc04b80f8adminON_TRIAL",
        "04fd9c94-d69b-47d5-84cb-9eefc04b80f8managerON_TRIAL",
        "04fd9c94-d69b-47d5-84cb-9eefc04b80f8adminON_SUBSCRIPTION",
        "04fd9c94-d69b-47d5-84cb-9eefc04b80f8managerON_SUBSCRIPTION"
      ]
    }
  }
}

//  test('postman create', async({request})=>{

//     const newRecord = await request.post('graphql',{data})
//     expect.soft(newRecord.status()).toEqual(200);
//     expect.soft(newRecord.statusText()).toEqual("Created");
//     expect.soft(await newRecord.json()).toEqual(data);

//     await page.goto(`https://github.com/${USER}/${REPO}/issues`);
//     const firstIssue = page.locator(`a[data-hovercard-type='issue']`).first();
//     await expect(firstIssue).toHaveText('[Feature] request 1');

// });

test('last created issue should be first in the list', async ({ page }) => {
  const newRecord = await apiContext.post('graphql', { data })
  expect.soft(newRecord.status()).toEqual(200);
  expect.soft(newRecord.statusText()).toEqual("Created");
  expect.soft(await newRecord.json()).toEqual(data);

  await page.goto('https://next.d15wzopw9io6a0.amplifyapp.com/jobs/');
  await page.pause();
  //await page.goto(`https://github.com/${USER}/${REPO}/issues`);
  await page.locator(`//span[normalize-space()="api80006"]`).click();
  await page.getByRole('link', { name: 'Edit', exact: true }).click();

  
});