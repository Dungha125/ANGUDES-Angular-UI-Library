import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class AlertComponent {
    type: 'success' | 'info' | 'warning' | 'error';
    message: string;
    description: string;
    closable: boolean;
    showIcon: boolean;
    banner: boolean;
    onClose: EventEmitter<void>;
    visible: boolean;
    close(): void;
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlertComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlertComponent, "agu-alert", never, { "type": { "alias": "type"; "required": false; }; "message": { "alias": "message"; "required": false; }; "description": { "alias": "description"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "showIcon": { "alias": "showIcon"; "required": false; }; "banner": { "alias": "banner"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
}
