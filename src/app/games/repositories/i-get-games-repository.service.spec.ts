import { TestBed } from '@angular/core/testing';

import { IGetGamesRepositoryService } from './i-get-games-repository.service';

describe('IGetGamesRepositoryService', () => {
  let service: IGetGamesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IGetGamesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
