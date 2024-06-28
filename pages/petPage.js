export class PetPage {
    constructor(page){
        this.page = page;
        this.locatorFish = page.locator('#SidebarContent a[href*="categoryId=FISH"]');
        this.locatorProduct= page.locator('a[href*="productId=FI-SW-01"]');
    }

    
    async goto() {
    await this.page.goto('https://petstore.octoperf.com/actions/Catalog.action');
    }

    async selectionFish(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.locatorFish.click(),
            ]);       
     }

     async selectionProduct(){
        await Promise.all([
            this.page.waitForNavigation(),
            this.locatorProduct.click(),
        ]);   
     }

}

