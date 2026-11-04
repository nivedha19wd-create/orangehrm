import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';
import {Adminpage} from '../pages/admin';

type LoginFixtures = {
  loginPage: LoginPage;
  Admin:Adminpage
};

export const test = base.extend<LoginFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));

  },
  Admin:async ({ page }, use) => {
    await use(new Adminpage(page));
}});

export { expect };