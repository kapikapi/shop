import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    @ViewChild('appTitle')
    private title: ElementRef;

    cartCount = 0;
    cartVisible = false;

    ngAfterViewInit() {
        this.title.nativeElement.text = 'Super Shop';
    }

    onCartUpdate(newTotalNumber?: number): void {
        if (newTotalNumber) {
            this.cartCount = newTotalNumber;
        } else {
            this.cartCount++;
        }
    }
}
