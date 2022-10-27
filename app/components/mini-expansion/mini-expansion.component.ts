import { Component } from '@angular/core';

@Component({
    selector: 'app-mini-expansion',
    templateUrl: './mini-expansion.component.html',
    styleUrls: ['../components.component.scss']
})
export class MiniExpansionPanelComponent {
    public inputsConfig = [
        {
            'name': 'panelOpen',
            'type': 'boolean',
            'required': true,
            'description': 'Controls the state of the expansion panel.'
        },
        {
            'name': 'openedArrowDirection',
            'type': 'String',
            'description': 'Defines the caret arrow direction when the panel has been expanded.  Acceptable strings: "up", "down", "left", "right"'
        },
        {
            'name': 'closedArrowDirection',
            'type': 'String',
            'description': 'Defines the caret arrow direction when the panel has been collapsed.  Acceptable strings: "up", "down", "left", "right"'
        },
        {
            'name': 'arrowRight',
            'type': 'boolean',
            'description': 'Flips the alignment of the header to the right if set to true.'
        }
    ];

    toggleVariable = true;
}
