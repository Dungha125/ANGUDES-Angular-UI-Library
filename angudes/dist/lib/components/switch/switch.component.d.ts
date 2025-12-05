import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SwitchComponent implements ControlValueAccessor {
    label: string;
    disabled: boolean;
    size: 'sm' | 'md' | 'lg';
    checkedText: string;
    uncheckedText: string;
    change: EventEmitter<boolean>;
    checked: boolean;
    private onChange;
    private onTouched;
    toggle(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (value: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SwitchComponent, "agu-switch", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "checkedText": { "alias": "checkedText"; "required": false; }; "uncheckedText": { "alias": "uncheckedText"; "required": false; }; }, { "change": "change"; }, never, ["*"], false, never>;
}
