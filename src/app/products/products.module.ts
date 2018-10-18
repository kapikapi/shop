import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ProductListComponent} from './product-list.component';
import {ProductsService} from './products.service';
import {ProductComponent} from './product/product.component';
import {SharedModule} from '../common/shared/shared.module';
import {ProductsRoutingModule} from './products-routing.module';
import {ProductDetailsComponent} from './product-details/product-details.component';

@NgModule({
    declarations: [
        ProductListComponent,
        ProductComponent,
        ProductDetailsComponent
    ],
    exports: [ProductListComponent],
    imports: [
        BrowserModule,
        FormsModule,
        SharedModule,
        ProductsRoutingModule
    ],
    providers: [ProductsService]
})
export class ProductsModule {
}
