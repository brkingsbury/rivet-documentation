import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['../components.component.scss']
})
export class ToggleComponent {

  public isTsA = true;
  public isTsB = false;

  isDisabled = false;
  isRo = false;

  public mockFlag = false;
  public mockDisable = false;
  public mockReadOnly = true;

  public inputsConfig = [
    {
      'name': 'control',
      'type': 'FormControl',
      'description': 'The preferred method for controling toggle input is to use FormControl.'
    },
    {
      'name': 'checked',
      'type': 'boolean',
      'description': 'Flag that determines whether a slide toggle is checked.'
    },
    {
      'name': 'disabled',
      'type': 'boolean',
      'description': 'Flag that when set to true disables the slide toggle.'
    }
  ];
  public outputsConfig = [
    {
      'name': 'toggleEvent',
      'type': 'eventOutput<boolean>',
      'description': 'Event that returns a boolean value that reflects the toggles new state. Fires when the toggle itself is clicked.'
    }
  ];
  public classesConfig = [
    {
      'name': '.label-above',
      'description': 'css class that when added to the slide toggle will move the label to above the toggle'
    }
  ];

  checkbox = new FormControl('');


  public toggle() {
    this.checkbox.setValue(!this.checkbox.value);
    this.mockFlag = !this.mockFlag;
  }

  public disable() {
    this.checkbox.disabled ? this.checkbox.enable() : this.checkbox.disable();
    this.mockDisable = !this.mockDisable;
  }

  public toggleListener(response) {
    console.log(response);
    this.mockFlag = response;
  }

}
