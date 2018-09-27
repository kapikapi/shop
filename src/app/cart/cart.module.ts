import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CartItemComponent} from './cart-item/cart-item.component';
import {CartComponent} from './cart.component';


@NgModule({
    declarations: [
        CartItemComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    exports: [CartComponent],
    providers: []
})
export class CartModule {
}

