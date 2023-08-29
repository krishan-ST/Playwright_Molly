import { test, expect } from '@playwright/test';

test('postman create', async ({ page,request }) => {
  const data = { method: 'POST' };
  const url = 'https://postman-echo.com/post'; // Replace this with your API endpoint
  //const url = 'https://reqres.in/api'; // Replace this with your API endpoint

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };

  // Make the API call using Playwright Request API
  const response = await page.waitForResponse(url, async () => {
    await page.route(url, (route) => {
      route.fulfill({
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    });

    await page.evaluate((url, requestOptions) => {
      fetch(url, requestOptions);
    }, url, requestOptions);
  });

  // Get the response data
  const responseData = await response.json();

  // Assertions using Playwright's expect
  expect(response.status()).toBe(200);
  expect(response.statusText()).toBe('OK');
  expect(responseData).toEqual(data);
});
