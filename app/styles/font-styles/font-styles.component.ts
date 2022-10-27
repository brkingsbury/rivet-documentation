import { Component } from '@angular/core';

@Component({
    selector: 'app-font-styles',
    templateUrl: './font-styles.component.html',
    styleUrls: ['../styles.component.scss']
})
export class FontStylesComponent {
    constructor() { }

    sizes = [
        { var: 'rvt-font-display-1', val: '6.8' },
        { var: 'rvt-font-display-2', val: '5.7' },
        { var: 'rvt-font-size-a', val: '4.7' },
        { var: 'rvt-font-size-b', val: '4.0' },
        { var: 'rvt-font-size-c', val: '3.3' },
        { var: 'rvt-font-size-d', val: '2.8' },
        { var: 'rvt-font-size-e', val: '2.3' },
        { var: 'rvt-font-size-f', val: '1.9' },
        { var: 'rvt-font-size-g', val: '1.6' },
        { var: 'rvt-font-size-h', val: '1.4' },
    ];
    classes = [
        { var: 'rvt-font-display-1', size: '6.8' },
        { var: 'rvt-font-display-2', size: '5.7' },
        { var: 'rvt-font-a', size: '4.7' },
        { var: 'rvt-font-b', size: '4.0' },
        { var: 'rvt-font-c', size: '3.3' },
        { var: 'rvt-font-d', size: '2.8' },
        { var: 'rvt-font-e', size: '2.3' },
        { var: 'rvt-font-f', size: '1.9' },
        { var: 'rvt-font-g', size: '1.6' },
        { var: 'rvt-font-h', size: '1.4' },
    ];
}
