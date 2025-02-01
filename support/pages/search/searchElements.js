export class SearchElements {
    constructor(page) {
      this.page = page
    }
  
    searchResultHeader() {
      return this.page.locator('h1.page-title.ast-archive-title');
    }

    articles() {
      return this.page.locator('.ast-row article')
    }
    
    notFoundText() {
      return this.page.locator('p', { hasText: 'Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.' });
    }
  }
  