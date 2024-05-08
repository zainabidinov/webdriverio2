const PageComponent = require("../components/PageComponent.component");

class PasteBinPage {
  constructor() {
    this.page = new PageComponent();
  }

  async open() {
    await browser.url("https://pastebin.com");
  }
}

module.exports = PasteBinPage;
