import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class PaginationComponent {
    current: number;
    total: number;
    pageSize: number;
    showSizeChanger: boolean;
    showQuickJumper: boolean;
    showTotal: boolean;
    simple: boolean;
    currentChange: EventEmitter<number>;
    pageSizeChange: EventEmitter<number>;
    get totalPages(): number;
    get pages(): number[];
    goToPage(page: number): void;
    prev(): void;
    next(): void;
    onPageSizeChange(size: number): void;
    get Math(): Math;
    static ɵfac: i0.ɵɵFactoryDeclaration<PaginationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PaginationComponent, "agu-pagination", never, { "current": { "alias": "current"; "required": false; }; "total": { "alias": "total"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "showSizeChanger": { "alias": "showSizeChanger"; "required": false; }; "showQuickJumper": { "alias": "showQuickJumper"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "simple": { "alias": "simple"; "required": false; }; }, { "currentChange": "currentChange"; "pageSizeChange": "pageSizeChange"; }, never, never, false, never>;
}
