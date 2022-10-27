import { Component } from '@angular/core';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['../components.component.scss']
})
export class ExpansionPanelComponent {

  public inputsConfig = [
    {
      'name': 'preventCollapse',
      'type': 'boolean',
      'description': 'Defaulted to false, will lock the expansion state and disable the expansion buttons.'
    },
    {
      'name': 'hideExpansionContent',
      'type': 'boolean',
      'description': 'Defaulted to false, will hide the expand button and the expansion section. Unhide has 625ms delay to allow for the view to update.'
    },
    {
      'name': 'showCloseButton',
      'type': 'boolean',
      'description': 'Defaulted to true when not added.  Setting this value to false will hide the close button that is automatically added otherwise.'
    },
    {
      'name': 'panelExpanded',
      'type': 'boolean',
      'description': 'Defaulted to false, allows access to manual expand the panel. Expansion has 625ms delay to allow for the view to update.'
    },
    {
      'name': 'overlayDeleteBtnText',
      'type': 'string ',
      'description': 'Text for delete overlay "delete" button.'
    },
    {
      'name': 'overlayCancelBtnText',
      'type': 'string ',
      'description': 'Text for delete overlay "cancel" button.'
    }
  ];
  public outputsConfig = [
    {
      'name': 'addButtonCallback',
      'type': 'EventEmitter<null>',
      'description': 'Emits an event on click, will hide the add button if not set.'
    },
    {
      'name': 'deleteButtonCallback',
      'type': 'EventEmitter<null>',
      'description': 'Emits an event on click, will hide the add button if not set.'
    }
  ];
  mockDelete = function (e) {
    alert('deleted');
  };
}
