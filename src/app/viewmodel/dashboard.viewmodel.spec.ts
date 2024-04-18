import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { DashboardViewModel } from './dashboard.viewmodel';
import { LaunchpadApiService } from '../model/services/launchpad-api.service';
import { Launchpad } from '../model/launchpad.model';
import { DashboardLaunchpad } from '../model/dashboard-launchpad.model';

describe('DashboardViewModel', () => {
  let viewModel: DashboardViewModel;
  let launchpadApiService: jasmine.SpyObj<LaunchpadApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('LaunchpadApiService', ['getLaunchpads']);

    TestBed.configureTestingModule({
      providers: [
        DashboardViewModel,
        { provide: LaunchpadApiService, useValue: spy }
      ]
    });

    viewModel = TestBed.inject(DashboardViewModel);
    launchpadApiService = TestBed.inject(LaunchpadApiService) as jasmine.SpyObj<LaunchpadApiService>;
  });

  it('should fetch launchpads successfully', () => {
    const mockLaunchpads: Launchpad[] = [
      {
        images: { large: [] },
        name: 'Launchpad 1',
        full_name: 'Launchpad 1 Full Name',
        locality: 'Locality 1',
        region: 'Region 1',
        latitude: 0,
        longitude: 0,
        launchAttempts: 0,
        launchSuccesses: 0,
        rockets: [],
        timezone: 'UTC',
        launches: [],
        status: 'active',
        details: 'Launchpad 1 Details',
        id: '1'
      },
      {
        images: { large: [] },
        name: 'Launchpad 2',
        full_name: 'Launchpad 2 Full Name',
        locality: 'Locality 2',
        region: 'Region 2',
        latitude: 0,
        longitude: 0,
        launchAttempts: 0,
        launchSuccesses: 0,
        rockets: [],
        timezone: 'UTC',
        launches: [],
        status: 'active',
        details: 'Launchpad 2 Details',
        id: '2'
      }
    ];

    launchpadApiService.getLaunchpads.and.callFake(() => {
      console.log('Spy: getLaunchpads called');
      console.log('Spy: mockLaunchpads: ' + mockLaunchpads);
      return of(mockLaunchpads);
    });

    viewModel.fetchLaunchpads().subscribe(() => {
      console.log('Fetch complete. Launchpads:', viewModel.launchpads);
      // Expectations to verify the behavior
      expect(viewModel.launchpads.length).toBe(mockLaunchpads.length);
      viewModel.launchpads.forEach(launchpad => {
        console.log('Launchpad:', launchpad);
        expect(launchpad.name).toEqual( .name);
      });
    });
  });
});
