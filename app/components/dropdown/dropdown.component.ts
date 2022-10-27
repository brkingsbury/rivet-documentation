import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-dropdown',
    templateUrl: './dropdown.component.html',
    styleUrls: ['../components.component.scss']
})

export class DropdownComponent {
    myControl = new FormControl();
    isInvalid = false;
    isDisabled = false;
    isReadOnly = false;
    dropChoices = ['One', 'Two', 'Three'];
    multipleDrops = ['Pizza', 'Ice cream', 'Sushi', 'Brussel sprouts', 'Spinach'];
    states = ['Alaska', 'California', 'Colorado', 'Georgia', 'Wisconsin'];
    selected = 'Two';

    public attrsConfig = [
        {
            'name': 'multiple',
            'required': false,
            'description': 'Added on the mat-select element, allows the user to select multiple options from within dropdown.'
        },
        {
            'name': 'placeholder',
            'type': 'string',
            'required': true,
            'description': 'Added on the mat-select element, String that sets the label (and placeholder text when empty).'
        },
        {
            'name': 'disableRipple ',
            'required': true,
            'description': 'Added on the mat-select element to prevent ripple elemnts from being added.'
        },
        {
            'name': 'disableOptionCentering ',
            'required': true,
            'description': 'Added on the mat-select element to prevent option list from being placed in the wrong place.'
        }
    ];
    public classesConfig = [
        {
            'name': '.invalid',
            'required': false,
            'description': 'Added to the wrapper div to style the group of elements'
        },
        {
            'name': '.read-only',
            'required': false,
            'description': 'Added to the wrapper div to style the group of elements'
        },
        {
            'name': '.high-level',
            'description': 'Creates a dropdown that follows patterns of navigation elements'
        }
    ];
}
