import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class RateComponent implements ControlValueAccessor {
    count: number;
    allowHalf: boolean;
    disabled: boolean;
    allowClear: boolean;
    size: 'sm' | 'md' | 'lg';
    change: EventEmitter<number>;
    value: number;
    hoverValue: number;
    private onChange;
    private onTouched;
    get stars(): number[];
    onStarClick(star: number): void;
    onStarHover(star: number): void;
    onStarLeave(): void;
    isActive(star: number): boolean;
    writeValue(value: number): void;
    registerOnChange(fn: (value: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RateComponent, "agu-rate", never, { "count": { "alias": "count"; "required": false; }; "allowHalf": { "alias": "allowHalf"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "allowClear": { "alias": "allowClear"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "change": "change"; }, never, never, false, never>;
}
