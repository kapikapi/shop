import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {CartService} from './cart/cart.service';
import {CoreModule} from './common/core/core.module';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [
        AppComponent,
        ContactUsComponent,
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        ProductsModule,
        CartModule,
        CoreModule,
        AppRoutingModule
    ],
    providers: [CartService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
