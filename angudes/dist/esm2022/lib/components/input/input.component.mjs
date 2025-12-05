import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class InputComponent {
    type = 'text';
    placeholder = '';
    disabled = false;
    readonly = false;
    size = 'md';
    status = 'default';
    prefix = '';
    suffix = '';
    allowClear = false;
    onBlur = new EventEmitter();
    onFocus = new EventEmitter();
    onEnter = new EventEmitter();
    value = '';
    focused = false;
    onChange = (value) => { };
    onTouched = () => { };
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(this.value);
    }
    onBlurEvent(event) {
        this.focused = false;
        this.onTouched();
        this.onBlur.emit(event);
    }
    onFocusEvent(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onEnter.emit(event);
        }
    }
    clear() {
        this.value = '';
        this.onChange('');
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputComponent, selector: "agu-input", inputs: { type: "type", placeholder: "placeholder", disabled: "disabled", readonly: "readonly", size: "size", status: "status", prefix: "prefix", suffix: "suffix", allowClear: "allowClear" }, outputs: { onBlur: "onBlur", onFocus: "onFocus", onEnter: "onEnter" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div \r\n  class=\"agu-input-wrapper\"\r\n  [class.agu-input-wrapper--size-sm]=\"size === 'sm'\"\r\n  [class.agu-input-wrapper--size-md]=\"size === 'md'\"\r\n  [class.agu-input-wrapper--size-lg]=\"size === 'lg'\"\r\n  [class.agu-input-wrapper--focused]=\"focused\"\r\n  [class.agu-input-wrapper--disabled]=\"disabled\"\r\n  [class.agu-input-wrapper--status-error]=\"status === 'error'\"\r\n  [class.agu-input-wrapper--status-warning]=\"status === 'warning'\"\r\n  [class.agu-input-wrapper--status-success]=\"status === 'success'\"\r\n>\r\n  <span class=\"agu-input-prefix\" *ngIf=\"prefix\">{{ prefix }}</span>\r\n  <input\r\n    class=\"agu-input\"\r\n    [type]=\"type\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (blur)=\"onBlurEvent($event)\"\r\n    (focus)=\"onFocusEvent($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n  <span class=\"agu-input-suffix\" *ngIf=\"suffix && !allowClear\">{{ suffix }}</span>\r\n  <span \r\n    class=\"agu-input-clear\" \r\n    *ngIf=\"allowClear && value && !disabled\"\r\n    (click)=\"clear()\"\r\n  >\r\n    \u00D7\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-input-wrapper{position:relative;display:inline-flex;align-items:center;width:100%;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-input-wrapper:hover:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color)}.agu-input-wrapper--focused:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color);box-shadow:0 0 0 4px #1890ff1a}.agu-input-wrapper--disabled{background:var(--agu-bg-color-light);cursor:not-allowed;opacity:.6;border-color:var(--agu-border-color-light)}.agu-input-wrapper--status-error{border-color:var(--agu-danger-color)}.agu-input-wrapper--status-error.agu-input-wrapper--focused{box-shadow:0 0 0 4px #ff4d4f1a}.agu-input-wrapper--status-warning{border-color:var(--agu-warning-color)}.agu-input-wrapper--status-warning.agu-input-wrapper--focused{box-shadow:0 0 0 4px #faad141a}.agu-input-wrapper--status-success{border-color:var(--agu-success-color)}.agu-input-wrapper--status-success.agu-input-wrapper--focused{box-shadow:0 0 0 4px #52c41a1a}.agu-input-wrapper--size-sm .agu-input{padding:.375rem .75rem;font-size:.875rem}.agu-input-wrapper--size-md .agu-input{padding:.5rem 1rem;font-size:1rem}.agu-input-wrapper--size-lg .agu-input{padding:.75rem 1.25rem;font-size:1.125rem}.agu-input{flex:1;border:none;outline:none;background:transparent;color:var(--agu-text-color);font-size:1rem;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.agu-input::placeholder{color:var(--agu-text-color-disabled);opacity:1}.agu-input:disabled{cursor:not-allowed;color:var(--agu-text-color-disabled)}.agu-input-prefix,.agu-input-suffix{padding:0 .75rem;color:var(--agu-text-color-secondary);display:flex;align-items:center;font-size:1rem}.agu-input-clear{padding:0 .5rem;cursor:pointer;color:var(--agu-text-color-disabled);font-size:1.25rem;line-height:1;transition:all .2s ease;display:flex;align-items:center;justify-content:center}.agu-input-clear:hover{color:var(--agu-danger-color);transform:scale(1.1)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-input', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true
                        }
                    ], template: "<div \r\n  class=\"agu-input-wrapper\"\r\n  [class.agu-input-wrapper--size-sm]=\"size === 'sm'\"\r\n  [class.agu-input-wrapper--size-md]=\"size === 'md'\"\r\n  [class.agu-input-wrapper--size-lg]=\"size === 'lg'\"\r\n  [class.agu-input-wrapper--focused]=\"focused\"\r\n  [class.agu-input-wrapper--disabled]=\"disabled\"\r\n  [class.agu-input-wrapper--status-error]=\"status === 'error'\"\r\n  [class.agu-input-wrapper--status-warning]=\"status === 'warning'\"\r\n  [class.agu-input-wrapper--status-success]=\"status === 'success'\"\r\n>\r\n  <span class=\"agu-input-prefix\" *ngIf=\"prefix\">{{ prefix }}</span>\r\n  <input\r\n    class=\"agu-input\"\r\n    [type]=\"type\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (blur)=\"onBlurEvent($event)\"\r\n    (focus)=\"onFocusEvent($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n  <span class=\"agu-input-suffix\" *ngIf=\"suffix && !allowClear\">{{ suffix }}</span>\r\n  <span \r\n    class=\"agu-input-clear\" \r\n    *ngIf=\"allowClear && value && !disabled\"\r\n    (click)=\"clear()\"\r\n  >\r\n    \u00D7\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-input-wrapper{position:relative;display:inline-flex;align-items:center;width:100%;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-input-wrapper:hover:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color)}.agu-input-wrapper--focused:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color);box-shadow:0 0 0 4px #1890ff1a}.agu-input-wrapper--disabled{background:var(--agu-bg-color-light);cursor:not-allowed;opacity:.6;border-color:var(--agu-border-color-light)}.agu-input-wrapper--status-error{border-color:var(--agu-danger-color)}.agu-input-wrapper--status-error.agu-input-wrapper--focused{box-shadow:0 0 0 4px #ff4d4f1a}.agu-input-wrapper--status-warning{border-color:var(--agu-warning-color)}.agu-input-wrapper--status-warning.agu-input-wrapper--focused{box-shadow:0 0 0 4px #faad141a}.agu-input-wrapper--status-success{border-color:var(--agu-success-color)}.agu-input-wrapper--status-success.agu-input-wrapper--focused{box-shadow:0 0 0 4px #52c41a1a}.agu-input-wrapper--size-sm .agu-input{padding:.375rem .75rem;font-size:.875rem}.agu-input-wrapper--size-md .agu-input{padding:.5rem 1rem;font-size:1rem}.agu-input-wrapper--size-lg .agu-input{padding:.75rem 1.25rem;font-size:1.125rem}.agu-input{flex:1;border:none;outline:none;background:transparent;color:var(--agu-text-color);font-size:1rem;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.agu-input::placeholder{color:var(--agu-text-color-disabled);opacity:1}.agu-input:disabled{cursor:not-allowed;color:var(--agu-text-color-disabled)}.agu-input-prefix,.agu-input-suffix{padding:0 .75rem;color:var(--agu-text-color-secondary);display:flex;align-items:center;font-size:1rem}.agu-input-clear{padding:0 .5rem;cursor:pointer;color:var(--agu-text-color-disabled);font-size:1.25rem;line-height:1;transition:all .2s ease;display:flex;align-items:center;justify-content:center}.agu-input-clear:hover{color:var(--agu-danger-color);transform:scale(1.1)}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], prefix: [{
                type: Input
            }], suffix: [{
                type: Input
            }], allowClear: [{
                type: Input
            }], onBlur: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onEnter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFlekUsTUFBTSxPQUFPLGNBQWM7SUFDaEIsSUFBSSxHQUFXLE1BQU0sQ0FBQztJQUN0QixXQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixJQUFJLEdBQXVCLElBQUksQ0FBQztJQUNoQyxNQUFNLEdBQWdELFNBQVMsQ0FBQztJQUNoRSxNQUFNLEdBQVcsRUFBRSxDQUFDO0lBQ3BCLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDcEIsVUFBVSxHQUFZLEtBQUssQ0FBQztJQUMzQixNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN4QyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztJQUN6QyxPQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWlCLENBQUM7SUFFdEQsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ2pCLFFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQ2pDLFNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFN0IsT0FBTyxDQUFDLEtBQVk7UUFDbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTBCLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBaUI7UUFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxZQUFZLENBQUMsS0FBaUI7UUFDNUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUEyQjtRQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzt3R0E3RFUsY0FBYzs0RkFBZCxjQUFjLDJTQVJkO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQzdDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNmSCx1c0NBa0NBOzs0RkRqQmEsY0FBYztrQkFiMUIsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsS0FBSyxhQUdOO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBR1EsSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxPQUFPO3NCQUFoQixNQUFNO2dCQUNHLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FndS1pbnB1dCcsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2lucHV0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gSW5wdXRDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyA9ICdtZCc7XHJcbiAgQElucHV0KCkgc3RhdHVzOiAnZGVmYXVsdCcgfCAnZXJyb3InIHwgJ3dhcm5pbmcnIHwgJ3N1Y2Nlc3MnID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHByZWZpeDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc3VmZml4OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBhbGxvd0NsZWFyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25FbnRlciA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcclxuXHJcbiAgdmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gIGZvY3VzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25CbHVyRXZlbnQoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMub25CbHVyLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25Gb2N1c0V2ZW50KGV2ZW50OiBGb2N1c0V2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5vbkZvY3VzLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxuXHJcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIHRoaXMub25FbnRlci5lbWl0KGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5vbkNoYW5nZSgnJyk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8ZGl2IFxyXG4gIGNsYXNzPVwiYWd1LWlucHV0LXdyYXBwZXJcIlxyXG4gIFtjbGFzcy5hZ3UtaW5wdXQtd3JhcHBlci0tc2l6ZS1zbV09XCJzaXplID09PSAnc20nXCJcclxuICBbY2xhc3MuYWd1LWlucHV0LXdyYXBwZXItLXNpemUtbWRdPVwic2l6ZSA9PT0gJ21kJ1wiXHJcbiAgW2NsYXNzLmFndS1pbnB1dC13cmFwcGVyLS1zaXplLWxnXT1cInNpemUgPT09ICdsZydcIlxyXG4gIFtjbGFzcy5hZ3UtaW5wdXQtd3JhcHBlci0tZm9jdXNlZF09XCJmb2N1c2VkXCJcclxuICBbY2xhc3MuYWd1LWlucHV0LXdyYXBwZXItLWRpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICBbY2xhc3MuYWd1LWlucHV0LXdyYXBwZXItLXN0YXR1cy1lcnJvcl09XCJzdGF0dXMgPT09ICdlcnJvcidcIlxyXG4gIFtjbGFzcy5hZ3UtaW5wdXQtd3JhcHBlci0tc3RhdHVzLXdhcm5pbmddPVwic3RhdHVzID09PSAnd2FybmluZydcIlxyXG4gIFtjbGFzcy5hZ3UtaW5wdXQtd3JhcHBlci0tc3RhdHVzLXN1Y2Nlc3NdPVwic3RhdHVzID09PSAnc3VjY2VzcydcIlxyXG4+XHJcbiAgPHNwYW4gY2xhc3M9XCJhZ3UtaW5wdXQtcHJlZml4XCIgKm5nSWY9XCJwcmVmaXhcIj57eyBwcmVmaXggfX08L3NwYW4+XHJcbiAgPGlucHV0XHJcbiAgICBjbGFzcz1cImFndS1pbnB1dFwiXHJcbiAgICBbdHlwZV09XCJ0eXBlXCJcclxuICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgW3JlYWRvbmx5XT1cInJlYWRvbmx5XCJcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcclxuICAgIChibHVyKT1cIm9uQmx1ckV2ZW50KCRldmVudClcIlxyXG4gICAgKGZvY3VzKT1cIm9uRm9jdXNFdmVudCgkZXZlbnQpXCJcclxuICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAvPlxyXG4gIDxzcGFuIGNsYXNzPVwiYWd1LWlucHV0LXN1ZmZpeFwiICpuZ0lmPVwic3VmZml4ICYmICFhbGxvd0NsZWFyXCI+e3sgc3VmZml4IH19PC9zcGFuPlxyXG4gIDxzcGFuIFxyXG4gICAgY2xhc3M9XCJhZ3UtaW5wdXQtY2xlYXJcIiBcclxuICAgICpuZ0lmPVwiYWxsb3dDbGVhciAmJiB2YWx1ZSAmJiAhZGlzYWJsZWRcIlxyXG4gICAgKGNsaWNrKT1cImNsZWFyKClcIlxyXG4gID5cclxuICAgIMOXXHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==