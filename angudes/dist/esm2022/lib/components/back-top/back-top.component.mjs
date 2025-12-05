import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class BackTopComponent {
    visibilityHeight = 400;
    right = 50;
    bottom = 50;
    click = new EventEmitter();
    visible = false;
    onWindowScroll() {
        this.visible = window.pageYOffset > this.visibilityHeight;
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.click.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BackTopComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BackTopComponent, selector: "agu-back-top", inputs: { visibilityHeight: "visibilityHeight", right: "right", bottom: "bottom" }, outputs: { click: "click" }, host: { listeners: { "window:scroll": "onWindowScroll()" } }, ngImport: i0, template: "<button \r\n  *ngIf=\"visible\"\r\n  class=\"agu-back-top\"\r\n  [style.right.px]=\"right\"\r\n  [style.bottom.px]=\"bottom\"\r\n  (click)=\"scrollToTop()\"\r\n  type=\"button\"\r\n  aria-label=\"Back to top\">\r\n  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n    <path d=\"M18 15l-6-6-6 6\"/>\r\n  </svg>\r\n</button>\r\n\r\n", styles: [".agu-back-top{position:fixed;z-index:1000;display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#1890ff;color:#fff;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 12px #00000026;transition:all .3s ease;animation:fadeIn .3s ease}.agu-back-top svg{width:20px;height:20px}.agu-back-top:hover{background-color:#0076e4;transform:translateY(-2px);box-shadow:0 6px 16px #0003}.agu-back-top:active{transform:translateY(0)}@keyframes fadeIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BackTopComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-back-top', standalone: false, template: "<button \r\n  *ngIf=\"visible\"\r\n  class=\"agu-back-top\"\r\n  [style.right.px]=\"right\"\r\n  [style.bottom.px]=\"bottom\"\r\n  (click)=\"scrollToTop()\"\r\n  type=\"button\"\r\n  aria-label=\"Back to top\">\r\n  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n    <path d=\"M18 15l-6-6-6 6\"/>\r\n  </svg>\r\n</button>\r\n\r\n", styles: [".agu-back-top{position:fixed;z-index:1000;display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#1890ff;color:#fff;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 12px #00000026;transition:all .3s ease;animation:fadeIn .3s ease}.agu-back-top svg{width:20px;height:20px}.agu-back-top:hover{background-color:#0076e4;transform:translateY(-2px);box-shadow:0 6px 16px #0003}.agu-back-top:active{transform:translateY(0)}@keyframes fadeIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}\n"] }]
        }], propDecorators: { visibilityHeight: [{
                type: Input
            }], right: [{
                type: Input
            }], bottom: [{
                type: Input
            }], click: [{
                type: Output
            }], onWindowScroll: [{
                type: HostListener,
                args: ['window:scroll', []]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFjay10b3AuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvYmFjay10b3AvYmFjay10b3AuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvYmFjay10b3AvYmFjay10b3AuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVFyRixNQUFNLE9BQU8sZ0JBQWdCO0lBQ2xCLGdCQUFnQixHQUFXLEdBQUcsQ0FBQztJQUMvQixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLE1BQU0sR0FBVyxFQUFFLENBQUM7SUFDbkIsS0FBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7SUFFM0MsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUd6QixjQUFjO1FBQ1osSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxRQUFRLENBQUM7WUFDZCxHQUFHLEVBQUUsQ0FBQztZQUNOLFFBQVEsRUFBRSxRQUFRO1NBQ25CLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQzt3R0FuQlUsZ0JBQWdCOzRGQUFoQixnQkFBZ0IsbU9DUjdCLG9YQWFBOzs0RkRMYSxnQkFBZ0I7a0JBTjVCLFNBQVM7K0JBQ0UsY0FBYyxjQUNaLEtBQUs7OEJBS1IsZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUtQLGNBQWM7c0JBRGIsWUFBWTt1QkFBQyxlQUFlLEVBQUUsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWd1LWJhY2stdG9wJyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYmFjay10b3AuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9iYWNrLXRvcC5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEJhY2tUb3BDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHZpc2liaWxpdHlIZWlnaHQ6IG51bWJlciA9IDQwMDtcclxuICBASW5wdXQoKSByaWdodDogbnVtYmVyID0gNTA7XHJcbiAgQElucHV0KCkgYm90dG9tOiBudW1iZXIgPSA1MDtcclxuICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFtdKVxyXG4gIG9uV2luZG93U2Nyb2xsKCk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmxlID0gd2luZG93LnBhZ2VZT2Zmc2V0ID4gdGhpcy52aXNpYmlsaXR5SGVpZ2h0O1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9Ub3AoKTogdm9pZCB7XHJcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xyXG4gICAgICB0b3A6IDAsXHJcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNsaWNrLmVtaXQoKTtcclxuICB9XHJcbn1cclxuXHJcbiIsIjxidXR0b24gXHJcbiAgKm5nSWY9XCJ2aXNpYmxlXCJcclxuICBjbGFzcz1cImFndS1iYWNrLXRvcFwiXHJcbiAgW3N0eWxlLnJpZ2h0LnB4XT1cInJpZ2h0XCJcclxuICBbc3R5bGUuYm90dG9tLnB4XT1cImJvdHRvbVwiXHJcbiAgKGNsaWNrKT1cInNjcm9sbFRvVG9wKClcIlxyXG4gIHR5cGU9XCJidXR0b25cIlxyXG4gIGFyaWEtbGFiZWw9XCJCYWNrIHRvIHRvcFwiPlxyXG4gIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxyXG4gICAgPHBhdGggZD1cIk0xOCAxNWwtNi02LTYgNlwiLz5cclxuICA8L3N2Zz5cclxuPC9idXR0b24+XHJcblxyXG4iXX0=