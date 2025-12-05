import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class RateComponent {
    count = 5;
    allowHalf = false;
    disabled = false;
    allowClear = true;
    size = 'md';
    change = new EventEmitter();
    value = 0;
    hoverValue = 0;
    onChange = (value) => { };
    onTouched = () => { };
    get stars() {
        return Array.from({ length: this.count }, (_, i) => i + 1);
    }
    onStarClick(star) {
        if (this.disabled)
            return;
        if (this.allowClear && this.value === star) {
            this.value = 0;
        }
        else {
            this.value = star;
        }
        this.hoverValue = 0;
        this.onChange(this.value);
        this.onTouched();
        this.change.emit(this.value);
    }
    onStarHover(star) {
        if (this.disabled)
            return;
        this.hoverValue = star;
    }
    onStarLeave() {
        this.hoverValue = 0;
    }
    isActive(star) {
        const currentValue = this.hoverValue || this.value;
        return star <= currentValue;
    }
    writeValue(value) {
        this.value = value || 0;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RateComponent, selector: "agu-rate", inputs: { count: "count", allowHalf: "allowHalf", disabled: "disabled", allowClear: "allowClear", size: "size" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RateComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-rate\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'disabled': disabled}\">\r\n  <span \r\n    *ngFor=\"let star of stars\"\r\n    class=\"rate-star\"\r\n    [ngClass]=\"{'active': isActive(star)}\"\r\n    (click)=\"onStarClick(star)\"\r\n    (mouseenter)=\"onStarHover(star)\"\r\n    (mouseleave)=\"onStarLeave()\">\r\n    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\r\n      <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"/>\r\n    </svg>\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-rate{display:inline-flex;align-items:center;gap:.25rem}.agu-rate.disabled{opacity:.6;cursor:not-allowed}.agu-rate .rate-star{display:inline-flex;align-items:center;justify-content:center;color:#d1d5db;cursor:pointer;transition:color .2s ease}.agu-rate .rate-star svg{width:20px;height:20px}.agu-rate .rate-star.active{color:#fbbf24}.agu-rate .rate-star:hover:not(.disabled){color:#fbbf24}.agu-rate.size-sm .rate-star svg{width:16px;height:16px}.agu-rate.size-lg .rate-star svg{width:24px;height:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-rate', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RateComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-rate\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'disabled': disabled}\">\r\n  <span \r\n    *ngFor=\"let star of stars\"\r\n    class=\"rate-star\"\r\n    [ngClass]=\"{'active': isActive(star)}\"\r\n    (click)=\"onStarClick(star)\"\r\n    (mouseenter)=\"onStarHover(star)\"\r\n    (mouseleave)=\"onStarLeave()\">\r\n    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\r\n      <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"/>\r\n    </svg>\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-rate{display:inline-flex;align-items:center;gap:.25rem}.agu-rate.disabled{opacity:.6;cursor:not-allowed}.agu-rate .rate-star{display:inline-flex;align-items:center;justify-content:center;color:#d1d5db;cursor:pointer;transition:color .2s ease}.agu-rate .rate-star svg{width:20px;height:20px}.agu-rate .rate-star.active{color:#fbbf24}.agu-rate .rate-star:hover:not(.disabled){color:#fbbf24}.agu-rate.size-sm .rate-star svg{width:16px;height:16px}.agu-rate.size-lg .rate-star svg{width:24px;height:24px}\n"] }]
        }], propDecorators: { count: [{
                type: Input
            }], allowHalf: [{
                type: Input
            }], disabled: [{
                type: Input
            }], allowClear: [{
                type: Input
            }], size: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1ZGVzL3NyYy9saWIvY29tcG9uZW50cy9yYXRlL3JhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvcmF0ZS9yYXRlLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBZXpFLE1BQU0sT0FBTyxhQUFhO0lBQ2YsS0FBSyxHQUFXLENBQUMsQ0FBQztJQUNsQixTQUFTLEdBQVksS0FBSyxDQUFDO0lBQzNCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsVUFBVSxHQUFZLElBQUksQ0FBQztJQUMzQixJQUFJLEdBQXVCLElBQUksQ0FBQztJQUMvQixNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUU5QyxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ2xCLFVBQVUsR0FBVyxDQUFDLENBQUM7SUFDZixRQUFRLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUNqQyxTQUFTLEdBQUcsR0FBRyxFQUFFLEdBQUUsQ0FBQyxDQUFDO0lBRTdCLElBQUksS0FBSztRQUNQLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBRTFCLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2pCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQztRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksSUFBSSxDQUFDLFFBQVE7WUFBRSxPQUFPO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZO1FBQ25CLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuRCxPQUFPLElBQUksSUFBSSxZQUFZLENBQUM7SUFDOUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7d0dBNURVLGFBQWE7NEZBQWIsYUFBYSxvTEFSYjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO2dCQUM1QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJDZEgsd2xCQWNBOzs0RkRFYSxhQUFhO2tCQWJ6QixTQUFTOytCQUNFLFVBQVUsY0FDUixLQUFLLGFBR047d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDOzRCQUM1QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFHUSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWd1LXJhdGUnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vcmF0ZS5jb21wb25lbnQuc2NzcycsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSYXRlQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIEBJbnB1dCgpIGNvdW50OiBudW1iZXIgPSA1O1xyXG4gIEBJbnB1dCgpIGFsbG93SGFsZjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWxsb3dDbGVhcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnID0gJ21kJztcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIHZhbHVlOiBudW1iZXIgPSAwO1xyXG4gIGhvdmVyVmFsdWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICBnZXQgc3RhcnMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IHRoaXMuY291bnQgfSwgKF8sIGkpID0+IGkgKyAxKTtcclxuICB9XHJcblxyXG4gIG9uU3RhckNsaWNrKHN0YXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHJldHVybjtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuYWxsb3dDbGVhciAmJiB0aGlzLnZhbHVlID09PSBzdGFyKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHN0YXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IDA7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBvblN0YXJIb3ZlcihzdGFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBzdGFyO1xyXG4gIH1cclxuXHJcbiAgb25TdGFyTGVhdmUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSAwO1xyXG4gIH1cclxuXHJcbiAgaXNBY3RpdmUoc3RhcjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBjdXJyZW50VmFsdWUgPSB0aGlzLmhvdmVyVmFsdWUgfHwgdGhpcy52YWx1ZTtcclxuICAgIHJldHVybiBzdGFyIDw9IGN1cnJlbnRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IDA7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxufVxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImFndS1yYXRlXCIgW25nQ2xhc3NdPVwieydzaXplLXNtJzogc2l6ZSA9PT0gJ3NtJywgJ3NpemUtbWQnOiBzaXplID09PSAnbWQnLCAnc2l6ZS1sZyc6IHNpemUgPT09ICdsZycsICdkaXNhYmxlZCc6IGRpc2FibGVkfVwiPlxyXG4gIDxzcGFuIFxyXG4gICAgKm5nRm9yPVwibGV0IHN0YXIgb2Ygc3RhcnNcIlxyXG4gICAgY2xhc3M9XCJyYXRlLXN0YXJcIlxyXG4gICAgW25nQ2xhc3NdPVwieydhY3RpdmUnOiBpc0FjdGl2ZShzdGFyKX1cIlxyXG4gICAgKGNsaWNrKT1cIm9uU3RhckNsaWNrKHN0YXIpXCJcclxuICAgIChtb3VzZWVudGVyKT1cIm9uU3RhckhvdmVyKHN0YXIpXCJcclxuICAgIChtb3VzZWxlYXZlKT1cIm9uU3RhckxlYXZlKClcIj5cclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIj5cclxuICAgICAgPHBhdGggZD1cIk0xMiAybDMuMDkgNi4yNkwyMiA5LjI3bC01IDQuODcgMS4xOCA2Ljg4TDEyIDE3Ljc3bC02LjE4IDMuMjVMNyAxNC4xNCAyIDkuMjdsNi45MS0xLjAxTDEyIDJ6XCIvPlxyXG4gICAgPC9zdmc+XHJcbiAgPC9zcGFuPlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==