import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SliderComponent {
    min = 0;
    max = 100;
    step = 1;
    disabled = false;
    showTooltip = true;
    marks = false;
    change = new EventEmitter();
    value = 0;
    onChange = (value) => { };
    onTouched = () => { };
    get percentage() {
        return ((this.value - this.min) / (this.max - this.min)) * 100;
    }
    onInput(event) {
        const target = event.target;
        this.value = parseFloat(target.value);
        this.onChange(this.value);
        this.onTouched();
        this.change.emit(this.value);
    }
    writeValue(value) {
        this.value = value || this.min;
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SliderComponent, selector: "agu-slider", inputs: { min: "min", max: "max", step: "step", disabled: "disabled", showTooltip: "showTooltip", marks: "marks" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SliderComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-slider\" [class.disabled]=\"disabled\">\r\n  <div class=\"slider-track\">\r\n    <div class=\"slider-rail\"></div>\r\n    <div class=\"slider-track-fill\" [style.width.%]=\"percentage\"></div>\r\n    <input\r\n      type=\"range\"\r\n      class=\"slider-input\"\r\n      [min]=\"min\"\r\n      [max]=\"max\"\r\n      [step]=\"step\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($event)\"\r\n    />\r\n    <div *ngIf=\"showTooltip\" class=\"slider-tooltip\" [style.left.%]=\"percentage\">\r\n      {{ value }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-slider{position:relative;width:100%;padding:.5rem 0}.agu-slider.disabled{opacity:.6;cursor:not-allowed}.agu-slider .slider-track{position:relative;height:4px;background:transparent}.agu-slider .slider-rail{position:absolute;top:50%;left:0;right:0;height:4px;background-color:#e5e7eb;border-radius:2px;transform:translateY(-50%)}.agu-slider .slider-track-fill{position:absolute;top:50%;left:0;height:4px;background-color:#1890ff;border-radius:2px;transform:translateY(-50%);transition:width .1s ease}.agu-slider .slider-input{position:absolute;top:50%;left:0;right:0;width:100%;height:4px;margin:0;padding:0;background:transparent;outline:none;transform:translateY(-50%);-webkit-appearance:none;appearance:none;cursor:pointer}.agu-slider .slider-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;background-color:#1890ff;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input::-moz-range-thumb{width:16px;height:16px;background-color:#1890ff;border:none;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input:hover:not(:disabled)::-webkit-slider-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:hover:not(:disabled)::-moz-range-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:disabled{cursor:not-allowed}.agu-slider .slider-tooltip{position:absolute;top:-2rem;left:0;transform:translate(-50%);background-color:#1f2937;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-size:.75rem;white-space:nowrap;pointer-events:none}.agu-slider .slider-tooltip:after{content:\"\";position:absolute;bottom:-4px;left:50%;transform:translate(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #1f2937}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-slider', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SliderComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-slider\" [class.disabled]=\"disabled\">\r\n  <div class=\"slider-track\">\r\n    <div class=\"slider-rail\"></div>\r\n    <div class=\"slider-track-fill\" [style.width.%]=\"percentage\"></div>\r\n    <input\r\n      type=\"range\"\r\n      class=\"slider-input\"\r\n      [min]=\"min\"\r\n      [max]=\"max\"\r\n      [step]=\"step\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($event)\"\r\n    />\r\n    <div *ngIf=\"showTooltip\" class=\"slider-tooltip\" [style.left.%]=\"percentage\">\r\n      {{ value }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-slider{position:relative;width:100%;padding:.5rem 0}.agu-slider.disabled{opacity:.6;cursor:not-allowed}.agu-slider .slider-track{position:relative;height:4px;background:transparent}.agu-slider .slider-rail{position:absolute;top:50%;left:0;right:0;height:4px;background-color:#e5e7eb;border-radius:2px;transform:translateY(-50%)}.agu-slider .slider-track-fill{position:absolute;top:50%;left:0;height:4px;background-color:#1890ff;border-radius:2px;transform:translateY(-50%);transition:width .1s ease}.agu-slider .slider-input{position:absolute;top:50%;left:0;right:0;width:100%;height:4px;margin:0;padding:0;background:transparent;outline:none;transform:translateY(-50%);-webkit-appearance:none;appearance:none;cursor:pointer}.agu-slider .slider-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;background-color:#1890ff;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input::-moz-range-thumb{width:16px;height:16px;background-color:#1890ff;border:none;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input:hover:not(:disabled)::-webkit-slider-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:hover:not(:disabled)::-moz-range-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:disabled{cursor:not-allowed}.agu-slider .slider-tooltip{position:absolute;top:-2rem;left:0;transform:translate(-50%);background-color:#1f2937;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-size:.75rem;white-space:nowrap;pointer-events:none}.agu-slider .slider-tooltip:after{content:\"\";position:absolute;bottom:-4px;left:50%;transform:translate(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #1f2937}\n"] }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showTooltip: [{
                type: Input
            }], marks: [{
                type: Input
            }], change: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VkZXMvc3JjL2xpYi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQWV6RSxNQUFNLE9BQU8sZUFBZTtJQUNqQixHQUFHLEdBQVcsQ0FBQyxDQUFDO0lBQ2hCLEdBQUcsR0FBVyxHQUFHLENBQUM7SUFDbEIsSUFBSSxHQUFXLENBQUMsQ0FBQztJQUNqQixRQUFRLEdBQVksS0FBSyxDQUFDO0lBQzFCLFdBQVcsR0FBWSxJQUFJLENBQUM7SUFDNUIsS0FBSyxHQUFZLEtBQUssQ0FBQztJQUN0QixNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUU5QyxLQUFLLEdBQVcsQ0FBQyxDQUFDO0lBQ1YsUUFBUSxHQUFHLENBQUMsS0FBYSxFQUFFLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFDakMsU0FBUyxHQUFHLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUU3QixJQUFJLFVBQVU7UUFDWixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxPQUFPLENBQUMsS0FBWTtRQUNsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBMEIsQ0FBQztRQUNoRCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNqQyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBMkI7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO0lBQzdCLENBQUM7d0dBdkNVLGVBQWU7NEZBQWYsZUFBZSx3TEFSZjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUM5QyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJDZEgsc21CQW9CQTs7NEZESmEsZUFBZTtrQkFiM0IsU0FBUzsrQkFDRSxZQUFZLGNBQ1YsS0FBSyxhQUdOO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDOzRCQUM5QyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkFHUSxHQUFHO3NCQUFYLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWd1LXNsaWRlcicsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3NsaWRlci5jb21wb25lbnQuc2NzcycsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTbGlkZXJDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBASW5wdXQoKSBtaW46IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgbWF4OiBudW1iZXIgPSAxMDA7XHJcbiAgQElucHV0KCkgc3RlcDogbnVtYmVyID0gMTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNob3dUb29sdGlwOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBtYXJrczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgdmFsdWU6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZSA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7fTtcclxuICBwcml2YXRlIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xyXG5cclxuICBnZXQgcGVyY2VudGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuICgodGhpcy52YWx1ZSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKSkgKiAxMDA7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICB0aGlzLnZhbHVlID0gcGFyc2VGbG9hdCh0YXJnZXQudmFsdWUpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgdGhpcy5taW47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gIH1cclxufVxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImFndS1zbGlkZXJcIiBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICA8ZGl2IGNsYXNzPVwic2xpZGVyLXRyYWNrXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXJhaWxcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItdHJhY2stZmlsbFwiIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRhZ2VcIj48L2Rpdj5cclxuICAgIDxpbnB1dFxyXG4gICAgICB0eXBlPVwicmFuZ2VcIlxyXG4gICAgICBjbGFzcz1cInNsaWRlci1pbnB1dFwiXHJcbiAgICAgIFttaW5dPVwibWluXCJcclxuICAgICAgW21heF09XCJtYXhcIlxyXG4gICAgICBbc3RlcF09XCJzdGVwXCJcclxuICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcclxuICAgICAgKGlucHV0KT1cIm9uSW5wdXQoJGV2ZW50KVwiXHJcbiAgICAvPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dUb29sdGlwXCIgY2xhc3M9XCJzbGlkZXItdG9vbHRpcFwiIFtzdHlsZS5sZWZ0LiVdPVwicGVyY2VudGFnZVwiPlxyXG4gICAgICB7eyB2YWx1ZSB9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuIl19