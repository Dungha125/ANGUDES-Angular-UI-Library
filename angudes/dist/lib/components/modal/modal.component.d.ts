import { EventEmitter, OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class ModalComponent implements OnInit, OnDestroy {
    visible: boolean;
    title: string;
    width: string;
    closable: boolean;
    maskClosable: boolean;
    centered: boolean;
    footer: boolean;
    okText: string;
    cancelText: string;
    showCancel: boolean;
    visibleChange: EventEmitter<boolean>;
    onOk: EventEmitter<void>;
    onCancel: EventEmitter<void>;
    ngOnInit(): void;
    ngOnDestroy(): void;
    handleEscape(event: KeyboardEvent): void;
    close(): void;
    handleOk(): void;
    handleMaskClick(): void;
    handleModalClick(event: Event): void;
    private disableBodyScroll;
    private enableBodyScroll;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModalComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModalComponent, "agu-modal", never, { "visible": { "alias": "visible"; "required": false; }; "title": { "alias": "title"; "required": false; }; "width": { "alias": "width"; "required": false; }; "closable": { "alias": "closable"; "required": false; }; "maskClosable": { "alias": "maskClosable"; "required": false; }; "centered": { "alias": "centered"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "okText": { "alias": "okText"; "required": false; }; "cancelText": { "alias": "cancelText"; "required": false; }; "showCancel": { "alias": "showCancel"; "required": false; }; }, { "visibleChange": "visibleChange"; "onOk": "onOk"; "onCancel": "onCancel"; }, never, ["*"], false, never>;
}
