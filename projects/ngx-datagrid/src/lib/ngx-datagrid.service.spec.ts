import { TestBed } from '@angular/core/testing';

import { NgxDatagridService } from './ngx-datagrid.service';

describe('NgxDatagridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxDatagridService = TestBed.get(NgxDatagridService);
    expect(service).toBeTruthy();
  });
});
