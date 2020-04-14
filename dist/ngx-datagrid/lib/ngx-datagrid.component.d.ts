import { OnInit, TemplateRef, AfterContentInit, EventEmitter } from '@angular/core';
export declare class NgxDatagridComponent implements OnInit, AfterContentInit {
    gridId: string;
    data: any;
    gridClass: any;
    options: any;
    itemClick: EventEmitter<any>;
    headerTemplateRef: TemplateRef<any>;
    bodyTemplateRef: TemplateRef<any>;
    searchText: string;
    itemPerPage: number;
    itemPerPageDDL: any;
    currentPage: number;
    itemClickEvent: boolean;
    constructor();
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onListItemClick(item: any): void;
    onInputSearch(): void;
    onChangeItemPerPage(): void;
    identify(index: any, item: any): any;
}
