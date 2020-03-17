import { Component, OnInit, Input, TemplateRef, AfterContentInit, ContentChild } from '@angular/core';

import { HeaderComponent } from "./header/header.component";


@Component({
  selector: 'ngx-datagrid',
  templateUrl:'./ngx-datagrid.component.html',
  styleUrls: ['./ngx-datagrid.component.css']
})
export class NgxDatagridComponent implements OnInit, AfterContentInit {

    @Input() data :any;
    searchText = "";
    itemPerPage = 5;
    constructor() { }
    //@ContentChild(HeaderComponent,{static: false}) headerComponent: HeaderComponent;
    @ContentChild('header',{static: false}) headerTemplateRef: TemplateRef<any>;
    @ContentChild('body',{static: false}) bodyTemplateRef: TemplateRef<any>;

    ngOnInit() {
        //console.log(this.data);
    }
    ngAfterContentInit() {
        //console.log("----------");
        //this.headerContent.forEach(tabInstance => console.log(tabInstance))
        //console.log(this.headerComponent);
    }


    // onSearch(){
    //     console.log(this.search);
    //     this.data =  this.data.filter(item => item.name.includes(this.search));
    // }

    private identify(index, item) {
        return index;
    }

}
