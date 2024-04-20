import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { LaunchpadApiService } from './launchpad-api.service';

describe('LaunchpadApiService', () => {
  let service: LaunchpadApiService;
  let httpTestingController: HttpTestingController; // Declare httpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Import HttpClientTestingModule
      providers: [LaunchpadApiService] // Provide LaunchpadApiService
    });
    service = TestBed.inject(LaunchpadApiService);
    httpTestingController = TestBed.inject(HttpTestingController); // Initialize httpTestingController
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
