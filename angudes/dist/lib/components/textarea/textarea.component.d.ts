import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TextareaComponent implements ControlValueAccessor {
    placeholder: string;
    disabled: boolean;
    readonly: boolean;
    rows: number;
    cols: number;
    maxLength: number | null;
    size: 'sm' | 'md' | 'lg';
    variant: 'default' | 'success' | 'warning' | 'danger';
    change: EventEmitter<string>;
    focus: EventEmitter<FocusEvent>;
    blur: EventEmitter<FocusEvent>;
    value: string;
    private onChange;
    private onTouched;
    onInput(event: Event): void;
    onFocus(event: FocusEvent): void;
    onBlur(event: FocusEvent): void;
    writeValue(value: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextareaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextareaComponent, "agu-textarea", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "cols": { "alias": "cols"; "required": false; }; "maxLength": { "alias": "maxLength"; "required": false; }; "size": { "alias": "size"; "required": false; }; "variant": { "alias": "variant"; "required": false; }; }, { "change": "change"; "focus": "focus"; "blur": "blur"; }, never, never, false, never>;
}
