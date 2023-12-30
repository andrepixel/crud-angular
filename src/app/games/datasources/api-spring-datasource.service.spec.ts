import { TestBed } from '@angular/core/testing';

import { ApiSpringDatasourceService } from './api-spring-datasource.service';

describe('ApiSpringDatasourceService', () => {
  let service: ApiSpringDatasourceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiSpringDatasourceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
