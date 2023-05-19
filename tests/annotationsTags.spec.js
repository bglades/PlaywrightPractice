import {test, expect} from '@playwright/test'


 //skip anotation - will skip this test
test.skip('Skip Test', async({page}) => {

})

//fail annotation - will show failed regardless
test('Fail Test', async({page}) => {

    test.fail();
})

//fixme annotation - can mark it so you know it needs to be fixed. test will be aborted. 
test.fixme('Needs Fixed Test', async({page}) => {

})

//slow annotation - makrs the test as slow and triples the test timeout
test('Slow Test', async({page}) => {

    test.slow();
})

//only annotation - only runs the specific test. If you run this file, only this will run.
// test.only('Only This Test', async({page}) => {

// })