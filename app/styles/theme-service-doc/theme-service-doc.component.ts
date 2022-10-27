import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-service-doc',
  templateUrl: './theme-service-doc.component.html'
})
export class ThemeServiceDocComponent implements OnInit {

  constructor() { }

  public attrsConfig = [
    {
        'name': 'themeStyles',
        'required': true,
        'type': 'object',
        'description': `An object in which each key corresponds to a Rivet
          variable name, and each value is the desired color value.
          (e.g. "--rvt-color-primary": "#ff00FF")`
    },
    {
        'name': 'themeStylesDark',
        'type': 'object',
        'required': false,
        'description': `An optional object in which each key corresponds
          to a Rivet variable name, and each value is the desired color value.
          (e.g. "--rvt-color-primary": "#ff00FF")`
    }
  ];

  ngOnInit(): void {
  }

}
