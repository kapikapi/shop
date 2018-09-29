import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List} from 'immutable';
import {CartService} from './cart.service';
import {Cart} from './cart-item/cart-item.interface';

@Component({
    selector: 'cart-list',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    @Output() totalNumberChanged: EventEmitter<number> = new EventEmitter<number>();
    cartItemsList: List<Cart>;
    totalPrice = 0;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.cartService.cartItemList.subscribe(list => {
            this.cartItemsList = list;
            this.totalPrice = this.cartService.updateSum(list);
            this.cartService.updateTotalNumber(list);
            this.totalNumberChanged.emit();
        });
    }

    onQuantityChanged(): void {
        this.cartService.cartItemList.next(this.cartItemsList);
    }

    onItemRemoved(cartItem: Cart): void {
        this.cartService.removeFromCart(cartItem);
    }

}
