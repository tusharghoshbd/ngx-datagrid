/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, TemplateRef, ContentChild, EventEmitter } from '@angular/core';
export class NgxDatagridComponent {
    constructor() {
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
    ngOnInit() {
        if (this.options) {
            this.itemPerPageDDL = this.options.itemPerPageDDL.length == 0 ? this.itemPerPageDDL : this.options.itemPerPageDDL;
            this.itemPerPage = this.itemPerPageDDL[0];
            this.itemClickEvent = this.options.itemClickEvent != undefined ? this.options.itemClickEvent : this.itemClickEvent;
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onListItemClick(item) {
        if (this.itemClickEvent)
            this.itemClick.emit(item);
    }
    /**
     * @return {?}
     */
    onInputSearch() {
        this.currentPage = 1;
    }
    /**
     * @return {?}
     */
    onChangeItemPerPage() {
        this.currentPage = 1;
    }
    /**
     * @param {?} index
     * @param {?} item
     * @return {?}
     */
    identify(index, item) {
        return index;
    }
}
NgxDatagridComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-datagrid',
                template: "<div class=\"row\">\r\n    <div class=\"col-6 col-sm-6 col-xs-9\">\r\n        <label  style=\"font-weight: 100;\">\r\n                <input (input)=\"onInputSearch()\"  [(ngModel)]=\"searchText\" \r\n                    [id]=\"'search_'+gridId\"\r\n                    name=\"search\"\r\n                    autocomplete=\"off\"\r\n                    class=\"form-control mr-sm-2\" \r\n                    type=\"text\" placeholder=\"Search\"/>\r\n        </label> \r\n    </div>\r\n    <div class=\" col-6 col-sm-6 col-xs-3 text-right\">\r\n        <label class=\"form-group text-right\"  style=\"font-weight: 100;\" >\r\n                <select (change)=\"onChangeItemPerPage()\"  [(ngModel)]=\"itemPerPage\" name=\"itemPerPage\" class=\"form-control\" [id]=\"'itemPerPage_'+gridId\">\r\n                    <option *ngFor=\"let item of itemPerPageDDL\" [ngValue]=\"item\">{{item}}</option>\r\n                </select>\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 col-xs-12  col-12\">\r\n        <ul [id]=\"gridId\" class=\"list-group\">\r\n            <li *ngFor=\"let rowDetail of data | filter:searchText | paginate: {id: 'pagination_'+gridId, itemsPerPage: itemPerPage, currentPage:currentPage }; trackBy: identify\" class=\"{{gridClass}}\">\r\n                <div [ngClass]=\"itemClickEvent ? 'cus-cursor-pointer' : ''\"  (click)=\"onListItemClick(rowDetail)\">\r\n                    <strong>\r\n                        <ng-container\r\n                            *ngIf=\"headerTemplateRef\"\r\n                            [ngTemplateOutlet]=\"headerTemplateRef\"\r\n                            [ngTemplateOutletContext]=\"{$implicit:rowDetail}\"\r\n                        >\r\n                        </ng-container>\r\n                    </strong>\r\n                    <ng-container\r\n                        *ngIf=\"bodyTemplateRef\"\r\n                        [ngTemplateOutlet]=\"bodyTemplateRef\"\r\n                        [ngTemplateOutletContext]=\"{$implicit:rowDetail}\"\r\n                    >\r\n                    </ng-container>\r\n                </div>\r\n            </li>\r\n            <li *ngIf=\"data.length == 0\" class=\"cus-cursor-pointer list-group-item\">\r\n                Data is not available.\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-sm-12 col-xs-12  col-12 custom-pagination-align\">\r\n        <pagination-controls [id]=\"'pagination_'+gridId\" (pageChange)=\"currentPage = $event\"></pagination-controls>\r\n    </div>\r\n</div>",
                styles: [".cus-cursor-pointer{cursor:pointer}.custom-pagination-align{text-align:left!important}@media screen and (max-width:576px){.custom-pagination-align{text-align:center!important}}"]
            }] }
];
/** @nocollapse */
NgxDatagridComponent.ctorParameters = () => [];
NgxDatagridComponent.propDecorators = {
    gridId: [{ type: Input }],
    data: [{ type: Input }],
    gridClass: [{ type: Input }],
    options: [{ type: Input }],
    itemClick: [{ type: Output }],
    headerTemplateRef: [{ type: ContentChild, args: ['header', { static: false },] }],
    bodyTemplateRef: [{ type: ContentChild, args: ['body', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWRhdGFncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0B0dXNoYXJnaG9zaGJkL25neC1kYXRhZ3JpZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZGF0YWdyaWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFvQixZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzVILE1BQU0sT0FBTyxvQkFBb0I7SUFlN0I7UUFiUyxXQUFNLEdBQUcsZUFBZSxDQUFDO1FBSXhCLGNBQVMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUlqRSxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLG1CQUFjLEdBQU8sQ0FBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztRQUNsQyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixtQkFBYyxHQUFHLEtBQUssQ0FBQztJQUNQLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNKLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNaLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUM7WUFDbEgsSUFBSSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUN0SDtJQUNMLENBQUM7Ozs7SUFDRCxrQkFBa0I7SUFDbEIsQ0FBQzs7Ozs7SUFDRCxlQUFlLENBQUMsSUFBUTtRQUNwQixJQUFHLElBQUksQ0FBQyxjQUFjO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFDRCxhQUFhO1FBQ1QsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7OztJQUNELG1CQUFtQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQUVELFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSTtRQUNoQixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs7WUE1Q0osU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix1akZBQTJDOzthQUU1Qzs7Ozs7cUJBR0ksS0FBSzttQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxNQUFNO2dDQUNOLFlBQVksU0FBQyxRQUFRLEVBQUMsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzhCQUNyQyxZQUFZLFNBQUMsTUFBTSxFQUFDLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQzs7OztJQU5wQyxzQ0FBa0M7O0lBQ2xDLG9DQUFtQjs7SUFDbkIseUNBQXdCOztJQUN4Qix1Q0FBc0I7O0lBQ3RCLHlDQUFpRTs7SUFDakUsaURBQTRFOztJQUM1RSwrQ0FBd0U7O0lBRXhFLDBDQUFnQjs7SUFDaEIsMkNBQWdCOztJQUNoQiw4Q0FBa0M7O0lBQ2xDLDJDQUFnQjs7SUFDaEIsOENBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIFRlbXBsYXRlUmVmLCBBZnRlckNvbnRlbnRJbml0LCBDb250ZW50Q2hpbGQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZGF0YWdyaWQnLFxuICB0ZW1wbGF0ZVVybDonLi9uZ3gtZGF0YWdyaWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uZ3gtZGF0YWdyaWQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neERhdGFncmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcblxuICAgIEBJbnB1dCgpIGdyaWRJZCA9ICduZ3hEYXRhR3JpZElkJztcbiAgICBASW5wdXQoKSBkYXRhIDphbnk7XG4gICAgQElucHV0KCkgZ3JpZENsYXNzIDphbnk7XG4gICAgQElucHV0KCkgb3B0aW9ucyA6YW55O1xuICAgIEBPdXRwdXQoKSBpdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gICAgQENvbnRlbnRDaGlsZCgnaGVhZGVyJyx7c3RhdGljOiBmYWxzZX0pIGhlYWRlclRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2JvZHknLHtzdGF0aWM6IGZhbHNlfSkgYm9keVRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICAgIFxuICAgIHNlYXJjaFRleHQgPSBcIlwiO1xuICAgIGl0ZW1QZXJQYWdlID0gNTtcbiAgICBpdGVtUGVyUGFnZURETDphbnkgPSBbNSwxMCwyMCw1MF07XG4gICAgY3VycmVudFBhZ2UgPSAxO1xuICAgIGl0ZW1DbGlja0V2ZW50ID0gZmFsc2U7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICBpZih0aGlzLm9wdGlvbnMpe1xuICAgICAgICAgICAgdGhpcy5pdGVtUGVyUGFnZURETCA9IHRoaXMub3B0aW9ucy5pdGVtUGVyUGFnZURETC5sZW5ndGggPT0gMCA/IHRoaXMuaXRlbVBlclBhZ2VEREwgOiB0aGlzLm9wdGlvbnMuaXRlbVBlclBhZ2VEREw7XG4gICAgICAgICAgICB0aGlzLml0ZW1QZXJQYWdlID0gIHRoaXMuaXRlbVBlclBhZ2VERExbMF07XG4gICAgICAgICAgICB0aGlzLml0ZW1DbGlja0V2ZW50ID0gdGhpcy5vcHRpb25zLml0ZW1DbGlja0V2ZW50ICE9IHVuZGVmaW5lZCA/IHRoaXMub3B0aW9ucy5pdGVtQ2xpY2tFdmVudCA6IHRoaXMuaXRlbUNsaWNrRXZlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIH1cbiAgICBvbkxpc3RJdGVtQ2xpY2soaXRlbTphbnkpe1xuICAgICAgICBpZih0aGlzLml0ZW1DbGlja0V2ZW50IClcbiAgICAgICAgICAgIHRoaXMuaXRlbUNsaWNrLmVtaXQoaXRlbSk7XG4gICAgfVxuICAgIG9uSW5wdXRTZWFyY2goKXtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgfVxuICAgIG9uQ2hhbmdlSXRlbVBlclBhZ2UoKXtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IDE7XG4gICAgfVxuXG4gICAgaWRlbnRpZnkoaW5kZXgsIGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxufVxuIl19