import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './smart-funding-icon.component.html',
  styleUrls: ['../components.component.scss']
})
export class SmartFundingIconComponent {

  public inputsConfig = [
    {
      'name': 'smartFundingCharacter',
      'type': 'string',
      'description': 'Character displayed in the icon'
    },
    {
      'name': 'smartFundingTooltip',
      'type': 'string',
      'description': 'Text displayed in the tooltip'
    }
  ];
}
