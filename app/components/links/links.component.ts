import { Component } from '@angular/core';

@Component({
    selector: 'app-links',
    templateUrl: './links.component.html',
    styleUrls: ['../components.component.scss']
})
export class LinksComponent {
    public classesConfig = [
        {
            'name': '.rvt-link',
            'required': true,
            'description': 'Added to an anchor tag to assign Rivet link style'
        },
        {
            'name': '.inverse',
            'description': 'Applied when the link appears on a primary color or dark background'
        }
    ];

    isInverse = false;
    isInverse2 = false;
}
