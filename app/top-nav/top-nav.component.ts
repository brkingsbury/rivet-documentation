import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { versions } from '../changelog/versions/versions.component';

@Component({
    selector: 'app-top-nav',
    templateUrl: './top-nav.component.html',
    styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent {
    versions = versions;
    settings = false;
    public headerCollapse1 = false;
    public headerCollapse2 = false;
    public headerCollapse3 = false;
    colorDrawer = false;

    topOffset = '0px';

    constructor(public router: Router) { }

    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: any) {
        const scrollTop = event.target.scrollingElement
            ? event.target.scrollingElement.scrollTop
            : event.target.documentElement.scrollTop;
        this.topOffset = -scrollTop + 'px';
        if (scrollTop > 120) {
            this.headerCollapse1 = true;
        } else {
            this.headerCollapse1 = false;
        }
        if (scrollTop > 280) {
            this.headerCollapse2 = true;
        } else {
            this.headerCollapse2 = false;
        }
        if (scrollTop > 380) {
            this.headerCollapse3 = true;
        } else {
            this.headerCollapse3 = false;
        }
    }

    toggleSettings() {
        this.settings = !this.settings;
    }
    toggleDrawer() {
        this.colorDrawer = !this.colorDrawer;
    }
}
