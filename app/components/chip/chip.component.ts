import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['../components.component.scss']
})
export class ChipComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor() { }

  public classesConfig = [
    {
      'name': '.rvt-chip',
      'description': 'Base chip'
    },
    {
      'name': '.rvt-chip--alpha',
      'description': 'Highest priority chip'
    },
    {
      'name': '.rvt-chip--bravo',
      'description': 'Second highest priorty chip'
    },
    {
      'name': '.rvt-chip--charlie',
      'description': 'Third highest priority chip'
    },
    {
      'name': '.rvt-chip--delta',
      'description': 'Fourth highest priority chip'
    },
    {
      'name': '.rvt-chip--echo',
      'description': 'Fifth highest priority chip'
    },
  ];
}
