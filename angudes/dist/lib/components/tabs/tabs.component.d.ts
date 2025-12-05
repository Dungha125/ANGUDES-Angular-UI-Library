import { EventEmitter, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';
import * as i0 from "@angular/core";
export declare class TabsComponent implements AfterContentInit {
    activeKey: string;
    type: 'line' | 'card' | 'editable-card';
    size: 'sm' | 'md' | 'lg';
    activeKeyChange: EventEmitter<string>;
    onTabClick: EventEmitter<string>;
    tabs: QueryList<TabComponent>;
    ngAfterContentInit(): void;
    selectTab(key: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TabsComponent, "agu-tabs", never, { "activeKey": { "alias": "activeKey"; "required": false; }; "type": { "alias": "type"; "required": false; }; "size": { "alias": "size"; "required": false; }; }, { "activeKeyChange": "activeKeyChange"; "onTabClick": "onTabClick"; }, ["tabs"], ["*"], false, never>;
}
