import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CartService} from './cart/cart.service';
import {CoreModule} from './common/core/core.module';
import {ContactUsComponent} from './contact-us/contact-us.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        ProductsModule,
        CartModule,
        CoreModule
    ],
    providers: [CartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
