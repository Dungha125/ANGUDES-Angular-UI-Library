import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MessageComponent {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    closable: boolean;
    onClose: EventEmitter<void>;
    close(): void;
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<MessageComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MessageComponent, "agu-message", never, { "message": { "alias": "message"; "required": false; }; "type": { "alias": "type"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
}
