import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDatagridComponent } from './ngx-datagrid.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from "./header/header.component";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [NgxDatagridComponent, HeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ],
  exports: [NgxDatagridComponent, HeaderComponent]
})
export class NgxDatagridModule { }
