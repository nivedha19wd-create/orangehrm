import { expect, test } from '../fixtures/fixture';
import testdata from '../testdata/testdata.json';


test('loginto orangehrm using the login page fixture', async ({ loginPage, page ,Admin}) => {

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
await Admin.systemusers();

});

