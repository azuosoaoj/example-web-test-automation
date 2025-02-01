import { test } from '@playwright/test';
import { allure } from "allure-playwright"
import { HomePage } from '../support/pages/home/homePage'
import { SearchPage } from '../support/pages/search/searchPage'

// Test for valid search results
test('Given that I am on the homepage, when I search for "Drex" and press Enter, then I should see the results related to "Drex" @searchResults', async ({ page }) => {
  try {
    let home = new HomePage(page)
    let search = new SearchPage(page)

    allure.description('Verify that search results for Drex are displayed correctly');
    allure.label('searchTerm', 'Drex');

    await home.go()
    await home.searchItem('Drex')
    await search.verifySearch('Drex')  

  } catch (e) {
    console.error(e);
    throw e
  }
});

// Test for no results found for a search
test('Given that I am on the homepage, when I search for "NonExistentItem" and press Enter, then I should see no results @noResults', async ({ page }) => {
  try {
    let home = new HomePage(page)
    let search = new SearchPage(page)

    allure.description('Verify that no results are found for a non-existent item');
    allure.label('searchTerm', 'No results found');

    await home.go()
    await home.searchItem('No results found')
    await search.verifyNoResults('No results found')
  } catch (e) {
    console.error(e);
    throw e
  }
});
