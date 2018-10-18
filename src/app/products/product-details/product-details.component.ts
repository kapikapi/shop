import {
    ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit,
    Output
} from '@angular/core';
import {ProductItem} from '../product/product.model';
import {ProductsService} from '../products.service';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Product} from '../product/product.interface';
import {CartService} from '../../cart/cart.service';
import {ProductFeedback} from '../product/feedback/product-feedback.interface';
import {ProductFeedbackItem} from '../product/feedback/product-feedback.model';

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
    styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
    product: Product;
    feedbackInputOpen = false;
    feedback = new ProductFeedbackItem();

    constructor(public productsService: ProductsService,
                private cdRef: ChangeDetectorRef,
                private route: ActivatedRoute,
                private router: Router,
                private cartService: CartService) {
    }

    ngOnInit(): void {
        this.product = new ProductItem();
        this.route.paramMap
            .pipe(
                switchMap((params: Params) =>
                    this.productsService.getProduct(params.get('productName'))
                )
            )
            .subscribe(product => {
                this.product = {...product};
                this.cdRef.detectChanges();
            }, err => console.log(err));
    }

    onAddToCart(): void {
        this.cartService.addToCart(this.product);
    }

    onSendFeedback(author: string, text: string): void {
        const feedback = new ProductFeedbackItem(author, text);
        this.product.feedback.push(feedback);
        this.feedbackInputOpen = false;
        // TODO: send feedback to server
    }

    onToggleFeedback(): void {
        this.feedbackInputOpen = !this.feedbackInputOpen;
    }

    onGoBack(): void {
        this.router.navigate(['/home']);
    }
}
