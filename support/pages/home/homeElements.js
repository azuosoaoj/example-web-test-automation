export class HomeElements {
  constructor(page) {
    this.page = page
  }

  searchIcon() {
    return this.page.locator('div.ast-search-icon a.slide-search.astra-search-icon');
  }

  inputSearchBox() {
    return this.page.locator('#search-field');
  }
}
