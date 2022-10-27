import { Component } from '@angular/core';

@Component({
    selector: 'app-tiles',
    templateUrl: './tiles.component.html',
    styleUrls: ['../components.component.scss']
})
export class TilesComponent {

    public inputsConfig = [
        {
            'name': 'config',
            'type': 'Object',
            'description': 'A configuration object that includes "isSelected", "editText", "deleteText", "cancelBtnText", and "deleteBtnText" (see below for options)'
        },
        {
            'name': 'config { isSelected: }',
            'type': 'Boolean',
            'description': 'Optional configuration that sets the tile to selected or not.'
        },
        {
            'name': 'config { isDisabled: }',
            'type': 'Boolean',
            'description': 'Optional configuration [only for selectable tiles] that sets the tile to disabled and gives the tile disabled styling.'
        },
        {
            'name': 'config { editText: }',
            'type': 'String',
            'description': 'Optional string passed in, usually just "Edit", that shows up to the edit button when there is no delete button. Only shows up on tiles with edit functionality AND no delete functionality.'
        },
        {
            'name': 'config { deleteText: }',
            'type': 'String',
            'description': 'Optional string for what the delete overlay confirmation shows when a user clicks the delete button. Only needed for tiles with delete functionality.'
        },
        {
            'name': 'config { cancelBtnText: }',
            'type': 'String',
            'description': 'Optional translated string for the delete overlay confirmation, for canceling the delete. Should say "Cancel" .'
        },
        {
            'name': 'config { deleteBtnText: }',
            'type': 'String',
            'description': 'Optional translated string for the delete overlay confirmation, for confirming delete. Should say "Delete" .'
        }
    ];
    public outputsConfig = [
        {
            'name': 'tileSelect',
            'type': 'EventEmitter<null>',
            'description': 'Emits an event when the tile is "selected". When included, it creates a hover state to help users understand that they can select the tile.'
        },
        {
            'name': 'tileEdit',
            'type': 'EventEmitter<null>',
            'description': 'Emits an event when the tile is "edited". Should be used to open the drawer that corrisponds to the edit action.'
        },
        {
            'name': 'tileDelete',
            'type': 'EventEmitter<null>',
            'description': 'Emits an event when the tile is "deleted". Emits after the overlay confirms a users choice, and should be used to delete the entity the tile represents.'
        }
    ];
    canSelect = true;
    canEdit = false;
    canDelete = false;
    isDis = false;
    isRO = false;

    isTs = false;
    isTs2 = false;
    isTs3 = false;

    isTileSelected = true;
    isTileDisabled = true;

    tileConfig = {
        isSelected: this.isTileSelected,
        isDisabled: this.isDis,
        editText: 'Edit',
        deleteText: 'Are you sure you want to delete?',
        cancelBtnText: 'Cancel',
        deleteBtnText: 'Delete'
    };

    tileConfig2 = {
        isSelected: this.isTileSelected,
        isDisabled: true,
        editText: 'Edit',
        deleteText: 'Are you sure you want to delete?',
        cancelBtnText: 'Cancel',
        deleteBtnText: 'Delete'
    };

    editThisTile() {
        console.log('edit tile');
    }
    deleteThisTile() {
        console.log('delete tile');
    }
    selectThisTile() {
        this.isTileSelected = !this.isTileSelected;
    }
}
