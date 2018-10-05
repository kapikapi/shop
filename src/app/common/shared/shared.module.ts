import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';
import {BorderDirective} from './border.directive';
import {OrderByPipe} from './order-by.pipe';

@NgModule({
    imports: [CommonModule],
    declarations: [HighlightDirective, BorderDirective, OrderByPipe],
    exports: [CommonModule, FormsModule, HighlightDirective, BorderDirective, OrderByPipe],

})
export class SharedModule {
}
