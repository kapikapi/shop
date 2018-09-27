import {Product} from './product.interface';

export class ProductItem implements Product {

    constructor(public name: string,
                public price: number,
                public isAvailable: boolean,
                public additionalInformation?: string) {
        this.additionalInformation = additionalInformation || null;
    }
}