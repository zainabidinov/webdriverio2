const PasteBinPage = require("../../po/pages/pasteBin.page");
const pasteBinPage = new PasteBinPage();

describe("Test suite 2", () => {
  beforeEach(async () => {
    await pasteBinPage.open();
  });

  it("Webdriver Task 2", async () => {
    const pageComponent = pasteBinPage.page;
    await pageComponent.headerButton.click();
    await pageComponent.setGitCommands();

    await pageComponent.textHighlightingDropdown.click();
    await $("//li[contains(text(),'Bash')]").click();

    await pageComponent.expirationDropdown.click();
    await $(".select2-results__options li:nth-child(3)").click();

    await pageComponent.nameInput.setValue(
      "how to gain dominance among developers"
    );

    await pageComponent.createButton.click();
  });
});
