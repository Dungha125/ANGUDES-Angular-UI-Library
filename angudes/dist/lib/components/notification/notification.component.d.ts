import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NotificationComponent {
    title: string;
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    closable: boolean;
    showIcon: boolean;
    onClose: EventEmitter<void>;
    close(): void;
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NotificationComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NotificationComponent, "agu-notification", never, { "title": { "alias": "title"; "required": false; }; "message": { "alias": "message"; "required": false; }; "type": { "alias": "type"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "showIcon": { "alias": "showIcon"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
}
