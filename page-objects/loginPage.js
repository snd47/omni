const LoginSelectors = require("./loginSelectors");

exports.LoginPage = class LoginPage extends LoginSelectors {   
    async login(email, password) {
      await this.page.locator(this.userName).fill(email);
      await this.page.locator(this.userPassWord).fill(password);
      await this.page.locator(this.signIn).click();
    }

    getwrongCredentialsMessage() {
        return this.page.locator(this.wrongCredentialsMessage);
      }
}
