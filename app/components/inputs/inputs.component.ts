import { Component } from '@angular/core';

@Component({
    selector: 'app-inputs',
    templateUrl: './inputs.component.html',
    styleUrls: ['../components.component.scss']
})
export class InputsComponent {
    isInvalid = false;
    isRequired = false;
    isDisabled = false;
    isReadOnly = false;
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
        }
    ];
    public attrsConfig = [
        {
            'name': 'placeholder',
            'type': 'string',
            'required': true,
            'description': 'ADDED ON THE INPUT, String that sets the label (and placeholder text when empty).'
        },
        {
            'name': 'disabled',
            'type': 'boolean',
            'required': false,
            'description': 'ADDED ON THE INPUT, Flag that when set to true disables the input.'
        },
        {
            'name': 'required',
            'type': 'boolean',
            'required': false,
            'description': 'ADDED ON THE INPUT, Flag that sets the input to required and adds an asterisk (*)'
        }
    ];
}
