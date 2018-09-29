import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBorder]'
})
export class BorderDirective {

    @Input('appBorder') borderSetting: string;
    clicked = false;

    constructor(public el: ElementRef, private render: Renderer2) {}

    @HostListener('dblclick') onClick() {
        if (this.clicked) {
            this.setBorder('none');
        } else {
            this.setBorder(this.borderSetting);
        }
        this.clicked = !this.clicked;
    }

    private setBorder(borderSetting: string): void {
        this.render.setStyle(this.el.nativeElement, 'border', borderSetting);
    }

}
