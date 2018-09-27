import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Cart} from './cart-item.interface';


@Component({
    selector: 'cart-item',
    templateUrl: './cart-item.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
    @Input() cartItem: Cart;
    @Output() quantityChanged: EventEmitter<Cart> = new EventEmitter<Cart>();

    notifyParent(): void {
        this.quantityChanged.emit(this.cartItem);
    }
}
