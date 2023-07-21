import { test, expect } from '@playwright/test';

test('drop test', async ({ page }) => {
      // Navigate to the URL
      await page.goto('https://letcode.in/dropable', { waitUntil: 'domcontentloaded' });

      // Wait for the draggable and droppable elements to be present
      const draggableElement = page.locator('#draggable');
      const droppableElement = page.locator('#droppable');
      await page.pause();
      // Get the bounding boxes of the elements
      const draggableBoundingBox = await draggableElement.boundingBox();
      const droppableBoundingBox = await droppableElement.boundingBox();

      // Drag and drop the draggable element to the droppable element
      await page.mouse.move(draggableBoundingBox.x + draggableBoundingBox.width / 2, draggableBoundingBox.y + draggableBoundingBox.height / 2);
      await page.mouse.down();
      await page.mouse.move(droppableBoundingBox.x + droppableBoundingBox.width / 2, droppableBoundingBox.y + droppableBoundingBox.height / 2);
      await page.mouse.up();

      // Wait for a while to see the result (you can remove this if not needed)
      await page.waitForTimeout(2000);

      // Check if the drop was successful by verifying the text in the droppable element using expect
      const droppableText = await droppableElement.innerText();
      console.log(droppableText);
      expect(droppableText).toBe("Dropped!");
      console.log('Drop was successful!');
      await page.close();
});