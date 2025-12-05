import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RadioComponent implements ControlValueAccessor {
    label: string;
    value: any;
    disabled: boolean;
    size: 'sm' | 'md' | 'lg';
    name: string;
    change: EventEmitter<any>;
    checked: boolean;
    private onChange;
    private onTouched;
    select(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RadioComponent, "agu-radio", never, { "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "name": { "alias": "name"; "required": false; }; }, { "change": "change"; }, never, ["*"], false, never>;
}
