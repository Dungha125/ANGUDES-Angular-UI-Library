import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BoxComponent } from './components/box/box.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselSlideComponent } from './components/carousel/carousel-slide.component';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card/card-header.component';
import { CardBodyComponent } from './components/card/card-body.component';
import { CardFooterComponent } from './components/card/card-footer.component';
import { TextEffectComponent } from './components/text-effect/text-effect.component';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { ProgressComponent } from './components/progress/progress.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionPanelComponent } from './components/accordion/accordion-panel.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TableComponent, TableHeaderComponent, TableBodyComponent, TableRowComponent, TableCellComponent, TableHeaderCellComponent } from './components/table/table.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SelectComponent } from './components/select/select.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { DividerComponent } from './components/divider/divider.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { TagComponent } from './components/tag/tag.component';
import { RateComponent } from './components/rate/rate.component';
import { SliderComponent } from './components/slider/slider.component';
import { BackTopComponent } from './components/back-top/back-top.component';
import { ToastComponent } from './components/toast/toast.component';
import { MessageComponent } from './components/message/message.component';
import { NotificationComponent } from './components/notification/notification.component';
import * as i0 from "@angular/core";
const COMPONENTS = [
    BoxComponent,
    ButtonComponent,
    NavbarComponent,
    MenuComponent,
    MenuItemComponent,
    SubmenuComponent,
    CarouselComponent,
    CarouselSlideComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    TextEffectComponent,
    ModalComponent,
    InputComponent,
    BadgeComponent,
    SpinnerComponent,
    AlertComponent,
    ProgressComponent,
    DropdownComponent,
    TooltipComponent,
    TabsComponent,
    TabComponent,
    AccordionComponent,
    AccordionPanelComponent,
    PaginationComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableRowComponent,
    TableCellComponent,
    TableHeaderCellComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    SelectComponent,
    TextareaComponent,
    BreadcrumbComponent,
    AvatarComponent,
    DividerComponent,
    SkeletonComponent,
    TagComponent,
    RateComponent,
    SliderComponent,
    BackTopComponent,
    ToastComponent,
    MessageComponent,
    NotificationComponent
];
export class AngudesModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('AngudesModule is already loaded. Import it in the AppModule only');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, deps: [{ token: AngudesModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, declarations: [BoxComponent,
            ButtonComponent,
            NavbarComponent,
            MenuComponent,
            MenuItemComponent,
            SubmenuComponent,
            CarouselComponent,
            CarouselSlideComponent,
            CardComponent,
            CardHeaderComponent,
            CardBodyComponent,
            CardFooterComponent,
            TextEffectComponent,
            ModalComponent,
            InputComponent,
            BadgeComponent,
            SpinnerComponent,
            AlertComponent,
            ProgressComponent,
            DropdownComponent,
            TooltipComponent,
            TabsComponent,
            TabComponent,
            AccordionComponent,
            AccordionPanelComponent,
            PaginationComponent,
            TableComponent,
            TableHeaderComponent,
            TableBodyComponent,
            TableRowComponent,
            TableCellComponent,
            TableHeaderCellComponent,
            CheckboxComponent,
            RadioComponent,
            SwitchComponent,
            SelectComponent,
            TextareaComponent,
            BreadcrumbComponent,
            AvatarComponent,
            DividerComponent,
            SkeletonComponent,
            TagComponent,
            RateComponent,
            SliderComponent,
            BackTopComponent,
            ToastComponent,
            MessageComponent,
            NotificationComponent], imports: [CommonModule,
            RouterModule,
            FormsModule], exports: [BoxComponent,
            ButtonComponent,
            NavbarComponent,
            MenuComponent,
            MenuItemComponent,
            SubmenuComponent,
            CarouselComponent,
            CarouselSlideComponent,
            CardComponent,
            CardHeaderComponent,
            CardBodyComponent,
            CardFooterComponent,
            TextEffectComponent,
            ModalComponent,
            InputComponent,
            BadgeComponent,
            SpinnerComponent,
            AlertComponent,
            ProgressComponent,
            DropdownComponent,
            TooltipComponent,
            TabsComponent,
            TabComponent,
            AccordionComponent,
            AccordionPanelComponent,
            PaginationComponent,
            TableComponent,
            TableHeaderComponent,
            TableBodyComponent,
            TableRowComponent,
            TableCellComponent,
            TableHeaderCellComponent,
            CheckboxComponent,
            RadioComponent,
            SwitchComponent,
            SelectComponent,
            TextareaComponent,
            BreadcrumbComponent,
            AvatarComponent,
            DividerComponent,
            SkeletonComponent,
            TagComponent,
            RateComponent,
            SliderComponent,
            BackTopComponent,
            ToastComponent,
            MessageComponent,
            NotificationComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, imports: [CommonModule,
            RouterModule,
            FormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule
                    ],
                    exports: COMPONENTS
                }]
        }], ctorParameters: () => [{ type: AngudesModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWRlcy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9hbmd1ZGVzL3NyYy9saWIvYW5ndWRlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNqRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUN4RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDakUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDOUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0s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QUFxQixhQU1uQixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVcsYUF2RGIsWUFBWTtZQUNaLGVBQWU7WUFDZixlQUFlO1lBQ2YsYUFBYTtZQUNiLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsaUJBQWlCO1lBQ2pCLHNCQUFzQjtZQUN0QixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixtQkFBbUI7WUFDbkIsbUJBQW1CO1lBQ25CLGNBQWM7WUFDZCxjQUFjO1lBQ2QsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixjQUFjO1lBQ2QsaUJBQWlCO1lBQ2pCLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixjQUFjO1lBQ2Qsb0JBQW9CO1lBQ3BCLGtCQUFrQjtZQUNsQixpQkFBaUI7WUFDakIsa0JBQWtCO1lBQ2xCLHdCQUF3QjtZQUN4QixpQkFBaUI7WUFDakIsY0FBYztZQUNkLGVBQWU7WUFDZixlQUFlO1lBQ2YsaUJBQWlCO1lBQ2pCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsZ0JBQWdCO1lBQ2hCLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osYUFBYTtZQUNiLGVBQWU7WUFDZixnQkFBZ0I7WUFDaEIsY0FBYztZQUNkLGdCQUFnQjtZQUNoQixxQkFBcUI7eUdBWVYsYUFBYSxZQU50QixZQUFZO1lBQ1osWUFBWTtZQUNaLFdBQVc7OzRGQUlGLGFBQWE7a0JBVHpCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLFVBQVU7b0JBQ3hCLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLFlBQVk7d0JBQ1osV0FBVztxQkFDWjtvQkFDRCxPQUFPLEVBQUUsVUFBVTtpQkFDcEI7OzBCQUVjLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBCb3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYm94L2JveC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOYXZiYXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUvbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZW51SXRlbUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51LWl0ZW0vbWVudS1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFN1Ym1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3VibWVudS9zdWJtZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcm91c2VsU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwtc2xpZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2FyZEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkL2NhcmQtaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRCb2R5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhcmQvY2FyZC1ib2R5LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhcmRGb290ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2FyZC9jYXJkLWZvb3Rlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUZXh0RWZmZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RleHQtZWZmZWN0L3RleHQtZWZmZWN0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IElucHV0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJhZGdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2JhZGdlL2JhZGdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFsZXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFByb2dyZXNzQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Ryb3Bkb3duL2Ryb3Bkb3duLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYnNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFicy90YWJzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90YWJzL3RhYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25QYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLXBhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRhYmxlQ29tcG9uZW50LCBUYWJsZUhlYWRlckNvbXBvbmVudCwgVGFibGVCb2R5Q29tcG9uZW50LCBUYWJsZVJvd0NvbXBvbmVudCwgVGFibGVDZWxsQ29tcG9uZW50LCBUYWJsZUhlYWRlckNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3guY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmFkaW9Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvcmFkaW8vcmFkaW8uY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3dpdGNoQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2VsZWN0Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdC9zZWxlY3QuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdGV4dGFyZWEvdGV4dGFyZWEuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnJlYWRjcnVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9icmVhZGNydW1iL2JyZWFkY3J1bWIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXZhdGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2F2YXRhci9hdmF0YXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGl2aWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9kaXZpZGVyL2RpdmlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2tlbGV0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc2tlbGV0b24vc2tlbGV0b24uY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFnQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RhZy90YWcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUmF0ZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9yYXRlL3JhdGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2xpZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmFja1RvcENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYWNrLXRvcC9iYWNrLXRvcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2FzdC90b2FzdC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNZXNzYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgQ09NUE9ORU5UUyA9IFtcclxuICBCb3hDb21wb25lbnQsXHJcbiAgQnV0dG9uQ29tcG9uZW50LFxyXG4gIE5hdmJhckNvbXBvbmVudCxcclxuICBNZW51Q29tcG9uZW50LFxyXG4gIE1lbnVJdGVtQ29tcG9uZW50LFxyXG4gIFN1Ym1lbnVDb21wb25lbnQsXHJcbiAgQ2Fyb3VzZWxDb21wb25lbnQsXHJcbiAgQ2Fyb3VzZWxTbGlkZUNvbXBvbmVudCxcclxuICBDYXJkQ29tcG9uZW50LFxyXG4gIENhcmRIZWFkZXJDb21wb25lbnQsXHJcbiAgQ2FyZEJvZHlDb21wb25lbnQsXHJcbiAgQ2FyZEZvb3RlckNvbXBvbmVudCxcclxuICBUZXh0RWZmZWN0Q29tcG9uZW50LFxyXG4gIE1vZGFsQ29tcG9uZW50LFxyXG4gIElucHV0Q29tcG9uZW50LFxyXG4gIEJhZGdlQ29tcG9uZW50LFxyXG4gIFNwaW5uZXJDb21wb25lbnQsXHJcbiAgQWxlcnRDb21wb25lbnQsXHJcbiAgUHJvZ3Jlc3NDb21wb25lbnQsXHJcbiAgRHJvcGRvd25Db21wb25lbnQsXHJcbiAgVG9vbHRpcENvbXBvbmVudCxcclxuICBUYWJzQ29tcG9uZW50LFxyXG4gIFRhYkNvbXBvbmVudCxcclxuICBBY2NvcmRpb25Db21wb25lbnQsXHJcbiAgQWNjb3JkaW9uUGFuZWxDb21wb25lbnQsXHJcbiAgUGFnaW5hdGlvbkNvbXBvbmVudCxcclxuICBUYWJsZUNvbXBvbmVudCxcclxuICBUYWJsZUhlYWRlckNvbXBvbmVudCxcclxuICBUYWJsZUJvZHlDb21wb25lbnQsXHJcbiAgVGFibGVSb3dDb21wb25lbnQsXHJcbiAgVGFibGVDZWxsQ29tcG9uZW50LFxyXG4gIFRhYmxlSGVhZGVyQ2VsbENvbXBvbmVudCxcclxuICBDaGVja2JveENvbXBvbmVudCxcclxuICBSYWRpb0NvbXBvbmVudCxcclxuICBTd2l0Y2hDb21wb25lbnQsXHJcbiAgU2VsZWN0Q29tcG9uZW50LFxyXG4gIFRleHRhcmVhQ29tcG9uZW50LFxyXG4gIEJyZWFkY3J1bWJDb21wb25lbnQsXHJcbiAgQXZhdGFyQ29tcG9uZW50LFxyXG4gIERpdmlkZXJDb21wb25lbnQsXHJcbiAgU2tlbGV0b25Db21wb25lbnQsXHJcbiAgVGFnQ29tcG9uZW50LFxyXG4gIFJhdGVDb21wb25lbnQsXHJcbiAgU2xpZGVyQ29tcG9uZW50LFxyXG4gIEJhY2tUb3BDb21wb25lbnQsXHJcbiAgVG9hc3RDb21wb25lbnQsXHJcbiAgTWVzc2FnZUNvbXBvbmVudCxcclxuICBOb3RpZmljYXRpb25Db21wb25lbnRcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBDT01QT05FTlRTLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIFJvdXRlck1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlXHJcbiAgXSxcclxuICBleHBvcnRzOiBDT01QT05FTlRTXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbmd1ZGVzTW9kdWxlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU/OiBBbmd1ZGVzTW9kdWxlKSB7XHJcbiAgICBpZiAocGFyZW50TW9kdWxlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5ndWRlc01vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIl19