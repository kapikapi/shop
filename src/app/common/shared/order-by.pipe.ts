import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../../products/product/product.interface';
import {List} from 'immutable';

@Pipe({name: 'orderByField'})
export class OrderByPipe implements PipeTransform {

    transform(value: List<Product>, field: string, isAsc = false): List<Product> {
        if (!value) {
            return null;
        }
        const order = isAsc ? 1 : -1;
        const result = value.sort((a, b) => {
            return order * a[field].toString().localeCompare(b[field].toString(), undefined, {numeric: true});
        });
        return List<Product>(result);
    }
}
