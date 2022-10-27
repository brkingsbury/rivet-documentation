import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-premium-variable-dialogue',
    templateUrl: './premium-variable-dialogue.component.html',
    styleUrls: ['../compatibility.component.scss']
})
export class PremiumVariableDialogueComponent {
    constructor(public dialogRef: MatDialogRef<PremiumVariableDialogueComponent>) { }

    public lessVariables = {
        '@text': '#192239',
        '@nav_text': '#192239',
        '@primary_navigation_base': '#EBEBEC',
        '@primary_navigation_text': '#192239',
        '@secondary_navigation_base': '#E7AA39',
        '@secondary_navigation_text': '#FFFFFF',
        '@primary_button_text': '#FFFFFF',
        '@primary_button_start': '#585096',
        '@primary_button_text_shadow': 'transparent',
        '@primary_button_text_hover_shadow': '@primary_button_text_shadow',
        '@secondary_button_text': '#585096',
        '@secondary_button_start': 'transparent',
        '@secondary_button_border': '#585096',
        '@content_highlight_base': '#F7F7F7',
        '@content_highlight_accent': '#EBEBEC',
        '@content_highlight_text': '#3E4B5B',
        '@content_highlight_hover': '#E4E4E4',
        '@input_border': '#3E4B5B',
        '@info_base': '@content_highlight_base',
        '@info_accent': '@content_highlight_accent',
        '@info_text': '@content_highlight_text',
        '@warning_base': '#F1CE8D',
        '@warning_accent': '#F7DAA8',
        '@warning_text': '#192239',
        '@error_base': '#F2DEDE',
        '@error_accent': '#CC5C59',
        '@error_text': '#C33F3B',
        '@required_base': '#C33F3B',
        '@disabled_base': '#efefef',
        '@disabled_accent': '#CCCCCC',
        '@disabled_text': '#999999',
        '@body_background': '#ffffff',
        '@slide_background': '#999999',
        '@content_background': '#ffffff',
        '@popup_border': '#888888',
        '@behind_schedule': 'red',
        '@ahead_of_schedule': '#008800',
        '@topnav_base': '#EBEBEC',
        '@topnav_background_text': '#192239',
        '@inactive_tab': '@body_background',
        '@goal_progress_table_blue_header': '#3265A4',
        '@goal_progress_table_blue_highlight': '#C1DFF5',
        '@goal_progress_table_alternate_row': '#EBEBEB',
        '@interactive_active': '@content_highlight_accent',
        '@interactive_base': '#FFFFFF',
        '@interactive_border': 'darken(@interactive_base, 10 %)',
        '@interactive_hover': '#EEEEEE',
        '@primary_button_end': 'transparent',
        '@primary_button_border': 'darken( @primary_button_start, 18 % )',
        '@topnav_hover': 'lighten( @topnav_base, 6.67 % )',
        '@topnav_border_light': '@topnav_hover',
        '@topnav_border_dark': 'darken( @topnav_base, 6.67 % )',
        '@ColorMenuBackground': '#ebebec',
        '@ColorMenuText': '#192239',
        '@ColorMenuAccent': '#e7aa39',
        '@ColorSiteBackground': '#FFFFFF',
        '@ColorSlideBackground': '#394059',
        '@ColorLogoBackground': 'transparent',
        '@ColorContentText': '#192239',
        '@ColorContentError': '#C72929',
        '@ColorInputBorder': '#6b7280',
        '@ColorAccentButtonBackground': '#585096',
        '@ColorAccentButtonBorderHover': '#292868',
        '@ColorAccentButtonBackgroundDisabled': '#bcc0c9',
        '@ColorButtonText': '#394059',
        '@ColorButtonTextDisabled': '#bcc0c9',
        '@ColorButtonBackgroundHover': '#ebebec',
        '@ColorStatusErrorAccent': '#C72929',
        '@ColorStatusWarningAccent': '#f1ce8d',
        '@ColorStatusInformationAccent': '#f7f7f7',
        '@ColorAccentSecondary': '#E1DFEC',
        '@ColorMenuBorder': '#6b7280',
        '@ColorPanelBorder': '#cbced5',
        '@ColorSiteDividers': '#ebebec',
        '@ColorMenuTextHover': '@ColorMenuText',
        '@ColorMenuTextActive': '@ColorMenuText',
        '@ColorMenuAccentHover': '@ColorMenuAccent',
        '@ColorMenuAccentActive': '@ColorMenuAccent',
        '@ColorPageNavText': '@ColorContentText',
        '@ColorPageNavPole': '@ColorSiteDividers',
        '@ColorPageNavPoleHover': '@ColorButtonTextDisabled',
        '@ColorPageNavPoleAccent': '@ColorMenuAccent',
        '@ColorPageNavCircleBackground': '@ColorSiteBackground',
        '@ColorPageNavCircleBorder': '@ColorSiteDividers',
        '@ColorPageNavCircleText': '@ColorContentText',
        '@ColorPageNavCircleAccentBackground': '@ColorMenuAccent',
        '@ColorPageNavCircleAccentBorder': '@ColorMenuAccent',
        '@ColorPageNavCircleAccentText': '@ColorContentText',
        '@ColorSiteOverlay': 'fade(@ColorSlideBackground, 70 %)',
        '@ColorContentHeader': '@ColorContentText',
        '@ColorContentBackgroundHighlight': '@ColorStatusInformationAccent',
        '@ColorContentBackgroundHighlightHover': '@ColorContentBackgroundHighlight',
        '@ColorContentBackgroundHighlightAccent': '@ColorAccentSecondary',
        '@ColorTextOnSecondary': '@ColorContentText',
        '@ColorContentLink': '@ColorAccentButtonBorderHover',
        '@ColorContentLinkHover': '@ColorAccentButtonBorderHover',
        '@ColorContentLinkActive': '@ColorAccentButtonBackground',
        '@ColorInputBorderFocus': '@ColorAccentButtonBorderHover',
        '@ColorInputBorderDisabled': '@ColorButtonTextDisabled',
        '@ColorInputBorderError': '@ColorContentError',
        '@ColorInputText': '@ColorContentText',
        '@ColorInputTextDisabled': '@ColorButtonTextDisabled',
        '@ColorInputTextError': ' @ColorContentText',
        '@ColorButtonBackground': 'transparent',
        '@ColorButtonBorder': '@ColorAccentButtonBackground',
        '@ColorButtonBorderHover': '@ColorButtonBackgroundHover',
        '@ColorButtonTextHover': '@ColorButtonText',
        '@ColorButtonBackgroundActive': '@ColorButtonBackgroundHover',
        '@ColorButtonBorderActive': '@ColorAccentButtonBorderHover',
        '@ColorButtonTextActive': '@ColorSiteBackground',
        '@ColorButtonBackgroundDisabled': '@ColorButtonBackground',
        '@ColorButtonBorderDisabled': '@ColorButtonTextDisabled',
        '@ColorAccentButtonBorder': '@ColorAccentButtonBackground',
        '@ColorAccentButtonText': '@ColorSiteBackground',
        '@ColorAccentButtonBackgroundHover': '@ColorAccentButtonBorderHover',
        '@ColorAccentButtonTextHover': '@ColorAccentButtonText',
        '@ColorAccentButtonBackgroundActive': '@ColorContentText',
        '@ColorAccentButtonBorderActive': '@ColorAccentButtonBorderHover',
        '@ColorAccentButtonTextActive': '@ColorAccentButtonText',
        '@ColorAccentButtonBorderDisabled': '@ColorAccentButtonBackgroundDisabled',
        '@ColorAccentButtonTextDisabled': '@ColorSiteBackground',
        '@ColorSecondaryButtonBackground': 'transparent',
        '@ColorSecondaryButtonBorder': '@ColorAccentButtonBackground',
        '@ColorSecondaryButtonText': '@ColorAccentButtonBackground',
        '@ColorSecondaryButtonBackgroundHover': 'fade(@ColorSecondaryButtonBorder, 10 %)',
        '@ColorSecondaryButtonBorderHover': '@ColorSecondaryButtonBorder',
        '@ColorSecondaryButtonTextHover': '@ColorSecondaryButtonText',
        '@ColorSecondaryButtonBackgroundActive': 'fade(@ColorSecondaryButtonBorder, 28 %)',
        '@ColorSecondaryButtonBorderActive': '@ColorAccentButtonBorderActive',
        '@ColorSecondaryButtonTextActive': '@ColorAccentButtonTextActive',
        '@ColorSecondaryButtonBackgroundDisabled': '@ColorSecondaryButtonBackground',
        '@ColorSecondaryButtonBorderDisabled': '@ColorAccentButtonBorderDisabled',
        '@ColorSecondaryButtonTextDisabled': '@ColorButtonTextDisabled',
        '@ColorTextButtonBackground': 'transparent',
        '@ColorTextButtonBackgroundHover': 'fade(@ColorMenuBorder, 10 %)',
        '@ColorTextButtonBackgroundActive': 'fade(@ColorMenuBorder, 28 %)',
        '@ColorStatusErrorHeadText': '@ColorContentError',
        '@ColorStatusWarningHeadText': '@ColorContentText',
        '@ColorStatusInformationHeadText': '@ColorContentText',
        '@ColorStatusMessageText': '@ColorContentText',
        '@ColorTopNavText': '@ColorMenuText',
        '@draft_status': '#339933',
        '@deployed_status': '@ColorAccentButtonBackground',
        '@where_you_are_gradient_start': '#9994BE',
        '@where_you_are_gradient_end': '#9994BE',
        '@where_you_should_be_gradient_start': '#585096',
        '@where_you_should_be_gradient_end': '#585096',
        '@positive_gradient_color1': '#292868',
        '@positive_gradient_color2': '#292868',
        '@negative_gradient_color1': '#C20505',
        '@negative_gradient_color2': '#C20505'
    };

    onExitClick(): void {
        this.dialogRef.close();
    }
}