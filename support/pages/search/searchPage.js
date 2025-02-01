import { expect } from '@playwright/test'
import { SearchElements } from './searchElements.js'

export class SearchPage  {

  constructor(page) {
    this.page = page
    this.searchElements = new SearchElements(page)
  }

  async verifySearch(search) {
    await expect(this.searchElements.searchResultHeader()).toContainText('Drex');
    await expect(this.page).toHaveURL(`/?s=${search}`);
    const articlesCount = await this.searchElements.articles().count();  // Get the number of articles
    expect(articlesCount).toBeGreaterThan(0);
  }

  async verifyNoResults(search) {
    await expect(this.searchElements.searchResultHeader()).toContainText(search);
    await expect(this.searchElements.notFoundText()).toBeVisible();
  }
}