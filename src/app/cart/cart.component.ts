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
    sortingFields = ['price', 'name', 'quantity'];
    selectedSortingField: string;
    isSortingAsc = false;

    constructor(private cartService: CartService) {
    }

    ngOnInit() {
        this.selectedSortingField = this.sortingFields[0];
        this.cartService.cartItemList.subscribe(list => {
            this.cartItemsList = list;
            this.totalPrice = this.cartService.getTotalPrice();
            this.totalNumberChanged.emit();
        });
    }

    onQuantityChanged(): void {
        this.cartService.cartItemList.next(this.cartItemsList);
    }

    onItemRemoved(cartItem: Cart): void {
        this.cartService.removeFromCart(cartItem);
    }

    onSubmitCart(): void {
        this.cartService.cartItemList.next(List());
    }

}
