const ChatSelectors = require("./chatSelectors");

exports.ChatPage = class ChatPage extends ChatSelectors {   
    getLogoCompany() {
      return this.page.locator(this.logoCompany);
    }
}