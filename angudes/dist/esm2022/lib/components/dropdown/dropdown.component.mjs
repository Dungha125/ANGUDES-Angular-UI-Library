import { Component, Input, Output, EventEmitter, HostListener, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
export class DropdownComponent {
    trigger = 'click';
    placement = 'bottom';
    visible = false;
    visibleChange = new EventEmitter();
    onVisibleChange = new EventEmitter();
    dropdownMenu;
    onClickOutside(event) {
        if (this.trigger === 'click' && this.visible) {
            const target = event.target;
            if (!this.dropdownMenu?.nativeElement.contains(target) &&
                !event.target.closest('.agu-dropdown__trigger')) {
                this.close();
            }
        }
    }
    toggle() {
        this.visible = !this.visible;
        this.visibleChange.emit(this.visible);
        this.onVisibleChange.emit(this.visible);
    }
    open() {
        if (!this.visible) {
            this.visible = true;
            this.visibleChange.emit(true);
            this.onVisibleChange.emit(true);
        }
    }
    close() {
        if (this.visible) {
            this.visible = false;
            this.visibleChange.emit(false);
            this.onVisibleChange.emit(false);
        }
    }
    onMouseEnter() {
        if (this.trigger === 'hover') {
            this.open();
        }
    }
    onMouseLeave() {
        if (this.trigger === 'hover') {
            this.close();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: DropdownComponent, selector: "agu-dropdown", inputs: { trigger: "trigger", placement: "placement", visible: "visible" }, outputs: { visibleChange: "visibleChange", onVisibleChange: "onVisibleChange" }, host: { listeners: { "document:click": "onClickOutside($event)" } }, viewQueries: [{ propertyName: "dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], ngImport: i0, template: "<div \r\n  class=\"agu-dropdown\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div \r\n    class=\"agu-dropdown__trigger\"\r\n    (click)=\"trigger === 'click' && toggle()\"\r\n  >\r\n    <ng-content select=\"[slot=trigger]\"></ng-content>\r\n  </div>\r\n  <div \r\n    #dropdownMenu\r\n    class=\"agu-dropdown__menu\"\r\n    [class.agu-dropdown__menu--visible]=\"visible\"\r\n    [class.agu-dropdown__menu--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-dropdown__menu--placement-top]=\"placement === 'top'\"\r\n    [class.agu-dropdown__menu--placement-left]=\"placement === 'left'\"\r\n    [class.agu-dropdown__menu--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <ng-content select=\"[slot=menu]\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-dropdown{position:relative;display:inline-block}.agu-dropdown__trigger{cursor:pointer}.agu-dropdown__menu{position:absolute;min-width:120px;background:#fff;border-radius:.25rem;box-shadow:0 2px 8px #00000026;padding:.25rem 0;z-index:1050;opacity:0;visibility:hidden;transform:scale(.95);transition:all .2s ease;margin-top:4px}.agu-dropdown__menu--visible{opacity:1;visibility:visible;transform:scale(1)}.agu-dropdown__menu--placement-bottom{top:100%;left:0;margin-top:4px}.agu-dropdown__menu--placement-top{bottom:100%;left:0;margin-bottom:4px;margin-top:0}.agu-dropdown__menu--placement-left{top:0;right:100%;margin-right:4px;margin-top:0}.agu-dropdown__menu--placement-right{top:0;left:100%;margin-left:4px;margin-top:0}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-dropdown', standalone: false, template: "<div \r\n  class=\"agu-dropdown\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div \r\n    class=\"agu-dropdown__trigger\"\r\n    (click)=\"trigger === 'click' && toggle()\"\r\n  >\r\n    <ng-content select=\"[slot=trigger]\"></ng-content>\r\n  </div>\r\n  <div \r\n    #dropdownMenu\r\n    class=\"agu-dropdown__menu\"\r\n    [class.agu-dropdown__menu--visible]=\"visible\"\r\n    [class.agu-dropdown__menu--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-dropdown__menu--placement-top]=\"placement === 'top'\"\r\n    [class.agu-dropdown__menu--placement-left]=\"placement === 'left'\"\r\n    [class.agu-dropdown__menu--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <ng-content select=\"[slot=menu]\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-dropdown{position:relative;display:inline-block}.agu-dropdown__trigger{cursor:pointer}.agu-dropdown__menu{position:absolute;min-width:120px;background:#fff;border-radius:.25rem;box-shadow:0 2px 8px #00000026;padding:.25rem 0;z-index:1050;opacity:0;visibility:hidden;transform:scale(.95);transition:all .2s ease;margin-top:4px}.agu-dropdown__menu--visible{opacity:1;visibility:visible;transform:scale(1)}.agu-dropdown__menu--placement-bottom{top:100%;left:0;margin-top:4px}.agu-dropdown__menu--placement-top{bottom:100%;left:0;margin-bottom:4px;margin-top:0}.agu-dropdown__menu--placement-left{top:0;right:100%;margin-right:4px;margin-top:0}.agu-dropdown__menu--placement-right{top:0;left:100%;margin-left:4px;margin-top:0}\n"] }]
        }], propDecorators: { trigger: [{
                type: Input
            }], placement: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], onVisibleChange: [{
                type: Output
            }], dropdownMenu: [{
                type: ViewChild,
                args: ['dropdownMenu', { static: false }]
            }], onClickOutside: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQWMsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVM1RyxNQUFNLE9BQU8saUJBQWlCO0lBQ25CLE9BQU8sR0FBc0IsT0FBTyxDQUFDO0lBQ3JDLFNBQVMsR0FBd0MsUUFBUSxDQUFDO0lBQzFELE9BQU8sR0FBWSxLQUFLLENBQUM7SUFDeEIsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFDNUMsZUFBZSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFVixZQUFZLENBQWM7SUFHeEUsY0FBYyxDQUFDLEtBQVk7UUFDekIsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDN0MsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQXFCLENBQUM7WUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQ2xELENBQUUsS0FBSyxDQUFDLE1BQXNCLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQztnQkFDckUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUM7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUFFLENBQUM7WUFDN0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7d0dBcERVLGlCQUFpQjs0RkFBakIsaUJBQWlCLG9ZQ1Q5Qiw2eUJBd0JBOzs0RkRmYSxpQkFBaUI7a0JBTjdCLFNBQVM7K0JBQ0UsY0FBYyxjQUNaLEtBQUs7OEJBS1IsT0FBTztzQkFBZixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNJLGFBQWE7c0JBQXRCLE1BQU07Z0JBQ0csZUFBZTtzQkFBeEIsTUFBTTtnQkFFdUMsWUFBWTtzQkFBekQsU0FBUzt1QkFBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO2dCQUc1QyxjQUFjO3NCQURiLFlBQVk7dUJBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWd1LWRyb3Bkb3duJyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB0cmlnZ2VyOiAnY2xpY2snIHwgJ2hvdmVyJyA9ICdjbGljayc7XHJcbiAgQElucHV0KCkgcGxhY2VtZW50OiAnYm90dG9tJyB8ICd0b3AnIHwgJ2xlZnQnIHwgJ3JpZ2h0JyA9ICdib3R0b20nO1xyXG4gIEBJbnB1dCgpIHZpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuICBAT3V0cHV0KCkgb25WaXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdkcm9wZG93bk1lbnUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZHJvcGRvd25NZW51ITogRWxlbWVudFJlZjtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2tPdXRzaWRlKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHJpZ2dlciA9PT0gJ2NsaWNrJyAmJiB0aGlzLnZpc2libGUpIHtcclxuICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICBpZiAoIXRoaXMuZHJvcGRvd25NZW51Py5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKHRhcmdldCkgJiYgXHJcbiAgICAgICAgICAhKGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xvc2VzdCgnLmFndS1kcm9wZG93bl9fdHJpZ2dlcicpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0b2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSAhdGhpcy52aXNpYmxlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICAgIHRoaXMub25WaXNpYmxlQ2hhbmdlLmVtaXQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIG9wZW4oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgICAgdGhpcy5vblZpc2libGVDaGFuZ2UuZW1pdCh0cnVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlzaWJsZSkge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLm9uVmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTW91c2VFbnRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnRyaWdnZXIgPT09ICdob3ZlcicpIHtcclxuICAgICAgdGhpcy5vcGVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTGVhdmUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy50cmlnZ2VyID09PSAnaG92ZXInKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiIsIjxkaXYgXHJcbiAgY2xhc3M9XCJhZ3UtZHJvcGRvd25cIlxyXG4gIChtb3VzZWVudGVyKT1cIm9uTW91c2VFbnRlcigpXCJcclxuICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoKVwiXHJcbj5cclxuICA8ZGl2IFxyXG4gICAgY2xhc3M9XCJhZ3UtZHJvcGRvd25fX3RyaWdnZXJcIlxyXG4gICAgKGNsaWNrKT1cInRyaWdnZXIgPT09ICdjbGljaycgJiYgdG9nZ2xlKClcIlxyXG4gID5cclxuICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PXRyaWdnZXJdXCI+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG4gIDxkaXYgXHJcbiAgICAjZHJvcGRvd25NZW51XHJcbiAgICBjbGFzcz1cImFndS1kcm9wZG93bl9fbWVudVwiXHJcbiAgICBbY2xhc3MuYWd1LWRyb3Bkb3duX19tZW51LS12aXNpYmxlXT1cInZpc2libGVcIlxyXG4gICAgW2NsYXNzLmFndS1kcm9wZG93bl9fbWVudS0tcGxhY2VtZW50LWJvdHRvbV09XCJwbGFjZW1lbnQgPT09ICdib3R0b20nXCJcclxuICAgIFtjbGFzcy5hZ3UtZHJvcGRvd25fX21lbnUtLXBsYWNlbWVudC10b3BdPVwicGxhY2VtZW50ID09PSAndG9wJ1wiXHJcbiAgICBbY2xhc3MuYWd1LWRyb3Bkb3duX19tZW51LS1wbGFjZW1lbnQtbGVmdF09XCJwbGFjZW1lbnQgPT09ICdsZWZ0J1wiXHJcbiAgICBbY2xhc3MuYWd1LWRyb3Bkb3duX19tZW51LS1wbGFjZW1lbnQtcmlnaHRdPVwicGxhY2VtZW50ID09PSAncmlnaHQnXCJcclxuICA+XHJcbiAgICA8bmctY29udGVudCBzZWxlY3Q9XCJbc2xvdD1tZW51XVwiPjwvbmctY29udGVudD5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG4iXX0=