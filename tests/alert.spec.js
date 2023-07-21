import { test, expect } from '@playwright/test';
import { timeout } from '../playwright.config';


test('test @reg', async ({ page, context }) => {

await page.goto('https://letcode.in/draggable');
await page.pause()

await page.getByRole('button', { name: 'Simple Alert' }).click();
//   page.once('dialog', dialog => {
//     console.log(`Dialog message: ${dialog.message()}`);
//     //dialog.dismiss().catch(() => {});
//   });
 // await page.pause()

  await page.getByRole('button', { name: 'Confirm Alert' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.pause()

  await page.getByRole('button', { name: 'Prompt Alert' }).click();
  await page.pause()
  await page.getByRole('button', { name: 'Modern Alert' }).click();
  await page.pause()
  await page.locator('.modal-content > .card > .card-content').click();
  await page.pause()
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.pause()
});


