import { Component, OnInit, Input, ContentChildren, QueryList } from '@angular/core';

@Component({
  selector: 'ngx-datagrid',
  template: `
    <ul class="list-group">
        <a *ngFor="let item of data" class="cus-cursor-pointer list-group-item">
            <div>{{item.name}}</div>
        </a>
    </ul>
  `,
  styleUrls: ['./ngx-datagrid.component.css']
})
export class NgxDatagridComponent implements OnInit {

    @Input() data :any;
    constructor() { }
    //@ContentChildren(TabComponent) tabList: QueryList<TabComponent>;

    ngOnInit() {
    }

    identify(index, item) {
        return index;
    }

}
