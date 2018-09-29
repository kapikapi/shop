import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List} from 'immutable';
import {ProductsService} from './products.service';
import {CartProductCommunicatorService} from '../common/cart-product-communicator.service';
import {Product} from './product/product.interface';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
    @Output() updateCartCount: EventEmitter<any> = new EventEmitter<any>();
    productsList: List<Product>;

    constructor(private productsService: ProductsService,
                private communicatorService: CartProductCommunicatorService) {}

    ngOnInit() {
        this.productsList = this.productsService.getProducts();
    }

    onAddToCart(product: Product): void {
        // attempt to communicate with siblings
        this.communicatorService.publishData(product);
        // this.updateCartCount.emit();
    }
}
