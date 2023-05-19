import {test, expect } from '@playwright/test'


//putting tests inside describe block. Hooks inside this block will only work within this group. 
test.describe('All Tests', ()=>{

//beforeEach hook: will run before each test in this file.
test.beforeEach( async({page}) => {

    await page.goto('https://www.saucedemo.com/')
    
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
  
})
//afterAll hook: will run after all tests
test.afterAll(async({page})=> {
    await page.close();
})

test('home page @smoke', async({page})=>{

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
 
})


test('logout test', async({page})=>{

    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();

})
    
})