import { Component } from '@angular/core';
import { RivetThemingService } from 'rivet-style';

@Component({
    selector: 'app-dark-mode',
    templateUrl: './dark-mode.component.html'
})
export class DarkModeComponent {

    setVariables: any;
    setDarkMode: any;
    setColorGroup: any;
    public darkToggle: boolean;
    modeState = '';

    constructor(public rvtThemeService: RivetThemingService) {
        this.setVariables = rvtThemeService.setColorVariable;
        this.setDarkMode = rvtThemeService.setDarkMode;

        this.darkToggle = rvtThemeService.getCurrentMode();
        this.modeState = (this.darkToggle ? 'On' : 'Off');
    }

    toggleDarkMode(e: boolean): void {
        this.setDarkMode(e);
        this.modeState = (e ? 'On' : 'Off');
    }
}
