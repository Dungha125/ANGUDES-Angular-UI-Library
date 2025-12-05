import { Component, Input, ContentChildren } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';
import * as i0 from "@angular/core";
export class AccordionComponent {
    accordion = false; // Only one panel open at a time
    bordered = true;
    ghost = false;
    panels;
    ngAfterContentInit() {
        this.panels.forEach(panel => {
            panel.bordered = this.bordered;
            panel.ghost = this.ghost;
        });
    }
    onPanelChange(activeKey) {
        if (this.accordion) {
            this.panels.forEach(panel => {
                if (panel.key !== activeKey) {
                    panel.active = false;
                }
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AccordionComponent, selector: "agu-accordion", inputs: { accordion: "accordion", bordered: "bordered", ghost: "ghost" }, queries: [{ propertyName: "panels", predicate: AccordionPanelComponent }], ngImport: i0, template: "<div \r\n  class=\"agu-accordion\"\r\n  [class.agu-accordion--bordered]=\"bordered\"\r\n  [class.agu-accordion--ghost]=\"ghost\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-accordion{width:100%}.agu-accordion--bordered{border:1px solid #f0f0f0;border-radius:.25rem;overflow:hidden}.agu-accordion--ghost{background:transparent}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-accordion', standalone: false, template: "<div \r\n  class=\"agu-accordion\"\r\n  [class.agu-accordion--bordered]=\"bordered\"\r\n  [class.agu-accordion--ghost]=\"ghost\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-accordion{width:100%}.agu-accordion--bordered{border:1px solid #f0f0f0;border-radius:.25rem;overflow:hidden}.agu-accordion--ghost{background:transparent}\n"] }]
        }], propDecorators: { accordion: [{
                type: Input
            }], bordered: [{
                type: Input
            }], ghost: [{
                type: Input
            }], panels: [{
                type: ContentChildren,
                args: [AccordionPanelComponent]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VkZXMvc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBd0IsZUFBZSxFQUErQixNQUFNLGVBQWUsQ0FBQztBQUVySCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7QUFRdEUsTUFBTSxPQUFPLGtCQUFrQjtJQUNwQixTQUFTLEdBQVksS0FBSyxDQUFDLENBQUMsZ0NBQWdDO0lBQzVELFFBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIsS0FBSyxHQUFZLEtBQUssQ0FBQztJQUVVLE1BQU0sQ0FBc0M7SUFFdEYsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLEtBQUssQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsYUFBYSxDQUFDLFNBQWlCO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQixJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssU0FBUyxFQUFFLENBQUM7b0JBQzVCLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUN2QixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0lBQ0gsQ0FBQzt3R0F0QlUsa0JBQWtCOzRGQUFsQixrQkFBa0Isc0pBS1osdUJBQXVCLDZCQ2YxQyx3TEFRQTs7NEZERWEsa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLGVBQWUsY0FDYixLQUFLOzhCQUtSLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRW9DLE1BQU07c0JBQS9DLGVBQWU7dUJBQUMsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEFjY29yZGlvblBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24tcGFuZWwuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWd1LWFjY29yZGlvbicsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBJbnB1dCgpIGFjY29yZGlvbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBPbmx5IG9uZSBwYW5lbCBvcGVuIGF0IGEgdGltZVxyXG4gIEBJbnB1dCgpIGJvcmRlcmVkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBnaG9zdDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEFjY29yZGlvblBhbmVsQ29tcG9uZW50KSBwYW5lbHMhOiBRdWVyeUxpc3Q8QWNjb3JkaW9uUGFuZWxDb21wb25lbnQ+O1xyXG5cclxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcclxuICAgICAgcGFuZWwuYm9yZGVyZWQgPSB0aGlzLmJvcmRlcmVkO1xyXG4gICAgICBwYW5lbC5naG9zdCA9IHRoaXMuZ2hvc3Q7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uUGFuZWxDaGFuZ2UoYWN0aXZlS2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmFjY29yZGlvbikge1xyXG4gICAgICB0aGlzLnBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHtcclxuICAgICAgICBpZiAocGFuZWwua2V5ICE9PSBhY3RpdmVLZXkpIHtcclxuICAgICAgICAgIHBhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCI8ZGl2IFxyXG4gIGNsYXNzPVwiYWd1LWFjY29yZGlvblwiXHJcbiAgW2NsYXNzLmFndS1hY2NvcmRpb24tLWJvcmRlcmVkXT1cImJvcmRlcmVkXCJcclxuICBbY2xhc3MuYWd1LWFjY29yZGlvbi0tZ2hvc3RdPVwiZ2hvc3RcIlxyXG4+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuXHJcbiJdfQ==