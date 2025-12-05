import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwitchComponent {
    label = '';
    disabled = false;
    size = 'md';
    checkedText = '';
    uncheckedText = '';
    change = new EventEmitter();
    checked = false;
    onChange = (value) => { };
    onTouched = () => { };
    toggle() {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onChange(this.checked);
            this.onTouched();
            this.change.emit(this.checked);
        }
    }
    writeValue(value) {
        this.checked = value || false;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SwitchComponent, selector: "agu-switch", inputs: { label: "label", disabled: "disabled", size: "size", checkedText: "checkedText", uncheckedText: "uncheckedText" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true
            }
        ], ngImport: i0, template: "<label class=\"agu-switch\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <span class=\"switch-label\" *ngIf=\"label && !checkedText && !uncheckedText\">{{ label }}</span>\r\n  <span class=\"switch-track\" (click)=\"toggle()\">\r\n    <span class=\"switch-thumb\"></span>\r\n  </span>\r\n  <span class=\"switch-text\" *ngIf=\"checkedText || uncheckedText\">\r\n    {{ checked ? checkedText : uncheckedText }}\r\n  </span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-switch{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-switch.disabled{cursor:not-allowed;opacity:.6}.agu-switch .switch-label{color:#374151;font-size:.875rem}.agu-switch .switch-track{position:relative;width:44px;height:24px;background-color:#d1d5db;border-radius:12px;transition:background-color .2s ease;flex-shrink:0}.agu-switch .switch-track .switch-thumb{position:absolute;top:2px;left:2px;width:20px;height:20px;background-color:#fff;border-radius:50%;transition:transform .2s ease;box-shadow:0 2px 4px #0003}.agu-switch.checked .switch-track{background-color:#1890ff}.agu-switch.checked .switch-track .switch-thumb{transform:translate(20px)}.agu-switch .switch-text{color:#374151;font-size:.875rem;min-width:30px}.agu-switch.size-sm .switch-track{width:36px;height:20px}.agu-switch.size-sm .switch-track .switch-thumb{width:16px;height:16px;top:2px;left:2px}.agu-switch.size-sm.checked .switch-track .switch-thumb{transform:translate(16px)}.agu-switch.size-sm .switch-label,.agu-switch.size-sm .switch-text{font-size:.75rem}.agu-switch.size-lg .switch-track{width:52px;height:28px}.agu-switch.size-lg .switch-track .switch-thumb{width:24px;height:24px;top:2px;left:2px}.agu-switch.size-lg.checked .switch-track .switch-thumb{transform:translate(24px)}.agu-switch.size-lg .switch-label,.agu-switch.size-lg .switch-text{font-size:1rem}.agu-switch:not(.disabled):hover .switch-track{background-color:#9ca3af}.agu-switch:not(.disabled).checked:hover .switch-track{background-color:#0076e4}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-switch', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwitchComponent),
                            multi: true
                        }
                    ], template: "<label class=\"agu-switch\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <span class=\"switch-label\" *ngIf=\"label && !checkedText && !uncheckedText\">{{ label }}</span>\r\n  <span class=\"switch-track\" (click)=\"toggle()\">\r\n    <span class=\"switch-thumb\"></span>\r\n  </span>\r\n  <span class=\"switch-text\" *ngIf=\"checkedText || uncheckedText\">\r\n    {{ checked ? checkedText : uncheckedText }}\r\n  </span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-switch{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-switch.disabled{cursor:not-allowed;opacity:.6}.agu-switch .switch-label{color:#374151;font-size:.875rem}.agu-switch .switch-track{position:relative;width:44px;height:24px;background-color:#d1d5db;border-radius:12px;transition:background-color .2s ease;flex-shrink:0}.agu-switch .switch-track .switch-thumb{position:absolute;top:2px;left:2px;width:20px;height:20px;background-color:#fff;border-radius:50%;transition:transform .2s ease;box-shadow:0 2px 4px #0003}.agu-switch.checked .switch-track{background-color:#1890ff}.agu-switch.checked .switch-track .switch-thumb{transform:translate(20px)}.agu-switch .switch-text{color:#374151;font-size:.875rem;min-width:30px}.agu-switch.size-sm .switch-track{width:36px;height:20px}.agu-switch.size-sm .switch-track .switch-thumb{width:16px;height:16px;top:2px;left:2px}.agu-switch.size-sm.checked .switch-track .switch-thumb{transform:translate(16px)}.agu-switch.size-sm .switch-label,.agu-switch.size-sm .switch-text{font-size:.75rem}.agu-switch.size-lg .switch-track{width:52px;height:28px}.agu-switch.size-lg .switch-track .switch-thumb{width:24px;height:24px;top:2px;left:2px}.agu-switch.size-lg.checked .switch-track .switch-thumb{transform:translate(24px)}.agu-switch.size-lg .switch-label,.agu-switch.size-lg .switch-text{font-size:1rem}.agu-switch:not(.disabled):hover .switch-track{background-color:#9ca3af}.agu-switch:not(.disabled).checked:hover .switch-track{background-color:#0076e4}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], checkedText: [{
                type: Input
            }], uncheckedText: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VkZXMvc3JjL2xpYi9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWV6RSxNQUFNLE9BQU8sZUFBZTtJQUNqQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsSUFBSSxHQUF1QixJQUFJLENBQUM7SUFDaEMsV0FBVyxHQUFXLEVBQUUsQ0FBQztJQUN6QixhQUFhLEdBQVcsRUFBRSxDQUFDO0lBQzFCLE1BQU0sR0FBRyxJQUFJLFlBQVksRUFBVyxDQUFDO0lBRS9DLE9BQU8sR0FBWSxLQUFLLENBQUM7SUFDakIsUUFBUSxHQUFHLENBQUMsS0FBYyxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDbEMsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUU3QixNQUFNO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7SUFDSCxDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLElBQUksS0FBSyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUE0QjtRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsVUFBbUI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzt3R0FuQ1UsZUFBZTs0RkFBZixlQUFlLGdNQVJmO1lBQ1Q7Z0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtnQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwQkNkSCx5akJBV0E7OzRGREthLGVBQWU7a0JBYjNCLFNBQVM7K0JBQ0UsWUFBWSxjQUNWLEtBQUssYUFHTjt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsaUJBQWlCOzRCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQzs0QkFDOUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7OEJBR1EsS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csYUFBYTtzQkFBckIsS0FBSztnQkFDSSxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FndS1zd2l0Y2gnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9zd2l0Y2guY29tcG9uZW50LnNjc3MnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU3dpdGNoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2l0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnID0gJ21kJztcclxuICBASW5wdXQoKSBjaGVja2VkVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdW5jaGVja2VkVGV4dDogc3RyaW5nID0gJyc7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgb25DaGFuZ2UgPSAodmFsdWU6IGJvb2xlYW4pID0+IHt9O1xyXG4gIHByaXZhdGUgb25Ub3VjaGVkID0gKCkgPT4ge307XHJcblxyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuY2hlY2tlZCk7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlIHx8IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8bGFiZWwgY2xhc3M9XCJhZ3Utc3dpdGNoXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZCc6IGRpc2FibGVkLCAnY2hlY2tlZCc6IGNoZWNrZWQsICdzaXplLXNtJzogc2l6ZSA9PT0gJ3NtJywgJ3NpemUtbWQnOiBzaXplID09PSAnbWQnLCAnc2l6ZS1sZyc6IHNpemUgPT09ICdsZyd9XCI+XHJcbiAgPHNwYW4gY2xhc3M9XCJzd2l0Y2gtbGFiZWxcIiAqbmdJZj1cImxhYmVsICYmICFjaGVja2VkVGV4dCAmJiAhdW5jaGVja2VkVGV4dFwiPnt7IGxhYmVsIH19PC9zcGFuPlxyXG4gIDxzcGFuIGNsYXNzPVwic3dpdGNoLXRyYWNrXCIgKGNsaWNrKT1cInRvZ2dsZSgpXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cInN3aXRjaC10aHVtYlwiPjwvc3Bhbj5cclxuICA8L3NwYW4+XHJcbiAgPHNwYW4gY2xhc3M9XCJzd2l0Y2gtdGV4dFwiICpuZ0lmPVwiY2hlY2tlZFRleHQgfHwgdW5jaGVja2VkVGV4dFwiPlxyXG4gICAge3sgY2hlY2tlZCA/IGNoZWNrZWRUZXh0IDogdW5jaGVja2VkVGV4dCB9fVxyXG4gIDwvc3Bhbj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvbGFiZWw+XHJcblxyXG4iXX0=