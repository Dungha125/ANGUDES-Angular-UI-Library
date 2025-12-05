import * as i0 from "@angular/core";
export declare class ProgressComponent {
    percent: number;
    status: 'normal' | 'success' | 'exception' | 'active';
    showInfo: boolean;
    strokeWidth: number;
    strokeColor: string;
    trailColor: string;
    getStatusColor(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ProgressComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ProgressComponent, "agu-progress", never, { "percent": { "alias": "percent"; "required": false; }; "status": { "alias": "status"; "required": false; }; "showInfo": { "alias": "showInfo"; "required": false; }; "strokeWidth": { "alias": "strokeWidth"; "required": false; }; "strokeColor": { "alias": "strokeColor"; "required": false; }; "trailColor": { "alias": "trailColor"; "required": false; }; }, {}, never, never, false, never>;
}
