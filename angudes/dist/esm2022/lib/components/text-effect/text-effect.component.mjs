import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class TextEffectComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1lZmZlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC1lZmZlY3QvdGV4dC1lZmZlY3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvdGV4dC1lZmZlY3QvdGV4dC1lZmZlY3QuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXFCLE1BQU0sZUFBZSxDQUFDOzs7QUFTcEUsTUFBTSxPQUFPLG1CQUFtQjtJQUNyQixJQUFJLEdBQVcsRUFBRSxDQUFDO0lBQ2xCLE1BQU0sR0FBK0QsUUFBUSxDQUFDO0lBQzlFLEtBQUssR0FBVyxHQUFHLENBQUMsQ0FBQyx3Q0FBd0M7SUFDN0QsS0FBSyxHQUFXLENBQUMsQ0FBQztJQUNsQixJQUFJLEdBQVksS0FBSyxDQUFDO0lBQ3RCLEtBQUssR0FBVyxFQUFFLENBQUM7SUFDbkIsUUFBUSxHQUFXLE1BQU0sQ0FBQztJQUVuQyxhQUFhLEdBQVcsRUFBRSxDQUFDO0lBQ25CLFdBQVcsQ0FBTTtJQUNqQixZQUFZLEdBQVcsQ0FBQyxDQUFDO0lBQ3pCLFdBQVcsR0FBWSxLQUFLLENBQUM7SUFFckMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNuQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRCxDQUFDO2FBQU0sQ0FBQztZQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFdBQVc7UUFDakIsUUFBUSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDcEIsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbkIsTUFBTTtZQUNSLEtBQUssTUFBTSxDQUFDO1lBQ1osS0FBSyxPQUFPLENBQUM7WUFDYixLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssVUFBVSxDQUFDO1lBQ2hCLEtBQUssTUFBTTtnQkFDVCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQy9CLE1BQU07UUFDVixDQUFDO0lBQ0gsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxZQUFZO1FBQ2xCLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkUsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDZCxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVPLFVBQVU7UUFDaEIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDckIsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNqQyxDQUFDO0lBQ0gsQ0FBQztJQUVELGdCQUFnQjtRQUNkLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxNQUFNLEVBQUUsQ0FBQztZQUMzQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDN0MsSUFBSSxJQUFJLEtBQUssR0FBRztvQkFBRSxPQUFPLEdBQUcsQ0FBQztnQkFDN0IsT0FBTyxvRUFBb0UsS0FBSyxHQUFHLEdBQUcsTUFBTSxJQUFJLFNBQVMsQ0FBQztZQUM1RyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7d0dBM0VVLG1CQUFtQjs0RkFBbkIsbUJBQW1CLHVMQ1RoQyw0cUJBZUE7OzRGRE5hLG1CQUFtQjtrQkFOL0IsU0FBUzsrQkFDRSxpQkFBaUIsY0FDZixLQUFLOzhCQUtSLElBQUk7c0JBQVosS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtdGV4dC1lZmZlY3QnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWVmZmVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL3RleHQtZWZmZWN0LmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgVGV4dEVmZmVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSB0ZXh0OiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBlZmZlY3Q6ICd0eXBpbmcnIHwgJ2ZhZGUnIHwgJ3NsaWRlJyB8ICdnbG93JyB8ICdncmFkaWVudCcgfCAnd2F2ZScgPSAndHlwaW5nJztcclxuICBASW5wdXQoKSBzcGVlZDogbnVtYmVyID0gMTAwOyAvLyBtaWxsaXNlY29uZHMgcGVyIGNoYXJhY3RlciBmb3IgdHlwaW5nXHJcbiAgQElucHV0KCkgZGVsYXk6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgbG9vcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNvbG9yOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBmb250U2l6ZTogc3RyaW5nID0gJzFyZW0nO1xyXG5cclxuICBkaXNwbGF5ZWRUZXh0OiBzdHJpbmcgPSAnJztcclxuICBwcml2YXRlIHR5cGluZ1RpbWVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBpc0FuaW1hdGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRlbGF5ID4gMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RhcnRFZmZlY3QoKSwgdGhpcy5kZWxheSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN0YXJ0RWZmZWN0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEVmZmVjdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGFydEVmZmVjdCgpOiB2b2lkIHtcclxuICAgIHN3aXRjaCAodGhpcy5lZmZlY3QpIHtcclxuICAgICAgY2FzZSAndHlwaW5nJzpcclxuICAgICAgICB0aGlzLnN0YXJ0VHlwaW5nKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2ZhZGUnOlxyXG4gICAgICBjYXNlICdzbGlkZSc6XHJcbiAgICAgIGNhc2UgJ2dsb3cnOlxyXG4gICAgICBjYXNlICdncmFkaWVudCc6XHJcbiAgICAgIGNhc2UgJ3dhdmUnOlxyXG4gICAgICAgIHRoaXMuZGlzcGxheWVkVGV4dCA9IHRoaXMudGV4dDtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRUeXBpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc3BsYXllZFRleHQgPSAnJztcclxuICAgIHRoaXMuY3VycmVudEluZGV4ID0gMDtcclxuICAgIHRoaXMuaXNBbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy50eXBlTmV4dENoYXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdHlwZU5leHRDaGFyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudEluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICB0aGlzLmRpc3BsYXllZFRleHQgKz0gdGhpcy50ZXh0W3RoaXMuY3VycmVudEluZGV4XTtcclxuICAgICAgdGhpcy5jdXJyZW50SW5kZXgrKztcclxuICAgICAgdGhpcy50eXBpbmdUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy50eXBlTmV4dENoYXIoKSwgdGhpcy5zcGVlZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLmxvb3ApIHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3RhcnRUeXBpbmcoKSwgMTAwMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcEVmZmVjdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnR5cGluZ1RpbWVyKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnR5cGluZ1RpbWVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZvcm1hdHRlZFRleHQoKTogc3RyaW5nIHtcclxuICAgIGlmICh0aGlzLmVmZmVjdCA9PT0gJ3dhdmUnKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLnRleHQuc3BsaXQoJycpLm1hcCgoY2hhciwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAoY2hhciA9PT0gJyAnKSByZXR1cm4gJyAnO1xyXG4gICAgICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJhZ3UtdGV4dC1lZmZlY3RfX3dhdmUtY2hhclwiIHN0eWxlPVwiYW5pbWF0aW9uLWRlbGF5OiAke2luZGV4ICogMC4xfXNcIj4ke2NoYXJ9PC9zcGFuPmA7XHJcbiAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICB9XHJcbn1cclxuXHJcbiIsIjxzcGFuIFxyXG4gIGNsYXNzPVwiYWd1LXRleHQtZWZmZWN0XCJcclxuICBbY2xhc3MuYWd1LXRleHQtZWZmZWN0LS10eXBpbmddPVwiZWZmZWN0ID09PSAndHlwaW5nJ1wiXHJcbiAgW2NsYXNzLmFndS10ZXh0LWVmZmVjdC0tZmFkZV09XCJlZmZlY3QgPT09ICdmYWRlJ1wiXHJcbiAgW2NsYXNzLmFndS10ZXh0LWVmZmVjdC0tc2xpZGVdPVwiZWZmZWN0ID09PSAnc2xpZGUnXCJcclxuICBbY2xhc3MuYWd1LXRleHQtZWZmZWN0LS1nbG93XT1cImVmZmVjdCA9PT0gJ2dsb3cnXCJcclxuICBbY2xhc3MuYWd1LXRleHQtZWZmZWN0LS1ncmFkaWVudF09XCJlZmZlY3QgPT09ICdncmFkaWVudCdcIlxyXG4gIFtjbGFzcy5hZ3UtdGV4dC1lZmZlY3QtLXdhdmVdPVwiZWZmZWN0ID09PSAnd2F2ZSdcIlxyXG4gIFtzdHlsZS5jb2xvcl09XCJjb2xvclwiXHJcbiAgW3N0eWxlLmZvbnQtc2l6ZV09XCJmb250U2l6ZVwiXHJcbj5cclxuICA8c3BhbiAqbmdJZj1cImVmZmVjdCA9PT0gJ3R5cGluZydcIj57eyBkaXNwbGF5ZWRUZXh0IH19PHNwYW4gY2xhc3M9XCJhZ3UtdGV4dC1lZmZlY3RfX2N1cnNvclwiPnw8L3NwYW4+PC9zcGFuPlxyXG4gIDxzcGFuICpuZ0lmPVwiZWZmZWN0ICE9PSAndHlwaW5nJ1wiIFtpbm5lckhUTUxdPVwiZ2V0Rm9ybWF0dGVkVGV4dCgpXCI+PC9zcGFuPlxyXG48L3NwYW4+XHJcblxyXG4iXX0=