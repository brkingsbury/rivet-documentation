import { Component } from '@angular/core';

@Component({
    selector: 'app-drawer',
    templateUrl: './drawer.component.html',
    styleUrls: ['../components.component.scss']
})
export class DrawerComponent {

    public inputsConfig = [
        {
            'name': 'drawerOpen',
            'type': 'boolean',
            'description': 'sets the drawer state to open or closed.'
        },
        {
            'name': 'toggleDrawer',
            'type': 'function()',
            'description': 'a public function that can be called on the component to toggle the drawer to the opposite state of what it is currently in.'
        },
        {
            'name': 'openDrawer',
            'type': 'function()',
            'description': 'a public function that can be called on the component to open the drawer.'
        },
        {
            'name': 'closeDrawer',
            'type': 'function()',
            'description': 'a public function that can be called on the component to close the drawer.'
        }
    ];
    public outputsConfig = [
        {
            'name': 'drawerCloseEvent',
            'type': 'EventEmitter<null>',
            'description': 'emits an event when the drawer is closed.'
        },
        {
            'name': 'apronClickEvent',
            'type': 'EventEmitter<null>',
            'description': 'emits an event when the apron backdrop behind the drawer is closed (useful for triggering a close event).'
        },

    ];

    toggleVariable = false;
    toggleVariableA = false;

    apronClick = function (): void {
        this.toggleDrawer();
    };
    toggleDrawerA = function (): void {
        this.toggleVariableA = !this.toggleVariableA;
    };

    toggleDrawer = function (): void {
        this.toggleVariable = !this.toggleVariable;
    };
}
