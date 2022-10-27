import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortalVariableDialogueComponent } from './portal-variable-dialogue/portal-variable-dialogue.component';
import { PremiumVariableDialogueComponent } from './premium-variable-dialogue/premium-variable-dialogue.component';
import { Rivet4VariableDialogueComponent } from './rivet4-variable-dialogue/rivet4-variable-dialogue.component';

@Component({
    selector: 'app-compatibility',
    templateUrl: './compatibility.component.html',
    styleUrls: ['./compatibility.component.scss']
})
export class CompatibilityComponent {
    constructor(public dialog: MatDialog) { }

    openPremiumDialog(): void {
        const dialogRef = this.dialog.open(PremiumVariableDialogueComponent, {
            width: '800px',
            autoFocus: false
        });
    }

    openRivet4Dialog(): void {
        const dialogRef = this.dialog.open(Rivet4VariableDialogueComponent, {
            width: '700px',
            autoFocus: false
        });
    }

    openPortalDialog(): void {
        const dialogRef = this.dialog.open(PortalVariableDialogueComponent, {
            width: '800px',
            autoFocus: false
        });
    }
}
