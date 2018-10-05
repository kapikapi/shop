import {Injectable} from '@angular/core';
import {List} from 'immutable';
import {Cart} from './cart-item/cart-item.interface';
import {CartItem} from './cart-item/cart-item.model';
import {Product} from '../products/product/product.interface';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subscription} from 'rxjs/Subscription';
import {CartProductCommunicatorService} from '../common/cart-product-communicator.service';

@Injectable()
export class CartService {
    cartItemList = new BehaviorSubject(List<Cart>());
    totalPrice = 0;
    totalNumber = 0;
    private sub: Subscription;

    constructor(private communicatorService: CartProductCommunicatorService) {
        this.sub = this.communicatorService.channel$.subscribe((product: Product) => {
            this.addToCart(product);
        });
        this.cartItemList.subscribe(list => {
            this.updateSum(list);
            this.updateTotalNumber(list);
        });
    }

    getTotalNumber(): number {
        return this.totalNumber;
    }

    getTotalPrice(): number {
        return this.totalPrice;
    }

    addToCart(product: Product): void {
        let currentCart = this.cartItemList.getValue();
        const index = currentCart.findIndex((item) => item.product.name === product.name);
        if (index > -1) {
            currentCart = currentCart.update(index, (value: Cart) => {
                if (value.quantity < 6) {
                    return new CartItem(product, value.quantity + 1);
                } else {
                    return value;
                }
            });
        } else {
            currentCart = currentCart.push(new CartItem(product, 1));
        }
        this.cartItemList.next(currentCart);
    }

    updateSum(cartItemsList: List<Cart>): number {
        let sum = 0;
        cartItemsList.forEach(item => {
           sum += item.product.price * item.quantity;
        });
        this.totalPrice = sum;
        return sum;
    }

    updateTotalNumber(cartItemsList: List<Cart>): number {
        let sum = 0;
        cartItemsList.forEach(item => {
            sum += item.quantity;
        });
        this.totalNumber = sum;
        return sum;
    }

    removeFromCart(cartItem: Cart): void {
        const currentCart = this.cartItemList.getValue();
        const index = currentCart.findIndex((item) => item.product.name === cartItem.product.name);
        this.cartItemList.next(currentCart.delete(index));
    }
}
