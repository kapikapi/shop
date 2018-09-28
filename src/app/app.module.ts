import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CartProductCommunicatorService} from './common/cart-product-communicator.service';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ProductsModule,
        CartModule
    ],
    providers: [CartProductCommunicatorService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
