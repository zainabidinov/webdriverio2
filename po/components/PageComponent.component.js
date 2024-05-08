class PageComponent {
  static gitCommands = `
  git config --global user.name  "New Sheriff in Town"
  git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
  git push origin master --force`;

  get headerButton() {
    return $("a.header__btn");
  }

  get pasteTextArea() {
    return $("textarea#postform-text");
  }

  get expirationDropdown() {
    return $("#select2-postform-expiration-container");
  }

  get textHighlightingDropdown() {
    return $("span#select2-postform-format-container");
  }

  async setGitCommands() {
    await this.pasteTextArea.setValue(PageComponent.gitCommands);
  }

  get nameInput() {
    return $("input#postform-name");
  }

  get createButton() {
    return $("button.btn.-big");
  }
}

module.exports = PageComponent;
