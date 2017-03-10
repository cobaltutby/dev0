/// <reference path="../../typings/tsd.d.ts" />
import { OnInit, OnDestroy, ElementRef } from 'angular2/angular2';
export declare class HotTable implements OnInit, OnDestroy {
    private element;
    private inst;
    private view;
    private data;
    private colHeaders;
    private columns;
    private colWidths;
    private options;
    constructor(element: ElementRef);
    parseAutoComplete(column: any, dataSet: any): void;
    onInit(): void;
    onDestroy(): void;
}
export declare const handsontable: Array<any>;
