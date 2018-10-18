import {ProductFeedback} from './feedback/product-feedback.interface';

export interface Product {
    name: string;
    price: number;
    isAvailable: boolean;
    additionalInformation?: string;
    feedback?: ProductFeedback[];
}
