const BasicSelectors = require("./basicSelectors.js");

class ChatSelectors extends BasicSelectors {
    constructor (props) {
      super(props);
      this.logoCompany = ".company-name";
    }
}
module.exports = ChatSelectors;