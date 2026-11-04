import { type Locator, type Page } from '@playwright/test';
import testdata from '../testdata/testdata.json'
export class Adminpage {
     readonly page: Page;
   readonly Admin : Locator;
 readonly username: Locator;
 readonly search: Locator;
 readonly record : Locator;
 constructor(page: Page) {
    this.page = page;
    this.Admin = page.locator("//a[contains(@href, 'viewAdminModule')]");
    this.username= page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input');
this.search=page.getByRole('button',{name: 'Search' });
this.record=page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span');
}
async systemusers(): Promise<void> {
    this.Admin.click();
    this.username.fill(testdata.validuser.username);
this.search.click();
this.record.tobevisible();

}}