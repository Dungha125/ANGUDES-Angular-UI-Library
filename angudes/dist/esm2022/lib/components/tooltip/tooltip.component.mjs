import { Component, Input, HostListener, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class TooltipComponent {
    title = '';
    placement = 'top';
    trigger = 'hover';
    visible = false;
    tooltipContent;
    show() {
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
    toggle() {
        this.visible = !this.visible;
    }
    onMouseEnter() {
        if (this.trigger === 'hover') {
            this.show();
        }
    }
    onMouseLeave() {
        if (this.trigger === 'hover') {
            this.hide();
        }
    }
    onClick() {
        if (this.trigger === 'click') {
            this.toggle();
        }
    }
    onFocus() {
        if (this.trigger === 'focus') {
            this.show();
        }
    }
    onBlur() {
        if (this.trigger === 'focus') {
            this.hide();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TooltipComponent, selector: "agu-tooltip", inputs: { title: "title", placement: "placement", trigger: "trigger", visible: "visible" }, host: { listeners: { "mouseenter": "onMouseEnter($event)", "mouseleave": "onMouseLeave($event)", "click": "onClick($event)", "focus": "onFocus($event)", "blur": "onBlur($event)" } }, viewQueries: [{ propertyName: "tooltipContent", first: true, predicate: ["tooltipContent"], descendants: true }], ngImport: i0, template: "<div class=\"agu-tooltip\">\r\n  <ng-content></ng-content>\r\n  <div \r\n    #tooltipContent\r\n    class=\"agu-tooltip__content\"\r\n    [class.agu-tooltip__content--visible]=\"visible\"\r\n    [class.agu-tooltip__content--placement-top]=\"placement === 'top'\"\r\n    [class.agu-tooltip__content--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-tooltip__content--placement-left]=\"placement === 'left'\"\r\n    [class.agu-tooltip__content--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <div class=\"agu-tooltip__arrow\"></div>\r\n    <div class=\"agu-tooltip__inner\">{{ title }}</div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-tooltip{position:relative;display:inline-block}.agu-tooltip__content{position:absolute;z-index:1060;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;pointer-events:none}.agu-tooltip__content--visible{opacity:1;visibility:visible}.agu-tooltip__content--placement-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.agu-tooltip__content--placement-top .agu-tooltip__arrow{top:100%;left:50%;transform:translate(-50%);border-top-color:#000000bf;border-bottom:none}.agu-tooltip__content--placement-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.agu-tooltip__content--placement-bottom .agu-tooltip__arrow{bottom:100%;left:50%;transform:translate(-50%);border-bottom-color:#000000bf;border-top:none}.agu-tooltip__content--placement-left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.agu-tooltip__content--placement-left .agu-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%);border-left-color:#000000bf;border-right:none}.agu-tooltip__content--placement-right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.agu-tooltip__content--placement-right .agu-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%);border-right-color:#000000bf;border-left:none}.agu-tooltip__arrow{position:absolute;width:0;height:0;border:4px solid transparent}.agu-tooltip__inner{background:#000000bf;color:#fff;padding:.375rem .5rem;border-radius:.25rem;font-size:.875rem;line-height:1.5;white-space:nowrap;max-width:250px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-tooltip', standalone: false, template: "<div class=\"agu-tooltip\">\r\n  <ng-content></ng-content>\r\n  <div \r\n    #tooltipContent\r\n    class=\"agu-tooltip__content\"\r\n    [class.agu-tooltip__content--visible]=\"visible\"\r\n    [class.agu-tooltip__content--placement-top]=\"placement === 'top'\"\r\n    [class.agu-tooltip__content--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-tooltip__content--placement-left]=\"placement === 'left'\"\r\n    [class.agu-tooltip__content--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <div class=\"agu-tooltip__arrow\"></div>\r\n    <div class=\"agu-tooltip__inner\">{{ title }}</div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-tooltip{position:relative;display:inline-block}.agu-tooltip__content{position:absolute;z-index:1060;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;pointer-events:none}.agu-tooltip__content--visible{opacity:1;visibility:visible}.agu-tooltip__content--placement-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.agu-tooltip__content--placement-top .agu-tooltip__arrow{top:100%;left:50%;transform:translate(-50%);border-top-color:#000000bf;border-bottom:none}.agu-tooltip__content--placement-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.agu-tooltip__content--placement-bottom .agu-tooltip__arrow{bottom:100%;left:50%;transform:translate(-50%);border-bottom-color:#000000bf;border-top:none}.agu-tooltip__content--placement-left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.agu-tooltip__content--placement-left .agu-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%);border-left-color:#000000bf;border-right:none}.agu-tooltip__content--placement-right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.agu-tooltip__content--placement-right .agu-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%);border-right-color:#000000bf;border-left:none}.agu-tooltip__arrow{position:absolute;width:0;height:0;border:4px solid transparent}.agu-tooltip__inner{background:#000000bf;color:#fff;padding:.375rem .5rem;border-radius:.25rem;font-size:.875rem;line-height:1.5;white-space:nowrap;max-width:250px}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], placement: [{
                type: Input
            }], trigger: [{
                type: Input
            }], visible: [{
                type: Input
            }], tooltipContent: [{
                type: ViewChild,
                args: ['tooltipContent', { static: false }]
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter', ['$event']]
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1ZGVzL3NyYy9saWIvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBYyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBU3RGLE1BQU0sT0FBTyxnQkFBZ0I7SUFDbEIsS0FBSyxHQUFXLEVBQUUsQ0FBQztJQUNuQixTQUFTLEdBQXdDLEtBQUssQ0FBQztJQUN2RCxPQUFPLEdBQWdDLE9BQU8sQ0FBQztJQUMvQyxPQUFPLEdBQVksS0FBSyxDQUFDO0lBRWMsY0FBYyxDQUFjO0lBRTVFLElBQUk7UUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztJQUN0QixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDL0IsQ0FBQztJQUdELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFHRCxZQUFZO1FBQ1YsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBR0QsT0FBTztRQUNMLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFHRCxPQUFPO1FBQ0wsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRSxDQUFDO1lBQzdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNkLENBQUM7SUFDSCxDQUFDO0lBR0QsTUFBTTtRQUNKLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQzt3R0FyRFUsZ0JBQWdCOzRGQUFoQixnQkFBZ0Isd2JDVDdCLHFvQkFnQkE7OzRGRFBhLGdCQUFnQjtrQkFONUIsU0FBUzsrQkFDRSxhQUFhLGNBQ1gsS0FBSzs4QkFLUixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUUwQyxjQUFjO3NCQUE3RCxTQUFTO3VCQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtnQkFlOUMsWUFBWTtzQkFEWCxZQUFZO3VCQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRdEMsWUFBWTtzQkFEWCxZQUFZO3VCQUFDLFlBQVksRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRdEMsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRakMsT0FBTztzQkFETixZQUFZO3VCQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFRakMsTUFBTTtzQkFETCxZQUFZO3VCQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FndS10b29sdGlwJyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICd0b3AnO1xyXG4gIEBJbnB1dCgpIHRyaWdnZXI6ICdob3ZlcicgfCAnY2xpY2snIHwgJ2ZvY3VzJyA9ICdob3Zlcic7XHJcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAVmlld0NoaWxkKCd0b29sdGlwQ29udGVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSB0b29sdGlwQ29udGVudCE6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gIXRoaXMudmlzaWJsZTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWxlYXZlJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnY2xpY2snKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdmb2N1cycsIFsnJGV2ZW50J10pXHJcbiAgb25Gb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdmb2N1cycpIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJywgWyckZXZlbnQnXSlcclxuICBvbkJsdXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnZm9jdXMnKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiPGRpdiBjbGFzcz1cImFndS10b29sdGlwXCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDxkaXYgXHJcbiAgICAjdG9vbHRpcENvbnRlbnRcclxuICAgIGNsYXNzPVwiYWd1LXRvb2x0aXBfX2NvbnRlbnRcIlxyXG4gICAgW2NsYXNzLmFndS10b29sdGlwX19jb250ZW50LS12aXNpYmxlXT1cInZpc2libGVcIlxyXG4gICAgW2NsYXNzLmFndS10b29sdGlwX19jb250ZW50LS1wbGFjZW1lbnQtdG9wXT1cInBsYWNlbWVudCA9PT0gJ3RvcCdcIlxyXG4gICAgW2NsYXNzLmFndS10b29sdGlwX19jb250ZW50LS1wbGFjZW1lbnQtYm90dG9tXT1cInBsYWNlbWVudCA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFndS10b29sdGlwX19jb250ZW50LS1wbGFjZW1lbnQtbGVmdF09XCJwbGFjZW1lbnQgPT09ICdsZWZ0J1wiXHJcbiAgICBbY2xhc3MuYWd1LXRvb2x0aXBfX2NvbnRlbnQtLXBsYWNlbWVudC1yaWdodF09XCJwbGFjZW1lbnQgPT09ICdyaWdodCdcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJhZ3UtdG9vbHRpcF9fYXJyb3dcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhZ3UtdG9vbHRpcF9faW5uZXJcIj57eyB0aXRsZSB9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==