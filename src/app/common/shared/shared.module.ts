import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight.directive';

@NgModule({
    imports: [CommonModule],
    declarations: [HighlightDirective],
    exports: [CommonModule, FormsModule, HighlightDirective],

})
export class SharedModule {
}
