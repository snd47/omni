const BasicSelectors = require("./basicSelectors.js");

class LoginSelectors extends BasicSelectors {
    constructor (props) {
      super(props);
      this.userName = "[type='email']";
      this.userPassWord = "[type='password']";
      this.signIn = ".v-btn__content";
      this.wrongCredentialsMessage = ".v-messages__message";
    }
}
module.exports = LoginSelectors;