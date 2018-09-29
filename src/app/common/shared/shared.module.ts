import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';
import {BorderDirective} from './border.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [HighlightDirective, BorderDirective],
    exports: [CommonModule, FormsModule, HighlightDirective, BorderDirective],

})
export class SharedModule {
}
