import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent {

  @Input() inputsConfig: Array<object>;
  @Input() outputsConfig: Array<object>;
  @Input() attrsConfig: Array<object>;
  @Input() classesConfig: Array<object>;

}
