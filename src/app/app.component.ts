import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {CartService} from './cart/cart.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle')
    private title: ElementRef;

    cartCount = 0;
    cartVisible = false;

    constructor(private cartService: CartService) {}

    ngAfterViewInit() {
        this.title.nativeElement.text = 'Super Shop';
    }

    onCartUpdate(): void {
        this.cartCount = this.cartService.getTotalNumber();
    }
}
