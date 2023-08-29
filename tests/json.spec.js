import { test, expect } from '@playwright/test';

var accesstoken = "";

test('Access JSON File', async ({}) => {
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

});