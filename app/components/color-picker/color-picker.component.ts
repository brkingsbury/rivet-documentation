import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html'
})
export class ColorPickerComponent {

  public colorvar = '#FFFFFF';
  public attrsConfig = [
    {
        'name': 'colorValue',
        'required': true,
        'type': 'string',
        'description': 'Two-way bound value that holds a hex string.'
    }
  ];
}
