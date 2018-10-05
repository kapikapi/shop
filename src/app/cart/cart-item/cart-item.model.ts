import {Cart} from './cart-item.interface';
import {Product} from '../../products/product/product.interface';
export class CartItem implements Cart {
    price: number;
    name: string;

    constructor(public product: Product, public quantity: number) {
        this.price = product.price * quantity;
        this.name = product.name;
    }

}
