import { test, expect } from '@playwright/test';
import exp from 'constants';

const data = { 	method: 'POST'}
const completed =   {completed : true}

test('postman create', async({request})=>{

    const url = 'https://postman-echo.com/post';

    const newRecord = await request.post('post',{data})
    expect.soft(newRecord.status()).toEqual(200);
    expect.soft(newRecord.statusText()).toEqual("Created");
    expect.soft(await newRecord.json()).toEqual(data);

});







// test("Create an postman post", async({request,baseURL})=>{

//     const _response  = await request.post('${baseURL}',{

//         data:{            
//                 "method": "POST"            
//         }
//     });
//     expect(_response.status()).toBe(201);

// })