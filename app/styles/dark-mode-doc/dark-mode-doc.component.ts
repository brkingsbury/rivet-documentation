import { Component } from '@angular/core';
import { RivetThemingService } from 'rivet-style';

@Component({
    selector: 'app-dark-mode-doc',
    templateUrl: './dark-mode-doc.component.html',
    styleUrls: ['../../components/components.component.scss']
})
export class DarkModeDocComponent {

    setDarkMode: any;
    public darkToggle: boolean;

    constructor(public rvtThemeService: RivetThemingService) {
        this.setDarkMode = rvtThemeService.setDarkMode;
        this.darkToggle = rvtThemeService.getCurrentMode();
    }

    toggleDarkMode(e: boolean): void {
        this.setDarkMode(e);
    }

}
