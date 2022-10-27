import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
    @Output() cursorStatus = new EventEmitter();

    sideNav = {
        categories: [
            {
                title: 'Getting Started',
                links: [
                    { name: 'Overview', path: '/home' },
                    { name: 'Design', path: '/getting-started/designers' },
                    { name: 'Develop', path: '/getting-started/developers' },
                    { name: 'Contribute', path: '/getting-started/contribute' }
                ]
            },
            {
                title: 'Styles',
                links: [
                    { name: 'Persona', path: '/style/persona' },
                    { name: 'Icons', path: '/style/icon' },
                    { name: 'Spacing', path: '/style/spacing' },
                    { name: 'Type', path: '/style/font' },
                    { name: 'Colors', path: '/style/color' },
                    { name: 'Dark Mode Service', path: '/style/darkmode' },
                    { name: 'Custom Theme Service', path: '/style/themeservice' }
                ]
            },
            {
                title: 'Components',
                links: [
                    { name: 'Overview', path: '/components' },
                    { name: 'Buttons', path: '/components/button' },
                    { name: 'Carousel', path: '/components/carousel' },
                    { name: 'Card', path: '/components/card' },
                    { name: 'Checkbox', path: '/components/checkbox' },
                    { name: 'Chip', path: '/components/chip' },
                    { name: 'Colorpicker', path: '/components/colorpicker' },
                    { name: 'Datepicker', path: '/components/datepicker' },
                    { name: 'Dialog', path: '/components/dialog' },
                    { name: 'Drawer', path: '/components/drawer' },
                    { name: 'Dropdowns', path: '/components/dropdown' },
                    { name: 'Expansion Panel', path: '/components/expansion' },
                    { name: 'Icon', path: '/components/icon' },
                    { name: 'Input', path: '/components/input' },
                    { name: 'Links', path: '/components/link' },
                    { name: 'Loading', path: '/components/loading' },
                    { name: 'Menu', path: '/components/menu' },
                    { name: 'Mini Expansion Panel', path: '/components/miniexpansion' },
                    //   { name: 'Navigation', path: '/components/nav' },
                    { name: 'Radio Button', path: '/components/radio' },
                    { name: 'Slide Toggle', path: '/components/toggle' },
                    { name: 'Slider', path: '/components/slider' },
                    { name: 'Smart Funding Icon', path: '/components/smart-funding-icon' },
                    { name: 'Snackbar', path: '/components/snackbar' },
                    { name: 'Table', path: '/components/table' },
                    { name: 'Tabs', path: '/components/tab' },
                    { name: 'Text Area', path: '/components/textarea' },
                    { name: 'Tiles', path: '/components/tile' },
                    { name: 'Tooltips', path: '/components/tooltip' }
                ]
            },
            {
                title: 'Patterns',
                links: [
                    { name: 'Accessibility', path: '/patterns/a11y' },
                    { name: 'Elevation', path: '/patterns/elevation' },
                    { name: 'Performance', path: '/patterns/performance' },
                    // { name: 'Structure', path: '/patterns/structure' },
                    { name: 'Validation & Errors', path: '/patterns/errors' }
                ]
            },
            {
                title: 'Changelog',
                links: [
                    { name: 'Versions', path: '/changelog/versions' },
                    { name: 'Roadmap', path: '/changelog/roadmap' },
                    { name: 'Compatibility', path: '/changelog/compatibility' }
                ]
            }
        ]
    };

    expand(section) {
        section.expanded = !section.expanded;
    }

    toggleCursor() {
        this.cursorStatus.emit();
    }

    constructor(public router: Router) { }
}
