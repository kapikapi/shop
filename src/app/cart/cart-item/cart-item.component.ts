import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cart} from './cart-item.interface';


@Component({
    selector: 'cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
    @Input() cartItem: Cart;
    @Output() quantityChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() itemRemoved: EventEmitter<Cart> = new EventEmitter<Cart>();

    notifyParent(): void {
        this.quantityChanged.emit();
    }

    removeItem(): void {
        this.itemRemoved.emit(this.cartItem);
    }
}
