import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['../components.component.scss']
})
export class TabsComponent {
  isInverse = false;

  public attrsConfig = [
    {
      'name': 'disableRipple ',
      'required': true,
      'description': 'Added on the mat-tab-group element to prevent ripple elemnts from being added.'
    }
  ];
  public classesConfig = [
    {
      'name': '.numbered-tabs ',
      'description': 'Changes styling of tabs, also requires some other structural changes to work.'
    }
  ];
}
