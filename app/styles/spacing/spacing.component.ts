import { Component } from '@angular/core';

@Component({
    selector: 'app-spacing',
    templateUrl: './spacing.component.html',
    styleUrls: ['./spacing.component.scss']
})
export class SpacingComponent {
    spacing = {
        spaceVars: [
            { var: '--rvt-spacing-xxxl', px: '90px', name: 'xxxl' },
            { var: '--rvt-spacing-xxl', px: '60px', name: 'xxl' },
            { var: '--rvt-spacing-xl', px: '40px', name: 'xl' },
            { var: '--rvt-spacing-lg', px: '30px', name: 'lg' },
            { var: '--rvt-spacing-md', px: '20px', name: 'md' },
            { var: '--rvt-spacing-sm', px: '15px', name: 'sm' },
            { var: '--rvt-spacing-xs', px: '10px', name: 'xs' },
            { var: '--rvt-spacing-xxs', px: '5px', name: 'xxs' }
        ]
    };
}
