import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
    checked: boolean;
    currencyInput = new FormControl(35);
    percentageInput = new FormControl(0.35);

    imgSrc = '../../assets';

    components = {
        comps: [
            { name: 'Buttons', path: '/components/button' },
            { name: 'Card', path: '/components/card' },
            { name: 'Carousel', path: '/components/carousel' },
            { name: 'Checkbox', path: '/components/checkbox' },
            { name: 'Datepicker', path: '/components/datepicker' },
            { name: 'Dialog', path: '/components/dialog' },
            { name: 'Drawers', path: '/components/drawer' },
            { name: 'Dropdowns', path: '/components/dropdown' },
            { name: 'Expansion Panel', path: '/components/expansion' },
            { name: 'Inputs', path: '/components/input' },
            { name: 'Links', path: '/components/link' },
            { name: 'Loading', path: '/components/loading' },
            { name: 'Menu', path: '/components/menu' },
            { name: 'Mini Expansion Panel', path: '/components/miniexpansion' },
            //   { name: 'Navigation', path: '/components/nav' },
            { name: 'Radio Button', path: '/components/radio' },
            { name: 'Snackbar', path: '/components/snackbar' },
            { name: 'Slide Toggle', path: '/components/toggle' },
            { name: 'Slider', path: '/components/slider' },
            { name: 'Tables', path: '/components/table' },
            { name: 'Tabs', path: '/components/tab' },
            { name: 'Text Areas', path: '/components/textarea' },
            { name: 'Tiles', path: '/components/tile' },
            { name: 'Tooltips', path: '/components/tooltip' }
        ]
    };

    disable() {
        this.currencyInput.disable();
    }
}
@Component({
    selector: 'app-compliance-dialog',
    templateUrl: './compliance-marker-dialog-template.html'
})
export class ComplianceDialogComponent { }

@Component({
    selector: 'app-compliance-marker',
    templateUrl: './compliance-marker-template.html'
})

export class ComplianceComponent {
    constructor(public dialog: MatDialog) { }
    openAADialog(): void {
        const dialogRef = this.dialog.open(ComplianceDialogComponent, {
            width: '600px',
            autoFocus: false
        });
    }
}


