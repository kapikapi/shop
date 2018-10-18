import {ProductFeedback} from './product-feedback.interface';

export class ProductFeedbackItem implements ProductFeedback {
    constructor(public author = '',
                public text = '',
                public date?: Date) {
        this.date = date || new Date();
    }
}
