import {Injectable} from '@angular/core';
import {List} from 'immutable';
import {Product} from './product/product.interface';
import {ProductItem} from './product/product.model';
import {ProductFeedbackItem} from './product/feedback/product-feedback.model';

@Injectable()
export class ProductsService {

    getProducts(): Promise<List<Product>> {
        return new Promise<List<Product>>(resolve => {
            resolve(List([
                new ProductItem('Shark', 100, true, 'best price',
                    [new ProductFeedbackItem('Anna', 'Such an awesome shark!', new Date(2018, 10, 13))]),
                new ProductItem('Tiger', 180, true),
                new ProductItem('Panda', 300, false),
                new ProductItem('Dolphin', 99, false, 'best price'),
                new ProductItem('Cat', 200, false, 'will be available soon'),
                new ProductItem('Dog', 150, true)
            ]));
        });
    }

    getProduct(name: string): Promise<Product> {
        return this.getProducts()
            .then(products => products.find(product => product.name === name))
            .catch(() => Promise.reject('Error in getTask method'));
    }
}
