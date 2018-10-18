import {Product} from './product.interface';

export class ProductItem implements Product {

    constructor(public name = null,
                public price = 0,
                public isAvailable = false,
                public additionalInformation = null,
                public feedback = null) {
    }
}