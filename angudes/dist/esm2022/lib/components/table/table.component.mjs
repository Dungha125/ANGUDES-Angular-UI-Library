import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TableComponent {
    striped = false;
    bordered = false;
    hoverable = false;
    size = 'md';
    get classes() {
        const classes = [];
        if (this.striped)
            classes.push('table-striped');
        if (this.bordered)
            classes.push('table-bordered');
        if (this.hoverable)
            classes.push('table-hoverable');
        classes.push(`table-${this.size}`);
        return classes.join(' ');
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableComponent, selector: "agu-table", inputs: { striped: "striped", bordered: "bordered", hoverable: "hoverable", size: "size" }, ngImport: i0, template: "<table [ngClass]=\"classes\">\r\n  <ng-content></ng-content>\r\n</table>\r\n\r\n", styles: ["table{width:100%;border-collapse:collapse;margin:1rem 0;background:#fff;border-radius:.5rem;overflow:hidden}table.table-striped tbody tr:nth-child(2n){background-color:#f8f9fa}table.table-bordered,table.table-bordered th,table.table-bordered td{border:1px solid #dee2e6}table.table-hoverable tbody tr:hover{background-color:#f1f3f5;cursor:pointer}table.table-sm{font-size:.875rem}table.table-sm th,table.table-sm td{padding:.5rem}table.table-md th,table.table-md td{padding:.75rem}table.table-lg{font-size:1.125rem}table.table-lg th,table.table-lg td{padding:1rem}table th{background-color:#f8f9fa;font-weight:600;text-align:left;color:#495057;border-bottom:2px solid #dee2e6}table td{border-bottom:1px solid #dee2e6;color:#212529}table .table-header-dark{background-color:#343a40;color:#fff}table .table-header-dark th{background-color:#343a40;color:#fff;border-bottom-color:#495057}table .table-header-light,table .table-header-light th{background-color:#f8f9fa}table .table-row-primary{background-color:#cfe2ff}table .table-row-success{background-color:#d1e7dd}table .table-row-warning{background-color:#fff3cd}table .table-row-danger{background-color:#f8d7da}table .table-row-info{background-color:#cff4fc}table .text-left{text-align:left}table .text-center{text-align:center}table .text-right{text-align:right}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table', standalone: false, template: "<table [ngClass]=\"classes\">\r\n  <ng-content></ng-content>\r\n</table>\r\n\r\n", styles: ["table{width:100%;border-collapse:collapse;margin:1rem 0;background:#fff;border-radius:.5rem;overflow:hidden}table.table-striped tbody tr:nth-child(2n){background-color:#f8f9fa}table.table-bordered,table.table-bordered th,table.table-bordered td{border:1px solid #dee2e6}table.table-hoverable tbody tr:hover{background-color:#f1f3f5;cursor:pointer}table.table-sm{font-size:.875rem}table.table-sm th,table.table-sm td{padding:.5rem}table.table-md th,table.table-md td{padding:.75rem}table.table-lg{font-size:1.125rem}table.table-lg th,table.table-lg td{padding:1rem}table th{background-color:#f8f9fa;font-weight:600;text-align:left;color:#495057;border-bottom:2px solid #dee2e6}table td{border-bottom:1px solid #dee2e6;color:#212529}table .table-header-dark{background-color:#343a40;color:#fff}table .table-header-dark th{background-color:#343a40;color:#fff;border-bottom-color:#495057}table .table-header-light,table .table-header-light th{background-color:#f8f9fa}table .table-row-primary{background-color:#cfe2ff}table .table-row-success{background-color:#d1e7dd}table .table-row-warning{background-color:#fff3cd}table .table-row-danger{background-color:#f8d7da}table .table-row-info{background-color:#cff4fc}table .text-left{text-align:left}table .text-center{text-align:center}table .text-right{text-align:right}\n"] }]
        }], propDecorators: { striped: [{
                type: Input
            }], bordered: [{
                type: Input
            }], hoverable: [{
                type: Input
            }], size: [{
                type: Input
            }] } });
export class TableHeaderComponent {
    variant = 'default';
    get classes() {
        return `table-header-${this.variant}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableHeaderComponent, selector: "agu-table-header", inputs: { variant: "variant" }, ngImport: i0, template: '<thead [ngClass]="classes"><ng-content></ng-content></thead>', isInline: true, styles: [":host{display:table-header-group}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table-header', standalone: false, template: '<thead [ngClass]="classes"><ng-content></ng-content></thead>', styles: [":host{display:table-header-group}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }] } });
export class TableBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableBodyComponent, selector: "agu-table-body", ngImport: i0, template: '<tbody><ng-content></ng-content></tbody>', isInline: true, styles: [":host{display:table-row-group}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table-body', standalone: false, template: '<tbody><ng-content></ng-content></tbody>', styles: [":host{display:table-row-group}\n"] }]
        }] });
export class TableRowComponent {
    variant = 'default';
    get classes() {
        return this.variant !== 'default' ? `table-row-${this.variant}` : '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableRowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableRowComponent, selector: "agu-table-row", inputs: { variant: "variant" }, ngImport: i0, template: '<tr [ngClass]="classes"><ng-content></ng-content></tr>', isInline: true, styles: [":host{display:table-row}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableRowComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table-row', standalone: false, template: '<tr [ngClass]="classes"><ng-content></ng-content></tr>', styles: [":host{display:table-row}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }] } });
export class TableCellComponent {
    align = 'left';
    get classes() {
        return `text-${this.align}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableCellComponent, selector: "agu-table-cell", inputs: { align: "align" }, ngImport: i0, template: '<td [ngClass]="classes"><ng-content></ng-content></td>', isInline: true, styles: [":host{display:table-cell}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table-cell', standalone: false, template: '<td [ngClass]="classes"><ng-content></ng-content></td>', styles: [":host{display:table-cell}\n"] }]
        }], propDecorators: { align: [{
                type: Input
            }] } });
export class TableHeaderCellComponent {
    align = 'left';
    get classes() {
        return `text-${this.align}`;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableHeaderCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableHeaderCellComponent, selector: "agu-table-header-cell", inputs: { align: "align" }, ngImport: i0, template: '<th [ngClass]="classes"><ng-content></ng-content></th>', isInline: true, styles: [":host{display:table-cell}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableHeaderCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table-header-cell', standalone: false, template: '<th [ngClass]="classes"><ng-content></ng-content></th>', styles: [":host{display:table-cell}\n"] }]
        }], propDecorators: { align: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVFqRCxNQUFNLE9BQU8sY0FBYztJQUNoQixPQUFPLEdBQVksS0FBSyxDQUFDO0lBQ3pCLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsU0FBUyxHQUFZLEtBQUssQ0FBQztJQUMzQixJQUFJLEdBQXVCLElBQUksQ0FBQztJQUV6QyxJQUFJLE9BQU87UUFDVCxNQUFNLE9BQU8sR0FBYSxFQUFFLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDaEQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNuQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQzt3R0FiVSxjQUFjOzRGQUFkLGNBQWMsNklDUjNCLGtGQUlBOzs0RkRJYSxjQUFjO2tCQU4xQixTQUFTOytCQUNFLFdBQVcsY0FDVCxLQUFLOzhCQUtSLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLOztBQWtCUixNQUFNLE9BQU8sb0JBQW9CO0lBQ3RCLE9BQU8sR0FBaUMsU0FBUyxDQUFDO0lBRTNELElBQUksT0FBTztRQUNULE9BQU8sZ0JBQWdCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN4QyxDQUFDO3dHQUxVLG9CQUFvQjs0RkFBcEIsb0JBQW9CLHdGQUhyQiw4REFBOEQ7OzRGQUc3RCxvQkFBb0I7a0JBTmhDLFNBQVM7K0JBQ0Usa0JBQWtCLGNBQ2hCLEtBQUssWUFDUCw4REFBOEQ7OEJBSS9ELE9BQU87c0JBQWYsS0FBSzs7QUFhUixNQUFNLE9BQU8sa0JBQWtCO3dHQUFsQixrQkFBa0I7NEZBQWxCLGtCQUFrQixzREFIbkIsMENBQTBDOzs0RkFHekMsa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLGdCQUFnQixjQUNkLEtBQUssWUFDUCwwQ0FBMEM7O0FBWXRELE1BQU0sT0FBTyxpQkFBaUI7SUFDbkIsT0FBTyxHQUFzRSxTQUFTLENBQUM7SUFFaEcsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RSxDQUFDO3dHQUxVLGlCQUFpQjs0RkFBakIsaUJBQWlCLHFGQUhsQix3REFBd0Q7OzRGQUd2RCxpQkFBaUI7a0JBTjdCLFNBQVM7K0JBQ0UsZUFBZSxjQUNiLEtBQUssWUFDUCx3REFBd0Q7OEJBSXpELE9BQU87c0JBQWYsS0FBSzs7QUFhUixNQUFNLE9BQU8sa0JBQWtCO0lBQ3BCLEtBQUssR0FBZ0MsTUFBTSxDQUFDO0lBRXJELElBQUksT0FBTztRQUNULE9BQU8sUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQzt3R0FMVSxrQkFBa0I7NEZBQWxCLGtCQUFrQixrRkFIbkIsd0RBQXdEOzs0RkFHdkQsa0JBQWtCO2tCQU45QixTQUFTOytCQUNFLGdCQUFnQixjQUNkLEtBQUssWUFDUCx3REFBd0Q7OEJBSXpELEtBQUs7c0JBQWIsS0FBSzs7QUFhUixNQUFNLE9BQU8sd0JBQXdCO0lBQzFCLEtBQUssR0FBZ0MsTUFBTSxDQUFDO0lBRXJELElBQUksT0FBTztRQUNULE9BQU8sUUFBUSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDOUIsQ0FBQzt3R0FMVSx3QkFBd0I7NEZBQXhCLHdCQUF3Qix5RkFIekIsd0RBQXdEOzs0RkFHdkQsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLHVCQUF1QixjQUNyQixLQUFLLFlBQ1Asd0RBQXdEOzhCQUl6RCxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FndS10YWJsZScsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybDogJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgc3RyaXBlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGJvcmRlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaG92ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2l6ZTogJ3NtJyB8ICdtZCcgfCAnbGcnID0gJ21kJztcclxuXHJcbiAgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGNsYXNzZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAodGhpcy5zdHJpcGVkKSBjbGFzc2VzLnB1c2goJ3RhYmxlLXN0cmlwZWQnKTtcclxuICAgIGlmICh0aGlzLmJvcmRlcmVkKSBjbGFzc2VzLnB1c2goJ3RhYmxlLWJvcmRlcmVkJyk7XHJcbiAgICBpZiAodGhpcy5ob3ZlcmFibGUpIGNsYXNzZXMucHVzaCgndGFibGUtaG92ZXJhYmxlJyk7XHJcbiAgICBjbGFzc2VzLnB1c2goYHRhYmxlLSR7dGhpcy5zaXplfWApO1xyXG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtdGFibGUtaGVhZGVyJyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZTogJzx0aGVhZCBbbmdDbGFzc109XCJjbGFzc2VzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvdGhlYWQ+JyxcclxuICBzdHlsZXM6IFsnOmhvc3QgeyBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7IH0nXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFibGVIZWFkZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHZhcmlhbnQ6ICdkZWZhdWx0JyB8ICdkYXJrJyB8ICdsaWdodCcgPSAnZGVmYXVsdCc7XHJcbiAgXHJcbiAgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgdGFibGUtaGVhZGVyLSR7dGhpcy52YXJpYW50fWA7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FndS10YWJsZS1ib2R5JyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZTogJzx0Ym9keT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC90Ym9keT4nLFxyXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDsgfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUJvZHlDb21wb25lbnQge1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FndS10YWJsZS1yb3cnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiAnPHRyIFtuZ0NsYXNzXT1cImNsYXNzZXNcIj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC90cj4nLFxyXG4gIHN0eWxlczogWyc6aG9zdCB7IGRpc3BsYXk6IHRhYmxlLXJvdzsgfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZVJvd0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdmFyaWFudDogJ2RlZmF1bHQnIHwgJ3ByaW1hcnknIHwgJ3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2RhbmdlcicgfCAnaW5mbycgPSAnZGVmYXVsdCc7XHJcbiAgXHJcbiAgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLnZhcmlhbnQgIT09ICdkZWZhdWx0JyA/IGB0YWJsZS1yb3ctJHt0aGlzLnZhcmlhbnR9YCA6ICcnO1xyXG4gIH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtdGFibGUtY2VsbCcsXHJcbiAgc3RhbmRhbG9uZTogZmFsc2UsXHJcbiAgdGVtcGxhdGU6ICc8dGQgW25nQ2xhc3NdPVwiY2xhc3Nlc1wiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3RkPicsXHJcbiAgc3R5bGVzOiBbJzpob3N0IHsgZGlzcGxheTogdGFibGUtY2VsbDsgfSddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJsZUNlbGxDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGFsaWduOiAnbGVmdCcgfCAnY2VudGVyJyB8ICdyaWdodCcgPSAnbGVmdCc7XHJcbiAgXHJcbiAgZ2V0IGNsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBgdGV4dC0ke3RoaXMuYWxpZ259YDtcclxuICB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWd1LXRhYmxlLWhlYWRlci1jZWxsJyxcclxuICBzdGFuZGFsb25lOiBmYWxzZSxcclxuICB0ZW1wbGF0ZTogJzx0aCBbbmdDbGFzc109XCJjbGFzc2VzXCI+PG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PjwvdGg+JyxcclxuICBzdHlsZXM6IFsnOmhvc3QgeyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB9J11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYmxlSGVhZGVyQ2VsbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgYWxpZ246ICdsZWZ0JyB8ICdjZW50ZXInIHwgJ3JpZ2h0JyA9ICdsZWZ0JztcclxuICBcclxuICBnZXQgY2xhc3NlcygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGB0ZXh0LSR7dGhpcy5hbGlnbn1gO1xyXG4gIH1cclxufVxyXG5cclxuIiwiPHRhYmxlIFtuZ0NsYXNzXT1cImNsYXNzZXNcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvdGFibGU+XHJcblxyXG4iXX0=