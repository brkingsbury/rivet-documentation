import { Component } from '@angular/core';

@Component({
    selector: 'app-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['../components.component.scss']
})
export class CheckboxComponent {

    isDisabled = false;
    isRo = false;
    isSmall = false;
    isAbove = false;
    isIn = false;
    isChecked = false;
    public inputsConfig = [
        {
            'name': 'checked',
            'type': 'boolean',
            'required': true,
            'description': 'ADDED ON THE INPUT, Flag that binds the checked status to the input.'
        },
        {
            'name': 'disabled',
            'type': 'boolean',
            'required': false,
            'description': 'ADDED ON THE INPUT, Flag that when set to true disables the checkbox'
        }
    ];
    public classesConfig = [
        {
            'name': '.rvt-checkbox',
            'required': true,
            'description': 'Added to the wrapper div to style the group of elements'
        },
        {
            'name': '.small-checkbox',
            'description': 'A slightly smaller checkbox used in specific situations'
        },
        {
            'name': '.label-above',
            'description': 'Moves the label above the checkbox, e.g. inline with a row of inputs'
        },
        {
            'name': '.read-only',
            'description': 'ADDED ON THE INPUT, styles a disabled checkbox as read-only'
        }
    ];
}
