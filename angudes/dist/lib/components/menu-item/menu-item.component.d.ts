import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MenuItemComponent {
    active: boolean;
    disabled: boolean;
    href: string;
    routerLink: string;
    clicked: EventEmitter<MouseEvent>;
    onClick(event: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuItemComponent, "agu-menu-item", never, { "active": { "alias": "active"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "href": { "alias": "href"; "required": false; }; "routerLink": { "alias": "routerLink"; "required": false; }; }, { "clicked": "clicked"; }, never, ["*", "*", "*"], false, never>;
}
