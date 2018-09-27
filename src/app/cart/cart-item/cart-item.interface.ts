import {Product} from '../../products/product/product.interface';
export interface Cart {
    product: Product;
    quantity: number;
}