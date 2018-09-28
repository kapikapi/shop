import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CartProductCommunicatorService} from '../common/cart-product-communicator.service';
import {List} from 'immutable';
import {CartService} from './cart.service';
import {Subscription} from 'rxjs/Subscription';
import {Product} from '../products/product/product.interface';
import {Cart} from './cart-item/cart-item.interface';
import {CartItem} from './cart-item/cart-item.model';

@Component({
    selector: 'cart-list',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    providers: [CartService]
})
export class CartComponent implements OnInit {
    @Output() totalNumberChanged: EventEmitter<number> = new EventEmitter<number>();
    cartItemsList = List<Cart>();
    totalPrice = 0;
    private sub: Subscription;

    constructor(private communicatorService: CartProductCommunicatorService,
                private cartService: CartService) {
    }

    ngOnInit() {
        this.sub = this.communicatorService.channel$.subscribe((product: Product) => {
            const index = this.cartItemsList.findIndex((item) => item.product.name === product.name);
            if (index > -1) {
                this.cartItemsList = this.cartItemsList.update(index, (value: Cart) => {
                    if (value.quantity < 6) {
                        return new CartItem(product, value.quantity + 1);
                    } else {
                        return value;
                    }
                });
            } else {
                this.cartItemsList = this.cartItemsList.push(new CartItem(product, 1));
            }
            this.totalPrice = this.cartService.calculateSum(this.cartItemsList);
        });
    }

    onQuantityChanged(): void {
        this.totalPrice = this.cartService.calculateSum(this.cartItemsList);
        this.totalNumberChanged.emit(this.cartService.calculateTotalNumber(this.cartItemsList));
    }

}
