import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TagComponent {
    variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    size: 'sm' | 'md' | 'lg';
    closable: boolean;
    rounded: boolean;
    close: EventEmitter<void>;
    onClose(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TagComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TagComponent, "agu-tag", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "rounded": { "alias": "rounded"; "required": false; }; }, { "close": "close"; }, never, ["*"], false, never>;
}
