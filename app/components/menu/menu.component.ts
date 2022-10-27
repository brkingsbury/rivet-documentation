import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['../components.component.scss']
})
export class MenuComponent {
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

    close() {
        this.trigger.closeMenu();
    }

    test(x) {
        alert('thank you for clicking ' + x);
    }

}
