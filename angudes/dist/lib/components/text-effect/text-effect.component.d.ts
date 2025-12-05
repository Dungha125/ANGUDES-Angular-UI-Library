import { OnInit, OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextEffectComponent implements OnInit, OnDestroy {
    text: string;
    effect: 'typing' | 'fade' | 'slide' | 'glow' | 'gradient' | 'wave';
    speed: number;
    delay: number;
    loop: boolean;
    color: string;
    fontSize: string;
    displayedText: string;
    private typingTimer;
    private currentIndex;
    private isAnimating;
    ngOnInit(): void;
    ngOnDestroy(): void;
    private startEffect;
    private startTyping;
    private typeNextChar;
    private stopEffect;
    getFormattedText(): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<TextEffectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextEffectComponent, "agu-text-effect", never, { "text": { "alias": "text"; "required": false; }; "effect": { "alias": "effect"; "required": false; }; "speed": { "alias": "speed"; "required": false; }; "delay": { "alias": "delay"; "required": false; }; "loop": { "alias": "loop"; "required": false; }; "color": { "alias": "color"; "required": false; }; "fontSize": { "alias": "fontSize"; "required": false; }; }, {}, never, never, false, never>;
}
