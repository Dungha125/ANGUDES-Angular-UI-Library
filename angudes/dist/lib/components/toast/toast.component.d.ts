import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export interface ToastConfig {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    position?: 'top' | 'top-right' | 'top-left' | 'bottom' | 'bottom-right' | 'bottom-left';
    closable?: boolean;
}
export declare class ToastComponent implements OnInit, OnDestroy {
    message: string;
    type: 'success' | 'error' | 'warning' | 'info';
    duration: number;
    closable: boolean;
    onClose: EventEmitter<void>;
    private timer?;
    ngOnInit(): void;
    ngOnDestroy(): void;
    close(): void;
    getIcon(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ToastComponent, "agu-toast", never, { "message": { "alias": "message"; "required": false; }; "type": { "alias": "type"; "required": false; }; "duration": { "alias": "duration"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; }, { "onClose": "onClose"; }, never, never, false, never>;
}
