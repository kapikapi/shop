import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ProductListComponent} from './product-list.component';
import {ProductsService} from './products.service';
import {ProductComponent} from './product/product.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductComponent
    ],
    exports: [ProductListComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ProductsService]
})
export class ProductsModule {
}
