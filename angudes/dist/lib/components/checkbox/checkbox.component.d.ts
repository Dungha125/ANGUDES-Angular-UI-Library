import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class CheckboxComponent implements ControlValueAccessor {
    label: string;
    disabled: boolean;
    indeterminate: boolean;
    size: 'sm' | 'md' | 'lg';
    change: EventEmitter<boolean>;
    checked: boolean;
    private onChange;
    private onTouched;
    toggle(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (value: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CheckboxComponent, "agu-checkbox", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "indeterminate": { "alias": "indeterminate"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "change": "change"; }, never, ["*"], false, never>;
}
