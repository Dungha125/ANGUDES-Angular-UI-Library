import * as i0 from "@angular/core";
export declare class TableComponent {
    striped: boolean;
    bordered: boolean;
    hoverable: boolean;
    size: 'sm' | 'md' | 'lg';
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableComponent, "agu-table", never, { "striped": { "alias": "striped"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "hoverable": { "alias": "hoverable"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class TableHeaderComponent {
    variant: 'default' | 'dark' | 'light';
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHeaderComponent, "agu-table-header", never, { "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class TableBodyComponent {
    static ɵfac: i0.ɵɵFactoryDeclaration<TableBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableBodyComponent, "agu-table-body", never, {}, {}, never, ["*"], false, never>;
}
export declare class TableRowComponent {
    variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableRowComponent, "agu-table-row", never, { "variant": { "alias": "variant"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class TableCellComponent {
    align: 'left' | 'center' | 'right';
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableCellComponent, "agu-table-cell", never, { "align": { "alias": "align"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare class TableHeaderCellComponent {
    align: 'left' | 'center' | 'right';
    get classes(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TableHeaderCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TableHeaderCellComponent, "agu-table-header-cell", never, { "align": { "alias": "align"; "required": false; }; }, {}, never, ["*"], false, never>;
}
