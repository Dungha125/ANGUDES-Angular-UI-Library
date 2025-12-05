import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ButtonComponent {
    variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'outline' | 'ghost';
    size: 'sm' | 'md' | 'lg';
    disabled: boolean;
    loading: boolean;
    fullWidth: boolean;
    type: 'button' | 'submit' | 'reset';
    clicked: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ButtonComponent, "agu-button", never, { "variant": { "alias": "variant"; "required": false; }; "size": { "alias": "size"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "fullWidth": { "alias": "fullWidth"; "required": false; }; "type": { "alias": "type"; "required": false; }; }, { "clicked": "clicked"; }, never, ["*"], false, never>;
}
