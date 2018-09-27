import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Product} from '../products/product/product.interface';

@Injectable()
export class CartProductCommunicatorService {
    private channel = new Subject<Product>();

    public channel$ = this.channel.asObservable();

    publishData(data: Product) {
        this.channel.next(data);
    }
}
