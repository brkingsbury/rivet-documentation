import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-theme-editor',
    templateUrl: './theme-editor.component.html',
    styleUrls: ['./theme-editor.component.scss', '../app.component.scss']
})
export class ThemeEditorComponent implements OnInit {
    @Input() drawerStatus: boolean;
    @Output() drawer: boolean;

    advanced = false;
    txt = 1;
    spc = 1;
    lay = 1;
    customLayout = false;

    spacingVars = ['--rvt-spacing-xxs', '--rvt-spacing-xs', '--rvt-spacing-sm', '--rvt-spacing-md', '--rvt-spacing-lg', '--rvt-spacing-xl', '--rvt-spacing-xxl', '--rvt-spacing-xxxl'];
    spaceValues = [
        [5, 7, 10, 15, 20, 30, 45, 60], // dense
        [5, 10, 15, 20, 30, 45, 60, 90], // default
        [10, 15, 20, 30, 45, 60, 75, 90], // relaxed
        [5, 10, 15, 20, 30, 45, 60, 90] // temp
    ];
    txtVars = ['--rvt-font-display-1', '--rvt-font-display-2', '--rvt-font-size-a', '--rvt-font-size-b', '--rvt-font-size-c', '--rvt-font-size-d', '--rvt-font-size-e', '--rvt-font-size-f', '--rvt-font-size-g', '--rvt-font-size-h'];
    textValues = [
        [5.7, 4.7, 4.0, 3.3, 2.8, 2.3, 1.9, 1.6, 1.3, 1.0], // small
        [6.8, 5.7, 4.7, 4.0, 3.3, 2.8, 2.3, 1.9, 1.6, 1.3], // default
        [7.9, 6.8, 5.7, 4.7, 4.0, 3.3, 2.8, 2.3, 1.9, 1.6], // large
        [6.8, 5.7, 4.7, 4.0, 3.3, 2.8, 2.3, 1.9, 1.6, 1.3] // temp
    ];
    // -- color logic --

    h = 0;
    s = 0;
    l = 0;
    curVar = '';

    selectedColor = '';

    clrVars = [
        {
            name: 'Primary',
            varName: '--rvt-color-primary',
            h: 247,
            s: 30,
            l: 45,
            edited: false,
            tempH: 0,
            tempS: 0,
            tempL: 0
        },
        // {
        //   name: 'Primary Light',
        //   varName: '--rvt-color-primary-light',
        //   h: 249,
        //   s: 40,
        //   l: 63,
        //   edited: false,
        //   tempH: 0,
        //   tempS: 0,
        //   tempL: 0
        // },
        // {
        //   name: 'Primary Dark',
        //   varName: '--rvt-color-primary-dark',
        //   h: 241,
        //   s: 44,
        //   l: 28,
        //   edited: false,
        //   tempH: 0,
        //   tempS: 0,
        //   tempL: 0
        // },
        {
            name: 'Accent',
            varName: '--rvt-color-accent',
            h: 39,
            s: 78,
            l: 56,
            edited: false,
            tempH: 0,
            tempS: 0,
            tempL: 0
        },
        {
            name: 'Neutral - Dark',
            varName: '--rvt-color-neutral-8',
            h: 223,
            s: 39,
            l: 16,
            edited: false,
            tempH: 0,
            tempS: 0,
            tempL: 0
        }
    ];

    selectClr(clr) {
        this.curVar = clr.varName;
        const clrObj = this.clrVars.find(name => name.varName === this.curVar);
        const index = this.clrVars.indexOf(clrObj);
        if (clr.edited === false) {
            // if color is not edited, set selected to default hsl
            this.h = clr.h;
            this.s = clr.s;
            this.l = clr.l;
        } else {
            // if color is edited, set selected to temp hsl
            this.h = this.clrVars[index].tempH;
            this.s = this.clrVars[index].tempS;
            this.l = this.clrVars[index].tempL;
        }
        this.selectedColor = 'hsl(' + this.h + ', ' + this.s + '%, ' + this.l + '%)';
    }

    updateClr() {
        const clrObj = this.clrVars.find(name => name.varName === this.curVar);
        const index = this.clrVars.indexOf(clrObj);
        this.clrVars[index].edited = true;
        this.clrVars[index].tempH = this.h;
        this.clrVars[index].tempS = this.s;
        this.clrVars[index].tempL = this.l;
        this.changeColor(this.h, this.s, this.l, index);
    }
    resetClr() {
        const clrObj = this.clrVars.find(name => name.varName === this.curVar);
        const index = this.clrVars.indexOf(clrObj);
        this.clrVars[index].edited = false;
        this.changeColor(this.clrVars[index].h, this.clrVars[index].s, this.clrVars[index].l, index);
    }

    changeColor(h, s, l, x) {
        this.selectedColor = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
        document.documentElement.style.setProperty(this.clrVars[x].varName, this.selectedColor);
    }

    // -- Border logic --

    // setRound() {
    //     document.documentElement.style.setProperty('--border-radius', '36px');
    //     document.documentElement.style.setProperty('--code-tab-radius', '18px');
    // }
    // setSharp() {
    //     document.documentElement.style.setProperty('--border-radius', '0');
    //     document.documentElement.style.setProperty('--code-tab-radius', '0');

    // }
    // resetStyle() {
    //     document.documentElement.style.setProperty('--border-radius', '4px');
    //     document.documentElement.style.setProperty('--code-tab-radius', '4px');
    // }

    // -- Layout logic --
    changeLayout(l) {
        this.lay = this.txt = this.spc = l;
        this.updateText(l);
        this.updateSpacing(l);
    }

    increaseSpacing() {
        for (let x = 0; x < this.spaceValues[3].length; x++) {
            this.spaceValues[3][x] = (this.spaceValues[3][x] + 5);
        }
        this.updateSpacing(3);
    }

    decreaseSpacing() {
        for (let x = 0; x < this.spaceValues[3].length; x++) {
            if (this.spaceValues[3][x] > 5) {
                this.spaceValues[3][x] = (this.spaceValues[3][x] - 5);
            }
        }
        this.updateSpacing(3);
    }

    increaseTxt() {
        for (let x = 0; x < this.textValues[3].length; x++) {
            this.textValues[3][x] = parseFloat((this.textValues[3][x] + 0.2).toFixed(1));
        }
        this.updateText(3);
    }

    decreaseTxt() {
        for (let x = 0; x < this.textValues[3].length; x++) {
            if (this.textValues[3][x] > 1.5) {
                this.textValues[3][x] = parseFloat((this.textValues[3][x] - 0.2).toFixed(1));
            }
        }
        this.updateText(3);
    }

    resetText() {
        this.updateText(1);
        this.textValues[3] = this.textValues[1];
    }

    resetSpacing() {
        this.updateSpacing(1);
        this.spaceValues[3] = this.spaceValues[1];
    }

    resetLayout() {
        this.lay = this.spc = this.txt = 1;
        this.customLayout = false;
        this.updateSpacing(1);
        this.updateText(1);
    }

    updateSpacing(opt) {
        if (opt === 3 || this.spc !== this.txt) {
            this.customLayout = true;
        }
        for (let x = 0; x < this.spaceValues[opt].length; x++) {
            const value = this.spaceValues[opt][x] + 'px';
            document.documentElement.style.setProperty(this.spacingVars[x], value);
        }
    }

    updateText(opt) {
        if (opt === 3 || this.spc !== this.txt) {
            this.customLayout = true;
        }
        for (let x = 0; x < this.textValues[opt].length; x++) {
            const value = this.textValues[opt][x] + 'rem';
            document.documentElement.style.setProperty(this.txtVars[x], value);
        }
    }

    closeDrawer() {
        this.drawerStatus = false;
        this.drawer = this.drawerStatus;
    }

    ngOnInit() {
        this.drawerStatus = false;
    }
}
