import { Component, Input, Output, EventEmitter, ViewChild, ViewChildren } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class CarouselComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWRlcy9zcmMvbGliL2NvbXBvbmVudHMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBcUIsU0FBUyxFQUF3QyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQVN6SixNQUFNLE9BQU8saUJBQWlCO0lBQ25CLFFBQVEsR0FBWSxLQUFLLENBQUM7SUFDMUIsZ0JBQWdCLEdBQVcsSUFBSSxDQUFDO0lBQ2hDLFFBQVEsR0FBWSxJQUFJLENBQUM7SUFDekIsVUFBVSxHQUFZLElBQUksQ0FBQztJQUMzQixNQUFNLEdBQXFCLE9BQU8sQ0FBQztJQUNuQyxZQUFZLEdBQXdDLFFBQVEsQ0FBQztJQUM1RCxXQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQUVBLGlCQUFpQixDQUFjO0lBQzNELE1BQU0sQ0FBeUI7SUFFdEQsWUFBWSxHQUFXLENBQUMsQ0FBQztJQUNqQixhQUFhLENBQU07SUFDbkIsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUV6QyxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsU0FBUyxDQUFD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UTtzQkFBaEIsS0FBSztnQkFDRyxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU07Z0JBRTRDLGlCQUFpQjtzQkFBbkUsU0FBUzt1QkFBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7Z0JBQzFCLE1BQU07c0JBQTVCLFlBQVk7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkluaXQsIE9uRGVzdHJveSwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBBZnRlclZpZXdJbml0LCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhZ3UtY2Fyb3VzZWwnLFxyXG4gIHN0YW5kYWxvbmU6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgYXV0b3BsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBhdXRvcGxheUludGVydmFsOiBudW1iZXIgPSAzMDAwO1xyXG4gIEBJbnB1dCgpIHNob3dEb3RzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaG93QXJyb3dzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlZmZlY3Q6ICdzbGlkZScgfCAnZmFkZScgPSAnc2xpZGUnO1xyXG4gIEBJbnB1dCgpIGRvdHNQb3NpdGlvbjogJ2JvdHRvbScgfCAndG9wJyB8ICdsZWZ0JyB8ICdyaWdodCcgPSAnYm90dG9tJztcclxuICBAT3V0cHV0KCkgc2xpZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY2Fyb3VzZWxDb250YWluZXInLCB7IHN0YXRpYzogZmFsc2UgfSkgY2Fyb3VzZWxDb250YWluZXIhOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGRyZW4oJ3NsaWRlJykgc2xpZGVzITogUXVlcnlMaXN0PEVsZW1lbnRSZWY+O1xyXG5cclxuICBjdXJyZW50SW5kZXg6IG51bWJlciA9IDA7XHJcbiAgcHJpdmF0ZSBhdXRvcGxheVRpbWVyOiBhbnk7XHJcbiAgcHJpdmF0ZSBpc1RyYW5zaXRpb25pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvcGxheSkge1xyXG4gICAgICB0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2Fyb3VzZWwoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdG9wQXV0b3BsYXkoKTtcclxuICB9XHJcblxyXG4gIGdvVG9TbGlkZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1RyYW5zaXRpb25pbmcgfHwgaW5kZXggPT09IHRoaXMuY3VycmVudEluZGV4KSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcz8ubGVuZ3RoIHx8IDA7XHJcbiAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHNsaWRlQ291bnQpIHJldHVybjtcclxuXHJcbiAgICB0aGlzLmlzVHJhbnNpdGlvbmluZyA9IHRydWU7XHJcbiAgICB0aGlzLmN1cnJlbnRJbmRleCA9IGluZGV4O1xyXG4gICAgdGhpcy51cGRhdGVDYXJvdXNlbCgpO1xyXG4gICAgdGhpcy5zbGlkZUNoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgIFxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNUcmFuc2l0aW9uaW5nID0gZmFsc2U7XHJcbiAgICB9LCA1MDApO1xyXG4gIH1cclxuXHJcbiAgbmV4dCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcz8ubGVuZ3RoIHx8IDA7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSAodGhpcy5jdXJyZW50SW5kZXggKyAxKSAlIHNsaWRlQ291bnQ7XHJcbiAgICB0aGlzLmdvVG9TbGlkZShuZXh0SW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcHJldigpOiB2b2lkIHtcclxuICAgIGNvbnN0IHNsaWRlQ291bnQgPSB0aGlzLnNsaWRlcz8ubGVuZ3RoIHx8IDA7XHJcbiAgICBjb25zdCBwcmV2SW5kZXggPSAodGhpcy5jdXJyZW50SW5kZXggLSAxICsgc2xpZGVDb3VudCkgJSBzbGlkZUNvdW50O1xyXG4gICAgdGhpcy5nb1RvU2xpZGUocHJldkluZGV4KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlQ2Fyb3VzZWwoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuY2Fyb3VzZWxDb250YWluZXIgfHwgIXRoaXMuc2xpZGVzKSByZXR1cm47XHJcbiAgICBcclxuICAgIGlmICh0aGlzLmVmZmVjdCA9PT0gJ3NsaWRlJykge1xyXG4gICAgICBjb25zdCB0cmFuc2xhdGVYID0gLXRoaXMuY3VycmVudEluZGV4ICogMTAwO1xyXG4gICAgICB0aGlzLmNhcm91c2VsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2xhdGVYfSUpYDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRBdXRvcGxheSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc3RvcEF1dG9wbGF5KCk7XHJcbiAgICB0aGlzLmF1dG9wbGF5VGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgfSwgdGhpcy5hdXRvcGxheUludGVydmFsKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RvcEF1dG9wbGF5KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b3BsYXlUaW1lcikge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMuYXV0b3BsYXlUaW1lcik7XHJcbiAgICAgIHRoaXMuYXV0b3BsYXlUaW1lciA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRW50ZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5hdXRvcGxheSkge1xyXG4gICAgICB0aGlzLnN0b3BBdXRvcGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZUxlYXZlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYXV0b3BsYXkpIHtcclxuICAgICAgdGhpcy5zdGFydEF1dG9wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRTbGlkZUNvdW50KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zbGlkZXM/Lmxlbmd0aCB8fCAwO1xyXG4gIH1cclxufVxyXG5cclxuIiwiPGRpdiBcclxuICBjbGFzcz1cImFndS1jYXJvdXNlbFwiXHJcbiAgKG1vdXNlZW50ZXIpPVwib25Nb3VzZUVudGVyKClcIlxyXG4gIChtb3VzZWxlYXZlKT1cIm9uTW91c2VMZWF2ZSgpXCJcclxuPlxyXG4gIDxkaXYgY2xhc3M9XCJhZ3UtY2Fyb3VzZWxfX3dyYXBwZXJcIj5cclxuICAgIDxkaXYgXHJcbiAgICAgICNjYXJvdXNlbENvbnRhaW5lclxyXG4gICAgICBjbGFzcz1cImFndS1jYXJvdXNlbF9fY29udGFpbmVyXCJcclxuICAgICAgW2NsYXNzLmFndS1jYXJvdXNlbF9fY29udGFpbmVyLS1lZmZlY3Qtc2xpZGVdPVwiZWZmZWN0ID09PSAnc2xpZGUnXCJcclxuICAgICAgW2NsYXNzLmFndS1jYXJvdXNlbF9fY29udGFpbmVyLS1lZmZlY3QtZmFkZV09XCJlZmZlY3QgPT09ICdmYWRlJ1wiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxidXR0b24gXHJcbiAgICAgICpuZ0lmPVwic2hvd0Fycm93cyAmJiBnZXRTbGlkZUNvdW50KCkgPiAxXCJcclxuICAgICAgY2xhc3M9XCJhZ3UtY2Fyb3VzZWxfX2Fycm93IGFndS1jYXJvdXNlbF9fYXJyb3ctLXByZXZcIlxyXG4gICAgICAoY2xpY2spPVwicHJldigpXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIlByZXZpb3VzIHNsaWRlXCJcclxuICAgID5cclxuICAgICAg4oC5XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gXHJcbiAgICAgICpuZ0lmPVwic2hvd0Fycm93cyAmJiBnZXRTbGlkZUNvdW50KCkgPiAxXCJcclxuICAgICAgY2xhc3M9XCJhZ3UtY2Fyb3VzZWxfX2Fycm93IGFndS1jYXJvdXNlbF9fYXJyb3ctLW5leHRcIlxyXG4gICAgICAoY2xpY2spPVwibmV4dCgpXCJcclxuICAgICAgYXJpYS1sYWJlbD1cIk5leHQgc2xpZGVcIlxyXG4gICAgPlxyXG4gICAgICDigLpcclxuICAgIDwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG5cclxuICA8dWwgXHJcbiAgICAqbmdJZj1cInNob3dEb3RzICYmIGdldFNsaWRlQ291bnQoKSA+IDFcIlxyXG4gICAgY2xhc3M9XCJhZ3UtY2Fyb3VzZWxfX2RvdHNcIlxyXG4gICAgW2NsYXNzLmFndS1jYXJvdXNlbF9fZG90cy0tcG9zaXRpb24tYm90dG9tXT1cImRvdHNQb3NpdGlvbiA9PT0gJ2JvdHRvbSdcIlxyXG4gICAgW2NsYXNzLmFndS1jYXJvdXNlbF9fZG90cy0tcG9zaXRpb24tdG9wXT1cImRvdHNQb3NpdGlvbiA9PT0gJ3RvcCdcIlxyXG4gICAgW2NsYXNzLmFndS1jYXJvdXNlbF9fZG90cy0tcG9zaXRpb24tbGVmdF09XCJkb3RzUG9zaXRpb24gPT09ICdsZWZ0J1wiXHJcbiAgICBbY2xhc3MuYWd1LWNhcm91c2VsX19kb3RzLS1wb3NpdGlvbi1yaWdodF09XCJkb3RzUG9zaXRpb24gPT09ICdyaWdodCdcIlxyXG4gID5cclxuICAgIDxsaSBcclxuICAgICAgKm5nRm9yPVwibGV0IHNsaWRlIG9mIHNsaWRlczsgbGV0IGkgPSBpbmRleFwiXHJcbiAgICAgIGNsYXNzPVwiYWd1LWNhcm91c2VsX19kb3RcIlxyXG4gICAgICBbY2xhc3MuYWd1LWNhcm91c2VsX19kb3QtLWFjdGl2ZV09XCJpID09PSBjdXJyZW50SW5kZXhcIlxyXG4gICAgICAoY2xpY2spPVwiZ29Ub1NsaWRlKGkpXCJcclxuICAgID48L2xpPlxyXG4gIDwvdWw+XHJcbjwvZGl2PlxyXG5cclxuIl19