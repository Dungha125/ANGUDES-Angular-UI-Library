import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SliderComponent implements ControlValueAccessor {
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    showTooltip: boolean;
    marks: boolean;
    change: EventEmitter<number>;
    value: number;
    private onChange;
    private onTouched;
    get percentage(): number;
    onInput(event: Event): void;
    writeValue(value: number): void;
    registerOnChange(fn: (value: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SliderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SliderComponent, "agu-slider", never, { "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "step": { "alias": "step"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showTooltip": { "alias": "showTooltip"; "required": false; }; "marks": { "alias": "marks"; "required": false; }; }, { "change": "change"; }, never, never, false, never>;
}
