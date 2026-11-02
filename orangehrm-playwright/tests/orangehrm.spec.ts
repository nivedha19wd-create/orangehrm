import { expect, test } from '../fixtures/fixture';
import testdata from '../testdata/testdata.json';


test('loginto orangehrm using the login page fixture', async ({ loginPage, page }) => {

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');
await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index'); 
  await expect( page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await page.getByRole('link', { name: 'Admin', exact: true }).click();
  await expect(page).toHaveURL(/admin\/viewSystemUsers/);;
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();
  await page.locator('.oxd-input oxd-input--active').fill(testdata.validuser.username);
});

