import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-example-snippet',
    templateUrl: './example-snippet.component.html',
    styleUrls: ['./example-snippet.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleSnippetComponent implements AfterViewInit {

    @ViewChild('content') el: ElementRef;
    public tabs = [];
    public activeTab: number;

    public showTab(number): void {
        this.activeTab = number;
    }

    ngAfterViewInit() {
        // setTimeout assures that the tabs are rendered with a digest cycle
        setTimeout(() => {
            // get content children of the snippet area and push to tabs array
            const snippets = this.el.nativeElement.children;
            for (const i of Object.keys(snippets)) {
                this.tabs.push({ 'name': snippets[i].title, 'index': i });
            }
            // set default active tab for digest cycle
            this.activeTab = 0;
        });
    }

}
