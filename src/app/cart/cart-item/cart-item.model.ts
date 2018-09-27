import {Cart} from './cart-item.interface';
import {Product} from '../../products/product/product.interface';
export class CartItem implements Cart {

    constructor(public product: Product, public quantity: number) {
    }

}
