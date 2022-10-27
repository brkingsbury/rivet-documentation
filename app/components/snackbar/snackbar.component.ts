import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar-temp',
    templateUrl: './snackbar-template.html'
})

export class Snackbar2Component {
    constructor(private _snackBar2: MatSnackBar) { }
    closeSnack() {
        this._snackBar2.dismiss();
    }
}

@Component({
    selector: 'app-snackbar',
    templateUrl: './snackbar.component.html',
    styleUrls: ['../components.component.scss']
})

export class SnackbarComponent {
    constructor(private _snackBar: MatSnackBar) { }

    public inputsConfig = [
        {
            'name': 'data',
            'type': 'object',
            'description': 'passed to the .openFromComponent function to contain parameters for the snackbar'
        },
        {
            'name': 'data.message',
            'type': 'string',
            'description': 'Contains the message that will be displayed in the snackbar'
        },
        {
            'name': 'data.snackbarType',
            'type': 'string',
            'description': 'accepts either "error" or "success".  MUST MATCH panelClass TO APPLY CORRECTLY'
        },
        {
            'name': 'duration',
            'type': 'number',
            'description': 'describes how many milleseconds the snackbar will display for before auto dismissing'
        },
        {
            'name': 'horizontalPosition',
            'type': 'string',
            'description': 'accepts "start", "center", "end", "left", and "right"'
        },
        {
            'name': 'panelClass',
            'type': 'string',
            'description': 'accepts either "error" or "success".  MUST MATCH data.snackbarType TO APPLY CORRECTLY'
        }
    ];

    openSnackBar(message: string, action: string) {
        this._snackBar.open('I am a snackbar', 'Close Me', {});
    }
    openSnackBar2() {
        this._snackBar.openFromComponent(Snackbar2Component, {});
    }
    openErrorSnackbar() {
        this._snackBar.openFromComponent(Snackbar2Component, {
            data: {
                message: 'Example error snackbar content',
                snackbarType: 'error'
            },
            duration: 10000,
            horizontalPosition: 'center',
            panelClass: 'error'
        });
    }
    openSuccessSnackbar() {
        this._snackBar.openFromComponent(Snackbar2Component, {
            data: {
                message: 'Example error snackbar content',
                snackbarType: 'success'
            },
            duration: 10000,
            horizontalPosition: 'center',
            panelClass: 'success'
        });
    }
}
