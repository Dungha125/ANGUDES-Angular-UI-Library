import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TextareaComponent {
    placeholder = '';
    disabled = false;
    readonly = false;
    rows = 4;
    cols = 50;
    maxLength = null;
    size = 'md';
    variant = 'default';
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    value = '';
    onChange = (value) => { };
    onTouched = () => { };
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(this.value);
        this.change.emit(this.value);
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.onTouched();
        this.blur.emit(event);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextareaComponent, selector: "agu-textarea", inputs: { placeholder: "placeholder", disabled: "disabled", readonly: "readonly", rows: "rows", cols: "cols", maxLength: "maxLength", size: "size", variant: "variant" }, outputs: { change: "change", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextareaComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-textarea\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'variant-default': variant === 'default', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger'}\">\r\n  <textarea\r\n    class=\"textarea-input\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [maxLength]=\"maxLength || undefined\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n  ></textarea>\r\n  <span class=\"textarea-counter\" *ngIf=\"maxLength\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-textarea{position:relative;display:inline-block;width:100%}.agu-textarea .textarea-input{width:100%;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;font-family:inherit;font-size:.875rem;line-height:1.5;color:#374151;background:#fff;resize:vertical;transition:all .2s ease}.agu-textarea .textarea-input::placeholder{color:#9ca3af}.agu-textarea .textarea-input:focus{outline:none;border-color:#1890ff;box-shadow:0 0 0 3px #1890ff1a}.agu-textarea .textarea-input:disabled{background-color:#f3f4f6;cursor:not-allowed;opacity:.6}.agu-textarea .textarea-input:read-only{background-color:#f9fafb;cursor:default}.agu-textarea .textarea-counter{display:block;text-align:right;font-size:.75rem;color:#6b7280;margin-top:.25rem}.agu-textarea.size-sm .textarea-input{padding:.375rem .5rem;font-size:.75rem}.agu-textarea.size-lg .textarea-input{padding:.75rem 1rem;font-size:1rem}.agu-textarea.variant-success .textarea-input{border-color:#52c41a}.agu-textarea.variant-success .textarea-input:focus{border-color:#52c41a;box-shadow:0 0 0 3px #52c41a1a}.agu-textarea.variant-warning .textarea-input{border-color:#faad14}.agu-textarea.variant-warning .textarea-input:focus{border-color:#faad14;box-shadow:0 0 0 3px #faad141a}.agu-textarea.variant-danger .textarea-input{border-color:#ff4d4f}.agu-textarea.variant-danger .textarea-input:focus{border-color:#ff4d4f;box-shadow:0 0 0 3px #ff4d4f1a}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-textarea', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TextareaComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-textarea\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'variant-default': variant === 'default', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger'}\">\r\n  <textarea\r\n    class=\"textarea-input\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [maxLength]=\"maxLength || undefined\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n  ></textarea>\r\n  <span class=\"textarea-counter\" *ngIf=\"maxLength\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-textarea{position:relative;display:inline-block;width:100%}.agu-textarea .textarea-input{width:100%;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;font-family:inherit;font-size:.875rem;line-height:1.5;color:#374151;background:#fff;resize:vertical;transition:all .2s ease}.agu-textarea .textarea-input::placeholder{color:#9ca3af}.agu-textarea .textarea-input:focus{outline:none;border-color:#1890ff;box-shadow:0 0 0 3px #1890ff1a}.agu-textarea .textarea-input:disabled{background-color:#f3f4f6;cursor:not-allowed;opacity:.6}.agu-textarea .textarea-input:read-only{background-color:#f9fafb;cursor:default}.agu-textarea .textarea-counter{display:block;text-align:right;font-size:.75rem;color:#6b7280;margin-top:.25rem}.agu-textarea.size-sm .textarea-input{padding:.375rem .5rem;font-size:.75rem}.agu-textarea.size-lg .textarea-input{padding:.75rem 1rem;font-size:1rem}.agu-textarea.variant-success .textarea-input{border-color:#52c41a}.agu-textarea.variant-success .textarea-input:focus{border-color:#52c41a;box-shadow:0 0 0 3px #52c41a1a}.agu-textarea.variant-warning .textarea-input{border-color:#faad14}.agu-textarea.variant-warning .textarea-input:focus{border-color:#faad14;box-shadow:0 0 0 3px #faad141a}.agu-textarea.variant-danger .textarea-input{border-color:#ff4d4f}.agu-textarea.variant-danger .textarea-input:focus{border-color:#ff4d4f;box-shadow:0 0 0 3px #ff4d4f1a}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFlekUsTUFBTSxPQUFPLGlCQUFpQjtJQUNuQixXQUFXLEdBQVcsRUFBRSxDQUFDO0lBQ3pCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsUUFBUSxHQUFZLEtBQUssQ0FBQztJQUMxQixJQUFJLEdBQVcsQ0FBQyxDQUFDO0lBQ2pCLElBQUksR0FBVyxFQUFFLENBQUM7SUFDbEIsU0FBUyxHQUFrQixJQUFJLENBQUM7SUFDaEMsSUFBSSxHQUF1QixJQUFJLENBQUM7SUFDaEMsT0FBTyxHQUFpRCxTQUFTLENBQUM7SUFDakUsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFDcEMsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFDdkMsSUFBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFFaEQsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNYLFFBQVEsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBQ2pDLFNBQVMsR0FBRyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFFN0IsT0FBTyxDQUFDLEtBQVk7UUFDbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQTZCLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQWlCO1FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBaUI7UUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBYTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxVQUFtQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO3dHQS9DVSxpQkFBaUI7NEZBQWpCLGlCQUFpQiw4UUFSakI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNoRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJDZEgsdXlCQW1CQTs7NEZESGEsaUJBQWlCO2tCQWI3QixTQUFTOytCQUNFLGNBQWMsY0FDWixLQUFLLGFBR047d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7NEJBQ2hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGOzhCQUdRLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTTtnQkFDRyxLQUFLO3NCQUFkLE1BQU07Z0JBQ0csSUFBSTtzQkFBYixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtdGV4dGFyZWEnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0YXJlYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3RleHRhcmVhLmNvbXBvbmVudC5zY3NzJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRleHRhcmVhQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJvd3M6IG51bWJlciA9IDQ7XHJcbiAgQElucHV0KCkgY29sczogbnVtYmVyID0gNTA7XHJcbiAgQElucHV0KCkgbWF4TGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBzaXplOiAnc20nIHwgJ21kJyB8ICdsZycgPSAnbWQnO1xyXG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdkZWZhdWx0JyB8ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdkYW5nZXInID0gJ2RlZmF1bHQnO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBAT3V0cHV0KCkgZm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XHJcblxyXG4gIHZhbHVlOiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIG9uQ2hhbmdlID0gKHZhbHVlOiBzdHJpbmcpID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIHRoaXMudmFsdWUgPSB0YXJnZXQudmFsdWU7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uRm9jdXMoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXMuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBvbkJsdXIoZXZlbnQ6IEZvY3VzRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLmJsdXIuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZSB8fCAnJztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8ZGl2IGNsYXNzPVwiYWd1LXRleHRhcmVhXCIgW25nQ2xhc3NdPVwieydzaXplLXNtJzogc2l6ZSA9PT0gJ3NtJywgJ3NpemUtbWQnOiBzaXplID09PSAnbWQnLCAnc2l6ZS1sZyc6IHNpemUgPT09ICdsZycsICd2YXJpYW50LWRlZmF1bHQnOiB2YXJpYW50ID09PSAnZGVmYXVsdCcsICd2YXJpYW50LXN1Y2Nlc3MnOiB2YXJpYW50ID09PSAnc3VjY2VzcycsICd2YXJpYW50LXdhcm5pbmcnOiB2YXJpYW50ID09PSAnd2FybmluZycsICd2YXJpYW50LWRhbmdlcic6IHZhcmlhbnQgPT09ICdkYW5nZXInfVwiPlxyXG4gIDx0ZXh0YXJlYVxyXG4gICAgY2xhc3M9XCJ0ZXh0YXJlYS1pbnB1dFwiXHJcbiAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgIFtyZWFkb25seV09XCJyZWFkb25seVwiXHJcbiAgICBbcm93c109XCJyb3dzXCJcclxuICAgIFtjb2xzXT1cImNvbHNcIlxyXG4gICAgW21heExlbmd0aF09XCJtYXhMZW5ndGggfHwgdW5kZWZpbmVkXCJcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAoaW5wdXQpPVwib25JbnB1dCgkZXZlbnQpXCJcclxuICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIlxyXG4gICAgKGJsdXIpPVwib25CbHVyKCRldmVudClcIlxyXG4gID48L3RleHRhcmVhPlxyXG4gIDxzcGFuIGNsYXNzPVwidGV4dGFyZWEtY291bnRlclwiICpuZ0lmPVwibWF4TGVuZ3RoXCI+XHJcbiAgICB7eyB2YWx1ZS5sZW5ndGggfX0gLyB7eyBtYXhMZW5ndGggfX1cclxuICA8L3NwYW4+XHJcbjwvZGl2PlxyXG5cclxuIl19