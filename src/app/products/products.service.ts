import {Injectable} from '@angular/core';
import {List} from 'immutable';
import {Product} from './product/product.interface';
import {ProductItem} from './product/product.model';

@Injectable()
export class ProductsService {

    getProducts(): Promise<List<Product>> {
        return new Promise<List<Product>>(resolve => {
            resolve(List([
                new ProductItem('Shark', 100, true, 'best price'),
                new ProductItem('Tiger', 180, true),
                new ProductItem('Panda', 300, false),
                new ProductItem('Dolphin', 99, false, 'best price'),
                new ProductItem('Cat', 200, false, 'will be available soon'),
                new ProductItem('Dog', 150, true)
            ]));
        });
    }
}
