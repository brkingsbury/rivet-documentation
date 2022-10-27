import { Component } from '@angular/core';

@Component({
    selector: 'app-text-areas',
    templateUrl: './text-areas.component.html',
    styleUrls: ['../components.component.scss']
})
export class TextAreasComponent {
    isInvalid = false;
    isRequired = false;
    isDisabled = false;

    public inputsConfig = [
        {
            'name': 'disabled',
            'type': 'boolean',
            'description': 'Added on the internal input element to disable the field'
        }
    ];
    public classesConfig = [
        {
            'name': '.invalid',
            'description': 'Added on the wrapper, shows the invalid state on the input'
        },
        {
            'name': '.required',
            'description': 'Added on the wrapper, adds the required asterisk to the label'
        }
    ];
}
