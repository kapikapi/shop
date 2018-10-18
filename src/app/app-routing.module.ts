import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        data: { title: 'Page Not Found' }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    // re-export RouterModule in order to have access
    // to its directives in main module.
    exports: [RouterModule]
})
export class AppRoutingModule {}
