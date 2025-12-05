import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class RadioComponent {
    label = '';
    value;
    disabled = false;
    size = 'md';
    name = '';
    change = new EventEmitter();
    checked = false;
    onChange = (value) => { };
    onTouched = () => { };
    select() {
        if (!this.disabled && !this.checked) {
            this.checked = true;
            this.onChange(this.value);
            this.onTouched();
            this.change.emit(this.value);
        }
    }
    writeValue(value) {
        this.checked = value === this.value;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RadioComponent, selector: "agu-radio", inputs: { label: "label", value: "value", disabled: "disabled", size: "size", name: "name" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioComponent),
                multi: true
            }
        ], ngImport: i0, template: "<label class=\"agu-radio\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <input\r\n    type=\"radio\"\r\n    [name]=\"name\"\r\n    [value]=\"value\"\r\n    [checked]=\"checked\"\r\n    [disabled]=\"disabled\"\r\n    (change)=\"select()\"\r\n    style=\"display: none;\"\r\n  />\r\n  <span class=\"radio-dot\">\r\n    <span class=\"radio-inner\"></span>\r\n  </span>\r\n  <span class=\"radio-label\" *ngIf=\"label\">{{ label }}</span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-radio{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-radio.disabled{cursor:not-allowed;opacity:.6}.agu-radio .radio-dot{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #d1d5db;border-radius:50%;background:#fff;transition:all .2s ease;flex-shrink:0;position:relative}.agu-radio .radio-dot .radio-inner{width:10px;height:10px;border-radius:50%;background-color:#1890ff;transform:scale(0);transition:transform .2s ease}.agu-radio.checked .radio-dot .radio-inner{transform:scale(1)}.agu-radio.checked .radio-dot{border-color:#1890ff}.agu-radio .radio-label{color:#374151;font-size:.875rem}.agu-radio.size-sm .radio-dot{width:16px;height:16px}.agu-radio.size-sm .radio-dot .radio-inner{width:8px;height:8px}.agu-radio.size-sm .radio-label{font-size:.75rem}.agu-radio.size-lg .radio-dot{width:24px;height:24px}.agu-radio.size-lg .radio-dot .radio-inner{width:12px;height:12px}.agu-radio.size-lg .radio-label{font-size:1rem}.agu-radio:not(.disabled):hover .radio-dot{border-color:#1890ff}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-radio', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioComponent),
                            multi: true
                        }
                    ], template: "<label class=\"agu-radio\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <input\r\n    type=\"radio\"\r\n    [name]=\"name\"\r\n    [value]=\"value\"\r\n    [checked]=\"checked\"\r\n    [disabled]=\"disabled\"\r\n    (change)=\"select()\"\r\n    style=\"display: none;\"\r\n  />\r\n  <span class=\"radio-dot\">\r\n    <span class=\"radio-inner\"></span>\r\n  </span>\r\n  <span class=\"radio-label\" *ngIf=\"label\">{{ label }}</span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-radio{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-radio.disabled{cursor:not-allowed;opacity:.6}.agu-radio .radio-dot{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #d1d5db;border-radius:50%;background:#fff;transition:all .2s ease;flex-shrink:0;position:relative}.agu-radio .radio-dot .radio-inner{width:10px;height:10px;border-radius:50%;background-color:#1890ff;transform:scale(0);transition:transform .2s ease}.agu-radio.checked .radio-dot .radio-inner{transform:scale(1)}.agu-radio.checked .radio-dot{border-color:#1890ff}.agu-radio .radio-label{color:#374151;font-size:.875rem}.agu-radio.size-sm .radio-dot{width:16px;height:16px}.agu-radio.size-sm .radio-dot .radio-inner{width:8px;height:8px}.agu-radio.size-sm .radio-label{font-size:.75rem}.agu-radio.size-lg .radio-dot{width:24px;height:24px}.agu-radio.size-lg .radio-dot .radio-inner{width:12px;height:12px}.agu-radio.size-lg .radio-label{font-size:1rem}.agu-radio:not(.disabled):hover .radio-dot{border-color:#1890ff}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], name: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDN0YsT0FBTyxFQUF3QixpQkFBaUIsRUFBYSxNQUFNLGdCQUFnQixDQUFDOzs7QUFlcEYsTUFBTSxPQUFPLGNBQWM7SUFDaEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixLQUFLLENBQU07SUFDWCxRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLElBQUksR0FBdUIsSUFBSSxDQUFDO0lBQ2hDLElBQUksR0FBVyxFQUFFLENBQUM7SUFDakIsTUFBTSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFFM0MsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUNqQixRQUFRLEdBQUcsQ0FBQyxLQUFVLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUM5QixTQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRTdCLE1BQU07UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBd0I7UUFDdkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7d0dBbkNVLGNBQWM7NEZBQWQsY0FBYyxpS0FSZDtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM3QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJDZEgsc2tCQWlCQTs7NEZERGEsY0FBYztrQkFiMUIsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsS0FBSyxhQUdOO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQzs0QkFDN0MsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBR1EsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksTUFBTTtzQkFBZixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIGZvcndhcmRSZWYsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtcmFkaW8nLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYWRpby5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3JhZGlvLmNvbXBvbmVudC5zY3NzJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFJhZGlvQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWRpb0NvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6ICdzbScgfCAnbWQnIHwgJ2xnJyA9ICdtZCc7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nID0gJyc7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBjaGVja2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogYW55KSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICBzZWxlY3QoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8bGFiZWwgY2xhc3M9XCJhZ3UtcmFkaW9cIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkJzogZGlzYWJsZWQsICdjaGVja2VkJzogY2hlY2tlZCwgJ3NpemUtc20nOiBzaXplID09PSAnc20nLCAnc2l6ZS1tZCc6IHNpemUgPT09ICdtZCcsICdzaXplLWxnJzogc2l6ZSA9PT0gJ2xnJ31cIj5cclxuICA8aW5wdXRcclxuICAgIHR5cGU9XCJyYWRpb1wiXHJcbiAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICBbY2hlY2tlZF09XCJjaGVja2VkXCJcclxuICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAoY2hhbmdlKT1cInNlbGVjdCgpXCJcclxuICAgIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIlxyXG4gIC8+XHJcbiAgPHNwYW4gY2xhc3M9XCJyYWRpby1kb3RcIj5cclxuICAgIDxzcGFuIGNsYXNzPVwicmFkaW8taW5uZXJcIj48L3NwYW4+XHJcbiAgPC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwicmFkaW8tbGFiZWxcIiAqbmdJZj1cImxhYmVsXCI+e3sgbGFiZWwgfX08L3NwYW4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2xhYmVsPlxyXG5cclxuIl19