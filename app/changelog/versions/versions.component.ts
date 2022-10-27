import { Component } from '@angular/core';

// ---------------------- Changelog template
// {
//     version: 'X.X.X',
//     date: 'X/X/XXXX',
//     note: 'Brief Summary of changes',
//     updates: [
//         {
//             category: 'Components',
//             bullets: [
//                 'Item 1 of component changes',
//                 'Item 2 of component changes'
//             ]
//         },
//         {
//             category: 'Design',
//             bullets: [
//                 'You dont have to use all 3 categories'
//             ]
//         },
//         {
//             category: 'Library - Updated documentation for:',
//             bullets: [
//                 'Something'
//             ]
//         },
//     ]
// }
// -------------------------------------------

export const versions = [
    {
        version: '5.14.1',
        date: '7/16/2021',
        note: 'Read only toggle, datepicker fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added styles for read-only slide toggles',
                    'Fixed datepicker color issues in dark mode'
                ]
            }
        ]
    },
    {
        version: '5.14.0',
        date: '6/24/2021',
        note: 'Icon component, chip updates, bug fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added new icon component for easier implementation',
                    'Chips now use modifiers for color options',
                    'Added 2 new chip colors',
                    'Fixed border issue on disabled checkboxes'
                ]
            }
        ]
    },
    {
        version: '5.13.3',
        date: '6/16/2021',
        note: 'Smart Funding Icon updates',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Update the smart funding icon component after design review',
                ]
            }
        ]
    },
    {
        version: '5.13.2',
        date: '6/16/2021',
        note: 'Tab nav style update',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Remove a style that was applied with an !important flag in tab nav',
                ]
            }
        ]
    },
    {
        version: '5.13.1',
        date: '6/15/2021',
        note: 'Inverse tab nav styles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Updates tab navigation to allow an option for inverse color styling',
                ]
            }
        ]
    },
    {
        version: '5.13.0',
        date: '6/14/2021',
        note: 'Smart Funding Icon Component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add component for handling the smart funding icon',
                ]
            }
        ]
    },
    {
        version: '5.12.4',
        date: '6/14/2021',
        note: 'Single slide carousel',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Hide pagination and next/previous arrows when there is only one slide.',
                ]
            }
        ]
    },
    {
        version: '5.12.3',
        date: '6/10/2021',
        note: 'Add tooltip delay parameter',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add an optional parameter to tooltips to delay their appearance by a number of milliseconds',
                ]
            }
        ]
    },
    {
        version: '5.12.2',
        date: '6/9/2021',
        note: 'Update carousel design',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Update the carousel to move the next/previous buttons below the slides, in order to make it more responsive.',
                ]
            }
        ]
    },
    {
        version: '5.12.1',
        date: '6/4/2021',
        note: 'Update mat-slider styles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Update styles related to material sliders to better handle the thumb label while sliding',
                ]
            }
        ]
    },
    {
        version: '5.12.0',
        date: '5/18/2021',
        note: 'Expansion panel header sizing fix',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add another mutation observer to expansion panel to adjust head height when content changes',
                ]
            }
        ]
    },
    {
        version: '5.11.4',
        date: '5/17/2021',
        note: 'Update color picker styles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Adjust the styling of the color picker component based on designer feedback',
                ]
            }
        ]
    },
    {
        version: '5.11.2 - 5.11.3',
        date: '5/13/2021',
        note: 'Rivet tile selection adjustments',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Adjusts the tile component so the main button is disabled when state is ReadOnly',
                ]
            }
        ]
    },
    {
        version: '5.11.1',
        date: '4/29/2021',
        note: 'Update color function service',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Updates the color service with generatePrimaryVariants and some internal functions to enable it',
                ]
            }
        ]
    },
    {
        version: '5.11.0',
        date: '4/14/2021',
        note: 'Add color picker component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add new component based on the color input type to utilize the browser based color picker',
                ]
            }
        ]
    },
    {
        version: '5.10.7',
        date: '4/14/2021',
        note: 'Add visible/hidden icons',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Added an icon for "hidden"',
                    'Added an icon for "visible"',
                ]
            }
        ]
    },
    {
        version: '5.10.6',
        date: '4/14/2021',
        note: 'Add Chip Component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Adds chip component for use in marking goal priority',
                ]
            }
        ]
    },
    {
        version: '5.10.5',
        date: '4/5/2021',
        note: 'Table background color',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Updated table componets to have a transparent background (so as to blend in with the background it is placed on).',
                ]
            }
        ]
    },
    {
        version: '5.10.4',
        date: '4/1/2021',
        note: 'Expansion panel fix',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added a condition to the bottom button bar of expansion panels to prevent excess spacing when there are no buttons',
                ]
            }
        ]
    },
    {
        version: '5.10.3',
        date: '3/29/2021',
        note: 'Update expansion panel mutationObserver',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Changed the scope of what the expansion panel mutation observer would observe, to prevent infinite loops in Essentials.',
                ]
            }
        ]
    },
    {
        version: '5.10.2',
        date: '3/26/2021',
        note: 'Fix themeService bug',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Update bug where dark mode configs were referencing light mode variables.',
                ]
            }
        ]
    },
    {
        version: '5.10.1',
        date: '3/25/2021',
        note: 'Update expansion panels to be dynamic',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Updated expansion panel components with a mutationObserver, in order to allow the height to change with changing content height',
                ]
            }
        ]
    },
    {
        version: '5.10.0',
        date: '3/25/2021',
        note: 'Theme service update for custom theming',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Updated theme service with applyCustomTheme function',
                ]
            }
        ]
    },
    {
        version: '5.9.4',
        date: '3/08/2021',
        note: 'Menu styles and various fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Styles for menu/popover component',
                    'Fixed pagination tooltip styles',
                    'Fixed mini-expansion panel background issue',
                    'Fixed multi-select dropdown checkbox styles'
                ]
            }
        ]
    },
    {
        version: '5.9.3',
        date: '2/22/2021',
        note: 'Dark mode styling updates',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'New dark mode styling improvements for checkboxes, text-areas, expansion panels, andd slide toggles.',
                    'New styles for tooltips in both light and dark modes',
                    'Updated elevation styles to improve how shadow follows component shape'
                ]
            }
        ]
    },
    {
        version: '5.9.2',
        date: '2/10/2021',
        note: 'Multi-select dropdown styles and other fixes',
        updates: [
            {
                category: 'Dropdowns',
                bullets: [
                    'Added styles and documentation for multi-select dropdown',
                    'Fixed autocomplete dropdown styles for dark mode'
                ]
            },
            {
                category: 'Buttons',
                bullets: [
                    'Button color adjustments for dark mode',
                    'Inverse button style fixes for dark mode',
                    'New disabled styles for most buttons'
                ]
            }
        ]
    },
    {
        version: '5.9.1 - Deprecated',
        date: '2/09/2021',
        updates: [
            {
                category: 'This version is deprecated, please use v5.9.2 instead'
            }
        ]
    },
    {
        version: '5.9.0',
        date: '1/29/2021',
        note: 'Rvt-tile ReadOnly state',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added ReadOnly state to rvt-tile'
                ]
            }
        ]
    },
    {
        version: '5.8.3',
        date: '1/28/2021',
        note: 'Input + Dropdown darkmode styles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Improved contrast of inputs and dropdowns in dark mode',
                    'Improved contrast of read-only styles for inputs and dropdowns',
                    'Updated invalid red color for dark mode',
                    'Fixed double border in disabled tiles'
                ]
            }
        ]
    },
    {
        version: '5.8.2',
        date: '1/20/2021',
        note: 'Expansion Panel parameter',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added a parameter to Expansion Panels to allow hiding of the close button that is defaulted to be shown.'
                ]
            }
        ]
    },
    {
        version: '5.8.1',
        date: '1/15/2021',
        note: 'Invalid input fix, new icons',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fixed issue with invalid input styles showing up at the wrong time when using rvt-form-field.'
                ]
            },
            {
                category: 'Styles',
                bullets: [
                    'Added goal target icon <code>rivet-icon-target</code>',
                    'Added filter/adjust icon <code>rivet-icon-adjust</code>'
                ]
            }
        ]
    },
    {
        version: '5.8.0',
        date: '1/13/2021',
        note: 'Added Carousel Component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added the carousel component to support the goals dashboard in Essentials.'
                ]
            }
        ]
    },
    {
        version: '5.7.3',
        date: '12/29/2020',
        note: 'Temporarily disable buttons of disabled tiles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Disables Rivet tile buttons when the tile itself is disabled.'
                ]
            }
        ]
    },
    {
        version: '5.7.2',
        date: '12/9/2020',
        note: 'Component styling updates',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Fixed dark mode styling for tiles and sliders',
                    'Updated read-only dropdown styles',
                    'Removed helper text from read-only inputs and dropdowns',
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Improved dropdown documentation'
                ]
            }
        ]
    },
    {
        version: '5.7.1',
        date: '11/20/2020',
        note: 'Patch color update',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Updates the values assigned to some color variables',
                    'assigns color variables to the drawer component'
                ]
            }
        ]
    },
    {
        version: '5.7.0',
        date: '11/18/2020',
        note: 'Input style update',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Add read-only styles',
                    'Make inputs + dropdowns more specific to prevent styles overriding eachother',
                    'Update invalid styles to include class from form-field-directive',
                    'Fix input height changing in different states (specifically disabled)',
                    'Cleaned up code'
                ]
            }
        ]
    },
    {
        version: '5.6.1',
        date: '11/13/2020',
        note: 'Patch Fix',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Added print icon to icon font',
                    'added contrast friendly data colors',
                    'Added new neutral variables for contrast that show up on dark backgrounds regardless of dark or light mode',
                    'Fixed pagination color var assignment',
                    'added neutral and color icon variables',
                    'added head background color to supply color for top nav structures'
                ]
            }
        ]
    },
    {
        version: '5.6.0',
        date: '11/10/2020',
        note: 'rvt-form-field',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Adopted rvt-form-field directive from Essentials project'
                ]
            }
        ]
    },
    {
        version: '5.5.0',
        date: '10/2/2020',
        note: 'Tertiary Button',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added new Rivet tertiary button',
                    'Changed cursor for disabled rvt-tile to default',
                    'Added required styling for text-areas'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Improved documentation for rvt-text-area',
                    'Fixed incorrect spacing value (xl)',
                    'Changed example component sections to use white background to better represent how components appear in product'
                ]
            }
        ]
    },
    {
        version: '5.4.0',
        date: '9/22/2020',
        note: 'Rivet tile changes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Changed rvt-tile selection to be linked to states. Added state for pending tiles.'
                ]
            }
        ]
    },
    {
        version: '5.3.6',
        date: '9/8/2020',
        note: 'Patch Fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fix tooltip appearing on string change',
                    'Fix focus styles for auto-complete and dropdown',
                    'Allow text wrapping for text-areas',
                    'Fix input invalid styles',
                    'Fixed Primary button active state color in dark mode'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Improved input documentation to include code examples for different attributes',
                    'Fixed styles > colors from showing both light and dark mode values in light mode'
                ]
            }
        ]
    },
    {
        version: '5.3.5',
        date: '8/28/2020',
        note: 'Patch Fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add logic to tooltips to re-center themselves when configuration string is changed'
                ]
            },
            {
                category: 'Styles',
                bullets: [
                    'Add rvt-icon-chat-outline and rvt-icon-chat-filled to support feedback links'
                ]
            }
        ]
    },
    {
        version: '5.3.4',
        date: '8/24/2020',
        note: 'Patch Fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fixed mat-autocomplete dropdown text to use Nunito font',
                    'Removved focus outline on mini-expansion panels',
                    'Fixed tooltip memory leak',
                    'Fixed tile focus styles from not representing current tile state'
                ]
            },
            {
                category: 'Styles',
                bullets: [
                    'Increase rvt-font-h to 1.4rem (14px)'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Updated dialog docs to show correct button order'
                ]
            }
        ]
    },
    {
        version: '5.3.3',
        date: '8/14/2020',
        note: 'Angular 10 Upgrade',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Changes the delete icon from an X to a trash can'
                ]
            }
        ]
    },
    {
        version: '5.3.2',
        date: '7/7/2020',
        note: 'Update YML file',
        updates: [
            {
                category: 'Build',
                bullets: [
                    'Switch to Ubuntu image',
                    'Add a check that skips the publish step if not built from Master'
                ]
            }
        ]
    },
    {
        version: '5.3.1',
        date: '7/7/2020',
        note: 'Remove postinstall script',
        updates: [
            {
                category: 'Build',
                bullets: [
                    'Remove an unnecessary script that was causing problems in other projects '
                ]
            }
        ]
    },
    {
        version: '5.3.0',
        date: '7/7/2020',
        note: 'Angular 10 Upgrade',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'This release updates the Angular library to version 10'
                ]
            }
        ]
    },
    {
        version: '5.2.1',
        date: '7/7/2020',
        note: 'Patch Release',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Card component styles adjusted to match border styles of Sketch design components',
                    'Various color variable adjustments to make components look good in dark mode',
                    'Text inputs now have available t-shirt sizes to help standardize widths',
                    'Added styles for material autocomplete component (mat-autocomplete)'
                ]
            }
        ]
    },
    {
        version: '5.2.0',
        date: '6/26/2020',
        note: 'Add parameters to snackbar',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added additional parameter to optionally style snackbar as "error" or "success"'
                ]
            }
        ]
    },
    {
        version: '5.1.0', // <<<< - MAKE SURE THIS IS CORRECT BEFORE MERGE
        date: '6/23/2020',
        note: 'Elevation, font-weights and neutral-colors',
        updates: [
            {
                category: 'Patterns',
                bullets: [
                    'Added elevation styles and documentation.'
                ]
            },
            {
                category: 'Styles',
                bullets: [
                    'Update neutral color names to make more sense with different themes',
                    'Increased rvt-font-weight bold to 700 (from 600)',
                    'Set font mixins to default to rvt-font-weight-regular'
                ]
            },
            {
                category: 'Components',
                bullets: [
                    'Added elevation styles to datepickers, dropdowns, snackbars, tooltips, and drawers.'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Fixed color documentation being incorrect in dark mode.'
                ]
            }
        ]
    },
    {
        version: '5.0.0',
        date: '6/16/2020',
        note: 'Major Release',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Brand new service to support dark mode!  See Styles > Dark Mode Service for documentation',
                    'Type system updates - new font sizes and variable names applied to type system',
                    'Cleanup of unused code and unused Material modules'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Updates to make Angular inputs and outputs types more legible.',
                    'Dark mode documentation'
                ]
            }
        ]
    }
];

export const version4 = [
    {
        version: '4.9.3',
        date: '6/8/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fix table hover styles + divider',
                    'Fix hover/focus styles on tiles'
                ]
            }
        ]
    },
    {
        version: '4.9.2',
        date: '5/27/2020',
        note: 'Location Pin Icon',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Adds a map pin style icon, similar to a plumbob found in map applications.'
                ]
            }
        ]
    },
    {
        version: '4.9.1',
        date: '5/26/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add logic to prevent tooltips from overflowing off the left or right edge of the screen',
                    'Adjust mat-hint to have dynamic height driven by text length',
                    'Add configuration for Rivet mini expansion panel to configure caret direction'
                ]
            }
        ]
    },
    {
        version: '4.9.0',
        date: '5/26/2020',
        note: 'Non-selectable tile',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Tiles can now be non-selectable by not passing in a (tileSelect) event'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Update to tile documentation and created a configuration editor to make it easier to understand the different tile options.'
                ]
            }
        ]
    },
    {
        version: '4.8.5',
        date: '5/12/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fixed button color variable typo',
                    'Fixed dropdown overlay styling to prevent global issues'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Fixed issue with missing headers'
                ]
            }
        ]
    },
    {
        version: '4.8.4',
        date: '5/11/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Reverts accidental merge from previous version, includes intended bug fixes',
                    'Fixed tooltip bug that added page height in IE and Firefox',
                    'Add icon for arrow-left to support Essentials'
                ]
            }
        ]
    },
    {
        version: '4.8.3 - Deprecated',
        date: '5/11/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'THIS VERSION HAS BEEN DEPRICATED DUE TO AN ACCIDENTAL BREAKING MERGE THAT WAS INCLUDED',
                    'Fixed tooltip bug that added page height in IE and Firefox',
                    'Add icon for arrow-left to support Essentials'
                ]
            }
        ]
    },
    {
        version: '4.8.2',
        date: '4/17/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fixed duplicate BrowserModule error, switched to CommonModule'
                ]
            }
        ]
    },
    {
        version: '4.8.1',
        date: '4/13/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fixed drop shadow on mat-card elements',
                    'Allow click events through disabled buttons to enable tooltips'
                ]
            }
        ]
    },
    {
        version: '4.8.0',
        date: '4/6/2020',
        note: 'Spacing variables + classes!',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'New CSS variables for standard spacing sizes',
                    'New classes for standard margin/padding spacing sizes'
                ]
            }
        ]
    },
    {
        version: '4.7.2',
        date: '4/6/2020',
        note: 'Drawer Apron Click',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Apron backdrops behind a rvtDrawer will now fire an event when clicked through an output'
                ]
            }
        ]
    },
    {
        version: '4.7.1',
        date: '3/30/2020',
        note: 'Patch fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added invalid text color to theme variables',
                    'Fix disabled input styling',
                    'Keyboard only focus styles fixed for tiles and link buttons',
                    'Adjusted tooltip z-index to be compatible with drawers',
                    'Added crossfade on drawer apron'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Added new view layout to color styles'
                ]
            }
        ]
    },
    {
        version: '4.7.0',
        date: '3/25/2020',
        note: 'Tile updates',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added form-control to tile components',
                    'Added disabled style to select-only tiles'
                ]
            }
        ]
    },
    {
        version: '4.6.3',
        date: '3/13/2020',
        note: 'Various fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Fixed Tile button bug for Safari',
                    'Fix for dropdowns that enables the user to click on the header of a dropdown to collapse it (previously prevented by padding on the drop list).'
                ]
            },
            {
                category: 'Documentation',
                bullets: [
                    'Added links with button styles'
                ]
            }
        ]
    },
    {
        version: '4.6.2',
        date: '3/3/2020',
        note: 'Add inverse styles',
        updates: [
            {
                category: 'Styles',
                bullets: [
                    'Added inverse styles for buttons, links, and tabs.'
                ]
            },
            {
                category: 'Components',
                bullets: [
                    'Added ability to use button styles for <a> tags.',
                    'Fix toggle styling issue',
                    'Tile styling adjustments'
                ]
            }
        ]
    },
    {
        version: '4.6.1',
        date: '3/3/2020',
        note: 'Add edit to Tile config',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added editText to Tile config to allow edit string to be passed in.',
                    'Minor tile styling updates.'
                ]
            }
        ]
    },
    {
        version: '4.6.0',
        date: '3/2/2020',
        note: 'Add Tile Component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added tile component with selection. Additional functionality for editing and deleting.'
                ]
            }
        ]
    },
    {
        version: '4.5.1',
        date: '2/27/2020',
        note: 'Add Card Component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added a class to supply a unified Card style.'
                ]
            }
        ]
    },
    {
        version: '4.5.0',
        date: '2/27/2020',
        note: 'Add Slide Toggle Component',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Added a brand new Slide Toggle component to toggle a boolean variable either within or outside of a form.'
                ]
            }
        ]
    },
    {
        version: '4.4.1',
        date: '2/26/2020',
        note: 'Consolidate CSS Variable Definitions',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Moved all CSS Variable definitions into themeVariables.scss'
                ]
            }
        ]
    },
    {
        version: '4.4.0',
        date: '2/18/2020',
        note: 'Upgrading to Angular 9',
        updates: [
            {
                category: 'Versioning',
                bullets: [
                    'Upgraded all Angular components to version 9',
                    'Bumped Rivet-Style package version up to 4.4.0 (Also with Angular 9)'
                ]
            }
        ]
    },
    {
        version: '4.3.5',
        date: '1/17/2020',
        note: 'Responsive font size fix',
        updates: [
            {
                category: 'Type',
                bullets: [
                    'Fixed a bug with responsive font sizes not importing correctly'
                ]
            }
        ]
    },
    {
        version: '4.3.4 - Depricated',
        date: '1/17/2020',
        note: 'Pipeline change',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'This package has been depricated because it was generated as a test during the seperation of the two Rivet repositories.'
                ]
            }
        ]
    },
    {
        version: '4.3.3',
        date: '1/17/2020',
        note: 'Responsive font sizes',
        updates: [
            {
                category: 'Type',
                bullets: [
                    'All font mixins that corrispond to a header tag now have min and max values and are responsive to screen size',
                    'font mixins now also have classes available to assign from HTML'
                ]
            }
        ]
    },
    {
        version: '4.3.2',
        date: '1/17/2020',
        note: 'Update Polyfill to not update URLs for IE',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Fixed a bug where URL were getting parsed incorrectly in IE']
            }
        ]
    },
    {
        version: '4.3.1',
        date: '1/16/2020',
        note: 'Tooltip position fix',
        updates: [
            {
                category: 'Components',
                bullets: ['Fixed a bug with tooltip top offset position in global positioned mode']
            }
        ]
    },
    {
        version: '4.3.0',
        date: '1/10/2020',
        note: 'Font Mixins',
        updates: [
            {
                category: 'Type',
                bullets: ['Add font mixin variables']
            }
        ]
    },
    {
        version: '4.2.7',
        date: '1/10/2020',
        note: 'Tooltip position update',
        updates: [
            {
                category: 'Components',
                bullets: ['Add rvtTooltipAbsolutePos as an option on tooltips to allow appending to body instead of inline']
            }
        ]
    },
    {
        version: '4.2.6',
        date: '1/10/2020',
        note: 'Angular Upgrade',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Upgrade Rivet to Angular 9 rc8']
            }
        ]
    },
    {
        version: '4.2.5',
        date: '1/09/2020',
        note: 'Angular Upgrade',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Upgrade Rivet to Angular 9 rc7']
            }
        ]
    },
    {
        version: '4.2.4',
        date: '1/7/2020',
        note: 'Additional Icons',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add batch-processor icon',
                    'Add db-timer-tasks icon',
                    'Add logging icon',
                    'Add naviplan-activity icon',
                    'Add site-manager icon',
                    'Add teams icon',
                    'Add xml-store icon'
                ]
            }
        ]
    },
    {
        version: '4.2.3',
        date: '12/18/2019',
        note: 'Drawer scrolling',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add scrollbars to drawers to handle longer content',
                    'Add logic to remove scrollbars on main page when drawer is open'
                ]
            }
        ]
    },
    {
        version: '4.2.2',
        date: '12/06/2019',
        note: 'The Color Update!',
        updates: [
            {
                category: 'Rivet',
                bullets: [
                    'New CSS variables have been created for use going forward',
                    'Component styles have been linked to new color variables',
                    'Minor styling fixes have been added to various components'
                ]
            }
        ]
    },
    {
        version: '4.1.1',
        date: '11/25/2019',
        note: 'Drawer fix',
        updates: [
            {
                category: 'Components',
                bullets: ['Fixed flashing animation of drawer on render']
            }
        ]
    },
    {
        version: '4.1.0',
        date: '11/21/2019',
        note: 'Angular Upgrade',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Upgrade Rivet to Angular 9 rc2']
            },
            {
                category: 'Components',
                bullets: ['Added generic drawer component for Essentials']
            }
        ]
    },
    {
        version: '4.0.2',
        date: '11/12/2019',
        note: 'Polyfill style fix',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Fix broken link to CSS variable polyfil style']
            }
        ]
    },
    {
        version: '4.0.1',
        date: '11/8/2019',
        note: 'Allow for using button styles outside of Angular app',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Removed dependency on Angular Material from buttonStyles.scss']
            }
        ]
    },
    {
        version: '4.0.0',
        date: '11/8/2019',
        note: 'CSS Variables',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Breaking change for legacy browsers unless you add the rvtPolyfill',
                    'Updated variables to use CSS Custom Properties',
                    'Added polyfill for legacy browser CSS Custom Property support'
                ]
            },
            {
                category: 'Style',
                bullets: ['Added CSS Variable column']
            }
        ]
    }
];

// +++++++++++++++++++  PRE 4.0 VERSIONS +++++++++++++++++++++++++

export const oldVersions = [
    {
        version: '3.5.14',
        date: '6/26/2020',
        note: 'Expansion panel fix',
        updates: [
            {
                category: 'Components',
                bullets: ['Fixed a bug with expansion panels that makes it handle dynamic content better']
            }
        ]
    },
    {
        version: '3.5.13',
        date: '1/16/2020',
        note: 'Tooltip position fix',
        updates: [
            {
                category: 'Components',
                bullets: ['Fixed a bug with tooltip top offset position in global positioned mode']
            }
        ]
    },
    {
        version: '3.5.12',
        date: '1/10/2020',
        note: 'Tooltip position update',
        updates: [
            {
                category: 'Components',
                bullets: ['Add rvtTooltipAbsolutePos as an option on tooltips to allow appending to body instead of inline']
            }
        ]
    },
    {
        version: '3.5.11',
        date: '1/7/2020',
        note: 'Additional Icons',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Add batch-processor icon',
                    'Add db-timer-tasks icon',
                    'Add logging icon',
                    'Add naviplan-activity icon',
                    'Add site-manager icon',
                    'Add teams icon',
                    'Add xml-store icon'
                ]
            }
        ]
    },
    {
        version: '3.5.10',
        date: '12/03/2019',
        note:
            'Changing button text inputs in expansion panel component to an object of strings. Adding close button input.',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Changing button text inputs in expansion panel component to an object of strings. Adding close button input.'
                ]
            }
        ]
    },
    {
        version: '3.5.9',
        date: '11/11/2019',
        note: 'Adding some extra padding in expanded expansion panel',
        updates: [
            {
                category: 'Components',
                bullets: ['Add padding in expanded expansion panel']
            }
        ]
    },
    {
        version: '3.5.8',
        date: '11/8/2019',
        note: 'Release version',
        updates: [
            {
                category: 'Library',
                bullets: ['Release branch cut to support Guided Retirement']
            }
        ]
    },
    {
        version: '0.5.8',
        date: '11/7/2019',
        note: 'Allow translations in expansion panel',
        updates: [
            {
                category: 'Components',
                bullets: ['Remove hard coded strings in expansion panel', 'see documentation page for implementation details']
            }
        ]
    },
    {
        version: '0.5.7',
        date: '11/5/2019',
        note: 'Adjust rivet expansion panel',
        updates: [
            {
                category: 'Components',
                bullets: ['Clean up to use detectChanges when calling outside of angular and update documentation.']
            }
        ]
    },
    {
        version: '0.5.6',
        date: '11/4/2019',
        note: 'Adjust tooltips',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Assign max width of 300px to tooltips',
                    'Adjust tooltip placement logic to get around flexbox issues'
                ]
            }
        ]
    },
    {
        version: '0.5.5',
        date: '11/3/2019',
        note: 'Make expanded state an input',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Make expansion panel component expanded property an @Input so we can expand the panel programmatically'
                ]
            }
        ]
    },
    {
        version: '0.5.4',
        date: '11/1/2019',
        note: 'Adjust tooltip anchor',
        updates: [
            {
                category: 'Components',
                bullets: ['Adjusted Rivet tooltips to render on AfterViewInit to prevent getting lost in Material components']
            }
        ]
    },
    {
        version: '0.5.3',
        date: '10/29/2019',
        note: 'Convert Radio Buttons to SVG and refactor icon approach',
        updates: [
            {
                category: 'Design',
                bullets: [
                    'Radio buttons are now made from SVG icons',
                    '!IMPORTANT: anyone referencing icons through a unicode character in css will have to update those references',
                    'see icon documentation page for details on atypical icon use'
                ]
            }
        ]
    },
    {
        version: '0.5.2',
        date: '10/22/2019',
        note: 'Update Expansion Panels',
        updates: [
            {
                category: 'Components',
                bullets: ['Disable buttons on input flag and removed unused formgroups on the expansion panel.']
            }
        ]
    },
    {
        version: '0.5.0',
        date: '10/22/2019',
        note: 'Add Rivet Tooltips',
        updates: [
            {
                category: 'Components',
                bullets: ['Add all new Rivet tooltip directive', 'Use tooltips for mouseover or manually triggered events']
            }
        ]
    },
    {
        version: '0.4.2',
        date: '10/17/2019',
        note: 'Fixed radio styles for other browsers, compliance checks',
        updates: [
            {
                category: 'Components',
                bullets: ['Updated radio styles to work in all browsers', 'Added keyboard focus styles into base components']
            },
            {
                category: 'Library',
                bullets: ['Checkboxes and radio buttons are now verified to be accessible']
            }
        ]
    },
    {
        version: '0.4.1',
        date: '10/15/2019',
        note: 'Updating the rivet expansion delete overlay',
        updates: [
            {
                category: 'Components',
                bullets: ['Rivet expansion delete overlay to overlay the expanded fields.']
            },
            {
                category: 'Documentation',
                bullets: ['Updated rivet expansion documentation to include attributes']
            }
        ]
    },
    {
        version: '0.4.0',
        date: '10/14/2019',
        note: 'New radio button, fixed pagination bug',
        updates: [
            {
                category: 'Components',
                bullets: ['Added Rivet radio button', 'Fixed icon references for table pagination']
            },
            {
                category: 'Documentation',
                bullets: ['Updated checkbox documentation to include attributes']
            }
        ]
    },
    {
        version: '0.3.20',
        date: '10/11/2019',
        note: 'More expansion panel updates',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Delay the automatic opening of the expansion panel when the flag is set.' +
                    ' Does not affect default behavior only on hideExpansionContent.'
                ]
            }
        ]
    },
    {
        version: '0.3.19',
        date: '10/9/2019',
        note: 'More expansion panel fixes and checkbox styles',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Add input to prevent the expansion panel from collapsing.']
            },
            {
                category: 'Styles',
                bullets: ['Adjust font styles in labels above checkboxes']
            }
        ]
    },
    {
        version: '0.3.18',
        date: '10/9/2019',
        note: 'Configurable expansion panel',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Added an optional input binding that allows you to hide the expanded button and section, defaulted to show.'
                ]
            }
        ]
    },
    {
        version: '0.3.17',
        date: '10/9/2019',
        note: 'Updated table styles and color variables',
        updates: [
            {
                category: 'Components',
                bullets: ['Fixed table hover styles', 'Added required input styles']
            },
            {
                category: 'Styles',
                bullets: ['Added data color variables']
            }
        ]
    },
    {
        version: '0.3.16',
        date: '10/7/2019',
        note: 'Added mini expansion panel and accordion group',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Added advicent-rivet-mini-expansion-panel',
                    'Added advicent-rivet-accordion-group',
                    'both components can be found under components/mini expansion panel'
                ]
            }
        ]
    },
    {
        version: '0.3.13',
        date: '9/23/2019',
        note: 'Icon font builder added, build process updated',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Add icon-font-generator as a dependency',
                    'Moved all icon svgs to rivet-icon folder',
                    'Added Handlebars template to facilitate icon style build',
                    'Added "build_icons" step to build_lib script'
                ]
            }
        ]
    },
    {
        version: '0.3.10',
        date: '9/09/2019',
        note: 'Library updates, Snackbar added',
        updates: [
            {
                category: 'Components',
                bullets: ['Snackbar component added']
            },
            {
                category: 'Library',
                bullets: ['Added new accessibility compliance badge', 'Sketch files added to component documentation']
            }
        ]
    },
    {
        version: '0.3.8',
        date: '8/27/2019',
        note: 'New Icons, Updated styles',
        updates: [
            {
                category: 'Components',
                bullets: ['Updated table styles']
            },
            {
                category: 'Styles',
                bullets: [
                    'Added new icons: up-outlinearrow , down-outlinearrow',
                    'Added 700 font weight to Nunito Sans font',
                    'Updated Persona with elevation guidelines'
                ]
            }
        ]
    },
    {
        version: '0.3.7',
        date: '8/22/2019',
        note: 'Disabled ViewEncapsulation for Rivet expansion panel component.',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Disabled ViewEncapsulation for Rivet expansion panel component.']
            }
        ]
    },
    {
        version: '0.3.6',
        date: '8/2/2019',
        note: 'Updated Hammerjs to be a dependency of Rivet-Style and added it as a bundled dependency.',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Moved Hammerjs to dependency from peer dependency.',
                    'Added Hammerjs as a bundled dependency to Rivet-Style package.'
                ]
            }
        ]
    },
    {
        version: '0.3.5',
        date: '8/1/2019',
        note: 'Updated expansion panel configurations, import needed dependency',
        updates: [
            {
                category: 'Rivet package',
                bullets: [
                    'Import Hammerjs dependency to app-module so projects that utilize Rivet do not need to import Hammerjs when needed'
                ]
            },
            {
                category: 'Components',
                bullets: ['Expansion panels dos not show the delete button if no delete callbacks where passed in']
            }
        ]
    },
    {
        version: '0.3.4',
        date: '8/1/2019',
        note: 'Hammerjs added, new icon, fixed styles',
        updates: [
            {
                category: 'Rivet package',
                bullets: ['Added Hammerjs dependency to Rivet package']
            },
            {
                category: 'Components',
                bullets: ['Fixed buttons not having a set font causing browser defaults', 'Fixed icon button resizing']
            },
            {
                category: 'Styles',
                bullets: ['Added logout icon to icon font']
            }
        ]
    },
    {
        version: '0.2.14',
        date: '7/16/2019',
        note: 'Added icons',
        updates: [
            {
                category: 'Styles',
                bullets: ['Added following icons: moveup, movedown, star, auditsearch, reassignclients and templates']
            }
        ]
    },
    {
        version: '0.2.12',
        date: '5/30/2019',
        note: 'Update tab and input styles',
        updates: [
            {
                category: 'Components',
                bullets: ['Update to tabs and inputs to account for material overrides']
            },
            {
                category: 'Library',
                bullets: ['Split up parts into separate pages to improve performance and navigation']
            }
        ]
    },
    {
        version: '0.2.10',
        date: '5/3/2019',
        note: 'New checkboxes and slider. Library parts split into separate pages.',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'New Rivet version of checkboxes, material version is being deprecated',
                    'Slider has been added to library'
                ]
            },
            {
                category: 'Library',
                bullets: ['Split up parts into separate pages to improve performance and navigation']
            }
        ]
    },
    {
        version: '0.2.9',
        date: '4/29/2019',
        note: 'Update to color variables + bug fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Radio & Checkbox styles updated',
                    'Disabled & Invalid color variables added to components',
                    'Component styles cleaned up'
                ]
            }
        ]
    },
    {
        version: '0.2.8',
        date: '4/24/2019',
        note: 'Delete overlay styling',
        updates: [
            {
                category: 'Style',
                bullets: ['Moved delete overlay styling into a shared overlay stylesheet']
            }
        ]
    },
    {
        version: '0.2.7',
        date: '4/22/2019',
        note: 'Expansion panel add button configurability',
        updates: [
            {
                category: 'Components',
                bullets: ['Expansion panel: Make add button optional']
            }
        ]
    },
    {
        version: '0.2.6',
        date: '4/18/2019',
        note: 'Migrate event picker out of Rivet and into NaviPlanWeb',
        updates: [
            {
                category: 'Components',
                bullets: ['Migrate event picker component out of Rivet', 'Update side navigation and example component']
            }
        ]
    },
    {
        version: '0.2.5',
        date: '4/18/2019',
        note: 'Expansion panel validation',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Expansion panel: Add optional form input for validation',
                    'Expansion panel: Small styling fix on Close button'
                ]
            }
        ]
    },
    {
        version: '0.2.4',
        date: '4/16/2019',
        note: 'Update the side navigation',
        updates: [
            {
                category: 'Library',
                bullets: [
                    'Removed custom text inputs from the side navigation',
                    'Rearrange the side navigation options to reflect what is on the page'
                ]
            }
        ]
    },
    {
        version: '0.2.3',
        date: '4/16/2019',
        note: 'Migrate currency and percentage input directives out of Rivet and into NaviPlanWeb',
        updates: [
            {
                category: 'Components',
                bullets: ['Migrate currency input directive out of Rivet', 'Migrate percentage input directive out of Rivet']
            }
        ]
    },
    {
        version: '0.2.2',
        date: '4/16/2019',
        note: 'IE Bug fix, New Variables',
        updates: [
            {
                category: 'Components',
                bullets: ['Fixed style bugs for tabs in IE11', 'Expansion panel tab focus fixed']
            },
            {
                category: 'Style',
                bullets: [
                    'New variables for base component styles: rvt-disabled-color, rvt-disabled-text-color, rvt-invalid-color'
                ]
            },
            {
                category: 'Library',
                bullets: ['Uncommented code in polyfill.ts for proper Rivet functionality in IE']
            }
        ]
    },
    {
        version: '0.2.0',
        date: '4/11/2019',
        note: 'Theme override support',
        updates: [
            {
                category: 'Design',
                bullets: [
                    'Allows rvt color variables to be overridden for branding purposes.',
                    'Created rvt-core() mixin that sets the Angular Material Theme.'
                ]
            }
        ]
    },
    {
        version: '0.1.31',
        date: '04/10/2018',
        note: 'Expansion panel fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Expansion panel: Disallow enter press from expanding/collapsing',
                    'Expansion panel: Fix issue with height on initial load',
                    'Expansion panel: Minor styling fix'
                ]
            }
        ]
    },
    {
        version: '0.1.29',
        date: '4/02/2019',
        note: 'Rivet restyle',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Button styles updated to new pattern. rvt-btn-standard has been removed. Use rvt-btn-secondary/rvt-btn-text instead.'
                ]
            },
            {
                category: 'Library',
                bullets: [
                    'New and improved site!',
                    'Components are now all under one page, but still organized by Material or Rivet',
                    'Various improvements to enhance ease of use'
                ]
            }
        ]
    },
    {
        version: '0.1.27',
        date: '3/25/2019',
        note: 'datepicker + eventpicker',
        updates: [
            {
                category: 'Components',
                bullets: ['Datepicker added to documentation', 'Event-picker added to documentation']
            }
        ]
    },
    {
        version: '0.1.25',
        date: '2/27/2019',
        note: 'npm package updates',
        updates: [
            {
                category: 'General',
                bullets: ['Getting packages up to date']
            }
        ]
    },
    {
        version: '0.1.24',
        date: '2/26/2019',
        note: 'Icon naming changes to prevent tarheel style conflicts',
        updates: [
            {
                category: 'Icon',
                bullets: ['Naming change from rvt-icon-*  to rivet-icon-*']
            }
        ]
    },
    {
        version: '0.1.22',
        date: '12/18/2018',
        note: 'Radio buttons, minor fixes',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material Component - Radio Buttons',
                    'Adjustment to delete overlay styling (in expandable line item)'
                ]
            },
            {
                category: 'Design',
                bullets: ['Disabled color is now $rvt-neutral-200']
            }
        ]
    },
    {
        version: '0.1.21',
        date: '12/13/2018',
        note: 'Color variables, minor styling fixes',
        updates: [
            {
                category: 'Components',
                bullets: ['Fix to standard button color styles', 'Fix to delete overlay styling (in expandable line item)']
            },
            {
                category: 'Design',
                bullets: ['New color variables']
            }
        ]
    },
    {
        version: '0.1.19',
        date: '12/4/2018',
        note: 'Nav update, delete overlay, divider styles',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Rivet Component - Side Nav styles fixed',
                    'Rivet Component - Delete overlay added to expandable line item',
                    'HR tag styles updated'
                ]
            }
        ]
    },
    {
        version: '0.1.16',
        date: '11/28/2018',
        note: 'Loading patterns, Tables, Nav',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Material component - Tables',
                    'Rivet Component - Loading Section',
                    'Rivet Component - Loading Buttons',
                    'Rivet Component - Side Nav'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: ['Tables', 'Loading', 'Side Nav']
            }
        ]
    },
    {
        version: '0.1.13',
        date: '11/19/2018',
        note: 'Dialogs + Expansion Panel',
        updates: [
            {
                category: 'Components',
                bullets: ['Material component - Dialogs', 'Rivet Component - Expansion Panel']
            },
            {
                category: 'Library - updated documentation for:',
                bullets: ['Dialogs', 'Expansion Panel']
            }
        ]
    },
    {
        version: '0.1.10',
        date: '11/13/2018',
        note: 'Tabs Update',
        updates: [
            {
                category: 'Components',
                bullets: ['Material component - Tabs', 'Styling for top nav']
            },
            {
                category: 'Library - updated documentation for:',
                bullets: ['Tabs: Content and Numbered Content', 'Navigation Tabs']
            }
        ]
    },
    {
        version: '0.1.9',
        date: '11/8/2018',
        note: 'Checkbox Update',
        updates: [
            {
                category: 'Components',
                bullets: ['Material component - Checkboxes (switched from Rivet component)']
            },
            {
                category: 'Library - updated documentation for:',
                bullets: ['Checkboxes - added indeterminate styling + updated spec sheet']
            }
        ]
    },
    {
        version: '0.1.8',
        date: '11/7/2018',
        note: 'Dropdown styling, Changelog template, minor library improvements',
        updates: [
            {
                category: 'Components',
                bullets: ['Material component - Select/Dropdown added']
            },
            {
                category: 'Library - updated documentation for:',
                bullets: [
                    'Dropdowns',
                    'Changelog - home page now automatically pulls in latest version',
                    'Roadmap - updated prioritization and estimate for component type'
                ]
            }
        ]
    },
    {
        version: '0.1.0',
        date: '11/1/2018',
        note: 'Updated to Angular v7',
        updates: [
            {
                category: 'Design',
                bullets: [
                    'import to styles changed to: @import rivetTheme',
                    'stylePreprocessorOptions added to angular.json file'
                ]
            }
        ]
    },
    {
        version: '0.0.13',
        date: '10/24/2018',
        note:
            'Includes the icon font and checkbox component as well as some minor styling adjustments to various components.',
        updates: [
            {
                category: 'Components',
                bullets: ['Rivet Checkbox', 'Button styles updated for use with icons']
            },
            {
                category: 'Design',
                bullets: ['Rivet icon font - simply add a span with the correct class for a standalone icon!']
            },
            {
                category: 'Library - updated documentation for:',
                bullets: ['Checkboxes', 'Icons', 'Colors - now with material theme reference']
            }
        ]
    },
    {
        version: '0.0.9',
        date: '9/28/2018',
        note: 'Includes the base styles for color and type styles, as well as styling for inputs and buttons',
        updates: [
            {
                category: 'Components',
                bullets: [
                    'Rivet buttons - custom styled buttons that include primary, secondary, standard and text',
                    'Material Inputs - style overrides to match the Rivet theme'
                ]
            },
            {
                category: 'Design',
                bullets: [
                    'Rivet theme - a custom angular material theme to apply across all components',
                    'Type Styles - Font family, size and weight applied to standard elements'
                ]
            },
            {
                category: 'Library - updated documentation for:',
                bullets: ['Buttons', 'Inputs + textareas', 'Text Styles', 'Colors']
            }
        ]
    }
];

@Component({
    selector: 'app-versions',
    templateUrl: './versions.component.html',
    styleUrls: ['../changelog.component.scss']
})
export class VersionsComponent {
    versions = versions;
    version4 = version4;
    oldVersions = oldVersions;
}
