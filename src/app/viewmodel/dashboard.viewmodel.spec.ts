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
      console.log('Fetch complete. Launchpads:', viewModel.dashboardLaunchpads);
      expect(viewModel.dashboardLaunchpads.length).toBe(mockLaunchpads.length);
      var count: number = 0;
      viewModel.dashboardLaunchpads.forEach(launchpad => {
        console.log('Launchpad:', launchpad);
        expect(launchpad.fullName).toEqual(mockLaunchpads[count].full_name);
        console.log('Launchpad TEST: COUNT', count);
        count ++;
      });
    });
  });

  it('should fetch and convert launchpads successfully', () => {
    const mockLaunchpads: Launchpad[] = [
      new Launchpad(
        { large: [] },
        'Launchpad 1',
        'Launchpad 1 Full Name',
        'Locality 1',
        'Region 1',
        0,
        0,
        0,
        0,
        [],
        'UTC',
        [],
        'active',
        'Launchpad 1 Details',
        '1'
      ),
      new Launchpad(
        { large: [] },
        'Launchpad 2',
        'Launchpad 2 Full Name',
        'Locality 2',
        'Region 2',
        0,
        0,
        0,
        0,
        [],
        'UTC',
        [],
        'active',
        'Launchpad 2 Details',
        '2'
      )
    ];
  
    launchpadApiService.getLaunchpads.and.returnValue(of(mockLaunchpads));
  
    viewModel.fetchLaunchpads().subscribe(() => {
      expect(viewModel.dashboardLaunchpads.length).toBe(mockLaunchpads.length);
      viewModel.dashboardLaunchpads.forEach((launchpad, index) => {
        const mockLaunchpad = mockLaunchpads[index];
        expect(launchpad.fullName).toEqual(mockLaunchpad.full_name);
        expect(launchpad.name).toEqual(mockLaunchpad.name);
        expect(launchpad.region).toEqual(mockLaunchpad.region);
        expect(launchpad.wikipediaLink).toEqual(`https://en.wikipedia.org/wiki/${mockLaunchpad.name.replace(/\s/g, '_')}`);
        expect(launchpad.launches).toEqual(mockLaunchpad.launches);
      });
    });
  });
  

});
