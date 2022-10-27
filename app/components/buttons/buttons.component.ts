import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['../components.component.scss']
})
export class ButtonsComponent {
    isInverse = false;
    isInverse2 = false;
    isInverse3 = false;
    isInverse4 = false;
    isInverse5 = false;
  constructor() {}

  public classesConfig = [
    {
      'name': '.rvt-btn-primary',
      'description': 'The most eye-catching buttons used for calls to action'
    },
    {
      'name': '.rvt-btn-secondary',
      'description': 'Buttons used to complete less critical actions'
    },
    {
      'name': '.rvt-btn-tertiary',
      'description': 'Buttons used to give actions lower emphasis'
    },
    {
      'name': '.rvt-btn-text',
      'description': 'Alternate buttons that are less intrusive'
    },
    {
      'name': '.rvt-btn-icon',
      'description': 'Buttons that contain an icon'
    },
    {
      'name': '.loading',
      'description': 'Button waiting for an action to be completed behind the scenes'
    },
    {
      'name': '.inverse',
      'description': 'A button that will be placed over the primary color'
    }
  ];
}
