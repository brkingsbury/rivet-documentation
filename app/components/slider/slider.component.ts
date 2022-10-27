import { Component } from '@angular/core';
// import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['../components.component.scss']
})
export class SliderComponent {
    disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
    vertical = false;

    public inputsConfig = [
        {
            'name': 'disabled',
            'type': 'boolean',
            'description': 'Whether the component is disabled.'
        },
        {
            'name': 'max',
            'type': 'number',
            'description': 'The maximum value that the slider can have.'
        },
        {
            'name': 'min',
            'type': 'number',
            'description': 'The minimum value that the slider can have.'
        },
        {
            'name': 'thumbLabel',
            'type': 'boolean',
            'description': 'Whether or not to show the thumb label. (false by default)'
        },
        {
            'name': 'tickInterval',
            'type': 'number | "auto"',
            'description': 'How often to show ticks. Relative to the step so that a tick always appears on a step. Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).'
        },
        {
            'name': 'value',
            'type': 'number | null',
            'description': 'Value of the slider.'
        },
        {
            'name': 'vertical',
            'type': 'boolean',
            'description': 'Whether the slider is vertical.'
        }
    ];
    public outputsConfig = [
        {
            'name': 'input',
            'type': 'EventEmitter<MatSliderChange>',
            'description': 'Event emitted when the slider thumb moves.'
        },
        {
            'name': 'change',
            'type': 'EventEmitter<MatSliderChange>',
            'description': 'Event emitted when the slider value has changed.'
        }
    ];

    get tickInterval(): number | 'auto' {
        return this.showTicks ? ('auto') : 0;
    }
}
