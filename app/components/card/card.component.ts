import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../components.component.scss']
})
export class CardComponent {
  public classesConfig = [
    {
      'name': '.rvt-card',
      'description': 'Assigned to a container element to add padding and border'
    }
  ];
}
