import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";
import { NgxDatagridComponent } from './ngx-datagrid.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [NgxDatagridComponent],
  imports: [
      FormsModule,
      CommonModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports: [NgxDatagridComponent]
})
export class NgxDatagridModule { }
