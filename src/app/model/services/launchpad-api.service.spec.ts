import { TestBed } from '@angular/core/testing';

import { LaunchpadApiService } from './launchpad-api.service';

describe('LaunchpadApiService', () => {
  let service: LaunchpadApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaunchpadApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
