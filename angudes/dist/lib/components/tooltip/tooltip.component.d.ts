import { ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TooltipComponent {
    title: string;
    placement: 'top' | 'bottom' | 'left' | 'right';
    trigger: 'hover' | 'click' | 'focus';
    visible: boolean;
    tooltipContent: ElementRef;
    show(): void;
    hide(): void;
    toggle(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    onClick(): void;
    onFocus(): void;
    onBlur(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TooltipComponent, "agu-tooltip", never, { "title": { "alias": "title"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "trigger": { "alias": "trigger"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, {}, never, ["*"], false, never>;
}
