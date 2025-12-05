import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BackTopComponent {
    visibilityHeight: number;
    right: number;
    bottom: number;
    click: EventEmitter<void>;
    visible: boolean;
    onWindowScroll(): void;
    scrollToTop(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BackTopComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BackTopComponent, "agu-back-top", never, { "visibilityHeight": { "alias": "visibilityHeight"; "required": false; }; "right": { "alias": "right"; "required": false; }; "bottom": { "alias": "bottom"; "required": false; }; }, { "click": "click"; }, never, never, false, never>;
}
