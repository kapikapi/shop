import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
    {
        path: 'home',
        component: ProductListComponent
    },
    {
        path: 'details/:productName',
        component: ProductDetailsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {}
