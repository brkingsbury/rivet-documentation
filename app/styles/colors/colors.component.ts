import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-colors',
    templateUrl: './colors.component.html',
    styleUrls: ['../styles.component.scss']
})
export class ColorsComponent implements OnInit {
    cardView = true;

    cssVariables: any[] = [];

    colorVariables = {
        // colors for light theme
        lightColorGroup: [
            {
                title: 'Primary colors',
                colors: [
                    { var: '--rvt-color-primary', hsl: 'hsl(247, 30%, 45%)', hex: '#585096', rgb: 'rgb(88, 80, 150)' },
                    { var: '--rvt-color-primary-light', hsl: 'hsl(249, 40%, 63%)', hex: '#877CC7', rgb: 'rgb(135, 124, 199)' },
                    { var: '--rvt-color-primary-dark', hsl: 'hsl(241, 44%, 28%)', hex: '#292868', rgb: 'rgb(41, 40, 104)' },
                    { var: '--rvt-color-accent', hsl: 'hsl(39, 78%, 56%)', hex: '#E7AA39', rgb: 'rgb(231, 170, 57)' }
                ]
            },
            {
                title: 'Text colors',
                colors: [
                    { var: '--rvt-color-text', hsl: 'hsl(223, 39%, 16%)', hex: '#192239', rgb: 'rgb(25, 34, 57)' },
                    { var: '--rvt-color-text-contrast', hsl: 'hsl(0, 100%, 100%)', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)' },
                    { var: '--rvt-color-text-disabled', hsl: 'hsl(222, 11%, 76%)', hex: '#BCC0C9', rgb: 'rgb(188, 192, 201)' },
                    { var: '--rvt-color-text-invalid', hsl: 'hsl(0, 66%, 47%)', hex: '#C72929', rgb: 'rgb(199, 41, 41)' }
                ]
            },
            {
                title: 'Neutral colors',
                colors: [
                    { var: '--rvt-color-neutral-0', hsl: 'hsl(240, 100%, 100%)', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)' },
                    { var: '--rvt-color-neutral-1', hsl: 'hsl(240, 0%, 97%)', hex: '#F7F7F7', rgb: 'rgb(247, 247, 247)' },
                    { var: '--rvt-color-neutral-2', hsl: 'hsl(240, 3%, 92%)', hex: '#EBEBEC', rgb: 'rgb(235, 235, 236)' },
                    { var: '--rvt-color-neutral-3', hsl: 'hsl(222, 11%, 82%)', hex: '#CBCED5', rgb: 'rgb(203, 206, 213)' },
                    { var: '--rvt-color-neutral-4', hsl: 'hsl(222, 11%, 76%)', hex: '#BCC0C9', rgb: 'rgb(188, 192, 201)' },
                    { var: '--rvt-color-neutral-5', hsl: 'hsl(219, 12%, 71%)', hex: '#ADB3BE', rgb: 'rgb(173, 179, 190)' },
                    { var: '--rvt-color-neutral-6', hsl: 'hsl(220, 9%, 46%)', hex: '#6B7280', rgb: 'rgb(107, 114, 128)' },
                    { var: '--rvt-color-neutral-7', hsl: 'hsl(227, 22%, 29%)', hex: '#394059', rgb: 'rgb(57, 64, 89)' },
                    { var: '--rvt-color-neutral-8', hsl: 'hsl(223, 39%, 16%)', hex: '#192239', rgb: 'rgb(25, 34, 57)' }
                ]
            },
            {
                title: 'Simple data colors',
                colors: [
                    { var: '--rvt-color-good', hsl: 'hsl(137, 63%, 40%)', hex: '#26A54A', rgb: 'rgb(38, 165, 74)' },
                    { var: '--rvt-color-warn', hsl: 'hsl(56, 90%, 53%)', hex: '#F3E31D', rgb: 'rgb(243, 227, 29)' },
                    { var: '--rvt-color-bad', hsl: 'hsl(0, 66%, 47%)', hex: '#C72929', rgb: 'rgb(199, 41, 41)' }
                ]
            },
            {
                title: 'Advanced data colors',
                colors: [
                    { var: '--rvt-color-data-good-1', hsl: 'hsl(144, 62%, 45%)', hex: '#2CBC66', rgb: 'rgb(44, 188, 102)' },
                    { var: '--rvt-color-data-good-2', hsl: 'hsl(81, 36%, 50%)', hex: '#8DAD52', rgb: 'rgb(141, 173, 82)' },
                    { var: '--rvt-color-data-warn-1', hsl: 'hsl(39, 94%, 66%)', hex: '#FAC155', rgb: 'rgb(250, 193,85)' },
                    { var: '--rvt-color-data-warn-2', hsl: 'hsl(17, 82%, 58%)', hex: '#EC6F3E', rgb: 'rgb(236, 111, 62)' },
                    { var: '--rvt-color-data-bad', hsl: 'hsl(0, 70%, 56%)', hex: '#DD4141', rgb: 'rgb(221, 65, 65)' },
                    { var: '--rvt-color-data-accent-1a', hsl: 'hsl(212, 60%, 50%)', hex: '#3379CB', rgb: 'rgb(51, 121, 203)' },
                    { var: '--rvt-color-data-accent-1b', hsl: 'hsl(198, 89%, 21%)', hex: '#064A66', rgb: 'rgb(6, 74, 102)' },
                    { var: '--rvt-color-data-accent-2', hsl: 'hsl(29, 91%, 61%)', hex: '#F69943', rgb: 'rgb(246, 153, 67)' },
                    { var: '--rvt-color-data-accent-3a', hsl: 'hsl(191, 100%, 33%)', hex: '#008BA9', rgb: 'rgb(0, 139, 169)' },
                    { var: '--rvt-color-data-accent-3b', hsl: 'hsl(201, 100%, 30%)', hex: '#006398', rgb: 'rgb(0, 99, 152)' },
                    { var: '--rvt-color-data-accent-4a', hsl: 'hsl(323, 47%, 46%)', hex: '#AC3E82', rgb: 'rgb(172, 62, 130)' },
                    { var: '--rvt-color-data-accent-4b', hsl: 'hsl(241, 29%, 43%)', hex: '#504F8E', rgb: 'rgb(80, 79, 142)' }
                ]
            }
        ],
        // colors for dark theme
        darkColorGroup: [
            {
                title: 'Primary colors',
                colors: [
                    { var: '--rvt-color-primary', hsl: 'hsl(247, 30%, 45%)', hex: '#585096', rgb: 'rgb(88, 80, 150)' },
                    { var: '--rvt-color-primary-light', hsl: 'hsl(249, 40%, 63%)', hex: '#877CC7', rgb: 'rgb(135, 124, 199)' },
                    { var: '--rvt-color-primary-dark', hsl: 'hsl(241, 44%, 28%)', hex: '#292868', rgb: 'rgb(41, 40, 104)' },
                    { var: '--rvt-color-accent', hsl: 'hsl(39, 78%, 56%)', hex: '#E7AA39', rgb: 'rgb(231, 170, 57)' }
                ]
            },
            {
                title: 'Text colors',
                colors: [
                    { var: '--rvt-color-text', hsl: 'hsl(206, 14%, 90%)', hex: '#E2E6E9', rgb: 'rgb(226, 230, 233)' },
                    { var: '--rvt-color-text-contrast', hsl: 'hsl(206, 14%, 10%)', hex: '#161A1D', rgb: 'rgb(22, 26, 29)' },
                    { var: '--rvt-color-text-disabled', hsl: 'hsl(222, 11%, 76%)', hex: '#BCC0C9', rgb: 'rgb(188, 192, 201)' },
                    { var: '--rvt-color-text-invalid', hsl: 'hsl(0, 66%, 47%)', hex: '#C72929', rgb: 'rgb(199, 41, 41)' }
                ]
            },
            {
                title: 'Neutral colors',
                colors: [
                    { var: '--rvt-color-neutral-0', hsl: 'hsl(206, 14%, 10%)', hex: '#161A1D', rgb: 'rgb(22, 26, 29)' },
                    { var: '--rvt-color-neutral-1', hsl: 'hsl(210, 13%, 15%)', hex: '#21262B', rgb: 'rgb(33, 38, 43)' },
                    { var: '--rvt-color-neutral-2', hsl: 'hsl(210, 14%, 20%)', hex: '#2C333A', rgb: 'rgb(44, 51, 58)' },
                    { var: '--rvt-color-neutral-3', hsl: 'hsl(208, 13%, 25%)', hex: '#374048', rgb: 'rgb(55, 64, 72)' },
                    { var: '--rvt-color-neutral-4', hsl: 'hsl(209, 14%, 30%)', hex: '#424D57', rgb: 'rgb(66, 77, 87)' },
                    { var: '--rvt-color-neutral-5', hsl: 'hsl(211, 13%, 35%)', hex: '#4E5965', rgb: 'rgb(78, 89, 101)' },
                    { var: '--rvt-color-neutral-6', hsl: 'hsl(209, 14%, 70%)', hex: '#A8B3BD', rgb: 'rgb(168, 179, 189)' },
                    { var: '--rvt-color-neutral-7', hsl: 'hsl(206, 14%, 90%)', hex: '#E2E6E9', rgb: 'rgb(226, 230, 233)' },
                    { var: '--rvt-color-neutral-8', hsl: 'hsl(206, 14%, 90%)', hex: '#E2E6E9', rgb: 'rgb(226, 230, 233)' }
                ]
            },
            {
                title: 'Simple data colors',
                colors: [
                    { var: '--rvt-color-good', hsl: 'hsl(137, 63%, 40%)', hex: '#26A54A', rgb: 'rgb(38, 165, 74)' },
                    { var: '--rvt-color-warn', hsl: 'hsl(56, 90%, 53%)', hex: '#F3E31D', rgb: 'rgb(243, 227, 29)' },
                    { var: '--rvt-color-bad', hsl: 'hsl(0, 66%, 47%)', hex: '#C72929', rgb: 'rgb(199, 41, 41)' }
                ]
            },
            {
                title: 'Advanced data colors',
                colors: [
                    { var: '--rvt-color-data-good-1', hsl: 'hsl(144, 62%, 45%)', hex: '#2CBC66', rgb: 'rgb(44, 188, 102)' },
                    { var: '--rvt-color-data-good-2', hsl: 'hsl(81, 36%, 50%)', hex: '#8DAD52', rgb: 'rgb(141, 173, 82)' },
                    { var: '--rvt-color-data-warn-1', hsl: 'hsl(39, 94%, 66%)', hex: '#FAC155', rgb: 'rgb(250, 193,85)' },
                    { var: '--rvt-color-data-warn-2', hsl: 'hsl(17, 82%, 58%)', hex: '#EC6F3E', rgb: 'rgb(236, 111, 62)' },
                    { var: '--rvt-color-data-bad', hsl: 'hsl(0, 70%, 56%)', hex: '#DD4141', rgb: 'rgb(221, 65, 65)' },
                    { var: '--rvt-color-data-accent-1a', hsl: 'hsl(212, 60%, 50%)', hex: '#3379CB', rgb: 'rgb(51, 121, 203)' },
                    { var: '--rvt-color-data-accent-1b', hsl: 'hsl(198, 89%, 21%)', hex: '#064A66', rgb: 'rgb(6, 74, 102)' },
                    { var: '--rvt-color-data-accent-2', hsl: 'hsl(29, 91%, 61%)', hex: '#F69943', rgb: 'rgb(246, 153, 67)' },
                    { var: '--rvt-color-data-accent-3a', hsl: 'hsl(191, 100%, 33%)', hex: '#008BA9', rgb: 'rgb(0, 139, 169)' },
                    { var: '--rvt-color-data-accent-3b', hsl: 'hsl(201, 100%, 30%)', hex: '#006398', rgb: 'rgb(0, 99, 152)' },
                    { var: '--rvt-color-data-accent-4a', hsl: 'hsl(323, 47%, 46%)', hex: '#AC3E82', rgb: 'rgb(172, 62, 130)' },
                    { var: '--rvt-color-data-accent-4b', hsl: 'hsl(241, 29%, 43%)', hex: '#504F8E', rgb: 'rgb(80, 79, 142)' }
                ]
            }
        ]
    };

    constructor(private http: HttpClient) { }

    getVariableValue(varName) {
        return getComputedStyle(document.documentElement).getPropertyValue(varName);
    }

    ngOnInit() {
        // Gets the themeVariables.scss file from the assets folder
        this.http.get('assets/styles/themeVariables.scss', { responseType: 'text' }).subscribe(data => {
            // formats the scss file as an object (via the formatter) and assigns it to a var to bind to the UI
            this.cssVariables = this.formatVariables(data);
        });
    }

    formatVariables(data) {
        const objArray = []; // This will hold the key/value pairs for color variables
        const string = data.replace(/(\[data-theme)[^}]*\)/, ''); // first we remove the dark mode stuff, since it's redundant
        const regex = /(?:(--rvt-))(.*?)(?:\;)/g; // returns groups of key/value pairs from the source
        const keyRegex = /^((?!var\())(?:--rvt)(?:(?!:).)*/g; // selects just the key
        const valueRegex = /(?<=\:\W)((?!;).)*/g; // selects just the value
        const varArray = string.match(regex); // uses the regex to actually generate the array
        varArray.forEach(element => {
            const obj: any = {}; // object to hold single key/value pair
            obj.key = element.match(keyRegex)[0]; // assign key
            obj.value = element.match(valueRegex)[0]; // assign value
            objArray.push(obj); // add to the object array
        });
        return objArray; // return the formatted array of objects containing all color variables and values
    }
}
