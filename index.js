//Create an object class for the product to store the properties for id, name and price of the product.
class Product{
    constructor(id, name, price){
        this.id = id,
        this.name = name,
        this.price = price
    }
}

//  Create an object class for the shopping cart item to store the properties for product and its quantity
class CartItem {
    constructor(product, quantity){
        this.product = product
        this.quantity = quantity
    }

    totalPriceOfItem(  ) {
        const product = new ShoppingCartItem().addItem(1, "apple", 790)
        let  productPrice = parseInt(product.price) * this.quantity
        return productPrice;
    }
}

// Create another object class for the shopping cart which contains an array of ShoppingCartItem instances.
class ShoppingCartItem {
    constructor() {
        this.items = [];
    }

    totalItem(){
        return this.items.length
    }

    addItem = (id, item, price)=>{
        const newProduct = new Product( id, item, price)
        this.items.push(newProduct);
        [...this.items, newProduct] 
         return newProduct;
    }

    displayItem(){
        return this.items.forEach(item =>{
             return item
        })
    }

    deleteItem(id){
        const filtered = this.items.filter( item =>item.id !== id)
        return filtered
    }
} 
