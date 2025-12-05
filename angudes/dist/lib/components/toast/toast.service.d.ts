import { ViewContainerRef } from '@angular/core';
import { ToastConfig } from './toast.component';
import * as i0 from "@angular/core";
export declare class ToastService {
    private toasts;
    private container?;
    setContainer(container: ViewContainerRef): void;
    show(config: ToastConfig): void;
    success(message: string, duration?: number): void;
    error(message: string, duration?: number): void;
    warning(message: string, duration?: number): void;
    info(message: string, duration?: number): void;
    private remove;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToastService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToastService>;
}
