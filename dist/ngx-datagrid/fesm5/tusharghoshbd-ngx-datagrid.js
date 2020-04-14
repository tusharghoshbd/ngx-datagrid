import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, ContentChild, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDatagridService = /** @class */ (function () {
    function NgxDatagridService() {
    }
    NgxDatagridService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxDatagridService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxDatagridService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgxDatagridService_Factory() { return new NgxDatagridService(); }, token: NgxDatagridService, providedIn: "root" });
    return NgxDatagridService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDatagridComponent = /** @class */ (function () {
    function NgxDatagridComponent() {
        this.gridId = 'ngxDataGridId';
        this.itemClick = new EventEmitter();
        this.searchText = "";
        this.itemPerPage = 5;
        this.itemPerPageDDL = [5, 10, 20, 50];
        this.currentPage = 1;
        this.itemClickEvent = false;
    }
    /**
     * @return {?}
     */
    NgxDatagridComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.options) {
            this.itemPerPageDDL = this.options.itemPerPageDDL.length == 0 ? this.itemPerPageDDL : this.options.itemPerPageDDL;
            this.itemPerPage = this.itemPerPageDDL[0];
            this.itemClickEvent = this.options.itemClickEvent != undefined ? this.options.itemClickEvent : this.itemClickEvent;
        }
    };
    /**
     * @return {?}
     */
    NgxDatagridComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} item
     * @return {?}
     */
    NgxDatagridComponent.prototype.onListItemClick = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.itemClickEvent)
            this.itemClick.emit(item);
    };
    /**
     * @return {?}
     */
    NgxDatagridComponent.prototype.onInputSearch = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
    };
    /**
     * @return {?}
     */
    NgxDatagridComponent.prototype.onChangeItemPerPage = /**
     * @return {?}
     */
    function () {
        this.currentPage = 1;
    };
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    NgxDatagridComponent.prototype.identify = /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    function (index, item) {
        return index;
    };
    NgxDatagridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-datagrid',
                    template: "<div class=\"row\">\r\n    <div class=\"col-6 col-sm-6 col-xs-9\">\r\n        <label  style=\"font-weight: 100;\">\r\n                <input (input)=\"onInputSearch()\"  [(ngModel)]=\"searchText\" \r\n                    [id]=\"'search_'+gridId\"\r\n                    name=\"search\"\r\n                    autocomplete=\"off\"\r\n                    class=\"form-control mr-sm-2\" \r\n                    type=\"text\" placeholder=\"Search\"/>\r\n        </label> \r\n    </div>\r\n    <div class=\" col-6 col-sm-6 col-xs-3 text-right\">\r\n        <label class=\"form-group text-right\"  style=\"font-weight: 100;\" >\r\n                <select (change)=\"onChangeItemPerPage()\"  [(ngModel)]=\"itemPerPage\" name=\"itemPerPage\" class=\"form-control\" [id]=\"'itemPerPage_'+gridId\">\r\n                    <option *ngFor=\"let item of itemPerPageDDL\" [ngValue]=\"item\">{{item}}</option>\r\n                </select>\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 col-xs-12  col-12\">\r\n        <ul [id]=\"gridId\" class=\"list-group\">\r\n            <li *ngFor=\"let rowDetail of data | filter:searchText | paginate: {id: 'pagination_'+gridId, itemsPerPage: itemPerPage, currentPage:currentPage }; trackBy: identify\" class=\"{{gridClass}}\">\r\n                <div [ngClass]=\"itemClickEvent ? 'cus-cursor-pointer' : ''\"  (click)=\"onListItemClick(rowDetail)\">\r\n                    <strong>\r\n                        <ng-container\r\n                            *ngIf=\"headerTemplateRef\"\r\n                            [ngTemplateOutlet]=\"headerTemplateRef\"\r\n                            [ngTemplateOutletContext]=\"{$implicit:rowDetail}\"\r\n                        >\r\n                        </ng-container>\r\n                    </strong>\r\n                    <ng-container\r\n                        *ngIf=\"bodyTemplateRef\"\r\n                        [ngTemplateOutlet]=\"bodyTemplateRef\"\r\n                        [ngTemplateOutletContext]=\"{$implicit:rowDetail}\"\r\n                    >\r\n                    </ng-container>\r\n                </div>\r\n            </li>\r\n            <li *ngIf=\"data.length == 0\" class=\"cus-cursor-pointer list-group-item\">\r\n                Data is not available.\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 col-xs-12  col-12 custom-pagination-align\">\r\n        <pagination-controls [id]=\"'pagination_'+gridId\" (pageChange)=\"currentPage = $event\"></pagination-controls>\r\n    </div>\r\n</div>",
                    styles: [".cus-cursor-pointer{cursor:pointer}.custom-pagination-align{text-align:left!important}@media screen and (max-width:576px){.custom-pagination-align{text-align:center!important}}"]
                }] }
    ];
    /** @nocollapse */
    NgxDatagridComponent.ctorParameters = function () { return []; };
    NgxDatagridComponent.propDecorators = {
        gridId: [{ type: Input }],
        data: [{ type: Input }],
        gridClass: [{ type: Input }],
        options: [{ type: Input }],
        itemClick: [{ type: Output }],
        headerTemplateRef: [{ type: ContentChild, args: ['header', { static: false },] }],
        bodyTemplateRef: [{ type: ContentChild, args: ['body', { static: false },] }]
    };
    return NgxDatagridComponent;
}());
if (false) {
    /** @type {?} */
    NgxDatagridComponent.prototype.gridId;
    /** @type {?} */
    NgxDatagridComponent.prototype.data;
    /** @type {?} */
    NgxDatagridComponent.prototype.gridClass;
    /** @type {?} */
    NgxDatagridComponent.prototype.options;
    /** @type {?} */
    NgxDatagridComponent.prototype.itemClick;
    /** @type {?} */
    NgxDatagridComponent.prototype.headerTemplateRef;
    /** @type {?} */
    NgxDatagridComponent.prototype.bodyTemplateRef;
    /** @type {?} */
    NgxDatagridComponent.prototype.searchText;
    /** @type {?} */
    NgxDatagridComponent.prototype.itemPerPage;
    /** @type {?} */
    NgxDatagridComponent.prototype.itemPerPageDDL;
    /** @type {?} */
    NgxDatagridComponent.prototype.currentPage;
    /** @type {?} */
    NgxDatagridComponent.prototype.itemClickEvent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxDatagridModule = /** @class */ (function () {
    function NgxDatagridModule() {
    }
    NgxDatagridModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxDatagridComponent],
                    imports: [
                        FormsModule,
                        CommonModule,
                        Ng2SearchPipeModule,
                        NgxPaginationModule
                    ],
                    exports: [NgxDatagridComponent]
                },] }
    ];
    return NgxDatagridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxDatagridComponent, NgxDatagridModule, NgxDatagridService };
//# sourceMappingURL=tusharghoshbd-ngx-datagrid.js.map
