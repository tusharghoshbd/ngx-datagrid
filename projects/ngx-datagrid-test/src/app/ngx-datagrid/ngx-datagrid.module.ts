import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatagridComponent } from './ngx-datagrid.component';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [NgxDatagridComponent],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports: [NgxDatagridComponent]
})
export class NgxDatagridModule { }
