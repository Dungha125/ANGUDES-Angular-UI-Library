import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
}
export declare class SelectComponent implements ControlValueAccessor {
    options: SelectOption[];
    placeholder: string;
    disabled: boolean;
    size: 'sm' | 'md' | 'lg';
    multiple: boolean;
    change: EventEmitter<any>;
    selectedValue: any;
    isOpen: boolean;
    private onChange;
    private onTouched;
    get displayText(): string;
    toggle(): void;
    selectOption(option: SelectOption): void;
    isSelected(option: SelectOption): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SelectComponent, "agu-select", never, { "options": { "alias": "options"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "size": { "alias": "size"; "required": false; }; "multiple": { "alias": "multiple"; "required": false; }; }, { "change": "change"; }, never, never, false, never>;
}
