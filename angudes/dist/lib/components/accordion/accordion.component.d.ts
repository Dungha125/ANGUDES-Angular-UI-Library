import { QueryList, AfterContentInit } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';
import * as i0 from "@angular/core";
export declare class AccordionComponent implements AfterContentInit {
    accordion: boolean;
    bordered: boolean;
    ghost: boolean;
    panels: QueryList<AccordionPanelComponent>;
    ngAfterContentInit(): void;
    onPanelChange(activeKey: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionComponent, "agu-accordion", never, { "accordion": { "alias": "accordion"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "ghost": { "alias": "ghost"; "required": false; }; }, {}, ["panels"], ["*"], false, never>;
}
