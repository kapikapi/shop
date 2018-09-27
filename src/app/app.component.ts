import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    cartCount = 0;
    cartVisible = false;

    onCartUpdate(newTotalNumber?: number): void {
        if (newTotalNumber) {
            this.cartCount = newTotalNumber;
        } else {
            this.cartCount++;
        }
    }
}
