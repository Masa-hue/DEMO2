const { By } = require('selenium-webdriver');

class ProductsPage {
    constructor(driver) {
        this.driver = driver;
        this.productItems = By.className('inventory_item');
        this.addToCartButtons = By.className('btn_inventory');
        this.cartBadge = By.className('shopping_cart_badge');
        this.cartIcon = By.className('shopping_cart_link');
        this.checkoutButton = By.id('checkout');
    }

    async addToCart(productIndex) {
        const addToCartButtons = await this.driver.findElements(this.addToCartButtons);
        await addToCartButtons[productIndex].click();
    }

    async getCartBadgeText() {
        const badge = await this.driver.findElement(this.cartBadge);
        return await badge.getText();
    }

    async goToCart() {
        await this.driver.findElement(this.cartIcon).click();
    }

    async checkout() {
        await this.driver.findElement(this.checkoutButton).click();
    }
}

module.exports = ProductsPage;