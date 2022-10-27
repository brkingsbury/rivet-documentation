import { Component } from '@angular/core';

@Component({
    selector: 'app-icons',
    templateUrl: './icons.component.html',
    styleUrls: ['./icons.component.scss', '../styles.component.scss']
})

export class IconsComponent {
    searchText = '';
    alert = false;
    icons = [
        'add',
        'adjust',
        'amount',
        'arrange',
        'arrow-left',
        'auditsearch',
        'batch-processor',
        'beginning',
        'bell',
        'business-admin',
        'calculator',
        'caret-down',
        'caret-left',
        'caret-right',
        'caret-up',
        'chart',
        'chat-filled',
        'chat-outline',
        'check',
        'child',
        'clock',
        'critical-illness',
        'datepicker',
        'db-timer-tasks',
        'delete',
        'disability-insurance',
        'down-outlinearrow',
        'edit',
        'education',
        'end',
        'estimate',
        'exclamation1',
        'exclamation2',
        'family',
        'file',
        'graph',
        'help',
        'hidden',
        'life-insurance',
        'location-pin',
        'locked',
        'logging',
        'logout',
        'long-term-care-insurance',
        'menu-close',
        'menu-hamburger',
        'more',
        'move-down',
        'move-up',
        'naviplan-activity',
        'next',
        'pdf',
        'person',
        'presentation',
        'previous',
        'print',
        'purchase',
        'radio-unchecked',
        'radio-checked',
        'radio-unchecked-h',
        'radio-checked-h',
        'radio-read-only',
        'reassignclients',
        'reporteditor',
        'reset',
        'resync',
        'retirement',
        'search',
        'settings',
        'site-manager',
        'star',
        'subtract',
        'sync',
        'target',
        'teams',
        'templates',
        'unlocked',
        'up-outlinearrow',
        'visible',
        'worddoc',
        'xml-store'
    ];

    copyText(icoInput) {
        icoInput.select();
        document.execCommand('copy');
        icoInput.setSelectionRange(0, 0);
        this.alert = icoInput;
        setTimeout(() => {
            this.alert = false;
        }, 2000);
    }
}
