import { expect } from '@playwright/test'
import { HomeElements } from './homeElements.js'

export class HomePage  {

  constructor(page) {
    this.page = page
    this.homeElements = new HomeElements(page)
  }

  async go() {
    await this.page.goto('/')
  }

  async searchItem(productName) {
    await this.homeElements.searchIcon().click()
    await this.homeElements.inputSearchBox().fill(productName)
    await this.page.keyboard.press('Enter');
    await this.page.waitForLoadState('load')
  }
}