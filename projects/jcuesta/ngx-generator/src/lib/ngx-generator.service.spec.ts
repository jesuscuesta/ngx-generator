import { TestBed } from '@angular/core/testing';

import { NgxGeneratorService } from './ngx-generator.service';

describe('NgxGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxGeneratorService = TestBed.get(NgxGeneratorService);
    expect(service).toBeTruthy();
  });
});
