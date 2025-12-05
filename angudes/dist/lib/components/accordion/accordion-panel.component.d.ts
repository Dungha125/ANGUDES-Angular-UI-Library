import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AccordionPanelComponent {
    key: string;
    header: string;
    active: boolean;
    disabled: boolean;
    showArrow: boolean;
    bordered: boolean;
    ghost: boolean;
    activeChange: EventEmitter<boolean>;
    content: ElementRef;
    toggle(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AccordionPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AccordionPanelComponent, "agu-accordion-panel", never, { "key": { "alias": "key"; "required": false; }; "header": { "alias": "header"; "required": false; }; "active": { "alias": "active"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showArrow": { "alias": "showArrow"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "ghost": { "alias": "ghost"; "required": false; }; }, { "activeChange": "activeChange"; }, never, ["*"], false, never>;
}
