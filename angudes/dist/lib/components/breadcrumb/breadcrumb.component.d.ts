import * as i0 from "@angular/core";
export interface BreadcrumbItem {
    label: string;
    route?: string;
    href?: string;
}
export declare class BreadcrumbComponent {
    items: BreadcrumbItem[];
    separator: string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BreadcrumbComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BreadcrumbComponent, "agu-breadcrumb", never, { "items": { "alias": "items"; "required": false; }; "separator": { "alias": "separator"; "required": false; }; }, {}, never, never, false, never>;
}
