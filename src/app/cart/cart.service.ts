import {Injectable} from '@angular/core';
import {List} from 'immutable';
import {Cart} from './cart-item/cart-item.interface';
@Injectable()
export class CartService {

    calculateSum(cartItemsList: List<Cart>): number {
        let sum = 0;
        cartItemsList.forEach(item => {
           sum += item.product.price * item.quantity;
        });
        return sum;
    }

    calculateTotalNumber(cartItemsList: List<Cart>): number {
        let sum = 0;
        cartItemsList.forEach(item => {
            sum += item.quantity;
        });
        return sum;
    }
}
