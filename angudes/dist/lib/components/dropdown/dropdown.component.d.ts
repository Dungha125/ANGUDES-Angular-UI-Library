import { EventEmitter, ElementRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DropdownComponent {
    trigger: 'click' | 'hover';
    placement: 'bottom' | 'top' | 'left' | 'right';
    visible: boolean;
    visibleChange: EventEmitter<boolean>;
    onVisibleChange: EventEmitter<boolean>;
    dropdownMenu: ElementRef;
    onClickOutside(event: Event): void;
    toggle(): void;
    open(): void;
    close(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DropdownComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DropdownComponent, "agu-dropdown", never, { "trigger": { "alias": "trigger"; "required": false; }; "placement": { "alias": "placement"; "required": false; }; "visible": { "alias": "visible"; "required": false; }; }, { "visibleChange": "visibleChange"; "onVisibleChange": "onVisibleChange"; }, never, ["[slot=trigger]", "[slot=menu]"], false, never>;
}
