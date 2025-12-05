import * as i0 from '@angular/core';
import { Component, Input, EventEmitter, Output, ViewChild, ViewChildren, HostListener, forwardRef, ContentChildren, NgModule, Optional, SkipSelf, Injectable } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';
import * as i2$1 from '@angular/forms';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';

class BoxComponent {
    padding = '1rem';
    margin = '0';
    borderRadius = '0.5rem';
    shadow = 'md';
    variant = 'default';
    border = false;
    borderColor = '#e0e0e0';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BoxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BoxComponent, selector: "agu-box", inputs: { padding: "padding", margin: "margin", borderRadius: "borderRadius", shadow: "shadow", variant: "variant", border: "border", borderColor: "borderColor" }, ngImport: i0, template: "<div \r\n  class=\"agu-box\"\r\n  [class.agu-box--shadow-none]=\"shadow === 'none'\"\r\n  [class.agu-box--shadow-sm]=\"shadow === 'sm'\"\r\n  [class.agu-box--shadow-md]=\"shadow === 'md'\"\r\n  [class.agu-box--shadow-lg]=\"shadow === 'lg'\"\r\n  [class.agu-box--shadow-xl]=\"shadow === 'xl'\"\r\n  [class.agu-box--variant-default]=\"variant === 'default'\"\r\n  [class.agu-box--variant-primary]=\"variant === 'primary'\"\r\n  [class.agu-box--variant-secondary]=\"variant === 'secondary'\"\r\n  [class.agu-box--variant-success]=\"variant === 'success'\"\r\n  [class.agu-box--variant-warning]=\"variant === 'warning'\"\r\n  [class.agu-box--variant-danger]=\"variant === 'danger'\"\r\n  [class.agu-box--bordered]=\"border\"\r\n  [style.padding]=\"padding\"\r\n  [style.margin]=\"margin\"\r\n  [style.border-radius]=\"borderRadius\"\r\n  [style.border-color]=\"border ? borderColor : 'transparent'\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-box{display:block;background-color:#fff;transition:all .3s ease}.agu-box--shadow-none{box-shadow:none}.agu-box--shadow-sm{box-shadow:0 1px 2px #0000000d}.agu-box--shadow-md{box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-box--shadow-lg{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.agu-box--shadow-xl{box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.agu-box--variant-default{background-color:#fff}.agu-box--variant-primary{background-color:#e3f2fd;color:#1976d2}.agu-box--variant-secondary{background-color:#f3e5f5;color:#7b1fa2}.agu-box--variant-success{background-color:#e8f5e9;color:#388e3c}.agu-box--variant-warning{background-color:#fff3e0;color:#f57c00}.agu-box--variant-danger{background-color:#ffebee;color:#d32f2f}.agu-box--bordered{border:1px solid}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BoxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-box', standalone: false, template: "<div \r\n  class=\"agu-box\"\r\n  [class.agu-box--shadow-none]=\"shadow === 'none'\"\r\n  [class.agu-box--shadow-sm]=\"shadow === 'sm'\"\r\n  [class.agu-box--shadow-md]=\"shadow === 'md'\"\r\n  [class.agu-box--shadow-lg]=\"shadow === 'lg'\"\r\n  [class.agu-box--shadow-xl]=\"shadow === 'xl'\"\r\n  [class.agu-box--variant-default]=\"variant === 'default'\"\r\n  [class.agu-box--variant-primary]=\"variant === 'primary'\"\r\n  [class.agu-box--variant-secondary]=\"variant === 'secondary'\"\r\n  [class.agu-box--variant-success]=\"variant === 'success'\"\r\n  [class.agu-box--variant-warning]=\"variant === 'warning'\"\r\n  [class.agu-box--variant-danger]=\"variant === 'danger'\"\r\n  [class.agu-box--bordered]=\"border\"\r\n  [style.padding]=\"padding\"\r\n  [style.margin]=\"margin\"\r\n  [style.border-radius]=\"borderRadius\"\r\n  [style.border-color]=\"border ? borderColor : 'transparent'\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-box{display:block;background-color:#fff;transition:all .3s ease}.agu-box--shadow-none{box-shadow:none}.agu-box--shadow-sm{box-shadow:0 1px 2px #0000000d}.agu-box--shadow-md{box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-box--shadow-lg{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.agu-box--shadow-xl{box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a}.agu-box--variant-default{background-color:#fff}.agu-box--variant-primary{background-color:#e3f2fd;color:#1976d2}.agu-box--variant-secondary{background-color:#f3e5f5;color:#7b1fa2}.agu-box--variant-success{background-color:#e8f5e9;color:#388e3c}.agu-box--variant-warning{background-color:#fff3e0;color:#f57c00}.agu-box--variant-danger{background-color:#ffebee;color:#d32f2f}.agu-box--bordered{border:1px solid}\n"] }]
        }], propDecorators: { padding: [{
                type: Input
            }], margin: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }], shadow: [{
                type: Input
            }], variant: [{
                type: Input
            }], border: [{
                type: Input
            }], borderColor: [{
                type: Input
            }] } });

class ButtonComponent {
    variant = 'primary';
    size = 'md';
    disabled = false;
    loading = false;
    fullWidth = false;
    type = 'button';
    clicked = new EventEmitter();
    onClick(event) {
        if (!this.disabled && !this.loading) {
            this.clicked.emit(event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ButtonComponent, selector: "agu-button", inputs: { variant: "variant", size: "size", disabled: "disabled", loading: "loading", fullWidth: "fullWidth", type: "type" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<button\r\n  [type]=\"type\"\r\n  class=\"agu-button\"\r\n  [class.agu-button--variant-primary]=\"variant === 'primary'\"\r\n  [class.agu-button--variant-secondary]=\"variant === 'secondary'\"\r\n  [class.agu-button--variant-success]=\"variant === 'success'\"\r\n  [class.agu-button--variant-warning]=\"variant === 'warning'\"\r\n  [class.agu-button--variant-danger]=\"variant === 'danger'\"\r\n  [class.agu-button--variant-outline]=\"variant === 'outline'\"\r\n  [class.agu-button--variant-ghost]=\"variant === 'ghost'\"\r\n  [class.agu-button--size-sm]=\"size === 'sm'\"\r\n  [class.agu-button--size-md]=\"size === 'md'\"\r\n  [class.agu-button--size-lg]=\"size === 'lg'\"\r\n  [class.agu-button--full-width]=\"fullWidth\"\r\n  [class.agu-button--disabled]=\"disabled\"\r\n  [class.agu-button--loading]=\"loading\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <span *ngIf=\"loading\" class=\"agu-button__spinner\"></span>\r\n  <ng-content></ng-content>\r\n</button>\r\n\r\n", styles: [".agu-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:500;border:none;border-radius:.5rem;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;outline:none;overflow:hidden;text-decoration:none;-webkit-user-select:none;user-select:none;white-space:nowrap}.agu-button:before{content:\"\";position:absolute;top:50%;left:50%;width:0;height:0;border-radius:50%;background:#ffffff4d;transform:translate(-50%,-50%);transition:width .6s,height .6s}.agu-button:active:before{width:300px;height:300px}.agu-button:focus-visible{outline:2px solid var(--agu-primary-color);outline-offset:2px;box-shadow:0 0 0 4px #1890ff1a}.agu-button--size-sm{padding:.375rem .75rem;font-size:.875rem;line-height:1.25rem;min-height:32px}.agu-button--size-md{padding:.5rem 1rem;font-size:1rem;line-height:1.5rem;min-height:40px}.agu-button--size-lg{padding:.75rem 1.5rem;font-size:1.125rem;line-height:1.75rem;min-height:48px}.agu-button--variant-primary{background-color:var(--agu-primary-color);color:var(--agu-text-color-light)}.agu-button--variant-primary:hover:not(:disabled){background-color:var(--agu-primary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-primary:active:not(:disabled){background-color:var(--agu-primary-active);transform:translateY(0)}.agu-button--variant-secondary{background-color:var(--agu-secondary-color);color:var(--agu-text-color-light)}.agu-button--variant-secondary:hover:not(:disabled){background-color:var(--agu-secondary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-secondary:active:not(:disabled){background-color:var(--agu-secondary-active);transform:translateY(0)}.agu-button--variant-success{background-color:var(--agu-success-color);color:var(--agu-text-color-light)}.agu-button--variant-success:hover:not(:disabled){background-color:var(--agu-success-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-success:active:not(:disabled){background-color:#3f9714;transform:translateY(0)}.agu-button--variant-warning{background-color:var(--agu-warning-color);color:var(--agu-text-color-light)}.agu-button--variant-warning:hover:not(:disabled){background-color:var(--agu-warning-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-warning:active:not(:disabled){background-color:#d69005;transform:translateY(0)}.agu-button--variant-danger{background-color:var(--agu-danger-color);color:var(--agu-text-color-light)}.agu-button--variant-danger:hover:not(:disabled){background-color:var(--agu-danger-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-danger:active:not(:disabled){background-color:#ff1a1d;transform:translateY(0)}.agu-button--variant-outline{background-color:transparent;border:2px solid var(--agu-primary-color);color:var(--agu-primary-color)}.agu-button--variant-outline:hover:not(:disabled){background-color:var(--agu-primary-color);color:var(--agu-text-color-light);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-outline:active:not(:disabled){background-color:var(--agu-primary-active);border-color:var(--agu-primary-active);transform:translateY(0)}.agu-button--variant-ghost{background-color:transparent;color:var(--agu-primary-color)}.agu-button--variant-ghost:hover:not(:disabled){background-color:var(--agu-bg-color-hover);transform:translateY(-2px)}.agu-button--variant-ghost:active:not(:disabled){background-color:var(--agu-bg-color-active);transform:translateY(0)}.agu-button--full-width{width:100%}.agu-button--disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.agu-button--loading{cursor:wait;pointer-events:none}.agu-button__spinner{width:1em;height:1em;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin .6s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-button', standalone: false, template: "<button\r\n  [type]=\"type\"\r\n  class=\"agu-button\"\r\n  [class.agu-button--variant-primary]=\"variant === 'primary'\"\r\n  [class.agu-button--variant-secondary]=\"variant === 'secondary'\"\r\n  [class.agu-button--variant-success]=\"variant === 'success'\"\r\n  [class.agu-button--variant-warning]=\"variant === 'warning'\"\r\n  [class.agu-button--variant-danger]=\"variant === 'danger'\"\r\n  [class.agu-button--variant-outline]=\"variant === 'outline'\"\r\n  [class.agu-button--variant-ghost]=\"variant === 'ghost'\"\r\n  [class.agu-button--size-sm]=\"size === 'sm'\"\r\n  [class.agu-button--size-md]=\"size === 'md'\"\r\n  [class.agu-button--size-lg]=\"size === 'lg'\"\r\n  [class.agu-button--full-width]=\"fullWidth\"\r\n  [class.agu-button--disabled]=\"disabled\"\r\n  [class.agu-button--loading]=\"loading\"\r\n  [disabled]=\"disabled || loading\"\r\n  (click)=\"onClick($event)\"\r\n>\r\n  <span *ngIf=\"loading\" class=\"agu-button__spinner\"></span>\r\n  <ng-content></ng-content>\r\n</button>\r\n\r\n", styles: [".agu-button{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-weight:500;border:none;border-radius:.5rem;cursor:pointer;transition:all .3s cubic-bezier(.4,0,.2,1);position:relative;outline:none;overflow:hidden;text-decoration:none;-webkit-user-select:none;user-select:none;white-space:nowrap}.agu-button:before{content:\"\";position:absolute;top:50%;left:50%;width:0;height:0;border-radius:50%;background:#ffffff4d;transform:translate(-50%,-50%);transition:width .6s,height .6s}.agu-button:active:before{width:300px;height:300px}.agu-button:focus-visible{outline:2px solid var(--agu-primary-color);outline-offset:2px;box-shadow:0 0 0 4px #1890ff1a}.agu-button--size-sm{padding:.375rem .75rem;font-size:.875rem;line-height:1.25rem;min-height:32px}.agu-button--size-md{padding:.5rem 1rem;font-size:1rem;line-height:1.5rem;min-height:40px}.agu-button--size-lg{padding:.75rem 1.5rem;font-size:1.125rem;line-height:1.75rem;min-height:48px}.agu-button--variant-primary{background-color:var(--agu-primary-color);color:var(--agu-text-color-light)}.agu-button--variant-primary:hover:not(:disabled){background-color:var(--agu-primary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-primary:active:not(:disabled){background-color:var(--agu-primary-active);transform:translateY(0)}.agu-button--variant-secondary{background-color:var(--agu-secondary-color);color:var(--agu-text-color-light)}.agu-button--variant-secondary:hover:not(:disabled){background-color:var(--agu-secondary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-secondary:active:not(:disabled){background-color:var(--agu-secondary-active);transform:translateY(0)}.agu-button--variant-success{background-color:var(--agu-success-color);color:var(--agu-text-color-light)}.agu-button--variant-success:hover:not(:disabled){background-color:var(--agu-success-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-success:active:not(:disabled){background-color:#3f9714;transform:translateY(0)}.agu-button--variant-warning{background-color:var(--agu-warning-color);color:var(--agu-text-color-light)}.agu-button--variant-warning:hover:not(:disabled){background-color:var(--agu-warning-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-warning:active:not(:disabled){background-color:#d69005;transform:translateY(0)}.agu-button--variant-danger{background-color:var(--agu-danger-color);color:var(--agu-text-color-light)}.agu-button--variant-danger:hover:not(:disabled){background-color:var(--agu-danger-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-danger:active:not(:disabled){background-color:#ff1a1d;transform:translateY(0)}.agu-button--variant-outline{background-color:transparent;border:2px solid var(--agu-primary-color);color:var(--agu-primary-color)}.agu-button--variant-outline:hover:not(:disabled){background-color:var(--agu-primary-color);color:var(--agu-text-color-light);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-button--variant-outline:active:not(:disabled){background-color:var(--agu-primary-active);border-color:var(--agu-primary-active);transform:translateY(0)}.agu-button--variant-ghost{background-color:transparent;color:var(--agu-primary-color)}.agu-button--variant-ghost:hover:not(:disabled){background-color:var(--agu-bg-color-hover);transform:translateY(-2px)}.agu-button--variant-ghost:active:not(:disabled){background-color:var(--agu-bg-color-active);transform:translateY(0)}.agu-button--full-width{width:100%}.agu-button--disabled{opacity:.6;cursor:not-allowed;pointer-events:none}.agu-button--loading{cursor:wait;pointer-events:none}.agu-button__spinner{width:1em;height:1em;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin .6s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], disabled: [{
                type: Input
            }], loading: [{
                type: Input
            }], fullWidth: [{
                type: Input
            }], type: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class NavbarComponent {
    brand = '';
    brandLink = '/';
    fixed = false;
    variant = 'light';
    shadow = true;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NavbarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NavbarComponent, selector: "agu-navbar", inputs: { brand: "brand", brandLink: "brandLink", fixed: "fixed", variant: "variant", shadow: "shadow" }, ngImport: i0, template: "<nav \r\n  class=\"agu-navbar\"\r\n  [class.agu-navbar--fixed]=\"fixed\"\r\n  [class.agu-navbar--variant-light]=\"variant === 'light'\"\r\n  [class.agu-navbar--variant-dark]=\"variant === 'dark'\"\r\n  [class.agu-navbar--shadow]=\"shadow\"\r\n>\r\n  <div class=\"agu-navbar__container\">\r\n    <div class=\"agu-navbar__brand\">\r\n      <a [href]=\"brandLink\" class=\"agu-navbar__brand-link\">\r\n        {{ brand }}\r\n      </a>\r\n    </div>\r\n    <div class=\"agu-navbar__content\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n", styles: [".agu-navbar{width:100%;padding:.75rem 1rem;background-color:#fff;border-bottom:1px solid #e5e7eb;transition:all .3s ease}.agu-navbar--fixed{position:fixed;top:0;left:0;right:0;z-index:1000}.agu-navbar--shadow{box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f}.agu-navbar--variant-light{background-color:#fff;color:#111827}.agu-navbar--variant-dark{background-color:#1f2937;color:#fff;border-bottom-color:#374151}.agu-navbar__container{display:flex;align-items:center;justify-content:space-between;max-width:1280px;margin:0 auto;width:100%}.agu-navbar__brand{display:flex;align-items:center}.agu-navbar__brand-link{font-size:1.25rem;font-weight:700;text-decoration:none;color:inherit;transition:opacity .2s ease}.agu-navbar__brand-link:hover{opacity:.8}.agu-navbar__content{display:flex;align-items:center;gap:1rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NavbarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-navbar', standalone: false, template: "<nav \r\n  class=\"agu-navbar\"\r\n  [class.agu-navbar--fixed]=\"fixed\"\r\n  [class.agu-navbar--variant-light]=\"variant === 'light'\"\r\n  [class.agu-navbar--variant-dark]=\"variant === 'dark'\"\r\n  [class.agu-navbar--shadow]=\"shadow\"\r\n>\r\n  <div class=\"agu-navbar__container\">\r\n    <div class=\"agu-navbar__brand\">\r\n      <a [href]=\"brandLink\" class=\"agu-navbar__brand-link\">\r\n        {{ brand }}\r\n      </a>\r\n    </div>\r\n    <div class=\"agu-navbar__content\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n", styles: [".agu-navbar{width:100%;padding:.75rem 1rem;background-color:#fff;border-bottom:1px solid #e5e7eb;transition:all .3s ease}.agu-navbar--fixed{position:fixed;top:0;left:0;right:0;z-index:1000}.agu-navbar--shadow{box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f}.agu-navbar--variant-light{background-color:#fff;color:#111827}.agu-navbar--variant-dark{background-color:#1f2937;color:#fff;border-bottom-color:#374151}.agu-navbar__container{display:flex;align-items:center;justify-content:space-between;max-width:1280px;margin:0 auto;width:100%}.agu-navbar__brand{display:flex;align-items:center}.agu-navbar__brand-link{font-size:1.25rem;font-weight:700;text-decoration:none;color:inherit;transition:opacity .2s ease}.agu-navbar__brand-link:hover{opacity:.8}.agu-navbar__content{display:flex;align-items:center;gap:1rem}\n"] }]
        }], propDecorators: { brand: [{
                type: Input
            }], brandLink: [{
                type: Input
            }], fixed: [{
                type: Input
            }], variant: [{
                type: Input
            }], shadow: [{
                type: Input
            }] } });

class MenuComponent {
    orientation = 'horizontal';
    variant = 'default';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: MenuComponent, selector: "agu-menu", inputs: { orientation: "orientation", variant: "variant" }, ngImport: i0, template: "<ul \r\n  class=\"agu-menu\"\r\n  [class.agu-menu--horizontal]=\"orientation === 'horizontal'\"\r\n  [class.agu-menu--vertical]=\"orientation === 'vertical'\"\r\n  [class.agu-menu--variant-default]=\"variant === 'default'\"\r\n  [class.agu-menu--variant-pills]=\"variant === 'pills'\"\r\n  [class.agu-menu--variant-tabs]=\"variant === 'tabs'\"\r\n>\r\n  <ng-content></ng-content>\r\n</ul>\r\n\r\n", styles: [".agu-menu{display:flex;list-style:none;margin:0;padding:0;gap:.5rem}.agu-menu--horizontal{flex-direction:row;align-items:center}.agu-menu--vertical{flex-direction:column;align-items:stretch}.agu-menu--variant-default{gap:0;border-bottom:1px solid #e5e7eb}.agu-menu--variant-pills{gap:.5rem}.agu-menu--variant-tabs{gap:0;border-bottom:2px solid #e5e7eb}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-menu', standalone: false, template: "<ul \r\n  class=\"agu-menu\"\r\n  [class.agu-menu--horizontal]=\"orientation === 'horizontal'\"\r\n  [class.agu-menu--vertical]=\"orientation === 'vertical'\"\r\n  [class.agu-menu--variant-default]=\"variant === 'default'\"\r\n  [class.agu-menu--variant-pills]=\"variant === 'pills'\"\r\n  [class.agu-menu--variant-tabs]=\"variant === 'tabs'\"\r\n>\r\n  <ng-content></ng-content>\r\n</ul>\r\n\r\n", styles: [".agu-menu{display:flex;list-style:none;margin:0;padding:0;gap:.5rem}.agu-menu--horizontal{flex-direction:row;align-items:center}.agu-menu--vertical{flex-direction:column;align-items:stretch}.agu-menu--variant-default{gap:0;border-bottom:1px solid #e5e7eb}.agu-menu--variant-pills{gap:.5rem}.agu-menu--variant-tabs{gap:0;border-bottom:2px solid #e5e7eb}\n"] }]
        }], propDecorators: { orientation: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });

class MenuItemComponent {
    active = false;
    disabled = false;
    href = '';
    routerLink = '';
    clicked = new EventEmitter();
    onClick(event) {
        if (!this.disabled) {
            this.clicked.emit(event);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MenuItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: MenuItemComponent, selector: "agu-menu-item", inputs: { active: "active", disabled: "disabled", href: "href", routerLink: "routerLink" }, outputs: { clicked: "clicked" }, ngImport: i0, template: "<li \r\n  class=\"agu-menu-item\"\r\n  [class.agu-menu-item--active]=\"active\"\r\n  [class.agu-menu-item--disabled]=\"disabled\"\r\n>\r\n  <a\r\n    *ngIf=\"href && !routerLink\"\r\n    [href]=\"href\"\r\n    class=\"agu-menu-item__link\"\r\n    [class.agu-menu-item__link--active]=\"active\"\r\n    [class.agu-menu-item__link--disabled]=\"disabled\"\r\n    (click)=\"onClick($event)\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <a\r\n    *ngIf=\"routerLink && !href\"\r\n    [routerLink]=\"routerLink\"\r\n    class=\"agu-menu-item__link\"\r\n    [class.agu-menu-item__link--active]=\"active\"\r\n    [class.agu-menu-item__link--disabled]=\"disabled\"\r\n    routerLinkActive=\"agu-menu-item__link--active\"\r\n    (click)=\"onClick($event)\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <span\r\n    *ngIf=\"!href && !routerLink\"\r\n    class=\"agu-menu-item__link\"\r\n    [class.agu-menu-item__link--active]=\"active\"\r\n    [class.agu-menu-item__link--disabled]=\"disabled\"\r\n    (click)=\"onClick($event)\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </span>\r\n</li>\r\n\r\n", styles: [".agu-menu-item{list-style:none;margin:0;padding:0}.agu-menu-item__link{display:block;padding:.75rem 1rem;text-decoration:none;color:#6b7280;font-weight:500;transition:all .2s ease;cursor:pointer;border-radius:.375rem;border:none;background:transparent}.agu-menu-item__link:hover:not(.agu-menu-item__link--disabled){color:#3b82f6;background-color:#f3f4f6}.agu-menu-item__link--active{color:#3b82f6;background-color:#eff6ff;font-weight:600}.agu-menu-item__link--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}:host-context(.agu-menu--variant-default) .agu-menu-item__link{border-radius:0;border-bottom:2px solid transparent;margin-bottom:-1px}:host-context(.agu-menu--variant-default) .agu-menu-item__link--active{border-bottom-color:#3b82f6;background-color:transparent}:host-context(.agu-menu--variant-tabs) .agu-menu-item__link{border-radius:.375rem .375rem 0 0;border-bottom:2px solid transparent;margin-bottom:-2px}:host-context(.agu-menu--variant-tabs) .agu-menu-item__link--active{border-bottom-color:#3b82f6;background-color:transparent;color:#3b82f6}:host-context(.agu-menu--variant-pills) .agu-menu-item__link{border-radius:9999px}:host-context(.agu-menu--variant-pills) .agu-menu-item__link--active{background-color:#3b82f6;color:#fff}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }, { kind: "directive", type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "ariaCurrentWhenActive", "routerLinkActive"], outputs: ["isActiveChange"], exportAs: ["routerLinkActive"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MenuItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-menu-item', standalone: false, template: "<li \r\n  class=\"agu-menu-item\"\r\n  [class.agu-menu-item--active]=\"active\"\r\n  [class.agu-menu-item--disabled]=\"disabled\"\r\n>\r\n  <a\r\n    *ngIf=\"href && !routerLink\"\r\n    [href]=\"href\"\r\n    class=\"agu-menu-item__link\"\r\n    [class.agu-menu-item__link--active]=\"active\"\r\n    [class.agu-menu-item__link--disabled]=\"disabled\"\r\n    (click)=\"onClick($event)\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <a\r\n    *ngIf=\"routerLink && !href\"\r\n    [routerLink]=\"routerLink\"\r\n    class=\"agu-menu-item__link\"\r\n    [class.agu-menu-item__link--active]=\"active\"\r\n    [class.agu-menu-item__link--disabled]=\"disabled\"\r\n    routerLinkActive=\"agu-menu-item__link--active\"\r\n    (click)=\"onClick($event)\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </a>\r\n  <span\r\n    *ngIf=\"!href && !routerLink\"\r\n    class=\"agu-menu-item__link\"\r\n    [class.agu-menu-item__link--active]=\"active\"\r\n    [class.agu-menu-item__link--disabled]=\"disabled\"\r\n    (click)=\"onClick($event)\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </span>\r\n</li>\r\n\r\n", styles: [".agu-menu-item{list-style:none;margin:0;padding:0}.agu-menu-item__link{display:block;padding:.75rem 1rem;text-decoration:none;color:#6b7280;font-weight:500;transition:all .2s ease;cursor:pointer;border-radius:.375rem;border:none;background:transparent}.agu-menu-item__link:hover:not(.agu-menu-item__link--disabled){color:#3b82f6;background-color:#f3f4f6}.agu-menu-item__link--active{color:#3b82f6;background-color:#eff6ff;font-weight:600}.agu-menu-item__link--disabled{opacity:.5;cursor:not-allowed;pointer-events:none}:host-context(.agu-menu--variant-default) .agu-menu-item__link{border-radius:0;border-bottom:2px solid transparent;margin-bottom:-1px}:host-context(.agu-menu--variant-default) .agu-menu-item__link--active{border-bottom-color:#3b82f6;background-color:transparent}:host-context(.agu-menu--variant-tabs) .agu-menu-item__link{border-radius:.375rem .375rem 0 0;border-bottom:2px solid transparent;margin-bottom:-2px}:host-context(.agu-menu--variant-tabs) .agu-menu-item__link--active{border-bottom-color:#3b82f6;background-color:transparent;color:#3b82f6}:host-context(.agu-menu--variant-pills) .agu-menu-item__link{border-radius:9999px}:host-context(.agu-menu--variant-pills) .agu-menu-item__link--active{background-color:#3b82f6;color:#fff}\n"] }]
        }], propDecorators: { active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], href: [{
                type: Input
            }], routerLink: [{
                type: Input
            }], clicked: [{
                type: Output
            }] } });

class SubmenuComponent {
    title = '';
    open = false;
    icon = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SubmenuComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SubmenuComponent, selector: "agu-submenu", inputs: { title: "title", open: "open", icon: "icon" }, ngImport: i0, template: "<div \r\n  class=\"agu-submenu\"\r\n  [class.agu-submenu--open]=\"open\"\r\n>\r\n  <div \r\n    class=\"agu-submenu__header\"\r\n    (click)=\"open = !open\"\r\n  >\r\n    <span class=\"agu-submenu__icon\" *ngIf=\"icon\">{{ icon }}</span>\r\n    <span class=\"agu-submenu__title\">{{ title }}</span>\r\n    <span class=\"agu-submenu__arrow\">\u25BC</span>\r\n  </div>\r\n  <div class=\"agu-submenu__content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-submenu{display:flex;flex-direction:column}.agu-submenu__header{display:flex;align-items:center;gap:.5rem;padding:.75rem 1rem;cursor:pointer;-webkit-user-select:none;user-select:none;color:#374151;font-weight:500;transition:all .2s ease;border-radius:.375rem}.agu-submenu__header:hover{background-color:#f3f4f6;color:#3b82f6}.agu-submenu__icon{display:inline-flex;align-items:center;font-size:1.125rem}.agu-submenu__title{flex:1}.agu-submenu__arrow{transition:transform .2s ease;font-size:.75rem;color:#9ca3af}.agu-submenu--open .agu-submenu__arrow{transform:rotate(180deg)}.agu-submenu--open .agu-submenu__content{max-height:1000px;opacity:1}.agu-submenu__content{max-height:0;overflow:hidden;opacity:0;transition:all .3s ease;padding-left:1rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SubmenuComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-submenu', standalone: false, template: "<div \r\n  class=\"agu-submenu\"\r\n  [class.agu-submenu--open]=\"open\"\r\n>\r\n  <div \r\n    class=\"agu-submenu__header\"\r\n    (click)=\"open = !open\"\r\n  >\r\n    <span class=\"agu-submenu__icon\" *ngIf=\"icon\">{{ icon }}</span>\r\n    <span class=\"agu-submenu__title\">{{ title }}</span>\r\n    <span class=\"agu-submenu__arrow\">\u25BC</span>\r\n  </div>\r\n  <div class=\"agu-submenu__content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-submenu{display:flex;flex-direction:column}.agu-submenu__header{display:flex;align-items:center;gap:.5rem;padding:.75rem 1rem;cursor:pointer;-webkit-user-select:none;user-select:none;color:#374151;font-weight:500;transition:all .2s ease;border-radius:.375rem}.agu-submenu__header:hover{background-color:#f3f4f6;color:#3b82f6}.agu-submenu__icon{display:inline-flex;align-items:center;font-size:1.125rem}.agu-submenu__title{flex:1}.agu-submenu__arrow{transition:transform .2s ease;font-size:.75rem;color:#9ca3af}.agu-submenu--open .agu-submenu__arrow{transform:rotate(180deg)}.agu-submenu--open .agu-submenu__content{max-height:1000px;opacity:1}.agu-submenu__content{max-height:0;overflow:hidden;opacity:0;transition:all .3s ease;padding-left:1rem}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], open: [{
                type: Input
            }], icon: [{
                type: Input
            }] } });

class CarouselComponent {
    autoplay = false;
    autoplayInterval = 3000;
    showDots = true;
    showArrows = true;
    effect = 'slide';
    dotsPosition = 'bottom';
    slideChange = new EventEmitter();
    carouselContainer;
    slides;
    currentIndex = 0;
    autoplayTimer;
    isTransitioning = false;
    ngOnInit() {
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    ngAfterViewInit() {
        this.updateCarousel();
    }
    ngOnDestroy() {
        this.stopAutoplay();
    }
    goToSlide(index) {
        if (this.isTransitioning || index === this.currentIndex)
            return;
        const slideCount = this.slides?.length || 0;
        if (index < 0 || index >= slideCount)
            return;
        this.isTransitioning = true;
        this.currentIndex = index;
        this.updateCarousel();
        this.slideChange.emit(index);
        setTimeout(() => {
            this.isTransitioning = false;
        }, 500);
    }
    next() {
        const slideCount = this.slides?.length || 0;
        const nextIndex = (this.currentIndex + 1) % slideCount;
        this.goToSlide(nextIndex);
    }
    prev() {
        const slideCount = this.slides?.length || 0;
        const prevIndex = (this.currentIndex - 1 + slideCount) % slideCount;
        this.goToSlide(prevIndex);
    }
    updateCarousel() {
        if (!this.carouselContainer || !this.slides)
            return;
        if (this.effect === 'slide') {
            const translateX = -this.currentIndex * 100;
            this.carouselContainer.nativeElement.style.transform = `translateX(${translateX}%)`;
        }
    }
    startAutoplay() {
        this.stopAutoplay();
        this.autoplayTimer = setInterval(() => {
            this.next();
        }, this.autoplayInterval);
    }
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    onMouseEnter() {
        if (this.autoplay) {
            this.stopAutoplay();
        }
    }
    onMouseLeave() {
        if (this.autoplay) {
            this.startAutoplay();
        }
    }
    getSlideCount() {
        return this.slides?.length || 0;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CarouselComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CarouselComponent, selector: "agu-carousel", inputs: { autoplay: "autoplay", autoplayInterval: "autoplayInterval", showDots: "showDots", showArrows: "showArrows", effect: "effect", dotsPosition: "dotsPosition" }, outputs: { slideChange: "slideChange" }, viewQueries: [{ propertyName: "carouselContainer", first: true, predicate: ["carouselContainer"], descendants: true }, { propertyName: "slides", predicate: ["slide"], descendants: true }], ngImport: i0, template: "<div \r\n  class=\"agu-carousel\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div class=\"agu-carousel__wrapper\">\r\n    <div \r\n      #carouselContainer\r\n      class=\"agu-carousel__container\"\r\n      [class.agu-carousel__container--effect-slide]=\"effect === 'slide'\"\r\n      [class.agu-carousel__container--effect-fade]=\"effect === 'fade'\"\r\n    >\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <button \r\n      *ngIf=\"showArrows && getSlideCount() > 1\"\r\n      class=\"agu-carousel__arrow agu-carousel__arrow--prev\"\r\n      (click)=\"prev()\"\r\n      aria-label=\"Previous slide\"\r\n    >\r\n      \u2039\r\n    </button>\r\n    <button \r\n      *ngIf=\"showArrows && getSlideCount() > 1\"\r\n      class=\"agu-carousel__arrow agu-carousel__arrow--next\"\r\n      (click)=\"next()\"\r\n      aria-label=\"Next slide\"\r\n    >\r\n      \u203A\r\n    </button>\r\n  </div>\r\n\r\n  <ul \r\n    *ngIf=\"showDots && getSlideCount() > 1\"\r\n    class=\"agu-carousel__dots\"\r\n    [class.agu-carousel__dots--position-bottom]=\"dotsPosition === 'bottom'\"\r\n    [class.agu-carousel__dots--position-top]=\"dotsPosition === 'top'\"\r\n    [class.agu-carousel__dots--position-left]=\"dotsPosition === 'left'\"\r\n    [class.agu-carousel__dots--position-right]=\"dotsPosition === 'right'\"\r\n  >\r\n    <li \r\n      *ngFor=\"let slide of slides; let i = index\"\r\n      class=\"agu-carousel__dot\"\r\n      [class.agu-carousel__dot--active]=\"i === currentIndex\"\r\n      (click)=\"goToSlide(i)\"\r\n    ></li>\r\n  </ul>\r\n</div>\r\n\r\n", styles: [".agu-carousel{position:relative;width:100%;overflow:hidden;border-radius:.5rem}.agu-carousel__wrapper{position:relative;width:100%;overflow:hidden}.agu-carousel__container{display:flex;width:100%;transition:transform .5s ease-in-out}.agu-carousel__container--effect-slide{flex-direction:row}.agu-carousel__container--effect-fade{position:relative;flex-direction:row}.agu-carousel__container--effect-fade ::ng-deep>*{opacity:0;transition:opacity .5s ease-in-out;position:absolute;top:0;left:0;width:100%}.agu-carousel__container--effect-fade ::ng-deep>*.active{opacity:1;position:relative}.agu-carousel__arrow{position:absolute;top:50%;transform:translateY(-50%);background:#ffffffe6;border:none;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:24px;color:#333;display:flex;align-items:center;justify-content:center;z-index:10;transition:all .3s ease;box-shadow:0 2px 8px #00000026}.agu-carousel__arrow:hover{background:#fff;box-shadow:0 4px 12px #0003}.agu-carousel__arrow:active{transform:translateY(-50%) scale(.95)}.agu-carousel__arrow--prev{left:16px}.agu-carousel__arrow--next{right:16px}.agu-carousel__dots{display:flex;justify-content:center;align-items:center;gap:8px;list-style:none;margin:0;padding:16px;position:absolute;z-index:10}.agu-carousel__dots--position-bottom{bottom:0;left:50%;transform:translate(-50%)}.agu-carousel__dots--position-top{top:0;left:50%;transform:translate(-50%)}.agu-carousel__dots--position-left{left:0;top:50%;transform:translateY(-50%);flex-direction:column}.agu-carousel__dots--position-right{right:0;top:50%;transform:translateY(-50%);flex-direction:column}.agu-carousel__dot{width:8px;height:8px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.agu-carousel__dot:hover{background:#fffc;transform:scale(1.2)}.agu-carousel__dot--active{background:#fff;width:24px;border-radius:4px}::ng-deep .agu-carousel-slide{flex:0 0 100%;width:100%;min-height:200px;display:flex;align-items:center;justify-content:center}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CarouselComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-carousel', standalone: false, template: "<div \r\n  class=\"agu-carousel\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div class=\"agu-carousel__wrapper\">\r\n    <div \r\n      #carouselContainer\r\n      class=\"agu-carousel__container\"\r\n      [class.agu-carousel__container--effect-slide]=\"effect === 'slide'\"\r\n      [class.agu-carousel__container--effect-fade]=\"effect === 'fade'\"\r\n    >\r\n      <ng-content></ng-content>\r\n    </div>\r\n\r\n    <button \r\n      *ngIf=\"showArrows && getSlideCount() > 1\"\r\n      class=\"agu-carousel__arrow agu-carousel__arrow--prev\"\r\n      (click)=\"prev()\"\r\n      aria-label=\"Previous slide\"\r\n    >\r\n      \u2039\r\n    </button>\r\n    <button \r\n      *ngIf=\"showArrows && getSlideCount() > 1\"\r\n      class=\"agu-carousel__arrow agu-carousel__arrow--next\"\r\n      (click)=\"next()\"\r\n      aria-label=\"Next slide\"\r\n    >\r\n      \u203A\r\n    </button>\r\n  </div>\r\n\r\n  <ul \r\n    *ngIf=\"showDots && getSlideCount() > 1\"\r\n    class=\"agu-carousel__dots\"\r\n    [class.agu-carousel__dots--position-bottom]=\"dotsPosition === 'bottom'\"\r\n    [class.agu-carousel__dots--position-top]=\"dotsPosition === 'top'\"\r\n    [class.agu-carousel__dots--position-left]=\"dotsPosition === 'left'\"\r\n    [class.agu-carousel__dots--position-right]=\"dotsPosition === 'right'\"\r\n  >\r\n    <li \r\n      *ngFor=\"let slide of slides; let i = index\"\r\n      class=\"agu-carousel__dot\"\r\n      [class.agu-carousel__dot--active]=\"i === currentIndex\"\r\n      (click)=\"goToSlide(i)\"\r\n    ></li>\r\n  </ul>\r\n</div>\r\n\r\n", styles: [".agu-carousel{position:relative;width:100%;overflow:hidden;border-radius:.5rem}.agu-carousel__wrapper{position:relative;width:100%;overflow:hidden}.agu-carousel__container{display:flex;width:100%;transition:transform .5s ease-in-out}.agu-carousel__container--effect-slide{flex-direction:row}.agu-carousel__container--effect-fade{position:relative;flex-direction:row}.agu-carousel__container--effect-fade ::ng-deep>*{opacity:0;transition:opacity .5s ease-in-out;position:absolute;top:0;left:0;width:100%}.agu-carousel__container--effect-fade ::ng-deep>*.active{opacity:1;position:relative}.agu-carousel__arrow{position:absolute;top:50%;transform:translateY(-50%);background:#ffffffe6;border:none;width:40px;height:40px;border-radius:50%;cursor:pointer;font-size:24px;color:#333;display:flex;align-items:center;justify-content:center;z-index:10;transition:all .3s ease;box-shadow:0 2px 8px #00000026}.agu-carousel__arrow:hover{background:#fff;box-shadow:0 4px 12px #0003}.agu-carousel__arrow:active{transform:translateY(-50%) scale(.95)}.agu-carousel__arrow--prev{left:16px}.agu-carousel__arrow--next{right:16px}.agu-carousel__dots{display:flex;justify-content:center;align-items:center;gap:8px;list-style:none;margin:0;padding:16px;position:absolute;z-index:10}.agu-carousel__dots--position-bottom{bottom:0;left:50%;transform:translate(-50%)}.agu-carousel__dots--position-top{top:0;left:50%;transform:translate(-50%)}.agu-carousel__dots--position-left{left:0;top:50%;transform:translateY(-50%);flex-direction:column}.agu-carousel__dots--position-right{right:0;top:50%;transform:translateY(-50%);flex-direction:column}.agu-carousel__dot{width:8px;height:8px;border-radius:50%;background:#ffffff80;cursor:pointer;transition:all .3s ease}.agu-carousel__dot:hover{background:#fffc;transform:scale(1.2)}.agu-carousel__dot--active{background:#fff;width:24px;border-radius:4px}::ng-deep .agu-carousel-slide{flex:0 0 100%;width:100%;min-height:200px;display:flex;align-items:center;justify-content:center}\n"] }]
        }], propDecorators: { autoplay: [{
                type: Input
            }], autoplayInterval: [{
                type: Input
            }], showDots: [{
                type: Input
            }], showArrows: [{
                type: Input
            }], effect: [{
                type: Input
            }], dotsPosition: [{
                type: Input
            }], slideChange: [{
                type: Output
            }], carouselContainer: [{
                type: ViewChild,
                args: ['carouselContainer', { static: false }]
            }], slides: [{
                type: ViewChildren,
                args: ['slide']
            }] } });

class CarouselSlideComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CarouselSlideComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CarouselSlideComponent, selector: "agu-carousel-slide", ngImport: i0, template: `
    <div class="agu-carousel-slide">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".agu-carousel-slide{flex:0 0 100%;width:100%;min-height:200px;display:flex;align-items:center;justify-content:center}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CarouselSlideComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-carousel-slide', standalone: false, template: `
    <div class="agu-carousel-slide">
      <ng-content></ng-content>
    </div>
  `, styles: [".agu-carousel-slide{flex:0 0 100%;width:100%;min-height:200px;display:flex;align-items:center;justify-content:center}\n"] }]
        }] });

class CardComponent {
    hoverable = false;
    bordered = true;
    shadow = 'md';
    loading = false;
    title = '';
    extra = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CardComponent, selector: "agu-card", inputs: { hoverable: "hoverable", bordered: "bordered", shadow: "shadow", loading: "loading", title: "title", extra: "extra" }, ngImport: i0, template: "<div \r\n  class=\"agu-card\"\r\n  [class.agu-card--hoverable]=\"hoverable\"\r\n  [class.agu-card--bordered]=\"bordered\"\r\n  [class.agu-card--shadow-none]=\"shadow === 'none'\"\r\n  [class.agu-card--shadow-sm]=\"shadow === 'sm'\"\r\n  [class.agu-card--shadow-md]=\"shadow === 'md'\"\r\n  [class.agu-card--shadow-lg]=\"shadow === 'lg'\"\r\n>\r\n  <div class=\"agu-card__header\" *ngIf=\"title || extra\">\r\n    <div class=\"agu-card__title\">{{ title }}</div>\r\n    <div class=\"agu-card__extra\">{{ extra }}</div>\r\n  </div>\r\n  <ng-content select=\"agu-card-header\"></ng-content>\r\n  \r\n  <div class=\"agu-card__body\" [class.agu-card__body--loading]=\"loading\">\r\n    <div *ngIf=\"loading\" class=\"agu-card__loading\">\r\n      <div class=\"agu-card__spinner\"></div>\r\n    </div>\r\n    <ng-content select=\"agu-card-body\"></ng-content>\r\n    <ng-content></ng-content>\r\n  </div>\r\n  \r\n  <ng-content select=\"agu-card-footer\"></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-card{background:var(--agu-bg-color);border-radius:.75rem;transition:all .3s cubic-bezier(.4,0,.2,1);overflow:hidden;position:relative}.agu-card--bordered{border:1px solid var(--agu-border-color-split)}.agu-card--shadow-none{box-shadow:none}.agu-card--shadow-sm{box-shadow:0 1px 2px #0000000d}.agu-card--shadow-md{box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-card--shadow-lg{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.agu-card--hoverable{cursor:pointer}.agu-card--hoverable:hover{box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;transform:translateY(-4px);border-color:var(--agu-primary-color)}.agu-card__header{padding:1.25rem 1.5rem;border-bottom:1px solid var(--agu-border-color-split);display:flex;justify-content:space-between;align-items:center;background:var(--agu-bg-color-light)}.agu-card__title{font-size:1.125rem;font-weight:600;color:var(--agu-text-color);margin:0}.agu-card__extra{color:var(--agu-text-color-secondary);font-size:.875rem}.agu-card__body{padding:1.5rem;position:relative;min-height:100px;color:var(--agu-text-color-secondary);line-height:1.6}.agu-card__body--loading{display:flex;align-items:center;justify-content:center;min-height:200px}.agu-card__loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#ffffffe6;backdrop-filter:blur(4px);z-index:10}.agu-card__spinner{width:40px;height:40px;border:3px solid var(--agu-border-color-light);border-top:3px solid var(--agu-primary-color);border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}::ng-deep agu-card-header{display:block;padding:1.25rem 1.5rem;border-bottom:1px solid var(--agu-border-color-split);background:var(--agu-bg-color-light);font-weight:600;color:var(--agu-text-color)}::ng-deep agu-card-footer{display:block;padding:1rem 1.5rem;border-top:1px solid var(--agu-border-color-split);background:var(--agu-bg-color-light)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-card', standalone: false, template: "<div \r\n  class=\"agu-card\"\r\n  [class.agu-card--hoverable]=\"hoverable\"\r\n  [class.agu-card--bordered]=\"bordered\"\r\n  [class.agu-card--shadow-none]=\"shadow === 'none'\"\r\n  [class.agu-card--shadow-sm]=\"shadow === 'sm'\"\r\n  [class.agu-card--shadow-md]=\"shadow === 'md'\"\r\n  [class.agu-card--shadow-lg]=\"shadow === 'lg'\"\r\n>\r\n  <div class=\"agu-card__header\" *ngIf=\"title || extra\">\r\n    <div class=\"agu-card__title\">{{ title }}</div>\r\n    <div class=\"agu-card__extra\">{{ extra }}</div>\r\n  </div>\r\n  <ng-content select=\"agu-card-header\"></ng-content>\r\n  \r\n  <div class=\"agu-card__body\" [class.agu-card__body--loading]=\"loading\">\r\n    <div *ngIf=\"loading\" class=\"agu-card__loading\">\r\n      <div class=\"agu-card__spinner\"></div>\r\n    </div>\r\n    <ng-content select=\"agu-card-body\"></ng-content>\r\n    <ng-content></ng-content>\r\n  </div>\r\n  \r\n  <ng-content select=\"agu-card-footer\"></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-card{background:var(--agu-bg-color);border-radius:.75rem;transition:all .3s cubic-bezier(.4,0,.2,1);overflow:hidden;position:relative}.agu-card--bordered{border:1px solid var(--agu-border-color-split)}.agu-card--shadow-none{box-shadow:none}.agu-card--shadow-sm{box-shadow:0 1px 2px #0000000d}.agu-card--shadow-md{box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-card--shadow-lg{box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d}.agu-card--hoverable{cursor:pointer}.agu-card--hoverable:hover{box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;transform:translateY(-4px);border-color:var(--agu-primary-color)}.agu-card__header{padding:1.25rem 1.5rem;border-bottom:1px solid var(--agu-border-color-split);display:flex;justify-content:space-between;align-items:center;background:var(--agu-bg-color-light)}.agu-card__title{font-size:1.125rem;font-weight:600;color:var(--agu-text-color);margin:0}.agu-card__extra{color:var(--agu-text-color-secondary);font-size:.875rem}.agu-card__body{padding:1.5rem;position:relative;min-height:100px;color:var(--agu-text-color-secondary);line-height:1.6}.agu-card__body--loading{display:flex;align-items:center;justify-content:center;min-height:200px}.agu-card__loading{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#ffffffe6;backdrop-filter:blur(4px);z-index:10}.agu-card__spinner{width:40px;height:40px;border:3px solid var(--agu-border-color-light);border-top:3px solid var(--agu-primary-color);border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}::ng-deep agu-card-header{display:block;padding:1.25rem 1.5rem;border-bottom:1px solid var(--agu-border-color-split);background:var(--agu-bg-color-light);font-weight:600;color:var(--agu-text-color)}::ng-deep agu-card-footer{display:block;padding:1rem 1.5rem;border-top:1px solid var(--agu-border-color-split);background:var(--agu-bg-color-light)}\n"] }]
        }], propDecorators: { hoverable: [{
                type: Input
            }], bordered: [{
                type: Input
            }], shadow: [{
                type: Input
            }], loading: [{
                type: Input
            }], title: [{
                type: Input
            }], extra: [{
                type: Input
            }] } });

class CardHeaderComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardHeaderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CardHeaderComponent, selector: "agu-card-header", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block;padding:1rem 1.5rem;border-bottom:1px solid #f0f0f0}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardHeaderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-card-header', standalone: false, template: '<ng-content></ng-content>', styles: [":host{display:block;padding:1rem 1.5rem;border-bottom:1px solid #f0f0f0}\n"] }]
        }] });

class CardBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CardBodyComponent, selector: "agu-card-body", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block;padding:1.5rem}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-card-body', standalone: false, template: '<ng-content></ng-content>', styles: [":host{display:block;padding:1.5rem}\n"] }]
        }] });

class CardFooterComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardFooterComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CardFooterComponent, selector: "agu-card-footer", ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block;padding:1rem 1.5rem;border-top:1px solid #f0f0f0;background:#fafafa}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CardFooterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-card-footer', standalone: false, template: '<ng-content></ng-content>', styles: [":host{display:block;padding:1rem 1.5rem;border-top:1px solid #f0f0f0;background:#fafafa}\n"] }]
        }] });

class TextEffectComponent {
    text = '';
    effect = 'typing';
    speed = 100; // milliseconds per character for typing
    delay = 0;
    loop = false;
    color = '';
    fontSize = '1rem';
    displayedText = '';
    typingTimer;
    currentIndex = 0;
    isAnimating = false;
    ngOnInit() {
        if (this.delay > 0) {
            setTimeout(() => this.startEffect(), this.delay);
        }
        else {
            this.startEffect();
        }
    }
    ngOnDestroy() {
        this.stopEffect();
    }
    startEffect() {
        switch (this.effect) {
            case 'typing':
                this.startTyping();
                break;
            case 'fade':
            case 'slide':
            case 'glow':
            case 'gradient':
            case 'wave':
                this.displayedText = this.text;
                break;
        }
    }
    startTyping() {
        this.displayedText = '';
        this.currentIndex = 0;
        this.isAnimating = true;
        this.typeNextChar();
    }
    typeNextChar() {
        if (this.currentIndex < this.text.length) {
            this.displayedText += this.text[this.currentIndex];
            this.currentIndex++;
            this.typingTimer = setTimeout(() => this.typeNextChar(), this.speed);
        }
        else {
            this.isAnimating = false;
            if (this.loop) {
                setTimeout(() => this.startTyping(), 1000);
            }
        }
    }
    stopEffect() {
        if (this.typingTimer) {
            clearTimeout(this.typingTimer);
        }
    }
    getFormattedText() {
        if (this.effect === 'wave') {
            return this.text.split('').map((char, index) => {
                if (char === ' ')
                    return ' ';
                return `<span class="agu-text-effect__wave-char" style="animation-delay: ${index * 0.1}s">${char}</span>`;
            }).join('');
        }
        return this.text;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextEffectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextEffectComponent, selector: "agu-text-effect", inputs: { text: "text", effect: "effect", speed: "speed", delay: "delay", loop: "loop", color: "color", fontSize: "fontSize" }, ngImport: i0, template: "<span \r\n  class=\"agu-text-effect\"\r\n  [class.agu-text-effect--typing]=\"effect === 'typing'\"\r\n  [class.agu-text-effect--fade]=\"effect === 'fade'\"\r\n  [class.agu-text-effect--slide]=\"effect === 'slide'\"\r\n  [class.agu-text-effect--glow]=\"effect === 'glow'\"\r\n  [class.agu-text-effect--gradient]=\"effect === 'gradient'\"\r\n  [class.agu-text-effect--wave]=\"effect === 'wave'\"\r\n  [style.color]=\"color\"\r\n  [style.font-size]=\"fontSize\"\r\n>\r\n  <span *ngIf=\"effect === 'typing'\">{{ displayedText }}<span class=\"agu-text-effect__cursor\">|</span></span>\r\n  <span *ngIf=\"effect !== 'typing'\" [innerHTML]=\"getFormattedText()\"></span>\r\n</span>\r\n\r\n", styles: [".agu-text-effect{display:inline-block}.agu-text-effect__cursor{display:inline-block;animation:blink 1s infinite;margin-left:2px}.agu-text-effect--typing{font-family:Courier New,monospace}.agu-text-effect--fade{animation:fadeIn 1s ease-in}.agu-text-effect--slide{animation:slideIn .8s ease-out}.agu-text-effect--glow{text-shadow:0 0 10px currentColor,0 0 20px currentColor,0 0 30px currentColor;animation:glowPulse 2s ease-in-out infinite}.agu-text-effect--gradient{background:linear-gradient(90deg,#667eea,#764ba2,#f093fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradientShift 3s ease infinite;background-size:200% auto}.agu-text-effect--wave{display:inline-block}.agu-text-effect__wave-char{display:inline-block;animation:wave 1.5s ease-in-out infinite}@keyframes blink{0%,50%{opacity:1}51%,to{opacity:0}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes glowPulse{0%,to{text-shadow:0 0 10px currentColor,0 0 20px currentColor,0 0 30px currentColor}50%{text-shadow:0 0 20px currentColor,0 0 30px currentColor,0 0 40px currentColor}}@keyframes gradientShift{0%{background-position:0% center}to{background-position:200% center}}@keyframes wave{0%,to{transform:translateY(0)}25%{transform:translateY(-10px)}75%{transform:translateY(5px)}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextEffectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-text-effect', standalone: false, template: "<span \r\n  class=\"agu-text-effect\"\r\n  [class.agu-text-effect--typing]=\"effect === 'typing'\"\r\n  [class.agu-text-effect--fade]=\"effect === 'fade'\"\r\n  [class.agu-text-effect--slide]=\"effect === 'slide'\"\r\n  [class.agu-text-effect--glow]=\"effect === 'glow'\"\r\n  [class.agu-text-effect--gradient]=\"effect === 'gradient'\"\r\n  [class.agu-text-effect--wave]=\"effect === 'wave'\"\r\n  [style.color]=\"color\"\r\n  [style.font-size]=\"fontSize\"\r\n>\r\n  <span *ngIf=\"effect === 'typing'\">{{ displayedText }}<span class=\"agu-text-effect__cursor\">|</span></span>\r\n  <span *ngIf=\"effect !== 'typing'\" [innerHTML]=\"getFormattedText()\"></span>\r\n</span>\r\n\r\n", styles: [".agu-text-effect{display:inline-block}.agu-text-effect__cursor{display:inline-block;animation:blink 1s infinite;margin-left:2px}.agu-text-effect--typing{font-family:Courier New,monospace}.agu-text-effect--fade{animation:fadeIn 1s ease-in}.agu-text-effect--slide{animation:slideIn .8s ease-out}.agu-text-effect--glow{text-shadow:0 0 10px currentColor,0 0 20px currentColor,0 0 30px currentColor;animation:glowPulse 2s ease-in-out infinite}.agu-text-effect--gradient{background:linear-gradient(90deg,#667eea,#764ba2,#f093fb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:gradientShift 3s ease infinite;background-size:200% auto}.agu-text-effect--wave{display:inline-block}.agu-text-effect__wave-char{display:inline-block;animation:wave 1.5s ease-in-out infinite}@keyframes blink{0%,50%{opacity:1}51%,to{opacity:0}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideIn{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes glowPulse{0%,to{text-shadow:0 0 10px currentColor,0 0 20px currentColor,0 0 30px currentColor}50%{text-shadow:0 0 20px currentColor,0 0 30px currentColor,0 0 40px currentColor}}@keyframes gradientShift{0%{background-position:0% center}to{background-position:200% center}}@keyframes wave{0%,to{transform:translateY(0)}25%{transform:translateY(-10px)}75%{transform:translateY(5px)}}\n"] }]
        }], propDecorators: { text: [{
                type: Input
            }], effect: [{
                type: Input
            }], speed: [{
                type: Input
            }], delay: [{
                type: Input
            }], loop: [{
                type: Input
            }], color: [{
                type: Input
            }], fontSize: [{
                type: Input
            }] } });

class ModalComponent {
    visible = false;
    title = '';
    width = '520px';
    closable = true;
    maskClosable = true;
    centered = false;
    footer = true;
    okText = 'OK';
    cancelText = 'Cancel';
    showCancel = true;
    visibleChange = new EventEmitter();
    onOk = new EventEmitter();
    onCancel = new EventEmitter();
    ngOnInit() {
        if (this.visible) {
            this.disableBodyScroll();
        }
    }
    ngOnDestroy() {
        this.enableBodyScroll();
    }
    handleEscape(event) {
        if (this.visible && this.closable) {
            this.close();
        }
    }
    close() {
        this.visible = false;
        this.visibleChange.emit(false);
        this.onCancel.emit();
        this.enableBodyScroll();
    }
    handleOk() {
        this.onOk.emit();
    }
    handleMaskClick() {
        if (this.maskClosable) {
            this.close();
        }
    }
    handleModalClick(event) {
        event.stopPropagation();
    }
    disableBodyScroll() {
        document.body.style.overflow = 'hidden';
    }
    enableBodyScroll() {
        document.body.style.overflow = '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ModalComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ModalComponent, selector: "agu-modal", inputs: { visible: "visible", title: "title", width: "width", closable: "closable", maskClosable: "maskClosable", centered: "centered", footer: "footer", okText: "okText", cancelText: "cancelText", showCancel: "showCancel" }, outputs: { visibleChange: "visibleChange", onOk: "onOk", onCancel: "onCancel" }, host: { listeners: { "document:keydown.escape": "handleEscape($event)" } }, ngImport: i0, template: "<div \r\n  class=\"agu-modal__mask\"\r\n  *ngIf=\"visible\"\r\n  [class.agu-modal__mask--centered]=\"centered\"\r\n  (click)=\"handleMaskClick()\"\r\n>\r\n  <div \r\n    class=\"agu-modal\"\r\n    [style.width]=\"width\"\r\n    (click)=\"handleModalClick($event)\"\r\n  >\r\n    <div class=\"agu-modal__header\" *ngIf=\"title || closable\">\r\n      <div class=\"agu-modal__title\">{{ title }}</div>\r\n      <button \r\n        *ngIf=\"closable\"\r\n        class=\"agu-modal__close\"\r\n        (click)=\"close()\"\r\n        aria-label=\"Close\"\r\n      >\r\n        \u00D7\r\n      </button>\r\n    </div>\r\n    <div class=\"agu-modal__body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"agu-modal__footer\" *ngIf=\"footer\">\r\n      <button \r\n        *ngIf=\"showCancel\"\r\n        class=\"agu-modal__btn agu-modal__btn--cancel\"\r\n        (click)=\"close()\"\r\n      >\r\n        {{ cancelText }}\r\n      </button>\r\n      <button \r\n        class=\"agu-modal__btn agu-modal__btn--ok\"\r\n        (click)=\"handleOk()\"\r\n      >\r\n        {{ okText }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-modal__mask{position:fixed;inset:0;background:#00000073;backdrop-filter:blur(4px);z-index:1050;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s cubic-bezier(.4,0,.2,1);padding:1rem}.agu-modal__mask--centered{align-items:center}.agu-modal{background:var(--agu-bg-color);border-radius:.75rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;max-height:90vh;display:flex;flex-direction:column;animation:slideUp .3s cubic-bezier(.68,-.55,.265,1.55);overflow:hidden;width:100%;max-width:520px;border:1px solid var(--agu-border-color-split)}.agu-modal__header{padding:1.5rem;border-bottom:1px solid var(--agu-border-color-split);display:flex;justify-content:space-between;align-items:center;background:var(--agu-bg-color-light)}.agu-modal__title{font-size:1.25rem;font-weight:600;color:var(--agu-text-color);margin:0}.agu-modal__close{background:none;border:none;font-size:1.5rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;width:32px;height:32px;display:flex;align-items:center;justify-content:center;transition:all .2s ease;border-radius:.25rem}.agu-modal__close:hover{color:var(--agu-danger-color);background:#ff4d4f1a;transform:rotate(90deg)}.agu-modal__body{padding:1.5rem;overflow-y:auto;flex:1;color:var(--agu-text-color-secondary);line-height:1.6}.agu-modal__footer{padding:1rem 1.5rem;border-top:1px solid var(--agu-border-color-split);display:flex;justify-content:flex-end;gap:.75rem;background:var(--agu-bg-color-light)}.agu-modal__btn{padding:.5rem 1rem;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);cursor:pointer;font-size:.875rem;font-weight:500;transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-modal__btn--ok{background-color:var(--agu-primary-color);color:var(--agu-text-color-light);border-color:var(--agu-primary-color)}.agu-modal__btn--ok:hover{background-color:var(--agu-primary-hover);border-color:var(--agu-primary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-modal__btn--ok:active{transform:translateY(0)}.agu-modal__btn--cancel:hover{color:var(--agu-primary-color);border-color:var(--agu-primary-color);background:var(--agu-bg-color-hover)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{transform:translateY(20px) scale(.95);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-modal', standalone: false, template: "<div \r\n  class=\"agu-modal__mask\"\r\n  *ngIf=\"visible\"\r\n  [class.agu-modal__mask--centered]=\"centered\"\r\n  (click)=\"handleMaskClick()\"\r\n>\r\n  <div \r\n    class=\"agu-modal\"\r\n    [style.width]=\"width\"\r\n    (click)=\"handleModalClick($event)\"\r\n  >\r\n    <div class=\"agu-modal__header\" *ngIf=\"title || closable\">\r\n      <div class=\"agu-modal__title\">{{ title }}</div>\r\n      <button \r\n        *ngIf=\"closable\"\r\n        class=\"agu-modal__close\"\r\n        (click)=\"close()\"\r\n        aria-label=\"Close\"\r\n      >\r\n        \u00D7\r\n      </button>\r\n    </div>\r\n    <div class=\"agu-modal__body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n    <div class=\"agu-modal__footer\" *ngIf=\"footer\">\r\n      <button \r\n        *ngIf=\"showCancel\"\r\n        class=\"agu-modal__btn agu-modal__btn--cancel\"\r\n        (click)=\"close()\"\r\n      >\r\n        {{ cancelText }}\r\n      </button>\r\n      <button \r\n        class=\"agu-modal__btn agu-modal__btn--ok\"\r\n        (click)=\"handleOk()\"\r\n      >\r\n        {{ okText }}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-modal__mask{position:fixed;inset:0;background:#00000073;backdrop-filter:blur(4px);z-index:1050;display:flex;align-items:center;justify-content:center;animation:fadeIn .3s cubic-bezier(.4,0,.2,1);padding:1rem}.agu-modal__mask--centered{align-items:center}.agu-modal{background:var(--agu-bg-color);border-radius:.75rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a;max-height:90vh;display:flex;flex-direction:column;animation:slideUp .3s cubic-bezier(.68,-.55,.265,1.55);overflow:hidden;width:100%;max-width:520px;border:1px solid var(--agu-border-color-split)}.agu-modal__header{padding:1.5rem;border-bottom:1px solid var(--agu-border-color-split);display:flex;justify-content:space-between;align-items:center;background:var(--agu-bg-color-light)}.agu-modal__title{font-size:1.25rem;font-weight:600;color:var(--agu-text-color);margin:0}.agu-modal__close{background:none;border:none;font-size:1.5rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;width:32px;height:32px;display:flex;align-items:center;justify-content:center;transition:all .2s ease;border-radius:.25rem}.agu-modal__close:hover{color:var(--agu-danger-color);background:#ff4d4f1a;transform:rotate(90deg)}.agu-modal__body{padding:1.5rem;overflow-y:auto;flex:1;color:var(--agu-text-color-secondary);line-height:1.6}.agu-modal__footer{padding:1rem 1.5rem;border-top:1px solid var(--agu-border-color-split);display:flex;justify-content:flex-end;gap:.75rem;background:var(--agu-bg-color-light)}.agu-modal__btn{padding:.5rem 1rem;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);cursor:pointer;font-size:.875rem;font-weight:500;transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-modal__btn--ok{background-color:var(--agu-primary-color);color:var(--agu-text-color-light);border-color:var(--agu-primary-color)}.agu-modal__btn--ok:hover{background-color:var(--agu-primary-hover);border-color:var(--agu-primary-hover);transform:translateY(-2px);box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f}.agu-modal__btn--ok:active{transform:translateY(0)}.agu-modal__btn--cancel:hover{color:var(--agu-primary-color);border-color:var(--agu-primary-color);background:var(--agu-bg-color-hover)}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes slideUp{0%{transform:translateY(20px) scale(.95);opacity:0}to{transform:translateY(0) scale(1);opacity:1}}\n"] }]
        }], propDecorators: { visible: [{
                type: Input
            }], title: [{
                type: Input
            }], width: [{
                type: Input
            }], closable: [{
                type: Input
            }], maskClosable: [{
                type: Input
            }], centered: [{
                type: Input
            }], footer: [{
                type: Input
            }], okText: [{
                type: Input
            }], cancelText: [{
                type: Input
            }], showCancel: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], onOk: [{
                type: Output
            }], onCancel: [{
                type: Output
            }], handleEscape: [{
                type: HostListener,
                args: ['document:keydown.escape', ['$event']]
            }] } });

class InputComponent {
    type = 'text';
    placeholder = '';
    disabled = false;
    readonly = false;
    size = 'md';
    status = 'default';
    prefix = '';
    suffix = '';
    allowClear = false;
    onBlur = new EventEmitter();
    onFocus = new EventEmitter();
    onEnter = new EventEmitter();
    value = '';
    focused = false;
    onChange = (value) => { };
    onTouched = () => { };
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(this.value);
    }
    onBlurEvent(event) {
        this.focused = false;
        this.onTouched();
        this.onBlur.emit(event);
    }
    onFocusEvent(event) {
        this.focused = true;
        this.onFocus.emit(event);
    }
    onKeyDown(event) {
        if (event.key === 'Enter') {
            this.onEnter.emit(event);
        }
    }
    clear() {
        this.value = '';
        this.onChange('');
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: InputComponent, selector: "agu-input", inputs: { type: "type", placeholder: "placeholder", disabled: "disabled", readonly: "readonly", size: "size", status: "status", prefix: "prefix", suffix: "suffix", allowClear: "allowClear" }, outputs: { onBlur: "onBlur", onFocus: "onFocus", onEnter: "onEnter" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => InputComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div \r\n  class=\"agu-input-wrapper\"\r\n  [class.agu-input-wrapper--size-sm]=\"size === 'sm'\"\r\n  [class.agu-input-wrapper--size-md]=\"size === 'md'\"\r\n  [class.agu-input-wrapper--size-lg]=\"size === 'lg'\"\r\n  [class.agu-input-wrapper--focused]=\"focused\"\r\n  [class.agu-input-wrapper--disabled]=\"disabled\"\r\n  [class.agu-input-wrapper--status-error]=\"status === 'error'\"\r\n  [class.agu-input-wrapper--status-warning]=\"status === 'warning'\"\r\n  [class.agu-input-wrapper--status-success]=\"status === 'success'\"\r\n>\r\n  <span class=\"agu-input-prefix\" *ngIf=\"prefix\">{{ prefix }}</span>\r\n  <input\r\n    class=\"agu-input\"\r\n    [type]=\"type\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (blur)=\"onBlurEvent($event)\"\r\n    (focus)=\"onFocusEvent($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n  <span class=\"agu-input-suffix\" *ngIf=\"suffix && !allowClear\">{{ suffix }}</span>\r\n  <span \r\n    class=\"agu-input-clear\" \r\n    *ngIf=\"allowClear && value && !disabled\"\r\n    (click)=\"clear()\"\r\n  >\r\n    \u00D7\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-input-wrapper{position:relative;display:inline-flex;align-items:center;width:100%;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-input-wrapper:hover:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color)}.agu-input-wrapper--focused:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color);box-shadow:0 0 0 4px #1890ff1a}.agu-input-wrapper--disabled{background:var(--agu-bg-color-light);cursor:not-allowed;opacity:.6;border-color:var(--agu-border-color-light)}.agu-input-wrapper--status-error{border-color:var(--agu-danger-color)}.agu-input-wrapper--status-error.agu-input-wrapper--focused{box-shadow:0 0 0 4px #ff4d4f1a}.agu-input-wrapper--status-warning{border-color:var(--agu-warning-color)}.agu-input-wrapper--status-warning.agu-input-wrapper--focused{box-shadow:0 0 0 4px #faad141a}.agu-input-wrapper--status-success{border-color:var(--agu-success-color)}.agu-input-wrapper--status-success.agu-input-wrapper--focused{box-shadow:0 0 0 4px #52c41a1a}.agu-input-wrapper--size-sm .agu-input{padding:.375rem .75rem;font-size:.875rem}.agu-input-wrapper--size-md .agu-input{padding:.5rem 1rem;font-size:1rem}.agu-input-wrapper--size-lg .agu-input{padding:.75rem 1.25rem;font-size:1.125rem}.agu-input{flex:1;border:none;outline:none;background:transparent;color:var(--agu-text-color);font-size:1rem;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.agu-input::placeholder{color:var(--agu-text-color-disabled);opacity:1}.agu-input:disabled{cursor:not-allowed;color:var(--agu-text-color-disabled)}.agu-input-prefix,.agu-input-suffix{padding:0 .75rem;color:var(--agu-text-color-secondary);display:flex;align-items:center;font-size:1rem}.agu-input-clear{padding:0 .5rem;cursor:pointer;color:var(--agu-text-color-disabled);font-size:1.25rem;line-height:1;transition:all .2s ease;display:flex;align-items:center;justify-content:center}.agu-input-clear:hover{color:var(--agu-danger-color);transform:scale(1.1)}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: InputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-input', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => InputComponent),
                            multi: true
                        }
                    ], template: "<div \r\n  class=\"agu-input-wrapper\"\r\n  [class.agu-input-wrapper--size-sm]=\"size === 'sm'\"\r\n  [class.agu-input-wrapper--size-md]=\"size === 'md'\"\r\n  [class.agu-input-wrapper--size-lg]=\"size === 'lg'\"\r\n  [class.agu-input-wrapper--focused]=\"focused\"\r\n  [class.agu-input-wrapper--disabled]=\"disabled\"\r\n  [class.agu-input-wrapper--status-error]=\"status === 'error'\"\r\n  [class.agu-input-wrapper--status-warning]=\"status === 'warning'\"\r\n  [class.agu-input-wrapper--status-success]=\"status === 'success'\"\r\n>\r\n  <span class=\"agu-input-prefix\" *ngIf=\"prefix\">{{ prefix }}</span>\r\n  <input\r\n    class=\"agu-input\"\r\n    [type]=\"type\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (blur)=\"onBlurEvent($event)\"\r\n    (focus)=\"onFocusEvent($event)\"\r\n    (keydown)=\"onKeyDown($event)\"\r\n  />\r\n  <span class=\"agu-input-suffix\" *ngIf=\"suffix && !allowClear\">{{ suffix }}</span>\r\n  <span \r\n    class=\"agu-input-clear\" \r\n    *ngIf=\"allowClear && value && !disabled\"\r\n    (click)=\"clear()\"\r\n  >\r\n    \u00D7\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-input-wrapper{position:relative;display:inline-flex;align-items:center;width:100%;border:2px solid var(--agu-border-color);border-radius:.5rem;background:var(--agu-bg-color);transition:all .3s cubic-bezier(.4,0,.2,1)}.agu-input-wrapper:hover:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color)}.agu-input-wrapper--focused:not(.agu-input-wrapper--disabled){border-color:var(--agu-primary-color);box-shadow:0 0 0 4px #1890ff1a}.agu-input-wrapper--disabled{background:var(--agu-bg-color-light);cursor:not-allowed;opacity:.6;border-color:var(--agu-border-color-light)}.agu-input-wrapper--status-error{border-color:var(--agu-danger-color)}.agu-input-wrapper--status-error.agu-input-wrapper--focused{box-shadow:0 0 0 4px #ff4d4f1a}.agu-input-wrapper--status-warning{border-color:var(--agu-warning-color)}.agu-input-wrapper--status-warning.agu-input-wrapper--focused{box-shadow:0 0 0 4px #faad141a}.agu-input-wrapper--status-success{border-color:var(--agu-success-color)}.agu-input-wrapper--status-success.agu-input-wrapper--focused{box-shadow:0 0 0 4px #52c41a1a}.agu-input-wrapper--size-sm .agu-input{padding:.375rem .75rem;font-size:.875rem}.agu-input-wrapper--size-md .agu-input{padding:.5rem 1rem;font-size:1rem}.agu-input-wrapper--size-lg .agu-input{padding:.75rem 1.25rem;font-size:1.125rem}.agu-input{flex:1;border:none;outline:none;background:transparent;color:var(--agu-text-color);font-size:1rem;line-height:1.5;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.agu-input::placeholder{color:var(--agu-text-color-disabled);opacity:1}.agu-input:disabled{cursor:not-allowed;color:var(--agu-text-color-disabled)}.agu-input-prefix,.agu-input-suffix{padding:0 .75rem;color:var(--agu-text-color-secondary);display:flex;align-items:center;font-size:1rem}.agu-input-clear{padding:0 .5rem;cursor:pointer;color:var(--agu-text-color-disabled);font-size:1.25rem;line-height:1;transition:all .2s ease;display:flex;align-items:center;justify-content:center}.agu-input-clear:hover{color:var(--agu-danger-color);transform:scale(1.1)}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], size: [{
                type: Input
            }], status: [{
                type: Input
            }], prefix: [{
                type: Input
            }], suffix: [{
                type: Input
            }], allowClear: [{
                type: Input
            }], onBlur: [{
                type: Output
            }], onFocus: [{
                type: Output
            }], onEnter: [{
                type: Output
            }] } });

class BadgeComponent {
    count = 0;
    dot = false;
    overflowCount = 99;
    status = 'default';
    text = '';
    showZero = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BadgeComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BadgeComponent, selector: "agu-badge", inputs: { count: "count", dot: "dot", overflowCount: "overflowCount", status: "status", text: "text", showZero: "showZero" }, ngImport: i0, template: "<span \r\n  class=\"agu-badge\"\r\n  [class.agu-badge--dot]=\"dot\"\r\n  [class.agu-badge--status-default]=\"status === 'default'\"\r\n  [class.agu-badge--status-success]=\"status === 'success'\"\r\n  [class.agu-badge--status-processing]=\"status === 'processing'\"\r\n  [class.agu-badge--status-error]=\"status === 'error'\"\r\n  [class.agu-badge--status-warning]=\"status === 'warning'\"\r\n>\r\n  <ng-content></ng-content>\r\n  <span \r\n    *ngIf=\"!dot && (count > 0 || showZero)\"\r\n    class=\"agu-badge__count\"\r\n  >\r\n    {{ count > overflowCount ? overflowCount + '+' : count }}\r\n  </span>\r\n  <span \r\n    *ngIf=\"dot\"\r\n    class=\"agu-badge__dot\"\r\n  ></span>\r\n  <span \r\n    *ngIf=\"text\"\r\n    class=\"agu-badge__text\"\r\n  >\r\n    {{ text }}\r\n  </span>\r\n</span>\r\n\r\n", styles: [".agu-badge{position:relative;display:inline-block;line-height:1}.agu-badge__count{position:absolute;top:0;right:0;transform:translate(50%,-50%);min-width:20px;height:20px;padding:0 6px;background-color:var(--agu-danger-color);color:var(--agu-text-color-light);font-size:.75rem;font-weight:600;line-height:20px;text-align:center;border-radius:9999px;box-shadow:0 0 0 2px var(--agu-bg-color);z-index:10}.agu-badge__dot{position:absolute;top:0;right:0;transform:translate(50%,-50%);width:8px;height:8px;background-color:var(--agu-danger-color);border-radius:50%;box-shadow:0 0 0 2px var(--agu-bg-color);z-index:10}.agu-badge__text{display:inline-block;padding:.25rem .75rem;font-size:.75rem;font-weight:600;line-height:1.5;border-radius:.25rem;margin-left:8px}.agu-badge--status-default .agu-badge__text{background-color:var(--agu-secondary-color);color:var(--agu-text-color-light)}.agu-badge--status-success .agu-badge__text,.agu-badge--status-success .agu-badge__dot,.agu-badge--status-success .agu-badge__count{background-color:var(--agu-success-color)}.agu-badge--status-processing .agu-badge__text,.agu-badge--status-processing .agu-badge__count{background-color:var(--agu-info-color)}.agu-badge--status-processing .agu-badge__dot{background-color:var(--agu-info-color);animation:processing 1.4s ease-in-out infinite}.agu-badge--status-error .agu-badge__text,.agu-badge--status-error .agu-badge__dot,.agu-badge--status-error .agu-badge__count{background-color:var(--agu-danger-color)}.agu-badge--status-warning .agu-badge__text,.agu-badge--status-warning .agu-badge__dot,.agu-badge--status-warning .agu-badge__count{background-color:var(--agu-warning-color)}@keyframes processing{0%{transform:translate(50%,-50%) scale(.8);opacity:.5}to{transform:translate(50%,-50%) scale(2.4);opacity:0}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BadgeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-badge', standalone: false, template: "<span \r\n  class=\"agu-badge\"\r\n  [class.agu-badge--dot]=\"dot\"\r\n  [class.agu-badge--status-default]=\"status === 'default'\"\r\n  [class.agu-badge--status-success]=\"status === 'success'\"\r\n  [class.agu-badge--status-processing]=\"status === 'processing'\"\r\n  [class.agu-badge--status-error]=\"status === 'error'\"\r\n  [class.agu-badge--status-warning]=\"status === 'warning'\"\r\n>\r\n  <ng-content></ng-content>\r\n  <span \r\n    *ngIf=\"!dot && (count > 0 || showZero)\"\r\n    class=\"agu-badge__count\"\r\n  >\r\n    {{ count > overflowCount ? overflowCount + '+' : count }}\r\n  </span>\r\n  <span \r\n    *ngIf=\"dot\"\r\n    class=\"agu-badge__dot\"\r\n  ></span>\r\n  <span \r\n    *ngIf=\"text\"\r\n    class=\"agu-badge__text\"\r\n  >\r\n    {{ text }}\r\n  </span>\r\n</span>\r\n\r\n", styles: [".agu-badge{position:relative;display:inline-block;line-height:1}.agu-badge__count{position:absolute;top:0;right:0;transform:translate(50%,-50%);min-width:20px;height:20px;padding:0 6px;background-color:var(--agu-danger-color);color:var(--agu-text-color-light);font-size:.75rem;font-weight:600;line-height:20px;text-align:center;border-radius:9999px;box-shadow:0 0 0 2px var(--agu-bg-color);z-index:10}.agu-badge__dot{position:absolute;top:0;right:0;transform:translate(50%,-50%);width:8px;height:8px;background-color:var(--agu-danger-color);border-radius:50%;box-shadow:0 0 0 2px var(--agu-bg-color);z-index:10}.agu-badge__text{display:inline-block;padding:.25rem .75rem;font-size:.75rem;font-weight:600;line-height:1.5;border-radius:.25rem;margin-left:8px}.agu-badge--status-default .agu-badge__text{background-color:var(--agu-secondary-color);color:var(--agu-text-color-light)}.agu-badge--status-success .agu-badge__text,.agu-badge--status-success .agu-badge__dot,.agu-badge--status-success .agu-badge__count{background-color:var(--agu-success-color)}.agu-badge--status-processing .agu-badge__text,.agu-badge--status-processing .agu-badge__count{background-color:var(--agu-info-color)}.agu-badge--status-processing .agu-badge__dot{background-color:var(--agu-info-color);animation:processing 1.4s ease-in-out infinite}.agu-badge--status-error .agu-badge__text,.agu-badge--status-error .agu-badge__dot,.agu-badge--status-error .agu-badge__count{background-color:var(--agu-danger-color)}.agu-badge--status-warning .agu-badge__text,.agu-badge--status-warning .agu-badge__dot,.agu-badge--status-warning .agu-badge__count{background-color:var(--agu-warning-color)}@keyframes processing{0%{transform:translate(50%,-50%) scale(.8);opacity:.5}to{transform:translate(50%,-50%) scale(2.4);opacity:0}}\n"] }]
        }], propDecorators: { count: [{
                type: Input
            }], dot: [{
                type: Input
            }], overflowCount: [{
                type: Input
            }], status: [{
                type: Input
            }], text: [{
                type: Input
            }], showZero: [{
                type: Input
            }] } });

class SpinnerComponent {
    size = 'md';
    color = '#1890ff';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SpinnerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SpinnerComponent, selector: "agu-spinner", inputs: { size: "size", color: "color" }, ngImport: i0, template: "<div \r\n  class=\"agu-spinner\"\r\n  [class.agu-spinner--size-sm]=\"size === 'sm'\"\r\n  [class.agu-spinner--size-md]=\"size === 'md'\"\r\n  [class.agu-spinner--size-lg]=\"size === 'lg'\"\r\n  [style.border-top-color]=\"color\"\r\n></div>\r\n\r\n", styles: [".agu-spinner{border:3px solid #f3f3f3;border-top:3px solid #1890ff;border-radius:50%;animation:spin 1s linear infinite;display:inline-block}.agu-spinner--size-sm{width:16px;height:16px;border-width:2px}.agu-spinner--size-md{width:32px;height:32px;border-width:3px}.agu-spinner--size-lg{width:48px;height:48px;border-width:4px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SpinnerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-spinner', standalone: false, template: "<div \r\n  class=\"agu-spinner\"\r\n  [class.agu-spinner--size-sm]=\"size === 'sm'\"\r\n  [class.agu-spinner--size-md]=\"size === 'md'\"\r\n  [class.agu-spinner--size-lg]=\"size === 'lg'\"\r\n  [style.border-top-color]=\"color\"\r\n></div>\r\n\r\n", styles: [".agu-spinner{border:3px solid #f3f3f3;border-top:3px solid #1890ff;border-radius:50%;animation:spin 1s linear infinite;display:inline-block}.agu-spinner--size-sm{width:16px;height:16px;border-width:2px}.agu-spinner--size-md{width:32px;height:32px;border-width:3px}.agu-spinner--size-lg{width:48px;height:48px;border-width:4px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n"] }]
        }], propDecorators: { size: [{
                type: Input
            }], color: [{
                type: Input
            }] } });

class AlertComponent {
    type = 'info';
    message = '';
    description = '';
    closable = false;
    showIcon = false;
    banner = false;
    onClose = new EventEmitter();
    visible = true;
    close() {
        this.visible = false;
        this.onClose.emit();
    }
    getIcon() {
        switch (this.type) {
            case 'success': return '✓';
            case 'info': return 'ℹ';
            case 'warning': return '⚠';
            case 'error': return '✕';
            default: return 'ℹ';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AlertComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AlertComponent, selector: "agu-alert", inputs: { type: "type", message: "message", description: "description", closable: "closable", showIcon: "showIcon", banner: "banner" }, outputs: { onClose: "onClose" }, ngImport: i0, template: "<div \r\n  *ngIf=\"visible\"\r\n  class=\"agu-alert\"\r\n  [class.agu-alert--type-success]=\"type === 'success'\"\r\n  [class.agu-alert--type-info]=\"type === 'info'\"\r\n  [class.agu-alert--type-warning]=\"type === 'warning'\"\r\n  [class.agu-alert--type-error]=\"type === 'error'\"\r\n  [class.agu-alert--banner]=\"banner\"\r\n>\r\n  <span class=\"agu-alert__icon\" *ngIf=\"showIcon\">{{ getIcon() }}</span>\r\n  <div class=\"agu-alert__content\">\r\n    <div class=\"agu-alert__message\">{{ message }}</div>\r\n    <div class=\"agu-alert__description\" *ngIf=\"description\">{{ description }}</div>\r\n  </div>\r\n  <button \r\n    *ngIf=\"closable\"\r\n    class=\"agu-alert__close\"\r\n    (click)=\"close()\"\r\n    aria-label=\"Close\"\r\n  >\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-alert{padding:1rem 1.25rem;border-radius:.5rem;display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem;position:relative;border-left:4px solid;box-shadow:0 1px 2px #0000000d;animation:slideIn .3s cubic-bezier(.68,-.55,.265,1.55)}.agu-alert--type-success{background:#f6ffed;border-color:var(--agu-success-color);color:#389e0d}.agu-alert--type-success .agu-alert__icon{color:var(--agu-success-color)}.agu-alert--type-info{background:#e6f7ff;border-color:var(--agu-info-color);color:#0958d9}.agu-alert--type-info .agu-alert__icon{color:var(--agu-info-color)}.agu-alert--type-warning{background:#fffbe6;border-color:var(--agu-warning-color);color:#d48806}.agu-alert--type-warning .agu-alert__icon{color:var(--agu-warning-color)}.agu-alert--type-error{background:#fff2f0;border-color:var(--agu-danger-color);color:#cf1322}.agu-alert--type-error .agu-alert__icon{color:var(--agu-danger-color)}.agu-alert--banner{border-radius:0;margin-bottom:0;border-left:none;border-top:4px solid}.agu-alert__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem}.agu-alert__content{flex:1}.agu-alert__message{font-weight:600;margin-bottom:.25rem;font-size:1rem}.agu-alert__description{font-size:.875rem;opacity:.9;line-height:1.5}.agu-alert__close{background:none;border:none;font-size:1.25rem;line-height:1;color:currentColor;cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-alert__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideIn{0%{transform:translate(-10px);opacity:0}to{transform:translate(0);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AlertComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-alert', standalone: false, template: "<div \r\n  *ngIf=\"visible\"\r\n  class=\"agu-alert\"\r\n  [class.agu-alert--type-success]=\"type === 'success'\"\r\n  [class.agu-alert--type-info]=\"type === 'info'\"\r\n  [class.agu-alert--type-warning]=\"type === 'warning'\"\r\n  [class.agu-alert--type-error]=\"type === 'error'\"\r\n  [class.agu-alert--banner]=\"banner\"\r\n>\r\n  <span class=\"agu-alert__icon\" *ngIf=\"showIcon\">{{ getIcon() }}</span>\r\n  <div class=\"agu-alert__content\">\r\n    <div class=\"agu-alert__message\">{{ message }}</div>\r\n    <div class=\"agu-alert__description\" *ngIf=\"description\">{{ description }}</div>\r\n  </div>\r\n  <button \r\n    *ngIf=\"closable\"\r\n    class=\"agu-alert__close\"\r\n    (click)=\"close()\"\r\n    aria-label=\"Close\"\r\n  >\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-alert{padding:1rem 1.25rem;border-radius:.5rem;display:flex;align-items:flex-start;gap:.75rem;margin-bottom:1rem;position:relative;border-left:4px solid;box-shadow:0 1px 2px #0000000d;animation:slideIn .3s cubic-bezier(.68,-.55,.265,1.55)}.agu-alert--type-success{background:#f6ffed;border-color:var(--agu-success-color);color:#389e0d}.agu-alert--type-success .agu-alert__icon{color:var(--agu-success-color)}.agu-alert--type-info{background:#e6f7ff;border-color:var(--agu-info-color);color:#0958d9}.agu-alert--type-info .agu-alert__icon{color:var(--agu-info-color)}.agu-alert--type-warning{background:#fffbe6;border-color:var(--agu-warning-color);color:#d48806}.agu-alert--type-warning .agu-alert__icon{color:var(--agu-warning-color)}.agu-alert--type-error{background:#fff2f0;border-color:var(--agu-danger-color);color:#cf1322}.agu-alert--type-error .agu-alert__icon{color:var(--agu-danger-color)}.agu-alert--banner{border-radius:0;margin-bottom:0;border-left:none;border-top:4px solid}.agu-alert__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem}.agu-alert__content{flex:1}.agu-alert__message{font-weight:600;margin-bottom:.25rem;font-size:1rem}.agu-alert__description{font-size:.875rem;opacity:.9;line-height:1.5}.agu-alert__close{background:none;border:none;font-size:1.25rem;line-height:1;color:currentColor;cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-alert__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideIn{0%{transform:translate(-10px);opacity:0}to{transform:translate(0);opacity:1}}\n"] }]
        }], propDecorators: { type: [{
                type: Input
            }], message: [{
                type: Input
            }], description: [{
                type: Input
            }], closable: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], banner: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });

class ProgressComponent {
    percent = 0;
    status = 'normal';
    showInfo = true;
    strokeWidth = 8;
    strokeColor = '';
    trailColor = '#f5f5f5';
    getStatusColor() {
        switch (this.status) {
            case 'success': return '#52c41a';
            case 'exception': return '#ff4d4f';
            default: return '#1890ff';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProgressComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ProgressComponent, selector: "agu-progress", inputs: { percent: "percent", status: "status", showInfo: "showInfo", strokeWidth: "strokeWidth", strokeColor: "strokeColor", trailColor: "trailColor" }, ngImport: i0, template: "<div class=\"agu-progress\">\r\n  <div \r\n    class=\"agu-progress__outer\"\r\n    [style.height.px]=\"strokeWidth\"\r\n    [style.background-color]=\"trailColor\"\r\n  >\r\n    <div \r\n      class=\"agu-progress__inner\"\r\n      [class.agu-progress__inner--status-success]=\"status === 'success'\"\r\n      [class.agu-progress__inner--status-exception]=\"status === 'exception'\"\r\n      [class.agu-progress__inner--status-active]=\"status === 'active'\"\r\n      [style.width.%]=\"percent\"\r\n      [style.height.px]=\"strokeWidth\"\r\n      [style.background-color]=\"strokeColor || getStatusColor()\"\r\n    ></div>\r\n  </div>\r\n  <span class=\"agu-progress__text\" *ngIf=\"showInfo\">\r\n    {{ status === 'success' ? '100%' : status === 'exception' ? '\u2715' : percent + '%' }}\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-progress{display:flex;align-items:center;gap:.75rem;width:100%}.agu-progress__outer{flex:1;height:8px;background:var(--agu-bg-color-light);border-radius:9999px;overflow:hidden;position:relative;box-shadow:inset 0 1px 2px #0000000d}.agu-progress__inner{height:100%;border-radius:9999px;transition:width .6s cubic-bezier(.4,0,.2,1);background-color:var(--agu-primary-color);position:relative;overflow:hidden}.agu-progress__inner:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer 2s infinite}.agu-progress__inner--status-success{background-color:var(--agu-success-color)}.agu-progress__inner--status-exception{background-color:var(--agu-danger-color)}.agu-progress__inner--status-active{background:linear-gradient(90deg,var(--agu-primary-color) 0%,var(--agu-primary-hover) 50%,var(--agu-primary-color) 100%);background-size:200% 100%;animation:progress-active 1.5s ease infinite}.agu-progress__text{font-size:.875rem;font-weight:600;color:var(--agu-text-color-secondary);min-width:3rem;text-align:right}@keyframes progress-active{0%{background-position:100% 0}to{background-position:-100% 0}}@keyframes shimmer{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ProgressComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-progress', standalone: false, template: "<div class=\"agu-progress\">\r\n  <div \r\n    class=\"agu-progress__outer\"\r\n    [style.height.px]=\"strokeWidth\"\r\n    [style.background-color]=\"trailColor\"\r\n  >\r\n    <div \r\n      class=\"agu-progress__inner\"\r\n      [class.agu-progress__inner--status-success]=\"status === 'success'\"\r\n      [class.agu-progress__inner--status-exception]=\"status === 'exception'\"\r\n      [class.agu-progress__inner--status-active]=\"status === 'active'\"\r\n      [style.width.%]=\"percent\"\r\n      [style.height.px]=\"strokeWidth\"\r\n      [style.background-color]=\"strokeColor || getStatusColor()\"\r\n    ></div>\r\n  </div>\r\n  <span class=\"agu-progress__text\" *ngIf=\"showInfo\">\r\n    {{ status === 'success' ? '100%' : status === 'exception' ? '\u2715' : percent + '%' }}\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-progress{display:flex;align-items:center;gap:.75rem;width:100%}.agu-progress__outer{flex:1;height:8px;background:var(--agu-bg-color-light);border-radius:9999px;overflow:hidden;position:relative;box-shadow:inset 0 1px 2px #0000000d}.agu-progress__inner{height:100%;border-radius:9999px;transition:width .6s cubic-bezier(.4,0,.2,1);background-color:var(--agu-primary-color);position:relative;overflow:hidden}.agu-progress__inner:after{content:\"\";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);animation:shimmer 2s infinite}.agu-progress__inner--status-success{background-color:var(--agu-success-color)}.agu-progress__inner--status-exception{background-color:var(--agu-danger-color)}.agu-progress__inner--status-active{background:linear-gradient(90deg,var(--agu-primary-color) 0%,var(--agu-primary-hover) 50%,var(--agu-primary-color) 100%);background-size:200% 100%;animation:progress-active 1.5s ease infinite}.agu-progress__text{font-size:.875rem;font-weight:600;color:var(--agu-text-color-secondary);min-width:3rem;text-align:right}@keyframes progress-active{0%{background-position:100% 0}to{background-position:-100% 0}}@keyframes shimmer{0%{transform:translate(-100%)}to{transform:translate(100%)}}\n"] }]
        }], propDecorators: { percent: [{
                type: Input
            }], status: [{
                type: Input
            }], showInfo: [{
                type: Input
            }], strokeWidth: [{
                type: Input
            }], strokeColor: [{
                type: Input
            }], trailColor: [{
                type: Input
            }] } });

class DropdownComponent {
    trigger = 'click';
    placement = 'bottom';
    visible = false;
    visibleChange = new EventEmitter();
    onVisibleChange = new EventEmitter();
    dropdownMenu;
    onClickOutside(event) {
        if (this.trigger === 'click' && this.visible) {
            const target = event.target;
            if (!this.dropdownMenu?.nativeElement.contains(target) &&
                !event.target.closest('.agu-dropdown__trigger')) {
                this.close();
            }
        }
    }
    toggle() {
        this.visible = !this.visible;
        this.visibleChange.emit(this.visible);
        this.onVisibleChange.emit(this.visible);
    }
    open() {
        if (!this.visible) {
            this.visible = true;
            this.visibleChange.emit(true);
            this.onVisibleChange.emit(true);
        }
    }
    close() {
        if (this.visible) {
            this.visible = false;
            this.visibleChange.emit(false);
            this.onVisibleChange.emit(false);
        }
    }
    onMouseEnter() {
        if (this.trigger === 'hover') {
            this.open();
        }
    }
    onMouseLeave() {
        if (this.trigger === 'hover') {
            this.close();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: DropdownComponent, selector: "agu-dropdown", inputs: { trigger: "trigger", placement: "placement", visible: "visible" }, outputs: { visibleChange: "visibleChange", onVisibleChange: "onVisibleChange" }, host: { listeners: { "document:click": "onClickOutside($event)" } }, viewQueries: [{ propertyName: "dropdownMenu", first: true, predicate: ["dropdownMenu"], descendants: true }], ngImport: i0, template: "<div \r\n  class=\"agu-dropdown\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div \r\n    class=\"agu-dropdown__trigger\"\r\n    (click)=\"trigger === 'click' && toggle()\"\r\n  >\r\n    <ng-content select=\"[slot=trigger]\"></ng-content>\r\n  </div>\r\n  <div \r\n    #dropdownMenu\r\n    class=\"agu-dropdown__menu\"\r\n    [class.agu-dropdown__menu--visible]=\"visible\"\r\n    [class.agu-dropdown__menu--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-dropdown__menu--placement-top]=\"placement === 'top'\"\r\n    [class.agu-dropdown__menu--placement-left]=\"placement === 'left'\"\r\n    [class.agu-dropdown__menu--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <ng-content select=\"[slot=menu]\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-dropdown{position:relative;display:inline-block}.agu-dropdown__trigger{cursor:pointer}.agu-dropdown__menu{position:absolute;min-width:120px;background:#fff;border-radius:.25rem;box-shadow:0 2px 8px #00000026;padding:.25rem 0;z-index:1050;opacity:0;visibility:hidden;transform:scale(.95);transition:all .2s ease;margin-top:4px}.agu-dropdown__menu--visible{opacity:1;visibility:visible;transform:scale(1)}.agu-dropdown__menu--placement-bottom{top:100%;left:0;margin-top:4px}.agu-dropdown__menu--placement-top{bottom:100%;left:0;margin-bottom:4px;margin-top:0}.agu-dropdown__menu--placement-left{top:0;right:100%;margin-right:4px;margin-top:0}.agu-dropdown__menu--placement-right{top:0;left:100%;margin-left:4px;margin-top:0}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-dropdown', standalone: false, template: "<div \r\n  class=\"agu-dropdown\"\r\n  (mouseenter)=\"onMouseEnter()\"\r\n  (mouseleave)=\"onMouseLeave()\"\r\n>\r\n  <div \r\n    class=\"agu-dropdown__trigger\"\r\n    (click)=\"trigger === 'click' && toggle()\"\r\n  >\r\n    <ng-content select=\"[slot=trigger]\"></ng-content>\r\n  </div>\r\n  <div \r\n    #dropdownMenu\r\n    class=\"agu-dropdown__menu\"\r\n    [class.agu-dropdown__menu--visible]=\"visible\"\r\n    [class.agu-dropdown__menu--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-dropdown__menu--placement-top]=\"placement === 'top'\"\r\n    [class.agu-dropdown__menu--placement-left]=\"placement === 'left'\"\r\n    [class.agu-dropdown__menu--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <ng-content select=\"[slot=menu]\"></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-dropdown{position:relative;display:inline-block}.agu-dropdown__trigger{cursor:pointer}.agu-dropdown__menu{position:absolute;min-width:120px;background:#fff;border-radius:.25rem;box-shadow:0 2px 8px #00000026;padding:.25rem 0;z-index:1050;opacity:0;visibility:hidden;transform:scale(.95);transition:all .2s ease;margin-top:4px}.agu-dropdown__menu--visible{opacity:1;visibility:visible;transform:scale(1)}.agu-dropdown__menu--placement-bottom{top:100%;left:0;margin-top:4px}.agu-dropdown__menu--placement-top{bottom:100%;left:0;margin-bottom:4px;margin-top:0}.agu-dropdown__menu--placement-left{top:0;right:100%;margin-right:4px;margin-top:0}.agu-dropdown__menu--placement-right{top:0;left:100%;margin-left:4px;margin-top:0}\n"] }]
        }], propDecorators: { trigger: [{
                type: Input
            }], placement: [{
                type: Input
            }], visible: [{
                type: Input
            }], visibleChange: [{
                type: Output
            }], onVisibleChange: [{
                type: Output
            }], dropdownMenu: [{
                type: ViewChild,
                args: ['dropdownMenu', { static: false }]
            }], onClickOutside: [{
                type: HostListener,
                args: ['document:click', ['$event']]
            }] } });

class TooltipComponent {
    title = '';
    placement = 'top';
    trigger = 'hover';
    visible = false;
    tooltipContent;
    show() {
        this.visible = true;
    }
    hide() {
        this.visible = false;
    }
    toggle() {
        this.visible = !this.visible;
    }
    onMouseEnter() {
        if (this.trigger === 'hover') {
            this.show();
        }
    }
    onMouseLeave() {
        if (this.trigger === 'hover') {
            this.hide();
        }
    }
    onClick() {
        if (this.trigger === 'click') {
            this.toggle();
        }
    }
    onFocus() {
        if (this.trigger === 'focus') {
            this.show();
        }
    }
    onBlur() {
        if (this.trigger === 'focus') {
            this.hide();
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TooltipComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TooltipComponent, selector: "agu-tooltip", inputs: { title: "title", placement: "placement", trigger: "trigger", visible: "visible" }, host: { listeners: { "mouseenter": "onMouseEnter($event)", "mouseleave": "onMouseLeave($event)", "click": "onClick($event)", "focus": "onFocus($event)", "blur": "onBlur($event)" } }, viewQueries: [{ propertyName: "tooltipContent", first: true, predicate: ["tooltipContent"], descendants: true }], ngImport: i0, template: "<div class=\"agu-tooltip\">\r\n  <ng-content></ng-content>\r\n  <div \r\n    #tooltipContent\r\n    class=\"agu-tooltip__content\"\r\n    [class.agu-tooltip__content--visible]=\"visible\"\r\n    [class.agu-tooltip__content--placement-top]=\"placement === 'top'\"\r\n    [class.agu-tooltip__content--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-tooltip__content--placement-left]=\"placement === 'left'\"\r\n    [class.agu-tooltip__content--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <div class=\"agu-tooltip__arrow\"></div>\r\n    <div class=\"agu-tooltip__inner\">{{ title }}</div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-tooltip{position:relative;display:inline-block}.agu-tooltip__content{position:absolute;z-index:1060;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;pointer-events:none}.agu-tooltip__content--visible{opacity:1;visibility:visible}.agu-tooltip__content--placement-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.agu-tooltip__content--placement-top .agu-tooltip__arrow{top:100%;left:50%;transform:translate(-50%);border-top-color:#000000bf;border-bottom:none}.agu-tooltip__content--placement-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.agu-tooltip__content--placement-bottom .agu-tooltip__arrow{bottom:100%;left:50%;transform:translate(-50%);border-bottom-color:#000000bf;border-top:none}.agu-tooltip__content--placement-left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.agu-tooltip__content--placement-left .agu-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%);border-left-color:#000000bf;border-right:none}.agu-tooltip__content--placement-right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.agu-tooltip__content--placement-right .agu-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%);border-right-color:#000000bf;border-left:none}.agu-tooltip__arrow{position:absolute;width:0;height:0;border:4px solid transparent}.agu-tooltip__inner{background:#000000bf;color:#fff;padding:.375rem .5rem;border-radius:.25rem;font-size:.875rem;line-height:1.5;white-space:nowrap;max-width:250px}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TooltipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-tooltip', standalone: false, template: "<div class=\"agu-tooltip\">\r\n  <ng-content></ng-content>\r\n  <div \r\n    #tooltipContent\r\n    class=\"agu-tooltip__content\"\r\n    [class.agu-tooltip__content--visible]=\"visible\"\r\n    [class.agu-tooltip__content--placement-top]=\"placement === 'top'\"\r\n    [class.agu-tooltip__content--placement-bottom]=\"placement === 'bottom'\"\r\n    [class.agu-tooltip__content--placement-left]=\"placement === 'left'\"\r\n    [class.agu-tooltip__content--placement-right]=\"placement === 'right'\"\r\n  >\r\n    <div class=\"agu-tooltip__arrow\"></div>\r\n    <div class=\"agu-tooltip__inner\">{{ title }}</div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-tooltip{position:relative;display:inline-block}.agu-tooltip__content{position:absolute;z-index:1060;opacity:0;visibility:hidden;transition:opacity .2s ease,visibility .2s ease;pointer-events:none}.agu-tooltip__content--visible{opacity:1;visibility:visible}.agu-tooltip__content--placement-top{bottom:100%;left:50%;transform:translate(-50%);margin-bottom:8px}.agu-tooltip__content--placement-top .agu-tooltip__arrow{top:100%;left:50%;transform:translate(-50%);border-top-color:#000000bf;border-bottom:none}.agu-tooltip__content--placement-bottom{top:100%;left:50%;transform:translate(-50%);margin-top:8px}.agu-tooltip__content--placement-bottom .agu-tooltip__arrow{bottom:100%;left:50%;transform:translate(-50%);border-bottom-color:#000000bf;border-top:none}.agu-tooltip__content--placement-left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.agu-tooltip__content--placement-left .agu-tooltip__arrow{left:100%;top:50%;transform:translateY(-50%);border-left-color:#000000bf;border-right:none}.agu-tooltip__content--placement-right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.agu-tooltip__content--placement-right .agu-tooltip__arrow{right:100%;top:50%;transform:translateY(-50%);border-right-color:#000000bf;border-left:none}.agu-tooltip__arrow{position:absolute;width:0;height:0;border:4px solid transparent}.agu-tooltip__inner{background:#000000bf;color:#fff;padding:.375rem .5rem;border-radius:.25rem;font-size:.875rem;line-height:1.5;white-space:nowrap;max-width:250px}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], placement: [{
                type: Input
            }], trigger: [{
                type: Input
            }], visible: [{
                type: Input
            }], tooltipContent: [{
                type: ViewChild,
                args: ['tooltipContent', { static: false }]
            }], onMouseEnter: [{
                type: HostListener,
                args: ['mouseenter', ['$event']]
            }], onMouseLeave: [{
                type: HostListener,
                args: ['mouseleave', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], onFocus: [{
                type: HostListener,
                args: ['focus', ['$event']]
            }], onBlur: [{
                type: HostListener,
                args: ['blur', ['$event']]
            }] } });

class TabComponent {
    key = '';
    title = '';
    icon = '';
    active = false;
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TabComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TabComponent, selector: "agu-tab", inputs: { key: "key", title: "title", icon: "icon", active: "active" }, ngImport: i0, template: '<ng-content></ng-content>', isInline: true, styles: [":host{display:block}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TabComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-tab', standalone: false, template: '<ng-content></ng-content>', styles: [":host{display:block}\n"] }]
        }], propDecorators: { key: [{
                type: Input
            }], title: [{
                type: Input
            }], icon: [{
                type: Input
            }], active: [{
                type: Input
            }] } });

class TabsComponent {
    activeKey = '';
    type = 'line';
    size = 'md';
    activeKeyChange = new EventEmitter();
    onTabClick = new EventEmitter();
    tabs;
    ngAfterContentInit() {
        if (this.tabs.length > 0 && !this.activeKey) {
            this.activeKey = this.tabs.first.key;
        }
        this.tabs.forEach(tab => {
            tab.active = tab.key === this.activeKey;
        });
    }
    selectTab(key) {
        this.activeKey = key;
        this.activeKeyChange.emit(key);
        this.onTabClick.emit(key);
        this.tabs.forEach(tab => {
            tab.active = tab.key === key;
        });
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TabsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TabsComponent, selector: "agu-tabs", inputs: { activeKey: "activeKey", type: "type", size: "size" }, outputs: { activeKeyChange: "activeKeyChange", onTabClick: "onTabClick" }, queries: [{ propertyName: "tabs", predicate: TabComponent }], ngImport: i0, template: "<div \r\n  class=\"agu-tabs\"\r\n  [class.agu-tabs--type-line]=\"type === 'line'\"\r\n  [class.agu-tabs--type-card]=\"type === 'card'\"\r\n  [class.agu-tabs--size-sm]=\"size === 'sm'\"\r\n  [class.agu-tabs--size-md]=\"size === 'md'\"\r\n  [class.agu-tabs--size-lg]=\"size === 'lg'\"\r\n>\r\n  <div class=\"agu-tabs__nav\">\r\n    <div \r\n      *ngFor=\"let tab of tabs\"\r\n      class=\"agu-tabs__tab\"\r\n      [class.agu-tabs__tab--active]=\"tab.active\"\r\n      (click)=\"selectTab(tab.key)\"\r\n    >\r\n      <span class=\"agu-tabs__tab-icon\" *ngIf=\"tab.icon\">{{ tab.icon }}</span>\r\n      <span class=\"agu-tabs__tab-title\">{{ tab.title }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"agu-tabs__content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-tabs{width:100%}.agu-tabs__nav{display:flex;border-bottom:1px solid #f0f0f0;margin-bottom:1rem}.agu-tabs__tab{padding:.75rem 1rem;cursor:pointer;border-bottom:2px solid transparent;display:flex;align-items:center;gap:.5rem;transition:all .3s ease;color:#000000a6;-webkit-user-select:none;user-select:none}.agu-tabs__tab:hover{color:#1890ff}.agu-tabs__tab--active{color:#1890ff;border-bottom-color:#1890ff;font-weight:500}.agu-tabs__tab-icon{font-size:1rem}.agu-tabs__tab-title{font-size:.875rem}.agu-tabs--type-card .agu-tabs__nav{border-bottom:none;gap:.5rem}.agu-tabs--type-card .agu-tabs__tab{border:1px solid #d9d9d9;border-radius:.25rem .25rem 0 0;border-bottom:none;background:#fafafa}.agu-tabs--type-card .agu-tabs__tab--active{background:#fff;border-bottom-color:#fff}.agu-tabs--size-sm .agu-tabs__tab{padding:.5rem .75rem;font-size:.875rem}.agu-tabs--size-lg .agu-tabs__tab{padding:1rem 1.5rem;font-size:1rem}.agu-tabs__content{min-height:100px}::ng-deep agu-tab{display:none}::ng-deep agu-tab.active{display:block}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TabsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-tabs', standalone: false, template: "<div \r\n  class=\"agu-tabs\"\r\n  [class.agu-tabs--type-line]=\"type === 'line'\"\r\n  [class.agu-tabs--type-card]=\"type === 'card'\"\r\n  [class.agu-tabs--size-sm]=\"size === 'sm'\"\r\n  [class.agu-tabs--size-md]=\"size === 'md'\"\r\n  [class.agu-tabs--size-lg]=\"size === 'lg'\"\r\n>\r\n  <div class=\"agu-tabs__nav\">\r\n    <div \r\n      *ngFor=\"let tab of tabs\"\r\n      class=\"agu-tabs__tab\"\r\n      [class.agu-tabs__tab--active]=\"tab.active\"\r\n      (click)=\"selectTab(tab.key)\"\r\n    >\r\n      <span class=\"agu-tabs__tab-icon\" *ngIf=\"tab.icon\">{{ tab.icon }}</span>\r\n      <span class=\"agu-tabs__tab-title\">{{ tab.title }}</span>\r\n    </div>\r\n  </div>\r\n  <div class=\"agu-tabs__content\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-tabs{width:100%}.agu-tabs__nav{display:flex;border-bottom:1px solid #f0f0f0;margin-bottom:1rem}.agu-tabs__tab{padding:.75rem 1rem;cursor:pointer;border-bottom:2px solid transparent;display:flex;align-items:center;gap:.5rem;transition:all .3s ease;color:#000000a6;-webkit-user-select:none;user-select:none}.agu-tabs__tab:hover{color:#1890ff}.agu-tabs__tab--active{color:#1890ff;border-bottom-color:#1890ff;font-weight:500}.agu-tabs__tab-icon{font-size:1rem}.agu-tabs__tab-title{font-size:.875rem}.agu-tabs--type-card .agu-tabs__nav{border-bottom:none;gap:.5rem}.agu-tabs--type-card .agu-tabs__tab{border:1px solid #d9d9d9;border-radius:.25rem .25rem 0 0;border-bottom:none;background:#fafafa}.agu-tabs--type-card .agu-tabs__tab--active{background:#fff;border-bottom-color:#fff}.agu-tabs--size-sm .agu-tabs__tab{padding:.5rem .75rem;font-size:.875rem}.agu-tabs--size-lg .agu-tabs__tab{padding:1rem 1.5rem;font-size:1rem}.agu-tabs__content{min-height:100px}::ng-deep agu-tab{display:none}::ng-deep agu-tab.active{display:block}\n"] }]
        }], propDecorators: { activeKey: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], activeKeyChange: [{
                type: Output
            }], onTabClick: [{
                type: Output
            }], tabs: [{
                type: ContentChildren,
                args: [TabComponent]
            }] } });

class AccordionPanelComponent {
    key = '';
    header = '';
    active = false;
    disabled = false;
    showArrow = true;
    bordered = true;
    ghost = false;
    activeChange = new EventEmitter();
    content;
    toggle() {
        if (!this.disabled) {
            this.active = !this.active;
            this.activeChange.emit(this.active);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionPanelComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AccordionPanelComponent, selector: "agu-accordion-panel", inputs: { key: "key", header: "header", active: "active", disabled: "disabled", showArrow: "showArrow", bordered: "bordered", ghost: "ghost" }, outputs: { activeChange: "activeChange" }, viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: "<div \r\n  class=\"agu-accordion-panel\"\r\n  [class.agu-accordion-panel--active]=\"active\"\r\n  [class.agu-accordion-panel--disabled]=\"disabled\"\r\n  [class.agu-accordion-panel--bordered]=\"bordered\"\r\n  [class.agu-accordion-panel--ghost]=\"ghost\"\r\n>\r\n  <div \r\n    class=\"agu-accordion-panel__header\"\r\n    (click)=\"toggle()\"\r\n  >\r\n    <span class=\"agu-accordion-panel__title\">{{ header }}</span>\r\n    <span \r\n      *ngIf=\"showArrow\"\r\n      class=\"agu-accordion-panel__arrow\"\r\n      [class.agu-accordion-panel__arrow--active]=\"active\"\r\n    >\r\n      \u25BC\r\n    </span>\r\n  </div>\r\n  <div \r\n    #content\r\n    class=\"agu-accordion-panel__content\"\r\n    [class.agu-accordion-panel__content--active]=\"active\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-accordion-panel{border-bottom:1px solid #f0f0f0}.agu-accordion-panel:last-child{border-bottom:none}.agu-accordion-panel--bordered{border:1px solid #f0f0f0;border-radius:.25rem;margin-bottom:.5rem;overflow:hidden}.agu-accordion-panel--bordered:last-child{margin-bottom:0}.agu-accordion-panel--ghost{background:transparent;border:none}.agu-accordion-panel--disabled{opacity:.6;cursor:not-allowed}.agu-accordion-panel__header{padding:1rem 1.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:#fafafa;transition:all .3s ease;-webkit-user-select:none;user-select:none}.agu-accordion-panel__header:hover:not(.agu-accordion-panel--disabled){background:#f0f0f0}.agu-accordion-panel--active .agu-accordion-panel__header{background:#fff}.agu-accordion-panel--ghost .agu-accordion-panel__header{background:transparent}.agu-accordion-panel__title{font-weight:500;color:#000000d9}.agu-accordion-panel__arrow{transition:transform .3s ease;color:#00000073;font-size:.75rem}.agu-accordion-panel__arrow--active{transform:rotate(180deg)}.agu-accordion-panel__content{max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease;padding:0 1.5rem}.agu-accordion-panel__content--active{max-height:1000px;padding:1rem 1.5rem}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionPanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-accordion-panel', standalone: false, template: "<div \r\n  class=\"agu-accordion-panel\"\r\n  [class.agu-accordion-panel--active]=\"active\"\r\n  [class.agu-accordion-panel--disabled]=\"disabled\"\r\n  [class.agu-accordion-panel--bordered]=\"bordered\"\r\n  [class.agu-accordion-panel--ghost]=\"ghost\"\r\n>\r\n  <div \r\n    class=\"agu-accordion-panel__header\"\r\n    (click)=\"toggle()\"\r\n  >\r\n    <span class=\"agu-accordion-panel__title\">{{ header }}</span>\r\n    <span \r\n      *ngIf=\"showArrow\"\r\n      class=\"agu-accordion-panel__arrow\"\r\n      [class.agu-accordion-panel__arrow--active]=\"active\"\r\n    >\r\n      \u25BC\r\n    </span>\r\n  </div>\r\n  <div \r\n    #content\r\n    class=\"agu-accordion-panel__content\"\r\n    [class.agu-accordion-panel__content--active]=\"active\"\r\n  >\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-accordion-panel{border-bottom:1px solid #f0f0f0}.agu-accordion-panel:last-child{border-bottom:none}.agu-accordion-panel--bordered{border:1px solid #f0f0f0;border-radius:.25rem;margin-bottom:.5rem;overflow:hidden}.agu-accordion-panel--bordered:last-child{margin-bottom:0}.agu-accordion-panel--ghost{background:transparent;border:none}.agu-accordion-panel--disabled{opacity:.6;cursor:not-allowed}.agu-accordion-panel__header{padding:1rem 1.5rem;cursor:pointer;display:flex;justify-content:space-between;align-items:center;background:#fafafa;transition:all .3s ease;-webkit-user-select:none;user-select:none}.agu-accordion-panel__header:hover:not(.agu-accordion-panel--disabled){background:#f0f0f0}.agu-accordion-panel--active .agu-accordion-panel__header{background:#fff}.agu-accordion-panel--ghost .agu-accordion-panel__header{background:transparent}.agu-accordion-panel__title{font-weight:500;color:#000000d9}.agu-accordion-panel__arrow{transition:transform .3s ease;color:#00000073;font-size:.75rem}.agu-accordion-panel__arrow--active{transform:rotate(180deg)}.agu-accordion-panel__content{max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s ease;padding:0 1.5rem}.agu-accordion-panel__content--active{max-height:1000px;padding:1rem 1.5rem}\n"] }]
        }], propDecorators: { key: [{
                type: Input
            }], header: [{
                type: Input
            }], active: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showArrow: [{
                type: Input
            }], bordered: [{
                type: Input
            }], ghost: [{
                type: Input
            }], activeChange: [{
                type: Output
            }], content: [{
                type: ViewChild,
                args: ['content', { static: false }]
            }] } });

class AccordionComponent {
    accordion = false; // Only one panel open at a time
    bordered = true;
    ghost = false;
    panels;
    ngAfterContentInit() {
        this.panels.forEach(panel => {
            panel.bordered = this.bordered;
            panel.ghost = this.ghost;
        });
    }
    onPanelChange(activeKey) {
        if (this.accordion) {
            this.panels.forEach(panel => {
                if (panel.key !== activeKey) {
                    panel.active = false;
                }
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AccordionComponent, selector: "agu-accordion", inputs: { accordion: "accordion", bordered: "bordered", ghost: "ghost" }, queries: [{ propertyName: "panels", predicate: AccordionPanelComponent }], ngImport: i0, template: "<div \r\n  class=\"agu-accordion\"\r\n  [class.agu-accordion--bordered]=\"bordered\"\r\n  [class.agu-accordion--ghost]=\"ghost\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-accordion{width:100%}.agu-accordion--bordered{border:1px solid #f0f0f0;border-radius:.25rem;overflow:hidden}.agu-accordion--ghost{background:transparent}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-accordion', standalone: false, template: "<div \r\n  class=\"agu-accordion\"\r\n  [class.agu-accordion--bordered]=\"bordered\"\r\n  [class.agu-accordion--ghost]=\"ghost\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n\r\n", styles: [".agu-accordion{width:100%}.agu-accordion--bordered{border:1px solid #f0f0f0;border-radius:.25rem;overflow:hidden}.agu-accordion--ghost{background:transparent}\n"] }]
        }], propDecorators: { accordion: [{
                type: Input
            }], bordered: [{
                type: Input
            }], ghost: [{
                type: Input
            }], panels: [{
                type: ContentChildren,
                args: [AccordionPanelComponent]
            }] } });

class PaginationComponent {
    current = 1;
    total = 0;
    pageSize = 10;
    showSizeChanger = false;
    showQuickJumper = false;
    showTotal = false;
    simple = false;
    currentChange = new EventEmitter();
    pageSizeChange = new EventEmitter();
    get totalPages() {
        return Math.ceil(this.total / this.pageSize);
    }
    get pages() {
        const pages = [];
        const total = this.totalPages;
        const current = this.current;
        if (total <= 7) {
            for (let i = 1; i <= total; i++) {
                pages.push(i);
            }
        }
        else {
            if (current <= 4) {
                for (let i = 1; i <= 5; i++) {
                    pages.push(i);
                }
                pages.push(-1); // ellipsis
                pages.push(total);
            }
            else if (current >= total - 3) {
                pages.push(1);
                pages.push(-1); // ellipsis
                for (let i = total - 4; i <= total; i++) {
                    pages.push(i);
                }
            }
            else {
                pages.push(1);
                pages.push(-1); // ellipsis
                for (let i = current - 1; i <= current + 1; i++) {
                    pages.push(i);
                }
                pages.push(-1); // ellipsis
                pages.push(total);
            }
        }
        return pages;
    }
    goToPage(page) {
        if (page >= 1 && page <= this.totalPages && page !== this.current) {
            this.current = page;
            this.currentChange.emit(page);
        }
    }
    prev() {
        if (this.current > 1) {
            this.goToPage(this.current - 1);
        }
    }
    next() {
        if (this.current < this.totalPages) {
            this.goToPage(this.current + 1);
        }
    }
    onPageSizeChange(size) {
        this.pageSize = size;
        this.current = 1;
        this.pageSizeChange.emit(size);
        this.currentChange.emit(1);
    }
    get Math() {
        return Math;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: PaginationComponent, selector: "agu-pagination", inputs: { current: "current", total: "total", pageSize: "pageSize", showSizeChanger: "showSizeChanger", showQuickJumper: "showQuickJumper", showTotal: "showTotal", simple: "simple" }, outputs: { currentChange: "currentChange", pageSizeChange: "pageSizeChange" }, ngImport: i0, template: "<div \r\n  class=\"agu-pagination\"\r\n  [class.agu-pagination--simple]=\"simple\"\r\n>\r\n  <div class=\"agu-pagination__info\" *ngIf=\"showTotal && !simple\">\r\n    Showing {{ (current - 1) * pageSize + 1 }} to {{ Math.min(current * pageSize, total) }} of {{ total }} items\r\n  </div>\r\n  \r\n  <div class=\"agu-pagination__content\">\r\n    <button \r\n      class=\"agu-pagination__btn\"\r\n      [class.agu-pagination__btn--disabled]=\"current === 1\"\r\n      (click)=\"prev()\"\r\n    >\r\n      \u2039\r\n    </button>\r\n\r\n    <template *ngIf=\"!simple\">\r\n      <button\r\n        *ngFor=\"let page of pages\"\r\n        class=\"agu-pagination__page\"\r\n        [class.agu-pagination__page--active]=\"page === current\"\r\n        [class.agu-pagination__page--ellipsis]=\"page === -1\"\r\n        (click)=\"page !== -1 && goToPage(page)\"\r\n      >\r\n        {{ page === -1 ? '...' : page }}\r\n      </button>\r\n    </template>\r\n\r\n    <template *ngIf=\"simple\">\r\n      <input \r\n        type=\"number\" \r\n        class=\"agu-pagination__input\"\r\n        [value]=\"current\"\r\n        (change)=\"goToPage(+$any($event.target).value)\"\r\n        min=\"1\"\r\n        [max]=\"totalPages\"\r\n      />\r\n      <span class=\"agu-pagination__separator\">/</span>\r\n      <span class=\"agu-pagination__total\">{{ totalPages }}</span>\r\n    </template>\r\n\r\n    <button \r\n      class=\"agu-pagination__btn\"\r\n      [class.agu-pagination__btn--disabled]=\"current === totalPages\"\r\n      (click)=\"next()\"\r\n    >\r\n      \u203A\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"agu-pagination__size-changer\" *ngIf=\"showSizeChanger && !simple\">\r\n    <select \r\n      class=\"agu-pagination__select\"\r\n      [value]=\"pageSize\"\r\n      (change)=\"onPageSizeChange(+$any($event.target).value)\"\r\n    >\r\n      <option value=\"10\">10 / page</option>\r\n      <option value=\"20\">20 / page</option>\r\n      <option value=\"50\">50 / page</option>\r\n      <option value=\"100\">100 / page</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-pagination{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}.agu-pagination__info{color:#00000073;font-size:.875rem}.agu-pagination__content{display:flex;align-items:center;gap:.25rem}.agu-pagination__btn{min-width:32px;height:32px;padding:0 8px;border:1px solid #d9d9d9;background:#fff;border-radius:.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s ease;font-size:1rem}.agu-pagination__btn:hover:not(.agu-pagination__btn--disabled){border-color:#1890ff;color:#1890ff}.agu-pagination__btn--disabled{opacity:.5;cursor:not-allowed}.agu-pagination__page{min-width:32px;height:32px;padding:0 8px;border:1px solid #d9d9d9;background:#fff;border-radius:.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s ease;font-size:.875rem}.agu-pagination__page:hover:not(.agu-pagination__page--ellipsis):not(.agu-pagination__page--active){border-color:#1890ff;color:#1890ff}.agu-pagination__page--active{background:#1890ff;border-color:#1890ff;color:#fff;font-weight:500}.agu-pagination__page--ellipsis{border:none;background:transparent;cursor:default}.agu-pagination__input{width:50px;height:32px;padding:0 8px;border:1px solid #d9d9d9;border-radius:.25rem;text-align:center}.agu-pagination__separator{margin:0 8px;color:#00000073}.agu-pagination__total{color:#00000073}.agu-pagination__size-changer{display:flex;align-items:center}.agu-pagination__select{height:32px;padding:0 8px;border:1px solid #d9d9d9;border-radius:.25rem;background:#fff;cursor:pointer;font-size:.875rem}.agu-pagination--simple .agu-pagination__content{gap:.5rem}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i2$1.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: PaginationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-pagination', standalone: false, template: "<div \r\n  class=\"agu-pagination\"\r\n  [class.agu-pagination--simple]=\"simple\"\r\n>\r\n  <div class=\"agu-pagination__info\" *ngIf=\"showTotal && !simple\">\r\n    Showing {{ (current - 1) * pageSize + 1 }} to {{ Math.min(current * pageSize, total) }} of {{ total }} items\r\n  </div>\r\n  \r\n  <div class=\"agu-pagination__content\">\r\n    <button \r\n      class=\"agu-pagination__btn\"\r\n      [class.agu-pagination__btn--disabled]=\"current === 1\"\r\n      (click)=\"prev()\"\r\n    >\r\n      \u2039\r\n    </button>\r\n\r\n    <template *ngIf=\"!simple\">\r\n      <button\r\n        *ngFor=\"let page of pages\"\r\n        class=\"agu-pagination__page\"\r\n        [class.agu-pagination__page--active]=\"page === current\"\r\n        [class.agu-pagination__page--ellipsis]=\"page === -1\"\r\n        (click)=\"page !== -1 && goToPage(page)\"\r\n      >\r\n        {{ page === -1 ? '...' : page }}\r\n      </button>\r\n    </template>\r\n\r\n    <template *ngIf=\"simple\">\r\n      <input \r\n        type=\"number\" \r\n        class=\"agu-pagination__input\"\r\n        [value]=\"current\"\r\n        (change)=\"goToPage(+$any($event.target).value)\"\r\n        min=\"1\"\r\n        [max]=\"totalPages\"\r\n      />\r\n      <span class=\"agu-pagination__separator\">/</span>\r\n      <span class=\"agu-pagination__total\">{{ totalPages }}</span>\r\n    </template>\r\n\r\n    <button \r\n      class=\"agu-pagination__btn\"\r\n      [class.agu-pagination__btn--disabled]=\"current === totalPages\"\r\n      (click)=\"next()\"\r\n    >\r\n      \u203A\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"agu-pagination__size-changer\" *ngIf=\"showSizeChanger && !simple\">\r\n    <select \r\n      class=\"agu-pagination__select\"\r\n      [value]=\"pageSize\"\r\n      (change)=\"onPageSizeChange(+$any($event.target).value)\"\r\n    >\r\n      <option value=\"10\">10 / page</option>\r\n      <option value=\"20\">20 / page</option>\r\n      <option value=\"50\">50 / page</option>\r\n      <option value=\"100\">100 / page</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-pagination{display:flex;align-items:center;gap:1rem;flex-wrap:wrap}.agu-pagination__info{color:#00000073;font-size:.875rem}.agu-pagination__content{display:flex;align-items:center;gap:.25rem}.agu-pagination__btn{min-width:32px;height:32px;padding:0 8px;border:1px solid #d9d9d9;background:#fff;border-radius:.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s ease;font-size:1rem}.agu-pagination__btn:hover:not(.agu-pagination__btn--disabled){border-color:#1890ff;color:#1890ff}.agu-pagination__btn--disabled{opacity:.5;cursor:not-allowed}.agu-pagination__page{min-width:32px;height:32px;padding:0 8px;border:1px solid #d9d9d9;background:#fff;border-radius:.25rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .3s ease;font-size:.875rem}.agu-pagination__page:hover:not(.agu-pagination__page--ellipsis):not(.agu-pagination__page--active){border-color:#1890ff;color:#1890ff}.agu-pagination__page--active{background:#1890ff;border-color:#1890ff;color:#fff;font-weight:500}.agu-pagination__page--ellipsis{border:none;background:transparent;cursor:default}.agu-pagination__input{width:50px;height:32px;padding:0 8px;border:1px solid #d9d9d9;border-radius:.25rem;text-align:center}.agu-pagination__separator{margin:0 8px;color:#00000073}.agu-pagination__total{color:#00000073}.agu-pagination__size-changer{display:flex;align-items:center}.agu-pagination__select{height:32px;padding:0 8px;border:1px solid #d9d9d9;border-radius:.25rem;background:#fff;cursor:pointer;font-size:.875rem}.agu-pagination--simple .agu-pagination__content{gap:.5rem}\n"] }]
        }], propDecorators: { current: [{
                type: Input
            }], total: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], showSizeChanger: [{
                type: Input
            }], showQuickJumper: [{
                type: Input
            }], showTotal: [{
                type: Input
            }], simple: [{
                type: Input
            }], currentChange: [{
                type: Output
            }], pageSizeChange: [{
                type: Output
            }] } });

class TableComponent {
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
class TableHeaderComponent {
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
class TableBodyComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableBodyComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TableBodyComponent, selector: "agu-table-body", ngImport: i0, template: '<tbody><ng-content></ng-content></tbody>', isInline: true, styles: [":host{display:table-row-group}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TableBodyComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-table-body', standalone: false, template: '<tbody><ng-content></ng-content></tbody>', styles: [":host{display:table-row-group}\n"] }]
        }] });
class TableRowComponent {
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
class TableCellComponent {
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
class TableHeaderCellComponent {
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

class CheckboxComponent {
    label = '';
    disabled = false;
    indeterminate = false;
    size = 'md';
    change = new EventEmitter();
    checked = false;
    onChange = (value) => { };
    onTouched = () => { };
    toggle() {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onChange(this.checked);
            this.onTouched();
            this.change.emit(this.checked);
        }
    }
    writeValue(value) {
        this.checked = value || false;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CheckboxComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: CheckboxComponent, selector: "agu-checkbox", inputs: { label: "label", disabled: "disabled", indeterminate: "indeterminate", size: "size" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CheckboxComponent),
                multi: true
            }
        ], ngImport: i0, template: "<label class=\"agu-checkbox\" [ngClass]=\"{'disabled': disabled, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <input\r\n    type=\"checkbox\"\r\n    [checked]=\"checked\"\r\n    [disabled]=\"disabled\"\r\n    [indeterminate]=\"indeterminate\"\r\n    (change)=\"toggle()\"\r\n    style=\"display: none;\"\r\n  />\r\n  <span class=\"checkbox-box\" [ngClass]=\"{'checked': checked, 'indeterminate': indeterminate}\">\r\n    <svg *ngIf=\"checked && !indeterminate\" class=\"check-icon\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n      <path d=\"M13.5 4L6 11.5L2.5 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n    <svg *ngIf=\"indeterminate\" class=\"check-icon\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n      <path d=\"M4 8H12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\r\n    </svg>\r\n  </span>\r\n  <span class=\"checkbox-label\" *ngIf=\"label\">{{ label }}</span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-checkbox{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-checkbox.disabled{cursor:not-allowed;opacity:.6}.agu-checkbox .checkbox-box{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #d1d5db;border-radius:4px;background:#fff;transition:all .2s ease;flex-shrink:0}.agu-checkbox .checkbox-box .check-icon{width:12px;height:12px;color:#fff}.agu-checkbox .checkbox-box.checked,.agu-checkbox .checkbox-box.indeterminate{background-color:#1890ff;border-color:#1890ff}.agu-checkbox .checkbox-label{color:#374151;font-size:.875rem}.agu-checkbox.size-sm .checkbox-box{width:16px;height:16px}.agu-checkbox.size-sm .checkbox-box .check-icon{width:10px;height:10px}.agu-checkbox.size-sm .checkbox-label{font-size:.75rem}.agu-checkbox.size-lg .checkbox-box{width:24px;height:24px}.agu-checkbox.size-lg .checkbox-box .check-icon{width:14px;height:14px}.agu-checkbox.size-lg .checkbox-label{font-size:1rem}.agu-checkbox:not(.disabled):hover .checkbox-box{border-color:#1890ff}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: CheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-checkbox', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => CheckboxComponent),
                            multi: true
                        }
                    ], template: "<label class=\"agu-checkbox\" [ngClass]=\"{'disabled': disabled, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <input\r\n    type=\"checkbox\"\r\n    [checked]=\"checked\"\r\n    [disabled]=\"disabled\"\r\n    [indeterminate]=\"indeterminate\"\r\n    (change)=\"toggle()\"\r\n    style=\"display: none;\"\r\n  />\r\n  <span class=\"checkbox-box\" [ngClass]=\"{'checked': checked, 'indeterminate': indeterminate}\">\r\n    <svg *ngIf=\"checked && !indeterminate\" class=\"check-icon\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n      <path d=\"M13.5 4L6 11.5L2.5 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n    <svg *ngIf=\"indeterminate\" class=\"check-icon\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n      <path d=\"M4 8H12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/>\r\n    </svg>\r\n  </span>\r\n  <span class=\"checkbox-label\" *ngIf=\"label\">{{ label }}</span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-checkbox{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-checkbox.disabled{cursor:not-allowed;opacity:.6}.agu-checkbox .checkbox-box{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #d1d5db;border-radius:4px;background:#fff;transition:all .2s ease;flex-shrink:0}.agu-checkbox .checkbox-box .check-icon{width:12px;height:12px;color:#fff}.agu-checkbox .checkbox-box.checked,.agu-checkbox .checkbox-box.indeterminate{background-color:#1890ff;border-color:#1890ff}.agu-checkbox .checkbox-label{color:#374151;font-size:.875rem}.agu-checkbox.size-sm .checkbox-box{width:16px;height:16px}.agu-checkbox.size-sm .checkbox-box .check-icon{width:10px;height:10px}.agu-checkbox.size-sm .checkbox-label{font-size:.75rem}.agu-checkbox.size-lg .checkbox-box{width:24px;height:24px}.agu-checkbox.size-lg .checkbox-box .check-icon{width:14px;height:14px}.agu-checkbox.size-lg .checkbox-label{font-size:1rem}.agu-checkbox:not(.disabled):hover .checkbox-box{border-color:#1890ff}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], indeterminate: [{
                type: Input
            }], size: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class RadioComponent {
    label = '';
    value;
    disabled = false;
    size = 'md';
    name = '';
    change = new EventEmitter();
    checked = false;
    onChange = (value) => { };
    onTouched = () => { };
    select() {
        if (!this.disabled && !this.checked) {
            this.checked = true;
            this.onChange(this.value);
            this.onTouched();
            this.change.emit(this.value);
        }
    }
    writeValue(value) {
        this.checked = value === this.value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RadioComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RadioComponent, selector: "agu-radio", inputs: { label: "label", value: "value", disabled: "disabled", size: "size", name: "name" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RadioComponent),
                multi: true
            }
        ], ngImport: i0, template: "<label class=\"agu-radio\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <input\r\n    type=\"radio\"\r\n    [name]=\"name\"\r\n    [value]=\"value\"\r\n    [checked]=\"checked\"\r\n    [disabled]=\"disabled\"\r\n    (change)=\"select()\"\r\n    style=\"display: none;\"\r\n  />\r\n  <span class=\"radio-dot\">\r\n    <span class=\"radio-inner\"></span>\r\n  </span>\r\n  <span class=\"radio-label\" *ngIf=\"label\">{{ label }}</span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-radio{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-radio.disabled{cursor:not-allowed;opacity:.6}.agu-radio .radio-dot{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #d1d5db;border-radius:50%;background:#fff;transition:all .2s ease;flex-shrink:0;position:relative}.agu-radio .radio-dot .radio-inner{width:10px;height:10px;border-radius:50%;background-color:#1890ff;transform:scale(0);transition:transform .2s ease}.agu-radio.checked .radio-dot .radio-inner{transform:scale(1)}.agu-radio.checked .radio-dot{border-color:#1890ff}.agu-radio .radio-label{color:#374151;font-size:.875rem}.agu-radio.size-sm .radio-dot{width:16px;height:16px}.agu-radio.size-sm .radio-dot .radio-inner{width:8px;height:8px}.agu-radio.size-sm .radio-label{font-size:.75rem}.agu-radio.size-lg .radio-dot{width:24px;height:24px}.agu-radio.size-lg .radio-dot .radio-inner{width:12px;height:12px}.agu-radio.size-lg .radio-label{font-size:1rem}.agu-radio:not(.disabled):hover .radio-dot{border-color:#1890ff}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RadioComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-radio', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RadioComponent),
                            multi: true
                        }
                    ], template: "<label class=\"agu-radio\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <input\r\n    type=\"radio\"\r\n    [name]=\"name\"\r\n    [value]=\"value\"\r\n    [checked]=\"checked\"\r\n    [disabled]=\"disabled\"\r\n    (change)=\"select()\"\r\n    style=\"display: none;\"\r\n  />\r\n  <span class=\"radio-dot\">\r\n    <span class=\"radio-inner\"></span>\r\n  </span>\r\n  <span class=\"radio-label\" *ngIf=\"label\">{{ label }}</span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-radio{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-radio.disabled{cursor:not-allowed;opacity:.6}.agu-radio .radio-dot{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border:2px solid #d1d5db;border-radius:50%;background:#fff;transition:all .2s ease;flex-shrink:0;position:relative}.agu-radio .radio-dot .radio-inner{width:10px;height:10px;border-radius:50%;background-color:#1890ff;transform:scale(0);transition:transform .2s ease}.agu-radio.checked .radio-dot .radio-inner{transform:scale(1)}.agu-radio.checked .radio-dot{border-color:#1890ff}.agu-radio .radio-label{color:#374151;font-size:.875rem}.agu-radio.size-sm .radio-dot{width:16px;height:16px}.agu-radio.size-sm .radio-dot .radio-inner{width:8px;height:8px}.agu-radio.size-sm .radio-label{font-size:.75rem}.agu-radio.size-lg .radio-dot{width:24px;height:24px}.agu-radio.size-lg .radio-dot .radio-inner{width:12px;height:12px}.agu-radio.size-lg .radio-label{font-size:1rem}.agu-radio:not(.disabled):hover .radio-dot{border-color:#1890ff}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], name: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class SwitchComponent {
    label = '';
    disabled = false;
    size = 'md';
    checkedText = '';
    uncheckedText = '';
    change = new EventEmitter();
    checked = false;
    onChange = (value) => { };
    onTouched = () => { };
    toggle() {
        if (!this.disabled) {
            this.checked = !this.checked;
            this.onChange(this.checked);
            this.onTouched();
            this.change.emit(this.checked);
        }
    }
    writeValue(value) {
        this.checked = value || false;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwitchComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SwitchComponent, selector: "agu-switch", inputs: { label: "label", disabled: "disabled", size: "size", checkedText: "checkedText", uncheckedText: "uncheckedText" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SwitchComponent),
                multi: true
            }
        ], ngImport: i0, template: "<label class=\"agu-switch\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <span class=\"switch-label\" *ngIf=\"label && !checkedText && !uncheckedText\">{{ label }}</span>\r\n  <span class=\"switch-track\" (click)=\"toggle()\">\r\n    <span class=\"switch-thumb\"></span>\r\n  </span>\r\n  <span class=\"switch-text\" *ngIf=\"checkedText || uncheckedText\">\r\n    {{ checked ? checkedText : uncheckedText }}\r\n  </span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-switch{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-switch.disabled{cursor:not-allowed;opacity:.6}.agu-switch .switch-label{color:#374151;font-size:.875rem}.agu-switch .switch-track{position:relative;width:44px;height:24px;background-color:#d1d5db;border-radius:12px;transition:background-color .2s ease;flex-shrink:0}.agu-switch .switch-track .switch-thumb{position:absolute;top:2px;left:2px;width:20px;height:20px;background-color:#fff;border-radius:50%;transition:transform .2s ease;box-shadow:0 2px 4px #0003}.agu-switch.checked .switch-track{background-color:#1890ff}.agu-switch.checked .switch-track .switch-thumb{transform:translate(20px)}.agu-switch .switch-text{color:#374151;font-size:.875rem;min-width:30px}.agu-switch.size-sm .switch-track{width:36px;height:20px}.agu-switch.size-sm .switch-track .switch-thumb{width:16px;height:16px;top:2px;left:2px}.agu-switch.size-sm.checked .switch-track .switch-thumb{transform:translate(16px)}.agu-switch.size-sm .switch-label,.agu-switch.size-sm .switch-text{font-size:.75rem}.agu-switch.size-lg .switch-track{width:52px;height:28px}.agu-switch.size-lg .switch-track .switch-thumb{width:24px;height:24px;top:2px;left:2px}.agu-switch.size-lg.checked .switch-track .switch-thumb{transform:translate(24px)}.agu-switch.size-lg .switch-label,.agu-switch.size-lg .switch-text{font-size:1rem}.agu-switch:not(.disabled):hover .switch-track{background-color:#9ca3af}.agu-switch:not(.disabled).checked:hover .switch-track{background-color:#0076e4}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-switch', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SwitchComponent),
                            multi: true
                        }
                    ], template: "<label class=\"agu-switch\" [ngClass]=\"{'disabled': disabled, 'checked': checked, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <span class=\"switch-label\" *ngIf=\"label && !checkedText && !uncheckedText\">{{ label }}</span>\r\n  <span class=\"switch-track\" (click)=\"toggle()\">\r\n    <span class=\"switch-thumb\"></span>\r\n  </span>\r\n  <span class=\"switch-text\" *ngIf=\"checkedText || uncheckedText\">\r\n    {{ checked ? checkedText : uncheckedText }}\r\n  </span>\r\n  <ng-content></ng-content>\r\n</label>\r\n\r\n", styles: [".agu-switch{display:inline-flex;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none;gap:.5rem}.agu-switch.disabled{cursor:not-allowed;opacity:.6}.agu-switch .switch-label{color:#374151;font-size:.875rem}.agu-switch .switch-track{position:relative;width:44px;height:24px;background-color:#d1d5db;border-radius:12px;transition:background-color .2s ease;flex-shrink:0}.agu-switch .switch-track .switch-thumb{position:absolute;top:2px;left:2px;width:20px;height:20px;background-color:#fff;border-radius:50%;transition:transform .2s ease;box-shadow:0 2px 4px #0003}.agu-switch.checked .switch-track{background-color:#1890ff}.agu-switch.checked .switch-track .switch-thumb{transform:translate(20px)}.agu-switch .switch-text{color:#374151;font-size:.875rem;min-width:30px}.agu-switch.size-sm .switch-track{width:36px;height:20px}.agu-switch.size-sm .switch-track .switch-thumb{width:16px;height:16px;top:2px;left:2px}.agu-switch.size-sm.checked .switch-track .switch-thumb{transform:translate(16px)}.agu-switch.size-sm .switch-label,.agu-switch.size-sm .switch-text{font-size:.75rem}.agu-switch.size-lg .switch-track{width:52px;height:28px}.agu-switch.size-lg .switch-track .switch-thumb{width:24px;height:24px;top:2px;left:2px}.agu-switch.size-lg.checked .switch-track .switch-thumb{transform:translate(24px)}.agu-switch.size-lg .switch-label,.agu-switch.size-lg .switch-text{font-size:1rem}.agu-switch:not(.disabled):hover .switch-track{background-color:#9ca3af}.agu-switch:not(.disabled).checked:hover .switch-track{background-color:#0076e4}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], checkedText: [{
                type: Input
            }], uncheckedText: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class SelectComponent {
    options = [];
    placeholder = 'Select an option';
    disabled = false;
    size = 'md';
    multiple = false;
    change = new EventEmitter();
    selectedValue = null;
    isOpen = false;
    onChange = (value) => { };
    onTouched = () => { };
    get displayText() {
        if (this.multiple && Array.isArray(this.selectedValue)) {
            return this.selectedValue.length > 0
                ? `${this.selectedValue.length} selected`
                : this.placeholder;
        }
        const option = this.options.find(opt => opt.value === this.selectedValue);
        return option ? option.label : this.placeholder;
    }
    toggle() {
        if (!this.disabled) {
            this.isOpen = !this.isOpen;
        }
    }
    selectOption(option) {
        if (option.disabled)
            return;
        if (this.multiple) {
            if (!Array.isArray(this.selectedValue)) {
                this.selectedValue = [];
            }
            const index = this.selectedValue.indexOf(option.value);
            if (index > -1) {
                this.selectedValue.splice(index, 1);
            }
            else {
                this.selectedValue.push(option.value);
            }
        }
        else {
            this.selectedValue = option.value;
            this.isOpen = false;
        }
        this.onChange(this.selectedValue);
        this.onTouched();
        this.change.emit(this.selectedValue);
    }
    isSelected(option) {
        if (this.multiple && Array.isArray(this.selectedValue)) {
            return this.selectedValue.includes(option.value);
        }
        return this.selectedValue === option.value;
    }
    writeValue(value) {
        this.selectedValue = value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SelectComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SelectComponent, selector: "agu-select", inputs: { options: "options", placeholder: "placeholder", disabled: "disabled", size: "size", multiple: "multiple" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SelectComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-select\" [ngClass]=\"{'disabled': disabled, 'open': isOpen, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <div class=\"select-trigger\" (click)=\"toggle()\">\r\n    <span class=\"select-value\" [ngClass]=\"{'placeholder': !selectedValue}\">{{ displayText }}</span>\r\n    <svg class=\"select-arrow\" [ngClass]=\"{'open': isOpen}\" viewBox=\"0 0 12 12\" fill=\"none\">\r\n      <path d=\"M3 4.5L6 7.5L9 4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n  </div>\r\n  <div class=\"select-dropdown\" *ngIf=\"isOpen\">\r\n    <div \r\n      class=\"select-option\" \r\n      *ngFor=\"let option of options\"\r\n      [ngClass]=\"{'selected': isSelected(option), 'disabled': option.disabled}\"\r\n      (click)=\"selectOption(option)\"\r\n    >\r\n      <span *ngIf=\"multiple\" class=\"option-checkbox\">\r\n        <svg *ngIf=\"isSelected(option)\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n          <path d=\"M13.5 4L6 11.5L2.5 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n        </svg>\r\n      </span>\r\n      <span class=\"option-label\">{{ option.label }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-select{position:relative;display:inline-block;width:100%;min-width:200px}.agu-select.disabled{opacity:.6;cursor:not-allowed}.agu-select .select-trigger{display:flex;align-items:center;justify-content:space-between;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;background:#fff;cursor:pointer;transition:all .2s ease;gap:.5rem}.agu-select .select-trigger:hover:not(.disabled){border-color:#1890ff}.agu-select .select-trigger .select-value{flex:1;color:#374151;font-size:.875rem}.agu-select .select-trigger .select-value.placeholder{color:#9ca3af}.agu-select .select-trigger .select-arrow{width:12px;height:12px;color:#6b7280;transition:transform .2s ease;flex-shrink:0}.agu-select .select-trigger .select-arrow.open{transform:rotate(180deg)}.agu-select.open .select-trigger{border-color:#1890ff;box-shadow:0 0 0 3px #1890ff1a}.agu-select .select-dropdown{position:absolute;top:100%;left:0;right:0;margin-top:.25rem;background:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;max-height:200px;overflow-y:auto;z-index:1000}.agu-select .select-option{display:flex;align-items:center;padding:.5rem .75rem;cursor:pointer;transition:background-color .15s ease;gap:.5rem}.agu-select .select-option:hover:not(.disabled){background-color:#f3f4f6}.agu-select .select-option.selected{background-color:#1890ff1a;color:#1890ff}.agu-select .select-option.disabled{opacity:.5;cursor:not-allowed}.agu-select .select-option .option-checkbox{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border:2px solid #d1d5db;border-radius:3px;flex-shrink:0}.agu-select .select-option .option-checkbox svg{width:12px;height:12px;color:#1890ff}.agu-select .select-option.selected .option-checkbox{background-color:#1890ff;border-color:#1890ff}.agu-select .select-option.selected .option-checkbox svg{color:#fff}.agu-select .select-option .option-label{flex:1;font-size:.875rem}.agu-select.size-sm .select-trigger,.agu-select.size-sm .select-option{padding:.375rem .5rem;font-size:.75rem}.agu-select.size-lg .select-trigger,.agu-select.size-lg .select-option{padding:.75rem 1rem;font-size:1rem}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-select', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SelectComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-select\" [ngClass]=\"{'disabled': disabled, 'open': isOpen, 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg'}\">\r\n  <div class=\"select-trigger\" (click)=\"toggle()\">\r\n    <span class=\"select-value\" [ngClass]=\"{'placeholder': !selectedValue}\">{{ displayText }}</span>\r\n    <svg class=\"select-arrow\" [ngClass]=\"{'open': isOpen}\" viewBox=\"0 0 12 12\" fill=\"none\">\r\n      <path d=\"M3 4.5L6 7.5L9 4.5\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n    </svg>\r\n  </div>\r\n  <div class=\"select-dropdown\" *ngIf=\"isOpen\">\r\n    <div \r\n      class=\"select-option\" \r\n      *ngFor=\"let option of options\"\r\n      [ngClass]=\"{'selected': isSelected(option), 'disabled': option.disabled}\"\r\n      (click)=\"selectOption(option)\"\r\n    >\r\n      <span *ngIf=\"multiple\" class=\"option-checkbox\">\r\n        <svg *ngIf=\"isSelected(option)\" viewBox=\"0 0 16 16\" fill=\"none\">\r\n          <path d=\"M13.5 4L6 11.5L2.5 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\r\n        </svg>\r\n      </span>\r\n      <span class=\"option-label\">{{ option.label }}</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-select{position:relative;display:inline-block;width:100%;min-width:200px}.agu-select.disabled{opacity:.6;cursor:not-allowed}.agu-select .select-trigger{display:flex;align-items:center;justify-content:space-between;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;background:#fff;cursor:pointer;transition:all .2s ease;gap:.5rem}.agu-select .select-trigger:hover:not(.disabled){border-color:#1890ff}.agu-select .select-trigger .select-value{flex:1;color:#374151;font-size:.875rem}.agu-select .select-trigger .select-value.placeholder{color:#9ca3af}.agu-select .select-trigger .select-arrow{width:12px;height:12px;color:#6b7280;transition:transform .2s ease;flex-shrink:0}.agu-select .select-trigger .select-arrow.open{transform:rotate(180deg)}.agu-select.open .select-trigger{border-color:#1890ff;box-shadow:0 0 0 3px #1890ff1a}.agu-select .select-dropdown{position:absolute;top:100%;left:0;right:0;margin-top:.25rem;background:#fff;border:1px solid #d1d5db;border-radius:.375rem;box-shadow:0 4px 6px -1px #0000001a,0 2px 4px -1px #0000000f;max-height:200px;overflow-y:auto;z-index:1000}.agu-select .select-option{display:flex;align-items:center;padding:.5rem .75rem;cursor:pointer;transition:background-color .15s ease;gap:.5rem}.agu-select .select-option:hover:not(.disabled){background-color:#f3f4f6}.agu-select .select-option.selected{background-color:#1890ff1a;color:#1890ff}.agu-select .select-option.disabled{opacity:.5;cursor:not-allowed}.agu-select .select-option .option-checkbox{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;border:2px solid #d1d5db;border-radius:3px;flex-shrink:0}.agu-select .select-option .option-checkbox svg{width:12px;height:12px;color:#1890ff}.agu-select .select-option.selected .option-checkbox{background-color:#1890ff;border-color:#1890ff}.agu-select .select-option.selected .option-checkbox svg{color:#fff}.agu-select .select-option .option-label{flex:1;font-size:.875rem}.agu-select.size-sm .select-trigger,.agu-select.size-sm .select-option{padding:.375rem .5rem;font-size:.75rem}.agu-select.size-lg .select-trigger,.agu-select.size-lg .select-option{padding:.75rem 1rem;font-size:1rem}\n"] }]
        }], propDecorators: { options: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], size: [{
                type: Input
            }], multiple: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class TextareaComponent {
    placeholder = '';
    disabled = false;
    readonly = false;
    rows = 4;
    cols = 50;
    maxLength = null;
    size = 'md';
    variant = 'default';
    change = new EventEmitter();
    focus = new EventEmitter();
    blur = new EventEmitter();
    value = '';
    onChange = (value) => { };
    onTouched = () => { };
    onInput(event) {
        const target = event.target;
        this.value = target.value;
        this.onChange(this.value);
        this.change.emit(this.value);
    }
    onFocus(event) {
        this.focus.emit(event);
    }
    onBlur(event) {
        this.onTouched();
        this.blur.emit(event);
    }
    writeValue(value) {
        this.value = value || '';
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextareaComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TextareaComponent, selector: "agu-textarea", inputs: { placeholder: "placeholder", disabled: "disabled", readonly: "readonly", rows: "rows", cols: "cols", maxLength: "maxLength", size: "size", variant: "variant" }, outputs: { change: "change", focus: "focus", blur: "blur" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => TextareaComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-textarea\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'variant-default': variant === 'default', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger'}\">\r\n  <textarea\r\n    class=\"textarea-input\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [maxLength]=\"maxLength || undefined\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n  ></textarea>\r\n  <span class=\"textarea-counter\" *ngIf=\"maxLength\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-textarea{position:relative;display:inline-block;width:100%}.agu-textarea .textarea-input{width:100%;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;font-family:inherit;font-size:.875rem;line-height:1.5;color:#374151;background:#fff;resize:vertical;transition:all .2s ease}.agu-textarea .textarea-input::placeholder{color:#9ca3af}.agu-textarea .textarea-input:focus{outline:none;border-color:#1890ff;box-shadow:0 0 0 3px #1890ff1a}.agu-textarea .textarea-input:disabled{background-color:#f3f4f6;cursor:not-allowed;opacity:.6}.agu-textarea .textarea-input:read-only{background-color:#f9fafb;cursor:default}.agu-textarea .textarea-counter{display:block;text-align:right;font-size:.75rem;color:#6b7280;margin-top:.25rem}.agu-textarea.size-sm .textarea-input{padding:.375rem .5rem;font-size:.75rem}.agu-textarea.size-lg .textarea-input{padding:.75rem 1rem;font-size:1rem}.agu-textarea.variant-success .textarea-input{border-color:#52c41a}.agu-textarea.variant-success .textarea-input:focus{border-color:#52c41a;box-shadow:0 0 0 3px #52c41a1a}.agu-textarea.variant-warning .textarea-input{border-color:#faad14}.agu-textarea.variant-warning .textarea-input:focus{border-color:#faad14;box-shadow:0 0 0 3px #faad141a}.agu-textarea.variant-danger .textarea-input{border-color:#ff4d4f}.agu-textarea.variant-danger .textarea-input:focus{border-color:#ff4d4f;box-shadow:0 0 0 3px #ff4d4f1a}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TextareaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-textarea', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => TextareaComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-textarea\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'variant-default': variant === 'default', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger'}\">\r\n  <textarea\r\n    class=\"textarea-input\"\r\n    [placeholder]=\"placeholder\"\r\n    [disabled]=\"disabled\"\r\n    [readonly]=\"readonly\"\r\n    [rows]=\"rows\"\r\n    [cols]=\"cols\"\r\n    [maxLength]=\"maxLength || undefined\"\r\n    [value]=\"value\"\r\n    (input)=\"onInput($event)\"\r\n    (focus)=\"onFocus($event)\"\r\n    (blur)=\"onBlur($event)\"\r\n  ></textarea>\r\n  <span class=\"textarea-counter\" *ngIf=\"maxLength\">\r\n    {{ value.length }} / {{ maxLength }}\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-textarea{position:relative;display:inline-block;width:100%}.agu-textarea .textarea-input{width:100%;padding:.5rem .75rem;border:1px solid #d1d5db;border-radius:.375rem;font-family:inherit;font-size:.875rem;line-height:1.5;color:#374151;background:#fff;resize:vertical;transition:all .2s ease}.agu-textarea .textarea-input::placeholder{color:#9ca3af}.agu-textarea .textarea-input:focus{outline:none;border-color:#1890ff;box-shadow:0 0 0 3px #1890ff1a}.agu-textarea .textarea-input:disabled{background-color:#f3f4f6;cursor:not-allowed;opacity:.6}.agu-textarea .textarea-input:read-only{background-color:#f9fafb;cursor:default}.agu-textarea .textarea-counter{display:block;text-align:right;font-size:.75rem;color:#6b7280;margin-top:.25rem}.agu-textarea.size-sm .textarea-input{padding:.375rem .5rem;font-size:.75rem}.agu-textarea.size-lg .textarea-input{padding:.75rem 1rem;font-size:1rem}.agu-textarea.variant-success .textarea-input{border-color:#52c41a}.agu-textarea.variant-success .textarea-input:focus{border-color:#52c41a;box-shadow:0 0 0 3px #52c41a1a}.agu-textarea.variant-warning .textarea-input{border-color:#faad14}.agu-textarea.variant-warning .textarea-input:focus{border-color:#faad14;box-shadow:0 0 0 3px #faad141a}.agu-textarea.variant-danger .textarea-input{border-color:#ff4d4f}.agu-textarea.variant-danger .textarea-input:focus{border-color:#ff4d4f;box-shadow:0 0 0 3px #ff4d4f1a}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], disabled: [{
                type: Input
            }], readonly: [{
                type: Input
            }], rows: [{
                type: Input
            }], cols: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], size: [{
                type: Input
            }], variant: [{
                type: Input
            }], change: [{
                type: Output
            }], focus: [{
                type: Output
            }], blur: [{
                type: Output
            }] } });

class BreadcrumbComponent {
    items = [];
    separator = '/';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BreadcrumbComponent, selector: "agu-breadcrumb", inputs: { items: "items", separator: "separator" }, ngImport: i0, template: "<nav class=\"agu-breadcrumb\">\r\n  <ol class=\"breadcrumb-list\">\r\n    <li class=\"breadcrumb-item\" *ngFor=\"let item of items; let last = last\">\r\n      <a *ngIf=\"!last && (item.route || item.href)\" \r\n         [routerLink]=\"item.route\" \r\n         [href]=\"item.href\"\r\n         class=\"breadcrumb-link\">\r\n        {{ item.label }}\r\n      </a>\r\n      <span *ngIf=\"last || (!item.route && !item.href)\" class=\"breadcrumb-current\">\r\n        {{ item.label }}\r\n      </span>\r\n      <span *ngIf=\"!last\" class=\"breadcrumb-separator\">{{ separator }}</span>\r\n    </li>\r\n  </ol>\r\n</nav>\r\n\r\n", styles: [".agu-breadcrumb .breadcrumb-list{display:flex;align-items:center;list-style:none;padding:0;margin:0;flex-wrap:wrap;gap:.5rem}.agu-breadcrumb .breadcrumb-item{display:flex;align-items:center;gap:.5rem}.agu-breadcrumb .breadcrumb-link{color:#3b82f6;text-decoration:none;font-size:.875rem;transition:color .2s ease}.agu-breadcrumb .breadcrumb-link:hover{color:#2563eb;text-decoration:underline}.agu-breadcrumb .breadcrumb-current{color:#6b7280;font-size:.875rem;font-weight:500}.agu-breadcrumb .breadcrumb-separator{color:#9ca3af;font-size:.875rem}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.RouterLink, selector: "[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "state", "info", "relativeTo", "preserveFragment", "skipLocationChange", "replaceUrl", "routerLink"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-breadcrumb', standalone: false, template: "<nav class=\"agu-breadcrumb\">\r\n  <ol class=\"breadcrumb-list\">\r\n    <li class=\"breadcrumb-item\" *ngFor=\"let item of items; let last = last\">\r\n      <a *ngIf=\"!last && (item.route || item.href)\" \r\n         [routerLink]=\"item.route\" \r\n         [href]=\"item.href\"\r\n         class=\"breadcrumb-link\">\r\n        {{ item.label }}\r\n      </a>\r\n      <span *ngIf=\"last || (!item.route && !item.href)\" class=\"breadcrumb-current\">\r\n        {{ item.label }}\r\n      </span>\r\n      <span *ngIf=\"!last\" class=\"breadcrumb-separator\">{{ separator }}</span>\r\n    </li>\r\n  </ol>\r\n</nav>\r\n\r\n", styles: [".agu-breadcrumb .breadcrumb-list{display:flex;align-items:center;list-style:none;padding:0;margin:0;flex-wrap:wrap;gap:.5rem}.agu-breadcrumb .breadcrumb-item{display:flex;align-items:center;gap:.5rem}.agu-breadcrumb .breadcrumb-link{color:#3b82f6;text-decoration:none;font-size:.875rem;transition:color .2s ease}.agu-breadcrumb .breadcrumb-link:hover{color:#2563eb;text-decoration:underline}.agu-breadcrumb .breadcrumb-current{color:#6b7280;font-size:.875rem;font-weight:500}.agu-breadcrumb .breadcrumb-separator{color:#9ca3af;font-size:.875rem}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], separator: [{
                type: Input
            }] } });

class AvatarComponent {
    src = '';
    alt = '';
    size = 'md';
    shape = 'circle';
    text = '';
    variant = 'default';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: AvatarComponent, selector: "agu-avatar", inputs: { src: "src", alt: "alt", size: "size", shape: "shape", text: "text", variant: "variant" }, ngImport: i0, template: "<div class=\"agu-avatar\" \r\n     [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'size-xl': size === 'xl', 'shape-circle': shape === 'circle', 'shape-square': shape === 'square', 'variant-default': variant === 'default', 'variant-primary': variant === 'primary', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger'}\">\r\n  <img *ngIf=\"src\" [src]=\"src\" [alt]=\"alt\" class=\"avatar-image\" />\r\n  <span *ngIf=\"!src && text\" class=\"avatar-text\">{{ text }}</span>\r\n  <span *ngIf=\"!src && !text\" class=\"avatar-placeholder\">\r\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n      <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path>\r\n      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\r\n    </svg>\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-avatar{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;background-color:#e5e7eb;color:#6b7280;font-weight:500;flex-shrink:0}.agu-avatar.shape-circle{border-radius:50%}.agu-avatar.shape-square{border-radius:.375rem}.agu-avatar.size-sm{width:32px;height:32px;font-size:.75rem}.agu-avatar.size-md{width:40px;height:40px;font-size:.875rem}.agu-avatar.size-lg{width:48px;height:48px;font-size:1rem}.agu-avatar.size-xl{width:64px;height:64px;font-size:1.25rem}.agu-avatar .avatar-image{width:100%;height:100%;object-fit:cover}.agu-avatar .avatar-text{text-transform:uppercase}.agu-avatar .avatar-placeholder{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.agu-avatar .avatar-placeholder svg{width:60%;height:60%}.agu-avatar.variant-primary{background-color:#1890ff1a;color:#1890ff}.agu-avatar.variant-success{background-color:#52c41a1a;color:#52c41a}.agu-avatar.variant-warning{background-color:#faad141a;color:#faad14}.agu-avatar.variant-danger{background-color:#ff4d4f1a;color:#ff4d4f}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-avatar', standalone: false, template: "<div class=\"agu-avatar\" \r\n     [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'size-xl': size === 'xl', 'shape-circle': shape === 'circle', 'shape-square': shape === 'square', 'variant-default': variant === 'default', 'variant-primary': variant === 'primary', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger'}\">\r\n  <img *ngIf=\"src\" [src]=\"src\" [alt]=\"alt\" class=\"avatar-image\" />\r\n  <span *ngIf=\"!src && text\" class=\"avatar-text\">{{ text }}</span>\r\n  <span *ngIf=\"!src && !text\" class=\"avatar-placeholder\">\r\n    <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n      <path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path>\r\n      <circle cx=\"12\" cy=\"7\" r=\"4\"></circle>\r\n    </svg>\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-avatar{display:inline-flex;align-items:center;justify-content:center;overflow:hidden;background-color:#e5e7eb;color:#6b7280;font-weight:500;flex-shrink:0}.agu-avatar.shape-circle{border-radius:50%}.agu-avatar.shape-square{border-radius:.375rem}.agu-avatar.size-sm{width:32px;height:32px;font-size:.75rem}.agu-avatar.size-md{width:40px;height:40px;font-size:.875rem}.agu-avatar.size-lg{width:48px;height:48px;font-size:1rem}.agu-avatar.size-xl{width:64px;height:64px;font-size:1.25rem}.agu-avatar .avatar-image{width:100%;height:100%;object-fit:cover}.agu-avatar .avatar-text{text-transform:uppercase}.agu-avatar .avatar-placeholder{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.agu-avatar .avatar-placeholder svg{width:60%;height:60%}.agu-avatar.variant-primary{background-color:#1890ff1a;color:#1890ff}.agu-avatar.variant-success{background-color:#52c41a1a;color:#52c41a}.agu-avatar.variant-warning{background-color:#faad141a;color:#faad14}.agu-avatar.variant-danger{background-color:#ff4d4f1a;color:#ff4d4f}\n"] }]
        }], propDecorators: { src: [{
                type: Input
            }], alt: [{
                type: Input
            }], size: [{
                type: Input
            }], shape: [{
                type: Input
            }], text: [{
                type: Input
            }], variant: [{
                type: Input
            }] } });

class DividerComponent {
    orientation = 'horizontal';
    dashed = false;
    text = '';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DividerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: DividerComponent, selector: "agu-divider", inputs: { orientation: "orientation", dashed: "dashed", text: "text" }, ngImport: i0, template: "<div class=\"agu-divider\" \r\n     [ngClass]=\"{'orientation-horizontal': orientation === 'horizontal', 'orientation-vertical': orientation === 'vertical', 'dashed': dashed, 'with-text': !!text}\">\r\n  <span *ngIf=\"text && orientation === 'horizontal'\" class=\"divider-text\">{{ text }}</span>\r\n</div>\r\n\r\n", styles: [".agu-divider{border:0;margin:1rem 0;position:relative}.agu-divider.orientation-horizontal{width:100%;height:1px;background-color:#e5e7eb;border-top:1px solid #e5e7eb}.agu-divider.orientation-horizontal.dashed{border-top-style:dashed;background:none}.agu-divider.orientation-horizontal.with-text{display:flex;align-items:center;text-align:center;border:none;background:none}.agu-divider.orientation-horizontal.with-text:before,.agu-divider.orientation-horizontal.with-text:after{content:\"\";flex:1;border-top:1px solid #e5e7eb}.agu-divider.orientation-horizontal.with-text.dashed:before,.agu-divider.orientation-horizontal.with-text.dashed:after{border-top-style:dashed}.agu-divider.orientation-horizontal.with-text .divider-text{padding:0 1rem;color:#6b7280;font-size:.875rem}.agu-divider.orientation-vertical{display:inline-block;width:1px;height:1em;margin:0 .5rem;vertical-align:middle;background-color:#e5e7eb;border-left:1px solid #e5e7eb}.agu-divider.orientation-vertical.dashed{border-left-style:dashed;background:none}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: DividerComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-divider', standalone: false, template: "<div class=\"agu-divider\" \r\n     [ngClass]=\"{'orientation-horizontal': orientation === 'horizontal', 'orientation-vertical': orientation === 'vertical', 'dashed': dashed, 'with-text': !!text}\">\r\n  <span *ngIf=\"text && orientation === 'horizontal'\" class=\"divider-text\">{{ text }}</span>\r\n</div>\r\n\r\n", styles: [".agu-divider{border:0;margin:1rem 0;position:relative}.agu-divider.orientation-horizontal{width:100%;height:1px;background-color:#e5e7eb;border-top:1px solid #e5e7eb}.agu-divider.orientation-horizontal.dashed{border-top-style:dashed;background:none}.agu-divider.orientation-horizontal.with-text{display:flex;align-items:center;text-align:center;border:none;background:none}.agu-divider.orientation-horizontal.with-text:before,.agu-divider.orientation-horizontal.with-text:after{content:\"\";flex:1;border-top:1px solid #e5e7eb}.agu-divider.orientation-horizontal.with-text.dashed:before,.agu-divider.orientation-horizontal.with-text.dashed:after{border-top-style:dashed}.agu-divider.orientation-horizontal.with-text .divider-text{padding:0 1rem;color:#6b7280;font-size:.875rem}.agu-divider.orientation-vertical{display:inline-block;width:1px;height:1em;margin:0 .5rem;vertical-align:middle;background-color:#e5e7eb;border-left:1px solid #e5e7eb}.agu-divider.orientation-vertical.dashed{border-left-style:dashed;background:none}\n"] }]
        }], propDecorators: { orientation: [{
                type: Input
            }], dashed: [{
                type: Input
            }], text: [{
                type: Input
            }] } });

class SkeletonComponent {
    variant = 'text';
    width = '100%';
    height = '1rem';
    animation = 'pulse';
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SkeletonComponent, selector: "agu-skeleton", inputs: { variant: "variant", width: "width", height: "height", animation: "animation" }, ngImport: i0, template: "<div class=\"agu-skeleton\" \r\n     [ngClass]=\"{'variant-text': variant === 'text', 'variant-circular': variant === 'circular', 'variant-rectangular': variant === 'rectangular', 'animation-pulse': animation === 'pulse', 'animation-wave': animation === 'wave', 'animation-none': animation === 'none'}\"\r\n     [style.width]=\"width\"\r\n     [style.height]=\"height\">\r\n</div>\r\n\r\n", styles: [".agu-skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0,#f0f0f0 75%);background-size:200% 100%;border-radius:.25rem}.agu-skeleton.variant-circular{border-radius:50%}.agu-skeleton.variant-rectangular,.agu-skeleton.variant-text{border-radius:.25rem}.agu-skeleton.animation-pulse{animation:skeleton-pulse 1.5s ease-in-out infinite}.agu-skeleton.animation-wave{animation:skeleton-wave 1.5s ease-in-out infinite}@keyframes skeleton-pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes skeleton-wave{0%{background-position:200% 0}to{background-position:-200% 0}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SkeletonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-skeleton', standalone: false, template: "<div class=\"agu-skeleton\" \r\n     [ngClass]=\"{'variant-text': variant === 'text', 'variant-circular': variant === 'circular', 'variant-rectangular': variant === 'rectangular', 'animation-pulse': animation === 'pulse', 'animation-wave': animation === 'wave', 'animation-none': animation === 'none'}\"\r\n     [style.width]=\"width\"\r\n     [style.height]=\"height\">\r\n</div>\r\n\r\n", styles: [".agu-skeleton{background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0,#f0f0f0 75%);background-size:200% 100%;border-radius:.25rem}.agu-skeleton.variant-circular{border-radius:50%}.agu-skeleton.variant-rectangular,.agu-skeleton.variant-text{border-radius:.25rem}.agu-skeleton.animation-pulse{animation:skeleton-pulse 1.5s ease-in-out infinite}.agu-skeleton.animation-wave{animation:skeleton-wave 1.5s ease-in-out infinite}@keyframes skeleton-pulse{0%,to{opacity:1}50%{opacity:.5}}@keyframes skeleton-wave{0%{background-position:200% 0}to{background-position:-200% 0}}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], animation: [{
                type: Input
            }] } });

class TagComponent {
    variant = 'default';
    size = 'md';
    closable = false;
    rounded = false;
    close = new EventEmitter();
    onClose() {
        this.close.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TagComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: TagComponent, selector: "agu-tag", inputs: { variant: "variant", size: "size", closable: "closable", rounded: "rounded" }, outputs: { close: "close" }, ngImport: i0, template: "<span class=\"agu-tag\" \r\n      [ngClass]=\"{'variant-default': variant === 'default', 'variant-primary': variant === 'primary', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger', 'variant-info': variant === 'info', 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'rounded': rounded}\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"closable\" \r\n          class=\"tag-close\" \r\n          (click)=\"onClose()\"\r\n          type=\"button\"\r\n          aria-label=\"Close\">\r\n    <svg viewBox=\"0 0 12 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n      <path d=\"M9 3L3 9M3 3l6 6\"/>\r\n    </svg>\r\n  </button>\r\n</span>\r\n\r\n", styles: [".agu-tag{display:inline-flex;align-items:center;gap:.25rem;padding:.25rem .5rem;font-size:.75rem;font-weight:500;border-radius:.25rem;background-color:#f3f4f6;color:#374151;border:1px solid #e5e7eb}.agu-tag.rounded{border-radius:9999px}.agu-tag.size-sm{padding:.125rem .375rem;font-size:.625rem}.agu-tag.size-lg{padding:.375rem .75rem;font-size:.875rem}.agu-tag.variant-primary{background-color:#1890ff1a;color:#1890ff;border-color:#1890ff33}.agu-tag.variant-success{background-color:#52c41a1a;color:#52c41a;border-color:#52c41a33}.agu-tag.variant-warning{background-color:#faad141a;color:#faad14;border-color:#faad1433}.agu-tag.variant-danger{background-color:#ff4d4f1a;color:#ff4d4f;border-color:#ff4d4f33}.agu-tag.variant-info{background-color:#1890ff1a;color:#1890ff;border-color:#1890ff33}.agu-tag .tag-close{display:inline-flex;align-items:center;justify-content:center;margin-left:.25rem;padding:0;background:none;border:none;cursor:pointer;color:inherit;opacity:.7;transition:opacity .2s ease}.agu-tag .tag-close:hover{opacity:1}.agu-tag .tag-close svg{width:12px;height:12px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: TagComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-tag', standalone: false, template: "<span class=\"agu-tag\" \r\n      [ngClass]=\"{'variant-default': variant === 'default', 'variant-primary': variant === 'primary', 'variant-success': variant === 'success', 'variant-warning': variant === 'warning', 'variant-danger': variant === 'danger', 'variant-info': variant === 'info', 'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'rounded': rounded}\">\r\n  <ng-content></ng-content>\r\n  <button *ngIf=\"closable\" \r\n          class=\"tag-close\" \r\n          (click)=\"onClose()\"\r\n          type=\"button\"\r\n          aria-label=\"Close\">\r\n    <svg viewBox=\"0 0 12 12\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n      <path d=\"M9 3L3 9M3 3l6 6\"/>\r\n    </svg>\r\n  </button>\r\n</span>\r\n\r\n", styles: [".agu-tag{display:inline-flex;align-items:center;gap:.25rem;padding:.25rem .5rem;font-size:.75rem;font-weight:500;border-radius:.25rem;background-color:#f3f4f6;color:#374151;border:1px solid #e5e7eb}.agu-tag.rounded{border-radius:9999px}.agu-tag.size-sm{padding:.125rem .375rem;font-size:.625rem}.agu-tag.size-lg{padding:.375rem .75rem;font-size:.875rem}.agu-tag.variant-primary{background-color:#1890ff1a;color:#1890ff;border-color:#1890ff33}.agu-tag.variant-success{background-color:#52c41a1a;color:#52c41a;border-color:#52c41a33}.agu-tag.variant-warning{background-color:#faad141a;color:#faad14;border-color:#faad1433}.agu-tag.variant-danger{background-color:#ff4d4f1a;color:#ff4d4f;border-color:#ff4d4f33}.agu-tag.variant-info{background-color:#1890ff1a;color:#1890ff;border-color:#1890ff33}.agu-tag .tag-close{display:inline-flex;align-items:center;justify-content:center;margin-left:.25rem;padding:0;background:none;border:none;cursor:pointer;color:inherit;opacity:.7;transition:opacity .2s ease}.agu-tag .tag-close:hover{opacity:1}.agu-tag .tag-close svg{width:12px;height:12px}\n"] }]
        }], propDecorators: { variant: [{
                type: Input
            }], size: [{
                type: Input
            }], closable: [{
                type: Input
            }], rounded: [{
                type: Input
            }], close: [{
                type: Output
            }] } });

class RateComponent {
    count = 5;
    allowHalf = false;
    disabled = false;
    allowClear = true;
    size = 'md';
    change = new EventEmitter();
    value = 0;
    hoverValue = 0;
    onChange = (value) => { };
    onTouched = () => { };
    get stars() {
        return Array.from({ length: this.count }, (_, i) => i + 1);
    }
    onStarClick(star) {
        if (this.disabled)
            return;
        if (this.allowClear && this.value === star) {
            this.value = 0;
        }
        else {
            this.value = star;
        }
        this.hoverValue = 0;
        this.onChange(this.value);
        this.onTouched();
        this.change.emit(this.value);
    }
    onStarHover(star) {
        if (this.disabled)
            return;
        this.hoverValue = star;
    }
    onStarLeave() {
        this.hoverValue = 0;
    }
    isActive(star) {
        const currentValue = this.hoverValue || this.value;
        return star <= currentValue;
    }
    writeValue(value) {
        this.value = value || 0;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RateComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: RateComponent, selector: "agu-rate", inputs: { count: "count", allowHalf: "allowHalf", disabled: "disabled", allowClear: "allowClear", size: "size" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RateComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-rate\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'disabled': disabled}\">\r\n  <span \r\n    *ngFor=\"let star of stars\"\r\n    class=\"rate-star\"\r\n    [ngClass]=\"{'active': isActive(star)}\"\r\n    (click)=\"onStarClick(star)\"\r\n    (mouseenter)=\"onStarHover(star)\"\r\n    (mouseleave)=\"onStarLeave()\">\r\n    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\r\n      <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"/>\r\n    </svg>\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-rate{display:inline-flex;align-items:center;gap:.25rem}.agu-rate.disabled{opacity:.6;cursor:not-allowed}.agu-rate .rate-star{display:inline-flex;align-items:center;justify-content:center;color:#d1d5db;cursor:pointer;transition:color .2s ease}.agu-rate .rate-star svg{width:20px;height:20px}.agu-rate .rate-star.active{color:#fbbf24}.agu-rate .rate-star:hover:not(.disabled){color:#fbbf24}.agu-rate.size-sm .rate-star svg{width:16px;height:16px}.agu-rate.size-lg .rate-star svg{width:24px;height:24px}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: RateComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-rate', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => RateComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-rate\" [ngClass]=\"{'size-sm': size === 'sm', 'size-md': size === 'md', 'size-lg': size === 'lg', 'disabled': disabled}\">\r\n  <span \r\n    *ngFor=\"let star of stars\"\r\n    class=\"rate-star\"\r\n    [ngClass]=\"{'active': isActive(star)}\"\r\n    (click)=\"onStarClick(star)\"\r\n    (mouseenter)=\"onStarHover(star)\"\r\n    (mouseleave)=\"onStarLeave()\">\r\n    <svg viewBox=\"0 0 24 24\" fill=\"currentColor\">\r\n      <path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"/>\r\n    </svg>\r\n  </span>\r\n</div>\r\n\r\n", styles: [".agu-rate{display:inline-flex;align-items:center;gap:.25rem}.agu-rate.disabled{opacity:.6;cursor:not-allowed}.agu-rate .rate-star{display:inline-flex;align-items:center;justify-content:center;color:#d1d5db;cursor:pointer;transition:color .2s ease}.agu-rate .rate-star svg{width:20px;height:20px}.agu-rate .rate-star.active{color:#fbbf24}.agu-rate .rate-star:hover:not(.disabled){color:#fbbf24}.agu-rate.size-sm .rate-star svg{width:16px;height:16px}.agu-rate.size-lg .rate-star svg{width:24px;height:24px}\n"] }]
        }], propDecorators: { count: [{
                type: Input
            }], allowHalf: [{
                type: Input
            }], disabled: [{
                type: Input
            }], allowClear: [{
                type: Input
            }], size: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class SliderComponent {
    min = 0;
    max = 100;
    step = 1;
    disabled = false;
    showTooltip = true;
    marks = false;
    change = new EventEmitter();
    value = 0;
    onChange = (value) => { };
    onTouched = () => { };
    get percentage() {
        return ((this.value - this.min) / (this.max - this.min)) * 100;
    }
    onInput(event) {
        const target = event.target;
        this.value = parseFloat(target.value);
        this.onChange(this.value);
        this.onTouched();
        this.change.emit(this.value);
    }
    writeValue(value) {
        this.value = value || this.min;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SliderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: SliderComponent, selector: "agu-slider", inputs: { min: "min", max: "max", step: "step", disabled: "disabled", showTooltip: "showTooltip", marks: "marks" }, outputs: { change: "change" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SliderComponent),
                multi: true
            }
        ], ngImport: i0, template: "<div class=\"agu-slider\" [class.disabled]=\"disabled\">\r\n  <div class=\"slider-track\">\r\n    <div class=\"slider-rail\"></div>\r\n    <div class=\"slider-track-fill\" [style.width.%]=\"percentage\"></div>\r\n    <input\r\n      type=\"range\"\r\n      class=\"slider-input\"\r\n      [min]=\"min\"\r\n      [max]=\"max\"\r\n      [step]=\"step\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($event)\"\r\n    />\r\n    <div *ngIf=\"showTooltip\" class=\"slider-tooltip\" [style.left.%]=\"percentage\">\r\n      {{ value }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-slider{position:relative;width:100%;padding:.5rem 0}.agu-slider.disabled{opacity:.6;cursor:not-allowed}.agu-slider .slider-track{position:relative;height:4px;background:transparent}.agu-slider .slider-rail{position:absolute;top:50%;left:0;right:0;height:4px;background-color:#e5e7eb;border-radius:2px;transform:translateY(-50%)}.agu-slider .slider-track-fill{position:absolute;top:50%;left:0;height:4px;background-color:#1890ff;border-radius:2px;transform:translateY(-50%);transition:width .1s ease}.agu-slider .slider-input{position:absolute;top:50%;left:0;right:0;width:100%;height:4px;margin:0;padding:0;background:transparent;outline:none;transform:translateY(-50%);-webkit-appearance:none;appearance:none;cursor:pointer}.agu-slider .slider-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;background-color:#1890ff;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input::-moz-range-thumb{width:16px;height:16px;background-color:#1890ff;border:none;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input:hover:not(:disabled)::-webkit-slider-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:hover:not(:disabled)::-moz-range-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:disabled{cursor:not-allowed}.agu-slider .slider-tooltip{position:absolute;top:-2rem;left:0;transform:translate(-50%);background-color:#1f2937;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-size:.75rem;white-space:nowrap;pointer-events:none}.agu-slider .slider-tooltip:after{content:\"\";position:absolute;bottom:-4px;left:50%;transform:translate(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #1f2937}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: SliderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-slider', standalone: false, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => SliderComponent),
                            multi: true
                        }
                    ], template: "<div class=\"agu-slider\" [class.disabled]=\"disabled\">\r\n  <div class=\"slider-track\">\r\n    <div class=\"slider-rail\"></div>\r\n    <div class=\"slider-track-fill\" [style.width.%]=\"percentage\"></div>\r\n    <input\r\n      type=\"range\"\r\n      class=\"slider-input\"\r\n      [min]=\"min\"\r\n      [max]=\"max\"\r\n      [step]=\"step\"\r\n      [value]=\"value\"\r\n      [disabled]=\"disabled\"\r\n      (input)=\"onInput($event)\"\r\n    />\r\n    <div *ngIf=\"showTooltip\" class=\"slider-tooltip\" [style.left.%]=\"percentage\">\r\n      {{ value }}\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n", styles: [".agu-slider{position:relative;width:100%;padding:.5rem 0}.agu-slider.disabled{opacity:.6;cursor:not-allowed}.agu-slider .slider-track{position:relative;height:4px;background:transparent}.agu-slider .slider-rail{position:absolute;top:50%;left:0;right:0;height:4px;background-color:#e5e7eb;border-radius:2px;transform:translateY(-50%)}.agu-slider .slider-track-fill{position:absolute;top:50%;left:0;height:4px;background-color:#1890ff;border-radius:2px;transform:translateY(-50%);transition:width .1s ease}.agu-slider .slider-input{position:absolute;top:50%;left:0;right:0;width:100%;height:4px;margin:0;padding:0;background:transparent;outline:none;transform:translateY(-50%);-webkit-appearance:none;appearance:none;cursor:pointer}.agu-slider .slider-input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:16px;height:16px;background-color:#1890ff;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input::-moz-range-thumb{width:16px;height:16px;background-color:#1890ff;border:none;border-radius:50%;cursor:pointer;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 2px 4px #0003}.agu-slider .slider-input:hover:not(:disabled)::-webkit-slider-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:hover:not(:disabled)::-moz-range-thumb{transform:scale(1.2);box-shadow:0 4px 8px #0000004d}.agu-slider .slider-input:disabled{cursor:not-allowed}.agu-slider .slider-tooltip{position:absolute;top:-2rem;left:0;transform:translate(-50%);background-color:#1f2937;color:#fff;padding:.25rem .5rem;border-radius:.25rem;font-size:.75rem;white-space:nowrap;pointer-events:none}.agu-slider .slider-tooltip:after{content:\"\";position:absolute;bottom:-4px;left:50%;transform:translate(-50%);width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #1f2937}\n"] }]
        }], propDecorators: { min: [{
                type: Input
            }], max: [{
                type: Input
            }], step: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showTooltip: [{
                type: Input
            }], marks: [{
                type: Input
            }], change: [{
                type: Output
            }] } });

class BackTopComponent {
    visibilityHeight = 400;
    right = 50;
    bottom = 50;
    click = new EventEmitter();
    visible = false;
    onWindowScroll() {
        this.visible = window.pageYOffset > this.visibilityHeight;
    }
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        this.click.emit();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BackTopComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: BackTopComponent, selector: "agu-back-top", inputs: { visibilityHeight: "visibilityHeight", right: "right", bottom: "bottom" }, outputs: { click: "click" }, host: { listeners: { "window:scroll": "onWindowScroll()" } }, ngImport: i0, template: "<button \r\n  *ngIf=\"visible\"\r\n  class=\"agu-back-top\"\r\n  [style.right.px]=\"right\"\r\n  [style.bottom.px]=\"bottom\"\r\n  (click)=\"scrollToTop()\"\r\n  type=\"button\"\r\n  aria-label=\"Back to top\">\r\n  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n    <path d=\"M18 15l-6-6-6 6\"/>\r\n  </svg>\r\n</button>\r\n\r\n", styles: [".agu-back-top{position:fixed;z-index:1000;display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#1890ff;color:#fff;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 12px #00000026;transition:all .3s ease;animation:fadeIn .3s ease}.agu-back-top svg{width:20px;height:20px}.agu-back-top:hover{background-color:#0076e4;transform:translateY(-2px);box-shadow:0 6px 16px #0003}.agu-back-top:active{transform:translateY(0)}@keyframes fadeIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}\n"], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: BackTopComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-back-top', standalone: false, template: "<button \r\n  *ngIf=\"visible\"\r\n  class=\"agu-back-top\"\r\n  [style.right.px]=\"right\"\r\n  [style.bottom.px]=\"bottom\"\r\n  (click)=\"scrollToTop()\"\r\n  type=\"button\"\r\n  aria-label=\"Back to top\">\r\n  <svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\">\r\n    <path d=\"M18 15l-6-6-6 6\"/>\r\n  </svg>\r\n</button>\r\n\r\n", styles: [".agu-back-top{position:fixed;z-index:1000;display:flex;align-items:center;justify-content:center;width:40px;height:40px;background-color:#1890ff;color:#fff;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 12px #00000026;transition:all .3s ease;animation:fadeIn .3s ease}.agu-back-top svg{width:20px;height:20px}.agu-back-top:hover{background-color:#0076e4;transform:translateY(-2px);box-shadow:0 6px 16px #0003}.agu-back-top:active{transform:translateY(0)}@keyframes fadeIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}\n"] }]
        }], propDecorators: { visibilityHeight: [{
                type: Input
            }], right: [{
                type: Input
            }], bottom: [{
                type: Input
            }], click: [{
                type: Output
            }], onWindowScroll: [{
                type: HostListener,
                args: ['window:scroll', []]
            }] } });

class ToastComponent {
    message = '';
    type = 'info';
    duration = 3000;
    closable = true;
    onClose = new EventEmitter();
    timer;
    ngOnInit() {
        if (this.duration > 0) {
            this.timer = setTimeout(() => {
                this.close();
            }, this.duration);
        }
    }
    ngOnDestroy() {
        if (this.timer) {
            clearTimeout(this.timer);
        }
    }
    close() {
        this.onClose.emit();
    }
    getIcon() {
        switch (this.type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            case 'info':
            default:
                return 'ℹ';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: ToastComponent, selector: "agu-toast", inputs: { message: "message", type: "type", duration: "duration", closable: "closable" }, outputs: { onClose: "onClose" }, ngImport: i0, template: "<div class=\"agu-toast\" [ngClass]=\"'agu-toast--type-' + type\">\r\n  <div class=\"agu-toast__icon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-toast__content\">\r\n    <div class=\"agu-toast__message\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-toast__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-toast{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.25rem;min-width:300px;max-width:400px;border-radius:.5rem;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;background:var(--agu-bg-color);border-left:4px solid;animation:slideInRight .3s cubic-bezier(.68,-.55,.265,1.55);position:relative;z-index:1060}.agu-toast--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-toast--type-success .agu-toast__icon{color:var(--agu-success-color)}.agu-toast--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-toast--type-error .agu-toast__icon{color:var(--agu-danger-color)}.agu-toast--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-toast--type-warning .agu-toast__icon{color:var(--agu-warning-color)}.agu-toast--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-toast--type-info .agu-toast__icon{color:var(--agu-info-color)}.agu-toast__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-toast__content{flex:1}.agu-toast__message{font-size:1rem;color:var(--agu-text-color);line-height:1.5}.agu-toast__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-toast__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-toast', standalone: false, template: "<div class=\"agu-toast\" [ngClass]=\"'agu-toast--type-' + type\">\r\n  <div class=\"agu-toast__icon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-toast__content\">\r\n    <div class=\"agu-toast__message\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-toast__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-toast{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.25rem;min-width:300px;max-width:400px;border-radius:.5rem;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;background:var(--agu-bg-color);border-left:4px solid;animation:slideInRight .3s cubic-bezier(.68,-.55,.265,1.55);position:relative;z-index:1060}.agu-toast--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-toast--type-success .agu-toast__icon{color:var(--agu-success-color)}.agu-toast--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-toast--type-error .agu-toast__icon{color:var(--agu-danger-color)}.agu-toast--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-toast--type-warning .agu-toast__icon{color:var(--agu-warning-color)}.agu-toast--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-toast--type-info .agu-toast__icon{color:var(--agu-info-color)}.agu-toast__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-toast__content{flex:1}.agu-toast__message{font-size:1rem;color:var(--agu-text-color);line-height:1.5}.agu-toast__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-toast__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"] }]
        }], propDecorators: { message: [{
                type: Input
            }], type: [{
                type: Input
            }], duration: [{
                type: Input
            }], closable: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });

class MessageComponent {
    message = '';
    type = 'info';
    closable = true;
    onClose = new EventEmitter();
    close() {
        this.onClose.emit();
    }
    getIcon() {
        switch (this.type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            case 'info':
            default:
                return 'ℹ';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MessageComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: MessageComponent, selector: "agu-message", inputs: { message: "message", type: "type", closable: "closable" }, outputs: { onClose: "onClose" }, ngImport: i0, template: "<div class=\"agu-message\" [ngClass]=\"'agu-message--type-' + type\">\r\n  <div class=\"agu-message__icon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-message__content\">\r\n    <div class=\"agu-message__text\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-message__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-message{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.25rem;border-radius:.5rem;box-shadow:0 1px 2px #0000000d;background:var(--agu-bg-color);border:1px solid;margin-bottom:1rem;animation:slideIn .3s cubic-bezier(.68,-.55,.265,1.55)}.agu-message--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-message--type-success .agu-message__icon{color:var(--agu-success-color)}.agu-message--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-message--type-error .agu-message__icon{color:var(--agu-danger-color)}.agu-message--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-message--type-warning .agu-message__icon{color:var(--agu-warning-color)}.agu-message--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-message--type-info .agu-message__icon{color:var(--agu-info-color)}.agu-message__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-message__content{flex:1}.agu-message__text{font-size:1rem;color:var(--agu-text-color);line-height:1.5}.agu-message__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-message__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideIn{0%{transform:translateY(-10px);opacity:0}to{transform:translateY(0);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: MessageComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-message', standalone: false, template: "<div class=\"agu-message\" [ngClass]=\"'agu-message--type-' + type\">\r\n  <div class=\"agu-message__icon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-message__content\">\r\n    <div class=\"agu-message__text\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-message__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-message{display:flex;align-items:flex-start;gap:.75rem;padding:1rem 1.25rem;border-radius:.5rem;box-shadow:0 1px 2px #0000000d;background:var(--agu-bg-color);border:1px solid;margin-bottom:1rem;animation:slideIn .3s cubic-bezier(.68,-.55,.265,1.55)}.agu-message--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-message--type-success .agu-message__icon{color:var(--agu-success-color)}.agu-message--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-message--type-error .agu-message__icon{color:var(--agu-danger-color)}.agu-message--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-message--type-warning .agu-message__icon{color:var(--agu-warning-color)}.agu-message--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-message--type-info .agu-message__icon{color:var(--agu-info-color)}.agu-message__icon{font-size:1.25rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-message__content{flex:1}.agu-message__text{font-size:1rem;color:var(--agu-text-color);line-height:1.5}.agu-message__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-message__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideIn{0%{transform:translateY(-10px);opacity:0}to{transform:translateY(0);opacity:1}}\n"] }]
        }], propDecorators: { message: [{
                type: Input
            }], type: [{
                type: Input
            }], closable: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });

class NotificationComponent {
    title = '';
    message = '';
    type = 'info';
    closable = true;
    showIcon = true;
    onClose = new EventEmitter();
    close() {
        this.onClose.emit();
    }
    getIcon() {
        switch (this.type) {
            case 'success':
                return '✓';
            case 'error':
                return '✕';
            case 'warning':
                return '⚠';
            case 'info':
            default:
                return 'ℹ';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.14", type: NotificationComponent, selector: "agu-notification", inputs: { title: "title", message: "message", type: "type", closable: "closable", showIcon: "showIcon" }, outputs: { onClose: "onClose" }, ngImport: i0, template: "<div class=\"agu-notification\" [ngClass]=\"'agu-notification--type-' + type\">\r\n  <div class=\"agu-notification__icon\" *ngIf=\"showIcon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-notification__content\">\r\n    <div class=\"agu-notification__title\" *ngIf=\"title\">{{ title }}</div>\r\n    <div class=\"agu-notification__message\" *ngIf=\"message\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-notification__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-notification{display:flex;align-items:flex-start;gap:1rem;padding:1.25rem 1.5rem;min-width:320px;max-width:450px;border-radius:.5rem;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;background:var(--agu-bg-color);border-left:4px solid;animation:slideInRight .3s cubic-bezier(.68,-.55,.265,1.55);position:relative;z-index:1060}.agu-notification--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-notification--type-success .agu-notification__icon{color:var(--agu-success-color)}.agu-notification--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-notification--type-error .agu-notification__icon{color:var(--agu-danger-color)}.agu-notification--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-notification--type-warning .agu-notification__icon{color:var(--agu-warning-color)}.agu-notification--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-notification--type-info .agu-notification__icon{color:var(--agu-info-color)}.agu-notification__icon{font-size:1.5rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-notification__content{flex:1}.agu-notification__title{font-size:1.125rem;font-weight:600;color:var(--agu-text-color);margin-bottom:.5rem;line-height:1.4}.agu-notification__message{font-size:1rem;color:var(--agu-text-color-secondary);line-height:1.5}.agu-notification__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-notification__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: NotificationComponent, decorators: [{
            type: Component,
            args: [{ selector: 'agu-notification', standalone: false, template: "<div class=\"agu-notification\" [ngClass]=\"'agu-notification--type-' + type\">\r\n  <div class=\"agu-notification__icon\" *ngIf=\"showIcon\">{{ getIcon() }}</div>\r\n  <div class=\"agu-notification__content\">\r\n    <div class=\"agu-notification__title\" *ngIf=\"title\">{{ title }}</div>\r\n    <div class=\"agu-notification__message\" *ngIf=\"message\">{{ message }}</div>\r\n  </div>\r\n  <button *ngIf=\"closable\" class=\"agu-notification__close\" (click)=\"close()\" aria-label=\"Close\">\r\n    \u00D7\r\n  </button>\r\n</div>\r\n\r\n", styles: [".agu-notification{display:flex;align-items:flex-start;gap:1rem;padding:1.25rem 1.5rem;min-width:320px;max-width:450px;border-radius:.5rem;box-shadow:0 10px 15px -3px #0000001a,0 4px 6px -2px #0000000d;background:var(--agu-bg-color);border-left:4px solid;animation:slideInRight .3s cubic-bezier(.68,-.55,.265,1.55);position:relative;z-index:1060}.agu-notification--type-success{border-color:var(--agu-success-color);background:#f6ffed}.agu-notification--type-success .agu-notification__icon{color:var(--agu-success-color)}.agu-notification--type-error{border-color:var(--agu-danger-color);background:#fff2f0}.agu-notification--type-error .agu-notification__icon{color:var(--agu-danger-color)}.agu-notification--type-warning{border-color:var(--agu-warning-color);background:#fffbe6}.agu-notification--type-warning .agu-notification__icon{color:var(--agu-warning-color)}.agu-notification--type-info{border-color:var(--agu-info-color);background:#e6f7ff}.agu-notification--type-info .agu-notification__icon{color:var(--agu-info-color)}.agu-notification__icon{font-size:1.5rem;line-height:1;flex-shrink:0;margin-top:.125rem;font-weight:700}.agu-notification__content{flex:1}.agu-notification__title{font-size:1.125rem;font-weight:600;color:var(--agu-text-color);margin-bottom:.5rem;line-height:1.4}.agu-notification__message{font-size:1rem;color:var(--agu-text-color-secondary);line-height:1.5}.agu-notification__close{background:none;border:none;font-size:1.25rem;line-height:1;color:var(--agu-text-color-secondary);cursor:pointer;padding:.25rem;opacity:.6;transition:all .2s ease;flex-shrink:0;border-radius:.25rem;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.agu-notification__close:hover{opacity:1;background:#0000000d;transform:rotate(90deg)}@keyframes slideInRight{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }], message: [{
                type: Input
            }], type: [{
                type: Input
            }], closable: [{
                type: Input
            }], showIcon: [{
                type: Input
            }], onClose: [{
                type: Output
            }] } });

const COMPONENTS = [
    BoxComponent,
    ButtonComponent,
    NavbarComponent,
    MenuComponent,
    MenuItemComponent,
    SubmenuComponent,
    CarouselComponent,
    CarouselSlideComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent,
    TextEffectComponent,
    ModalComponent,
    InputComponent,
    BadgeComponent,
    SpinnerComponent,
    AlertComponent,
    ProgressComponent,
    DropdownComponent,
    TooltipComponent,
    TabsComponent,
    TabComponent,
    AccordionComponent,
    AccordionPanelComponent,
    PaginationComponent,
    TableComponent,
    TableHeaderComponent,
    TableBodyComponent,
    TableRowComponent,
    TableCellComponent,
    TableHeaderCellComponent,
    CheckboxComponent,
    RadioComponent,
    SwitchComponent,
    SelectComponent,
    TextareaComponent,
    BreadcrumbComponent,
    AvatarComponent,
    DividerComponent,
    SkeletonComponent,
    TagComponent,
    RateComponent,
    SliderComponent,
    BackTopComponent,
    ToastComponent,
    MessageComponent,
    NotificationComponent
];
class AngudesModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('AngudesModule is already loaded. Import it in the AppModule only');
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, deps: [{ token: AngudesModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, declarations: [BoxComponent,
            ButtonComponent,
            NavbarComponent,
            MenuComponent,
            MenuItemComponent,
            SubmenuComponent,
            CarouselComponent,
            CarouselSlideComponent,
            CardComponent,
            CardHeaderComponent,
            CardBodyComponent,
            CardFooterComponent,
            TextEffectComponent,
            ModalComponent,
            InputComponent,
            BadgeComponent,
            SpinnerComponent,
            AlertComponent,
            ProgressComponent,
            DropdownComponent,
            TooltipComponent,
            TabsComponent,
            TabComponent,
            AccordionComponent,
            AccordionPanelComponent,
            PaginationComponent,
            TableComponent,
            TableHeaderComponent,
            TableBodyComponent,
            TableRowComponent,
            TableCellComponent,
            TableHeaderCellComponent,
            CheckboxComponent,
            RadioComponent,
            SwitchComponent,
            SelectComponent,
            TextareaComponent,
            BreadcrumbComponent,
            AvatarComponent,
            DividerComponent,
            SkeletonComponent,
            TagComponent,
            RateComponent,
            SliderComponent,
            BackTopComponent,
            ToastComponent,
            MessageComponent,
            NotificationComponent], imports: [CommonModule,
            RouterModule,
            FormsModule], exports: [BoxComponent,
            ButtonComponent,
            NavbarComponent,
            MenuComponent,
            MenuItemComponent,
            SubmenuComponent,
            CarouselComponent,
            CarouselSlideComponent,
            CardComponent,
            CardHeaderComponent,
            CardBodyComponent,
            CardFooterComponent,
            TextEffectComponent,
            ModalComponent,
            InputComponent,
            BadgeComponent,
            SpinnerComponent,
            AlertComponent,
            ProgressComponent,
            DropdownComponent,
            TooltipComponent,
            TabsComponent,
            TabComponent,
            AccordionComponent,
            AccordionPanelComponent,
            PaginationComponent,
            TableComponent,
            TableHeaderComponent,
            TableBodyComponent,
            TableRowComponent,
            TableCellComponent,
            TableHeaderCellComponent,
            CheckboxComponent,
            RadioComponent,
            SwitchComponent,
            SelectComponent,
            TextareaComponent,
            BreadcrumbComponent,
            AvatarComponent,
            DividerComponent,
            SkeletonComponent,
            TagComponent,
            RateComponent,
            SliderComponent,
            BackTopComponent,
            ToastComponent,
            MessageComponent,
            NotificationComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, imports: [CommonModule,
            RouterModule,
            FormsModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: AngudesModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: COMPONENTS,
                    imports: [
                        CommonModule,
                        RouterModule,
                        FormsModule
                    ],
                    exports: COMPONENTS
                }]
        }], ctorParameters: () => [{ type: AngudesModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }] });

class ToastService {
    toasts = [];
    container;
    setContainer(container) {
        this.container = container;
    }
    show(config) {
        if (!this.container) {
            console.warn('Toast container not set. Call setContainer() first.');
            return;
        }
        const componentRef = this.container.createComponent(ToastComponent);
        const instance = componentRef.instance;
        instance.message = config.message;
        instance.type = config.type || 'info';
        instance.duration = config.duration || 3000;
        instance.closable = config.closable !== false;
        instance.onClose.subscribe(() => {
            this.remove(componentRef);
        });
        this.toasts.push(componentRef);
        // Auto remove after duration
        if (instance.duration > 0) {
            setTimeout(() => {
                this.remove(componentRef);
            }, instance.duration);
        }
    }
    success(message, duration) {
        this.show({ message, type: 'success', duration });
    }
    error(message, duration) {
        this.show({ message, type: 'error', duration });
    }
    warning(message, duration) {
        this.show({ message, type: 'warning', duration });
    }
    info(message, duration) {
        this.show({ message, type: 'info', duration });
    }
    remove(componentRef) {
        const index = this.toasts.indexOf(componentRef);
        if (index > -1) {
            this.toasts.splice(index, 1);
            componentRef.destroy();
        }
    }
    clear() {
        this.toasts.forEach(ref => ref.destroy());
        this.toasts = [];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.14", ngImport: i0, type: ToastService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

/*
 * Public API Surface of angudes
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionPanelComponent, AlertComponent, AngudesModule, AvatarComponent, BackTopComponent, BadgeComponent, BoxComponent, BreadcrumbComponent, ButtonComponent, CardBodyComponent, CardComponent, CardFooterComponent, CardHeaderComponent, CarouselComponent, CarouselSlideComponent, CheckboxComponent, DividerComponent, DropdownComponent, InputComponent, MenuComponent, MenuItemComponent, MessageComponent, ModalComponent, NavbarComponent, NotificationComponent, PaginationComponent, ProgressComponent, RadioComponent, RateComponent, SelectComponent, SkeletonComponent, SliderComponent, SpinnerComponent, SubmenuComponent, SwitchComponent, TabComponent, TableBodyComponent, TableCellComponent, TableComponent, TableHeaderCellComponent, TableHeaderComponent, TableRowComponent, TabsComponent, TagComponent, TextEffectComponent, TextareaComponent, ToastComponent, ToastService, TooltipComponent };
//# sourceMappingURL=angudes.mjs.map
