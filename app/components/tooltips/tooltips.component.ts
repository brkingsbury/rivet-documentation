import { Component } from '@angular/core';

@Component({
    selector: 'app-tooltips',
    templateUrl: './tooltips.component.html',
    styleUrls: ['../components.component.scss']
})
export class TooltipsComponent {
    tooltipValue = 'inital tooltip value';
    showTooltip = false;

    public inputsConfig = [
        {
            'name': 'rvtTooltip',
            'type': '<string>',
            'required': true,
            'description': 'used to bind a string to the tooltip directive'
        },
        {
            'name': 'rvtTooltipClass',
            'type': '<string>',
            'description': 'adds a class to the tooltip element.  Use "error-tooltip" to get the default red error color.'
        },
        {
            'name': 'rvtTooltipAbsolutePos',
            'type': '<boolean>',
            'description': 'Moves the added tooltip element out as a child of the body tag instead of inline, which can be helpful in a context where overflow: hidden is defined. (simply adding the attribute works without passing an argument)'
        },
        {
            'name': 'rvtTooltipDelay',
            'type': '<number> (milliseconds)',
            'description': 'Defines how many milliseconds the tooltip will wait before it is shown on hover (does not interfere with manual show)'
        },
        {
            'name': 'rvtManualTooltipShow',
            'type': '<boolean>, <undefined>',
            'description': 'is a boolean that controls whether a tooltip is visible (set to "undefined" to allow mouseover functionality)'
        }
    ];

    triggerError = function (): void {
        this.showTooltip = !this.showTooltip;
    };
}
