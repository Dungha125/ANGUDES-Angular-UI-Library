import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ToastComponent {
    message = '';
    type = 'info';
    duration = 3000;
    closable = true;
    onClose = new EventEmitter();
    timer;
    ngOnInit() {
        if (this.duration > 0) {
            this.timer = setTimeout(() => {
                this.close();
            }, this.duration);
        }
    }
    ngOnDestroy() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    close() {
        this.onClose.emit();
    }
    getIcon() {
        switch (this.type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            case 'info':
            default:
                return 'ℹ';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ToastComponent, selector: "agu-toast", inputs: { message: "message", type: "type", duration: "duration", closable: "closable" }, outputs: { onClose: "onClose" }, ngImport: i0, template: "<div class=\"agu-toast\" [ngClass]=\"'agu-toast--type-' + type\">\r\n  <div class=\"agu-toast__icon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-toast__content\">\r\n    <div class=\"agu-toast__message\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-toast__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-toast{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.25rem;min-width:300px;max-width:400px;border-radius:.5rem;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;background:var(--agu-bg-color);border-left:4px solid;animation:slideInRight .3s cubic-bezier(.68,-.55,.265,1.55);position:relative;z-index:1060}.agu-toast--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-toast--type-success .agu-toast__icon{color:var(--agu-success-color)}.agu-toast--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-toast--type-error .agu-toast__icon{color:var(--agu-danger-color)}.agu-toast--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-toast--type-warning .agu-toast__icon{color:var(--agu-warning-color)}.agu-toast--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-toast--type-info .agu-toast__icon{color:var(--agu-info-color)}.agu-toast__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-toast__content{flex:1}.agu-toast__message{font-size:1rem;color:var(--agu-text-color);line-height:1.5}.agu-toast__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-toast__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-toast', standalone: false, template: "<div class=\"agu-toast\" [ngClass]=\"'agu-toast--type-' + type\">\r\n  <div class=\"agu-toast__icon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-toast__content\">\r\n    <div class=\"agu-toast__message\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-toast__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-toast{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.25rem;min-width:300px;max-width:400px;border-radius:.5rem;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;background:var(--agu-bg-color);border-left:4px solid;animation:slideInRight .3s cubic-bezier(.68,-.55,.265,1.55);position:relative;z-index:1060}.agu-toast--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-toast--type-success .agu-toast__icon{color:var(--agu-success-color)}.agu-toast--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-toast--type-error .agu-toast__icon{color:var(--agu-danger-color)}.agu-toast--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-toast--type-warning .agu-toast__icon{color:var(--agu-warning-color)}.agu-toast--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-toast--type-info .agu-toast__icon{color:var(--agu-info-color)}.agu-toast__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-toast__content{flex:1}.agu-toast__message{font-size:1rem;color:var(--agu-text-color);line-height:1.5}.agu-toast__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-toast__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"] }]
        }], propDecorators: { message: [{
                type: Input
            }], type: [{
                type: Input
            }], duration: [{
                type: Input
            }], closable: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdG9hc3QvdG9hc3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsTUFBTSxlQUFlLENBQUM7OztBQWlCMUYsTUFBTSxPQUFPLGNBQWM7SUFDaEIsT0FBTyxHQUFXLEVBQUUsQ0FBQztJQUNyQixJQUFJLEdBQTZDLE1BQU0sQ0FBQztJQUN4RCxRQUFRLEdBQVcsSUFBSSxDQUFDO0lBQ3hCLFFBQVEsR0FBWSxJQUFJLENBQUM7SUFDeEIsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFckMsS0FBSyxDQUFPO0lBRXBCLFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDZixDQUFDLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BCLENBQUM7SUFDSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxPQUFPO1FBQ0wsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbEIsS0FBSyxTQUFTO2dCQUNaLE9BQU8sR0FBRyxDQUFDO1lBQ2IsS0FBSyxPQUFPO2dCQUNWLE9BQU8sR0FBRyxDQUFDO1lBQ2IsS0FBSyxTQUFTO2dCQUNaLE9BQU8sR0FBRyxDQUFDO1lBQ2IsS0FBSyxNQUFNLENBQUM7WUFDWjtnQkFDRSxPQUFPLEdBQUcsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO3dHQXZDVSxjQUFjOzRGQUFkLGNBQWMsNEtDakIzQixrWUFVQTs7NEZET2EsY0FBYztrQkFOMUIsU0FBUzsrQkFDRSxXQUFXLGNBQ1QsS0FBSzs4QkFLUixPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxPQUFPO3NCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRvYXN0Q29uZmlnIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdHlwZT86ICdzdWNjZXNzJyB8ICdlcnJvcicgfCAnd2FybmluZycgfCAnaW5mbyc7XHJcbiAgZHVyYXRpb24/OiBudW1iZXI7XHJcbiAgcG9zaXRpb24/OiAndG9wJyB8ICd0b3AtcmlnaHQnIHwgJ3RvcC1sZWZ0JyB8ICdib3R0b20nIHwgJ2JvdHRvbS1yaWdodCcgfCAnYm90dG9tLWxlZnQnO1xyXG4gIGNsb3NhYmxlPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtdG9hc3QnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgdHlwZTogJ3N1Y2Nlc3MnIHwgJ2Vycm9yJyB8ICd3YXJuaW5nJyB8ICdpbmZvJyA9ICdpbmZvJztcclxuICBASW5wdXQoKSBkdXJhdGlvbjogbnVtYmVyID0gMzAwMDtcclxuICBASW5wdXQoKSBjbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHByaXZhdGUgdGltZXI/OiBhbnk7XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZHVyYXRpb24gPiAwKSB7XHJcbiAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50aW1lcikge1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpOiB2b2lkIHtcclxuICAgIHRoaXMub25DbG9zZS5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uKCk6IHN0cmluZyB7XHJcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xyXG4gICAgICBjYXNlICdzdWNjZXNzJzpcclxuICAgICAgICByZXR1cm4gJ+Kckyc7XHJcbiAgICAgIGNhc2UgJ2Vycm9yJzpcclxuICAgICAgICByZXR1cm4gJ+KclSc7XHJcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxyXG4gICAgICAgIHJldHVybiAn4pqgJztcclxuICAgICAgY2FzZSAnaW5mbyc6XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuICfihLknO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImFndS10b2FzdFwiIFtuZ0NsYXNzXT1cIidhZ3UtdG9hc3QtLXR5cGUtJyArIHR5cGVcIj5cclxuICA8ZGl2IGNsYXNzPVwiYWd1LXRvYXN0X19pY29uXCI+e3sgZ2V0SWNvbigpIH19PC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFndS10b2FzdF9fY29udGVudFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFndS10b2FzdF9fbWVzc2FnZVwiPnt7IG1lc3NhZ2UgfX08L2Rpdj5cclxuICA8L2Rpdj5cclxuICA8YnV0dG9uICpuZ0lmPVwiY2xvc2FibGVcIiBjbGFzcz1cImFndS10b2FzdF9fY2xvc2VcIiAoY2xpY2spPVwiY2xvc2UoKVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxyXG4gICAgw5dcclxuICA8L2J1dHRvbj5cclxuPC9kaXY+XHJcblxyXG4iXX0=