import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';

//import { NgxDatagridComponent } from "./ngx-datagrid.component";


@Component({
  selector: 'header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Input() name :any ;
    @Input() row :any ;
    @Input() html :any ;
    constructor() { }
    //@ContentChildren(TabComponent) tabList: QueryList<TabComponent>;

    ngOnInit() {
        console.log(this.html);
    }

    print() {
        
        console.log(this.row);
    }

}
