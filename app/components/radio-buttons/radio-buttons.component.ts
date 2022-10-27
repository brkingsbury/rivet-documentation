import { Component } from '@angular/core';

@Component({
  selector: 'app-radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['../components.component.scss']
})
export class RadioButtonsComponent {
  public attrsConfig = [
    {
      'name': 'disabled',
      'description': 'Applied directly on the input element, disables the input.'
    }
  ];
  public classesConfig = [
    {
      'name': '.rvt-radio',
      'required': true,
      'description': 'Applied on a wrapper element, sets up the basis for Rivet radio buttons.'
    },
    {
      'name': '.small-radio',
      'description': 'Applied directly on the input element, shrinks the radio button slightly.'
    },
    {
      'name': '.label-above',
      'description': 'Moves the label element above the radio button.'
    },
    {
      'name': '.read-only',
      'description': 'Applied directly on the input element, used with the disabled state to show a read-only radio.'
    }
  ];
  default = true;
  isDis = false;
  isRo = false;
  isSmall = false;
  isAbove = false;
}
