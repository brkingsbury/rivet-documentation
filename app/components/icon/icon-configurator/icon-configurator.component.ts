import { Component } from '@angular/core';

@Component({
  selector: 'app-icon-config',
  templateUrl: './icon-configurator.component.html',
  styleUrls: ['./icon-configurator.component.scss']
})
export class IconConfiguratorComponent {

  iconString = '';
  iconName = '';
  iconSize = '';
  iconLabel = '';
  iconElement;
  // eventually import from icons.component.ts or actual icon files
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
    'xml-store'];

  sizes = ['sm', 'md', 'lg', 'xl'];

  updateIcon() {
    const sizeString = this.iconSize ? ' size="' + this.iconSize + '"' : '';
    this.iconString = '<rvt-icon name="' + this.iconName + '"' + sizeString + this.iconLabel + '></rvt-icon>';
    this.iconElement = '<rvt-icon name="' + this.iconName + '"' + sizeString + this.iconLabel + '></rvt-icon>';
  }

  updateName(name) {
    this.iconName = name;
    this.updateIcon();
  }

  updateSize(s) {
    this.iconSize = s;
    this.updateIcon();
  }

  updateLabel(label) {
    this.iconLabel = label;
    this.updateIcon();
  }
}
