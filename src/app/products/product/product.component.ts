import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from './product.interface';
import {Router} from '@angular/router';
@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
    @Input() productItem: Product;
    @Output() addToCartNotify: EventEmitter<Product> = new EventEmitter<Product>();
    @Output() showDetailsNotify: EventEmitter<string> = new EventEmitter<string>();

    notifyParent(): void {
        this.addToCartNotify.emit(this.productItem);
    }

    onShowDetails(): void {
        this.showDetailsNotify.emit(this.productItem.name);
    }
}
