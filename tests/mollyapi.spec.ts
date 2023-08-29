import { test, expect } from '@playwright/test';
import exp from 'constants';

const data = {
    "query":"mutation CreateJob($input: CreateJobInput!, $condition: ModelJobConditionInput) {\n  createJob(input: $input, condition: $condition) {\n    id\n    experience\n    jobRegion\n    questions\n    currency\n    stages\n    managerInCharge\n    country\n    isRemoteJob\n    deleted\n    minSalaray\n    jobType\n    maxSalary\n    handlers\n    description\n    title\n    isSalaryNegotiable\n    companyId\n    defaultSkillTestId\n    companyHandler\n    company {\n      id\n      ownerId\n      companyName\n      companyEmail\n      currentStage\n      website\n      size\n      companyHandler\n      industry\n      address\n      country\n      approved\n      active\n      deleted\n      phone\n      handlers\n      members {\n        nextToken\n      }\n      owner {\n        id\n        firstName\n        lastName\n        handlers\n        email\n        role\n        companyId\n        accountActivated\n        active\n        avatar\n        createdAt\n        updatedAt\n      }\n      steps\n      logo\n      createdAt\n      updatedAt\n    }\n    candidates {\n      items {\n        id\n        companyId\n        jobId\n        managerInCharge\n        stage\n        mobile\n        cv\n        handlers\n        lastName\n        firstName\n        answers\n        email\n        candidateTests\n        createdAt\n        updatedAt\n      }\n      nextToken\n    }\n    published\n    createdAt\n    updatedAt\n  }\n}\n",
    "variables":{
       "input":{
          "experience":"4",
          "jobRegion":"{\"country\":\"USA\",\"zip\":\"222\"}",
          "currency":"USD",
          "stages":"[{\"order\":1,\"stage\":\"Inbox\",\"key\":\"Inbox\"},{\"order\":2,\"stage\":\"Screening\",\"key\":\"Screening\"},{\"order\":3,\"stage\":\"Interview\",\"key\":\"Interview\"},{\"order\":4,\"stage\":\"Offer\",\"key\":\"Offer\"},{\"order\":5,\"stage\":\"Hired\",\"key\":\"Hired\"},{\"order\":6,\"stage\":\"Rejected\",\"key\":\"Rejected\"}]",
          "managerInCharge":"3c8c9825-8171-4d9f-a48e-c794a6ef09c0",
          "isRemoteJob":false,
          "deleted":false,
          "minSalaray":"1000",
          "maxSalary":"5000",
          "jobType":"part-time",
          "description":"<p>ddd</p>",
          "title":"api80002",
          "defaultSkillTestId":[
             
          ],
          "isSalaryNegotiable":false,
          "companyId":"04fd9c94-d69b-47d5-84cb-9eefc04b80f8",
          "companyHandler":"btzv69kv9w6am1-awya457kw2cgbp1",
          "published":true,
          "handlers":[
             "04fd9c94-d69b-47d5-84cb-9eefc04b80f8adminON_TRIAL",
             "04fd9c94-d69b-47d5-84cb-9eefc04b80f8managerON_TRIAL",
             "04fd9c94-d69b-47d5-84cb-9eefc04b80f8adminON_SUBSCRIPTION",
             "04fd9c94-d69b-47d5-84cb-9eefc04b80f8managerON_SUBSCRIPTION"
          ]
       }
    }
 }
const completed =   {completed : true}

test('postman create', async({request})=>{

    const newRecord = await request.post('graphql',{data})
    expect.soft(newRecord.status()).toEqual(200);
    expect.soft(newRecord.statusText()).toEqual("Created");
    expect.soft(await newRecord.json()).toEqual(data);

});

