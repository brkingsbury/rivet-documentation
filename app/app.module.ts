import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialComponentModule, RivetStyleModule } from 'rivet-style';
import { AppComponent } from './app.component';
import { ChangelogComponent } from './changelog/changelog.component';
import { CompatibilityComponent } from './changelog/compatibility/compatibility.component';
import { PortalVariableDialogueComponent } from './changelog/compatibility/portal-variable-dialogue/portal-variable-dialogue.component';
import { PremiumVariableDialogueComponent } from './changelog/compatibility/premium-variable-dialogue/premium-variable-dialogue.component';
import { Rivet4VariableDialogueComponent } from './changelog/compatibility/rivet4-variable-dialogue/rivet4-variable-dialogue.component';
import { VersionsComponent } from './changelog/versions/versions.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ComplianceComponent, ComplianceDialogComponent, ComponentsComponent } from './components/components.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { DialogComponent, DialogComponentDialogComponent } from './components/dialog/dialog.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { ExpansionPanelComponent } from './components/expansion-panel/expansion-panel.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { LinksComponent } from './components/links/links.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { MiniExpansionPanelComponent } from './components/mini-expansion/mini-expansion.component';
import { NavComponent } from './components/nav/nav.component';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { SliderComponent } from './components/slider/slider.component';
import { Snackbar2Component, SnackbarComponent } from './components/snackbar/snackbar.component';
import { TableBasicExampleComponent } from './components/tables/table-example';
import { TablesComponent } from './components/tables/tables.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TextAreasComponent } from './components/text-areas/text-areas.component';
import { TilesComponent } from './components/tiles/tiles.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { TooltipsComponent } from './components/tooltips/tooltips.component';
import { DarkModeComponent } from './dark-mode/dark-mode.component';
import { ExampleSnippetComponent } from './documentation-components/example-snippet/example-snippet.component';
import { ParametersComponent } from './documentation-components/parameters/parameters.component';
import { ContributeComponent } from './getting-started/contribute/contribute.component';
import { DesignersComponent } from './getting-started/designers/designers.component';
import { DevelopersComponent } from './getting-started/developers/developers.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { HomeComponent } from './home/home.component';
import { AccessibilityComponent } from './patterns/accessibility/accessibility.component';
import { ElevationComponent } from './patterns/elevation/elevation.component';
import { ErrorsComponent } from './patterns/errors/errors.component';
import { PatternsComponent } from './patterns/patterns.component';
import { PerformanceComponent } from './patterns/performance/performance.component';
import { StructureComponent } from './patterns/structure/structure.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ColorsComponent } from './styles/colors/colors.component';
import { DarkModeDocComponent } from './styles/dark-mode-doc/dark-mode-doc.component';
import { FontStylesComponent } from './styles/font-styles/font-styles.component';
import { FilterPipe } from './styles/icons/icon.pipe';
import { IconsComponent } from './styles/icons/icons.component';
import { PersonaComponent } from './styles/persona/persona.component';
import { SpacingComponent } from './styles/spacing/spacing.component';
import { StylesComponent } from './styles/styles.component';
import { TestingComponent } from './testing/testing.component';
import { ThemeEditorComponent } from './theme-editor/theme-editor.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ThemeServiceDocComponent } from './styles/theme-service-doc/theme-service-doc.component';
import { ChipComponent } from './components/chip/chip.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { SmartFundingIconComponent } from './components/smart-funding-icon/smart-funding-icon.component';
import { IconComponent } from './components/icon/icon.component';
import { IconConfiguratorComponent } from './components/icon/icon-configurator/icon-configurator.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'getting-started/designers', component: DesignersComponent },
    { path: 'getting-started/developers', component: DevelopersComponent },
    { path: 'getting-started/contribute', component: ContributeComponent },
    { path: 'style', component: StylesComponent },
    { path: 'style/icon', component: IconsComponent },
    { path: 'style/font', component: FontStylesComponent },
    { path: 'style/spacing', component: SpacingComponent },
    { path: 'style/color', component: ColorsComponent },
    { path: 'style/persona', component: PersonaComponent },
    { path: 'style/darkmode', component: DarkModeDocComponent },
    { path: 'style/themeservice', component: ThemeServiceDocComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'components/checkbox', component: CheckboxComponent },
    { path: 'components/carousel', component: CarouselComponent },
    { path: 'components/chip', component: ChipComponent },
    { path: 'components/colorpicker', component: ColorPickerComponent },
    { path: 'components/datepicker', component: DatepickerComponent },
    { path: 'components/dialog', component: DialogComponent },
    { path: 'components/drawer', component: DrawerComponent },
    { path: 'components/dropdown', component: DropdownComponent },
    { path: 'components/input', component: InputsComponent },
    { path: 'components/radio', component: RadioButtonsComponent },
    { path: 'components/table', component: TablesComponent },
    { path: 'components/tab', component: TabsComponent },
    { path: 'components/textarea', component: TextAreasComponent },
    { path: 'components/button', component: ButtonsComponent },
    { path: 'components/loading', component: LoadingComponent },
    { path: 'components/menu', component: MenuComponent },
    { path: 'components/nav', component: NavComponent },
    { path: 'components/expansion', component: ExpansionPanelComponent },
    { path: 'components/miniexpansion', component: MiniExpansionPanelComponent },
    { path: 'components/slider', component: SliderComponent },
    { path: 'components/smart-funding-icon', component: SmartFundingIconComponent },
    { path: 'components/snackbar', component: SnackbarComponent },
    { path: 'components/link', component: LinksComponent },
    { path: 'components/toggle', component: ToggleComponent },
    { path: 'components/tooltip', component: TooltipsComponent },
    { path: 'components/tile', component: TilesComponent },
    { path: 'components/card', component: CardComponent },
    { path: 'components/icon', component: IconComponent },
    { path: 'changelog/roadmap', component: ChangelogComponent },
    { path: 'changelog/versions', component: VersionsComponent },
    { path: 'changelog/compatibility', component: CompatibilityComponent },
    { path: 'patterns', component: PatternsComponent },
    { path: 'patterns/a11y', component: AccessibilityComponent },
    { path: 'patterns/elevation', component: ElevationComponent },
    { path: 'patterns/errors', component: ErrorsComponent },
    { path: 'patterns/performance', component: PerformanceComponent },
    { path: 'patterns/structure', component: StructureComponent },
    { path: 'testing', component: TestingComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
    declarations: [
        AppComponent,
        AccessibilityComponent,
        ButtonsComponent,
        ChangelogComponent,
        CheckboxComponent,
        ColorsComponent,
        ComponentsComponent,
        DatepickerComponent,
        DialogComponent,
        DialogComponentDialogComponent,
        DrawerComponent,
        DropdownComponent,
        ExpansionPanelComponent,
        FontStylesComponent,
        HomeComponent,
        IconsComponent,
        InputsComponent,
        LoadingComponent,
        NavComponent,
        PatternsComponent,
        RadioButtonsComponent,
        SideNavComponent,
        StylesComponent,
        TablesComponent,
        TableBasicExampleComponent,
        TabsComponent,
        TestingComponent,
        TextAreasComponent,
        PerformanceComponent,
        SliderComponent,
        StructureComponent,
        PersonaComponent,
        SnackbarComponent,
        Snackbar2Component,
        ComplianceComponent,
        ComplianceDialogComponent,
        LinksComponent,
        ToggleComponent,
        TooltipsComponent,
        VersionsComponent,
        MiniExpansionPanelComponent,
        GettingStartedComponent,
        DesignersComponent,
        DevelopersComponent,
        ContributeComponent,
        ThemeEditorComponent,
        ErrorsComponent,
        TopNavComponent,
        TilesComponent,
        ParametersComponent,
        CardComponent,
        ExampleSnippetComponent,
        SpacingComponent,
        CompatibilityComponent,
        PremiumVariableDialogueComponent,
        Rivet4VariableDialogueComponent,
        PortalVariableDialogueComponent,
        DarkModeComponent,
        DarkModeDocComponent,
        ElevationComponent,
        FilterPipe,
        CarouselComponent,
        MenuComponent,
        ThemeServiceDocComponent,
        ChipComponent,
        ColorPickerComponent,
        SmartFundingIconComponent,
        IconComponent,
        IconConfiguratorComponent
    ],
    entryComponents: [
        DialogComponent,
        DialogComponentDialogComponent,
        Snackbar2Component,
        SnackbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        RivetStyleModule.forRoot(),
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentModule,
        MatAutocompleteModule,
        RouterModule.forRoot(appRoutes, {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled'
        }),
        BrowserAnimationsModule,
        MatExpansionModule,
        HttpClientModule,
        MatMenuModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
