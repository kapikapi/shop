import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {List, Map} from 'immutable';
import {ProductsService} from './products.service';
import {CartProductCommunicatorService} from '../common/cart-product-communicator.service';
import {Product} from './product/product.interface';
import {Router} from '@angular/router';

@Component({
    selector: 'product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnInit {
    @Output() updateCartCount: EventEmitter<any> = new EventEmitter<any>();
    productsList: Promise<List<Product>>;

    constructor(private router: Router,
                private productsService: ProductsService,
                private communicatorService: CartProductCommunicatorService) {}

    ngOnInit() {
        this.productsList = this.productsService.getProducts();
    }

    onShowDetails(productName: string): void {
        const link = ['/details', productName];
        this.router.navigate(link);
    }

    onAddToCart(product: Product): void {
        // attempt to communicate with siblings
        this.communicatorService.publishData(product);
        this.updateCartCount.emit();
    }
}
