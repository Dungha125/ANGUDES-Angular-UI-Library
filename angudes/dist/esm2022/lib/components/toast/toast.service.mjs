import { Injectable } from '@angular/core';
import { ToastComponent } from './toast.component';
import * as i0 from "@angular/core";
export class ToastService {
    toasts = [];
    container;
    setContainer(container) {
        this.container = container;
    }
    show(config) {
        if (!this.container) {
            console.warn('Toast container not set. Call setContainer() first.');
            return;
        }
        const componentRef = this.container.createComponent(ToastComponent);
        const instance = componentRef.instance;
        instance.message = config.message;
        instance.type = config.type || 'info';
        instance.duration = config.duration || 3000;
        instance.closable = config.closable !== false;
        instance.onClose.subscribe(() => {
            this.remove(componentRef);
        });
        this.toasts.push(componentRef);
        // Auto remove after duration
        if (instance.duration > 0) {
            setTimeout(() => {
                this.remove(componentRef);
            }, instance.duration);
        }
    }
    success(message, duration) {
        this.show({ message, type: 'success', duration });
    }
    error(message, duration) {
        this.show({ message, type: 'error', duration });
    }
    warning(message, duration) {
        this.show({ message, type: 'warning', duration });
    }
    info(message, duration) {
        this.show({ message, type: 'info', duration });
    }
    remove(componentRef) {
        const index = this.toasts.indexOf(componentRef);
        if (index > -1) {
            this.toasts.splice(index, 1);
            componentRef.destroy();
        }
    }
    clear() {
        this.toasts.forEach(ref => ref.destroy());
        this.toasts = [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VkZXMvc3JjL2xpYi9jb21wb25lbnRzL3RvYXN0L3RvYXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBK0MsTUFBTSxlQUFlLENBQUM7QUFDeEYsT0FBTyxFQUFFLGNBQWMsRUFBZSxNQUFNLG1CQUFtQixDQUFDOztBQUtoRSxNQUFNLE9BQU8sWUFBWTtJQUNmLE1BQU0sR0FBbUMsRUFBRSxDQUFDO0lBQzVDLFNBQVMsQ0FBb0I7SUFFckMsWUFBWSxDQUFDLFNBQTJCO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUFJLENBQUMsTUFBbUI7UUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLHFEQUFxRCxDQUFDLENBQUM7WUFDcEUsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNwRSxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDO1FBRXZDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxRQUFRLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDO1FBQ3RDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUM7UUFDNUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztRQUU5QyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRS9CLDZCQUE2QjtRQUM3QixJQUFJLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDMUIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzVCLENBQUMsRUFBRSxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLFFBQWlCO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBZSxFQUFFLFFBQWlCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxPQUFPLENBQUMsT0FBZSxFQUFFLFFBQWlCO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLFFBQWlCO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFTyxNQUFNLENBQUMsWUFBMEM7UUFDdkQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM3QixZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQztJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNuQixDQUFDO3dHQS9EVSxZQUFZOzRHQUFaLFlBQVksY0FGWCxNQUFNOzs0RkFFUCxZQUFZO2tCQUh4QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIENvbXBvbmVudFJlZiwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9hc3RDb21wb25lbnQsIFRvYXN0Q29uZmlnIH0gZnJvbSAnLi90b2FzdC5jb21wb25lbnQnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RTZXJ2aWNlIHtcclxuICBwcml2YXRlIHRvYXN0czogQ29tcG9uZW50UmVmPFRvYXN0Q29tcG9uZW50PltdID0gW107XHJcbiAgcHJpdmF0ZSBjb250YWluZXI/OiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBzZXRDb250YWluZXIoY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICB9XHJcblxyXG4gIHNob3coY29uZmlnOiBUb2FzdENvbmZpZyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRhaW5lcikge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1RvYXN0IGNvbnRhaW5lciBub3Qgc2V0LiBDYWxsIHNldENvbnRhaW5lcigpIGZpcnN0LicpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KFRvYXN0Q29tcG9uZW50KTtcclxuICAgIGNvbnN0IGluc3RhbmNlID0gY29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG5cclxuICAgIGluc3RhbmNlLm1lc3NhZ2UgPSBjb25maWcubWVzc2FnZTtcclxuICAgIGluc3RhbmNlLnR5cGUgPSBjb25maWcudHlwZSB8fCAnaW5mbyc7XHJcbiAgICBpbnN0YW5jZS5kdXJhdGlvbiA9IGNvbmZpZy5kdXJhdGlvbiB8fCAzMDAwO1xyXG4gICAgaW5zdGFuY2UuY2xvc2FibGUgPSBjb25maWcuY2xvc2FibGUgIT09IGZhbHNlO1xyXG5cclxuICAgIGluc3RhbmNlLm9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5yZW1vdmUoY29tcG9uZW50UmVmKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMudG9hc3RzLnB1c2goY29tcG9uZW50UmVmKTtcclxuXHJcbiAgICAvLyBBdXRvIHJlbW92ZSBhZnRlciBkdXJhdGlvblxyXG4gICAgaWYgKGluc3RhbmNlLmR1cmF0aW9uID4gMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLnJlbW92ZShjb21wb25lbnRSZWYpO1xyXG4gICAgICB9LCBpbnN0YW5jZS5kdXJhdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzdWNjZXNzKG1lc3NhZ2U6IHN0cmluZywgZHVyYXRpb24/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvdyh7IG1lc3NhZ2UsIHR5cGU6ICdzdWNjZXNzJywgZHVyYXRpb24gfSk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihtZXNzYWdlOiBzdHJpbmcsIGR1cmF0aW9uPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNob3coeyBtZXNzYWdlLCB0eXBlOiAnZXJyb3InLCBkdXJhdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcobWVzc2FnZTogc3RyaW5nLCBkdXJhdGlvbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93KHsgbWVzc2FnZSwgdHlwZTogJ3dhcm5pbmcnLCBkdXJhdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIGluZm8obWVzc2FnZTogc3RyaW5nLCBkdXJhdGlvbj86IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zaG93KHsgbWVzc2FnZSwgdHlwZTogJ2luZm8nLCBkdXJhdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVtb3ZlKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmPFRvYXN0Q29tcG9uZW50Pik6IHZvaWQge1xyXG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnRvYXN0cy5pbmRleE9mKGNvbXBvbmVudFJlZik7XHJcbiAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICB0aGlzLnRvYXN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICBjb21wb25lbnRSZWYuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLnRvYXN0cy5mb3JFYWNoKHJlZiA9PiByZWYuZGVzdHJveSgpKTtcclxuICAgIHRoaXMudG9hc3RzID0gW107XHJcbiAgfVxyXG59XHJcblxyXG4iXX0=