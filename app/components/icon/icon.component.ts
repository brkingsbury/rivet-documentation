import { Component } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['../components.component.scss', './icon.component.scss']
})
export class IconComponent {
  public inputsConfig = [
    {
      'name': 'name',
      'type': 'string',
      'required': true,
      'description': 'Name of the icon you want to use'
    },
    {
      'name': 'size',
      'type': 'string',
      'required': false,
      'description': 'Size of icon ("md" by default)'
    },
    {
      'name': 'label',
      'type': 'string',
      'required': false,
      'description': 'Optional label for accessibility - uses ARIA'
    }
  ];
}
