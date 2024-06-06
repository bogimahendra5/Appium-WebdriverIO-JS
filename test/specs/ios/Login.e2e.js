import tabBarMenuPage from "../../screenPages/ios/tabBarMenuPage.js";
import menuPage from "../../screenPages/ios/menuPage.js";
import loginPage from "../../screenPages/ios/loginPage.js";

describe("Login Scenario", async () => {
  beforeEach(async () => {
    await tabBarMenuPage.Menu.click();
    await menuPage.loginMenu.click();
  });

  it("Login Failed Username", async () => {
    await loginPage.loginStep("bobocu@example.com", "10203040");
    await expect(loginPage.errorMessage).toBeDisplayed();
  });

  it("Login Failed Password", async () => {
    await loginPage.loginStep("bob@example.com", "10203050");
    await expect(loginPage.errorMessage).toBeDisplayed();
  });

  // it("Login Success", async () => {
  //   await loginPage.loginStep("bob@example.com", "10203040");
  //   await expect(productPage.productTittle).toBeDisplayed();
  //   await expect(productPage.productCard).toBeDisplayed();
  // });
});
