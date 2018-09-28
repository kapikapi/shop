import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CartItemComponent} from './cart-item/cart-item.component';
import {CartComponent} from './cart.component';
import {SharedModule} from '../common/shared/shared.module';


@NgModule({
    declarations: [
        CartItemComponent,
        CartComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule
    ],
    exports: [CartComponent],
    providers: []
})
export class CartModule {
}

