import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product.interface';
@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
    @Input() productItem: Product;
    @Output() addToCartNotify: EventEmitter<Product> = new EventEmitter<Product>();

    notifyParent(): void {
        this.addToCartNotify.emit(this.productItem);
    }
}
