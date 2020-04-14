import { Component, OnInit, Input, Output, TemplateRef, AfterContentInit, ContentChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-datagrid',
  templateUrl:'./ngx-datagrid.component.html',
  styleUrls: ['./ngx-datagrid.component.css']
})
export class NgxDatagridComponent implements OnInit, AfterContentInit {

    @Input() gridId = 'ngxDataGridId';
    @Input() data :any;
    @Input() gridClass :any;
    @Input() options :any;
    @Output() itemClick: EventEmitter<any> = new EventEmitter<any>();
    @ContentChild('header',{static: false}) headerTemplateRef: TemplateRef<any>;
    @ContentChild('body',{static: false}) bodyTemplateRef: TemplateRef<any>;
    
    searchText = "";
    itemPerPage = 5;
    itemPerPageDDL:any = [5,10,20,50];
    currentPage = 1;
    itemClickEvent = false;
    constructor() { }

    ngOnInit() {
        if(this.options){
            this.itemPerPageDDL = this.options.itemPerPageDDL.length == 0 ? this.itemPerPageDDL : this.options.itemPerPageDDL;
            this.itemPerPage =  this.itemPerPageDDL[0];
            this.itemClickEvent = this.options.itemClickEvent != undefined ? this.options.itemClickEvent : this.itemClickEvent;
        }
    }
    ngAfterContentInit() {
    }
    onListItemClick(item:any){
        if(this.itemClickEvent )
            this.itemClick.emit(item);
    }
    onInputSearch(){
        this.currentPage = 1;
    }
    onChangeItemPerPage(){
        this.currentPage = 1;
    }

    identify(index, item) {
        return index;
    }

}
