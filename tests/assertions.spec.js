import test,{page, expect} from '@playwright/test'

//to practice with assertions
test('assertion test', async ({ page }) => {
    await page.goto('https://kitchen.applitools.com/');
    //to pause execution and open inspector
    await page.pause()

    //check if element is present
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);
    // check if element is visible/hidden
    await expect(page.locator('text=The Kitchen')).toBeVisible()
    //check if disabled. This is false, but I don't want it to stop execution. Adding .soft does this. 
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()
    //check text
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')
    //check attribute value
    await expect(page.locator('text=The Kitchen')).toHaveAttribute('class', 'chakra-heading css-dpmy2a' )
    //to test url 
    await expect(page).toHaveURL('https://kitchen.applitools.com/')

    //visual validation with screenshot
    await expect(page).toHaveScreenshot()
})