import { type Page, Locator, expect, ElementHandle } from '@playwright/test'

export class InventoryComponent {
    //==================================Locators===================
    readonly page: Page;
    readonly inventoryItem: Locator;
    readonly inventoryItemImg: Locator;

    //===================================Constructor================
    constructor(page: Page) {
        this.page = page;
        // this.inventoryItem = page.locator('.inventory_item');
        this.inventoryItemImg = page.locator('img[class="inventory_item_img"]');

    }
    //====================================Methods====================
    /**
   * The function `checkInventoryImagesLoaded` asynchronously verify Images are loaded on the main page
   */
    async checkInventoryImagesLoaded() {
        const images = await this.page.$$('img[class="inventory_item_img"]');
        for (const image of images) {
            const isVisible = await (image as ElementHandle).isVisible();
            expect(isVisible).toBe(true);
        }
    }
}