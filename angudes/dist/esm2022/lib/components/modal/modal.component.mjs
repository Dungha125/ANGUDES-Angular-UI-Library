import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ModalComponent {
    visible = false;
    title = '';
    width = '520px';
    closable = true;
    maskClosable = true;
    centered = false;
    footer = true;
    okText = 'OK';
    cancelText = 'Cancel';
    showCancel = true;
    visibleChange = new EventEmitter();
    onOk = new EventEmitter();
    onCancel = new EventEmitter();
    ngOnInit() {
        if (this.visible) {
            this.disableBodyScroll();
        }
    }
    ngOnDestroy() {
        this.enableBodyScroll();
    }
    handleEscape(event) {
        if (this.visible && this.closable) {
            this.close();
        }
    }
    close() {
        this.visible = false;
        this.visibleChange.emit(false);
        this.onCancel.emit();
        this.enableBodyScroll();
    }
    handleOk() {
        this.onOk.emit();
    }
    handleMaskClick() {
        if (this.maskClosable) {
            this.close();
        }
    }
    handleModalClick(event) {
        event.stopPropagation();
    }
    disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }
    enableBodyScroll() {
        document.body.style.overflow = '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ModalComponent, selector: "agu-modal", inputs: { visible: "visible", title: "title", width: "width", closable: "closable", maskClosable: "maskClosable", centered: "centered", footer: "footer", okText: "okText", cancelText: "cancelText", showCancel: "showCancel" }, outputs: { visibleChange: "visibleChange", onOk: "onOk", onCancel: "onCancel" }, host: { listeners: { "document:keydown.escape": "handleEscape($event)" } }, ngImport: i0, template: "<div \r\n  class=\"agu-modal__mask\"\r\n  *ngIf=\"visible\"\r\n  [class.agu-modal__mask--centered]=\"centered\"\r\n  (click)=\"handleMaskClick()\"\r\n>\r\n  <div \r\n    class=\"agu-modal\"\r\n    [style.width]=\"width\"\r\n    (click)=\"handleModalClick($event)\"\r\n  >\r\n    <div class=\"agu-modal__header\" *ngIf=\"title || closable\">\r\n      <div class=\"agu-modal__title\">{{ title }}</div>\r\n      <button \r\n        *ngIf=\"closable\"\r\n        class=\"agu-modal__close\"\r\n        (click)=\"close()\"\r\n        aria-label=\"Close\"\r\n      >\r\n        \u00D7\r\n      </button>\r\n    </div>\r\n    <div class=\"agu-modal__body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"agu-modal__footer\" *ngIf=\"footer\">\r\n      <button \r\n        *ngIf=\"showCancel\"\r\n        class=\"agu-modal__btn agu-modal__btn--cancel\"\r\n        (click)=\"close()\"\r\n      >\r\n        {{ cancelText }}\r\n      </button>\r\n      <button \r\n        class=\"agu-modal__btn agu-modal__btn--ok\"\r\n        (click)=\"handleOk()\"\r\n      >\r\n        {{ okText }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-modal__mask{position:fixed;inset:0;background:#00000073;backdrop-filter:blur(4px);z-index:1050;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s cubic-bezier(.4,0,.2,1);padding:1rem}.agu-modal__mask--centered{align-items:center}.agu-modal{background:var(--agu-bg-color);border-radius:.75rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;max-height:90vh;display:flex;flex-direction:column;animation:slideUp .3s cubic-bezier(.68,-.55,.265,1.55);overflow:hidden;width:100%;max-width:520px;border:1px solid var(--agu-border-color-split)}.agu-modal__header{padding:1.5rem;border-bottom:1px solid var(--agu-border-color-split);display:flex;justify-content:space-between;align-items:center;background:var(--agu-bg-color-light)}.agu-modal__title{font-size:1.25rem;font-weight:600;color:var(--agu-text-color);margin:0}.agu-modal__close{background:none;border:none;font-size:1.5rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;width:32px;height:32px;display:flex;align-items:center;justify-content:center;transition:all .2s ease;border-radius:.25rem}.agu-modal__close:hover{color:var(--agu-danger-color);background:#ff4d4f1a;transform:rotate(90deg)}.agu-modal__body{padding:1.5rem;overflow-y:auto;flex:1;color:var(--agu-text-color-secondary);line-height:1.6}.agu-modal__footer{padding:1rem 1.5rem;border-top:1px solid var(--agu-border-color-split);display:flex;justify-content:flex-end;gap:.75rem;background:var(--agu-bg-color-light)}.agu-modal__btn{padding:.5rem 1rem;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);cursor:pointer;font-size:.875rem;font-weight:500;transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-modal__btn--ok{background-color:var(--agu-primary-color);color:var(--agu-text-color-light);border-color:var(--agu-primary-color)}.agu-modal__btn--ok:hover{background-color:var(--agu-primary-hover);border-color:var(--agu-primary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-modal__btn--ok:active{transform:translateY(0)}.agu-modal__btn--cancel:hover{color:var(--agu-primary-color);border-color:var(--agu-primary-color);background:var(--agu-bg-color-hover)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{transform:translateY(20px) scale(.95);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-modal', standalone: false, template: "<div \r\n  class=\"agu-modal__mask\"\r\n  *ngIf=\"visible\"\r\n  [class.agu-modal__mask--centered]=\"centered\"\r\n  (click)=\"handleMaskClick()\"\r\n>\r\n  <div \r\n    class=\"agu-modal\"\r\n    [style.width]=\"width\"\r\n    (click)=\"handleModalClick($event)\"\r\n  >\r\n    <div class=\"agu-modal__header\" *ngIf=\"title || closable\">\r\n      <div class=\"agu-modal__title\">{{ title }}</div>\r\n      <button \r\n        *ngIf=\"closable\"\r\n        class=\"agu-modal__close\"\r\n        (click)=\"close()\"\r\n        aria-label=\"Close\"\r\n      >\r\n        \u00D7\r\n      </button>\r\n    </div>\r\n    <div class=\"agu-modal__body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"agu-modal__footer\" *ngIf=\"footer\">\r\n      <button \r\n        *ngIf=\"showCancel\"\r\n        class=\"agu-modal__btn agu-modal__btn--cancel\"\r\n        (click)=\"close()\"\r\n      >\r\n        {{ cancelText }}\r\n      </button>\r\n      <button \r\n        class=\"agu-modal__btn agu-modal__btn--ok\"\r\n        (click)=\"handleOk()\"\r\n      >\r\n        {{ okText }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-modal__mask{position:fixed;inset:0;background:#00000073;backdrop-filter:blur(4px);z-index:1050;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s cubic-bezier(.4,0,.2,1);padding:1rem}.agu-modal__mask--centered{align-items:center}.agu-modal{background:var(--agu-bg-color);border-radius:.75rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;max-height:90vh;display:flex;flex-direction:column;animation:slideUp .3s cubic-bezier(.68,-.55,.265,1.55);overflow:hidden;width:100%;max-width:520px;border:1px solid var(--agu-border-color-split)}.agu-modal__header{padding:1.5rem;border-bottom:1px solid var(--agu-border-color-split);display:flex;justify-content:space-between;align-items:center;background:var(--agu-bg-color-light)}.agu-modal__title{font-size:1.25rem;font-weight:600;color:var(--agu-text-color);margin:0}.agu-modal__close{background:none;border:none;font-size:1.5rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;width:32px;height:32px;display:flex;align-items:center;justify-content:center;transition:all .2s ease;border-radius:.25rem}.agu-modal__close:hover{color:var(--agu-danger-color);background:#ff4d4f1a;transform:rotate(90deg)}.agu-modal__body{padding:1.5rem;overflow-y:auto;flex:1;color:var(--agu-text-color-secondary);line-height:1.6}.agu-modal__footer{padding:1rem 1.5rem;border-top:1px solid var(--agu-border-color-split);display:flex;justify-content:flex-end;gap:.75rem;background:var(--agu-bg-color-light)}.agu-modal__btn{padding:.5rem 1rem;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);cursor:pointer;font-size:.875rem;font-weight:500;transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-modal__btn--ok{background-color:var(--agu-primary-color);color:var(--agu-text-color-light);border-color:var(--agu-primary-color)}.agu-modal__btn--ok:hover{background-color:var(--agu-primary-hover);border-color:var(--agu-primary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-modal__btn--ok:active{transform:translateY(0)}.agu-modal__btn--cancel:hover{color:var(--agu-primary-color);border-color:var(--agu-primary-color);background:var(--agu-bg-color-hover)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{transform:translateY(20px) scale(.95);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}\n"] }]
        }], propDecorators: { visible: [{
                type: Input
            }], title: [{
                type: Input
            }], width: [{
                type: Input
            }], closable: [{
                type: Input
            }], maskClosable: [{
                type: Input
            }], centered: [{
                type: Input
            }], footer: [{
                type: Input
            }], okText: [{
                type: Input
            }], cancelText: [{
                type: Input
            }], showCancel: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], onOk: [{
                type: Output
            }], onCancel: [{
                type: Output
            }], handleEscape: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTeEcsTUFBTSxPQUFPLGNBQWM7SUFDaEIsT0FBTyxHQUFZLEtBQUssQ0FBQztJQUN6QixLQUFLLEdBQVcsRUFBRSxDQUFDO0lBQ25CLEtBQUssR0FBVyxPQUFPLENBQUM7SUFDeEIsUUFBUSxHQUFZLElBQUksQ0FBQztJQUN6QixZQUFZLEdBQVksSUFBSSxDQUFDO0lBQzdCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsTUFBTSxHQUFZLElBQUksQ0FBQztJQUN2QixNQUFNLEdBQVcsSUFBSSxDQUFDO0lBQ3RCLFVBQVUsR0FBVyxRQUFRLENBQUM7SUFDOUIsVUFBVSxHQUFZLElBQUksQ0FBQztJQUMxQixhQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztJQUM1QyxJQUFJLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUNoQyxRQUFRLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUU5QyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUdELFlBQVksQ0FBQyxLQUFvQjtRQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2YsQ0FBQztJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFZO1FBQzNCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDMUMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3BDLENBQUM7d0dBM0RVLGNBQWM7NEZBQWQsY0FBYyxnYkNUM0IseW9DQTJDQTs7NEZEbENhLGNBQWM7a0JBTjFCLFNBQVM7K0JBQ0UsV0FBVyxjQUNULEtBQUs7OEJBS1IsT0FBTztzQkFBZixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksYUFBYTtzQkFBdEIsTUFBTTtnQkFDRyxJQUFJO3NCQUFiLE1BQU07Z0JBQ0csUUFBUTtzQkFBakIsTUFBTTtnQkFhUCxZQUFZO3NCQURYLFlBQVk7dUJBQUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgT25Jbml0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtbW9kYWwnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL21vZGFsLmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgdmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nID0gJzUyMHB4JztcclxuICBASW5wdXQoKSBjbG9zYWJsZTogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgbWFza0Nsb3NhYmxlOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBjZW50ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvb3RlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgb2tUZXh0OiBzdHJpbmcgPSAnT0snO1xyXG4gIEBJbnB1dCgpIGNhbmNlbFRleHQ6IHN0cmluZyA9ICdDYW5jZWwnO1xyXG4gIEBJbnB1dCgpIHNob3dDYW5jZWw6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBvbk9rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSBvbkNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZUJvZHlTY3JvbGwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbmFibGVCb2R5U2Nyb2xsKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDprZXlkb3duLmVzY2FwZScsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlRXNjYXBlKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aXNpYmxlICYmIHRoaXMuY2xvc2FibGUpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIHRoaXMub25DYW5jZWwuZW1pdCgpO1xyXG4gICAgdGhpcy5lbmFibGVCb2R5U2Nyb2xsKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVPaygpOiB2b2lkIHtcclxuICAgIHRoaXMub25Pay5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVNYXNrQ2xpY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tYXNrQ2xvc2FibGUpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGFuZGxlTW9kYWxDbGljayhldmVudDogRXZlbnQpOiB2b2lkIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkaXNhYmxlQm9keVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZW5hYmxlQm9keVNjcm9sbCgpOiB2b2lkIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcclxuICB9XHJcbn1cclxuXHJcbiIsIjxkaXYgXHJcbiAgY2xhc3M9XCJhZ3UtbW9kYWxfX21hc2tcIlxyXG4gICpuZ0lmPVwidmlzaWJsZVwiXHJcbiAgW2NsYXNzLmFndS1tb2RhbF9fbWFzay0tY2VudGVyZWRdPVwiY2VudGVyZWRcIlxyXG4gIChjbGljayk9XCJoYW5kbGVNYXNrQ2xpY2soKVwiXHJcbj5cclxuICA8ZGl2IFxyXG4gICAgY2xhc3M9XCJhZ3UtbW9kYWxcIlxyXG4gICAgW3N0eWxlLndpZHRoXT1cIndpZHRoXCJcclxuICAgIChjbGljayk9XCJoYW5kbGVNb2RhbENsaWNrKCRldmVudClcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJhZ3UtbW9kYWxfX2hlYWRlclwiICpuZ0lmPVwidGl0bGUgfHwgY2xvc2FibGVcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFndS1tb2RhbF9fdGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxyXG4gICAgICA8YnV0dG9uIFxyXG4gICAgICAgICpuZ0lmPVwiY2xvc2FibGVcIlxyXG4gICAgICAgIGNsYXNzPVwiYWd1LW1vZGFsX19jbG9zZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cImNsb3NlKClcIlxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXHJcbiAgICAgID5cclxuICAgICAgICDDl1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFndS1tb2RhbF9fYm9keVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhZ3UtbW9kYWxfX2Zvb3RlclwiICpuZ0lmPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgKm5nSWY9XCJzaG93Q2FuY2VsXCJcclxuICAgICAgICBjbGFzcz1cImFndS1tb2RhbF9fYnRuIGFndS1tb2RhbF9fYnRuLS1jYW5jZWxcIlxyXG4gICAgICAgIChjbGljayk9XCJjbG9zZSgpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IGNhbmNlbFRleHQgfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gXHJcbiAgICAgICAgY2xhc3M9XCJhZ3UtbW9kYWxfX2J0biBhZ3UtbW9kYWxfX2J0bi0tb2tcIlxyXG4gICAgICAgIChjbGljayk9XCJoYW5kbGVPaygpXCJcclxuICAgICAgPlxyXG4gICAgICAgIHt7IG9rVGV4dCB9fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==