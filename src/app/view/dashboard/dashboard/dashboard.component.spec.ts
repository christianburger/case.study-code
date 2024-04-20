import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardViewModel } from '../../../viewmodel/dashboard.viewmodel';
import { FilterComponent } from '../../filter/filter.component'; // Import FilterComponent
import { PaginationComponent } from '../../pagination/pagination.component';
import { DashboardLaunchpad } from 'src/app/model/dashboard-launchpad.model';
import { of } from 'rxjs';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let mockDashboardViewModel: Partial<DashboardViewModel>;

  beforeEach(async () => {
    const mockLaunchpads = [
      new DashboardLaunchpad('Name1', 'FullName1', 'Region1', 'Link1', []),
      new DashboardLaunchpad('Name2', 'FullName2', 'Region2', 'Link2', [])
    ];

    mockDashboardViewModel = {
      fetchLaunchpads: jasmine.createSpy('fetchLaunchpads').and.returnValue(of(mockLaunchpads)),
      filterLaunchpads: jasmine.createSpy('filterLaunchpads'),
      launchpads: mockLaunchpads, // Include launchpads field
      filteredLaunchpads: mockLaunchpads // Include filteredLaunchpads field
    };

    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent,
        FilterComponent, // Add FilterComponent to declarations
        PaginationComponent
      ],
      imports: [FormsModule],
      providers: [
        { provide: DashboardViewModel, useValue: mockDashboardViewModel }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch launchpads on initialization', () => {
    expect(mockDashboardViewModel.fetchLaunchpads).toHaveBeenCalled();
    expect(component.viewModel.launchpads.length).toBeGreaterThan(0); // Ensure launchpads are populated
    expect(component.viewModel.launchpads[0]).toBeInstanceOf(DashboardLaunchpad); // Ensure launchpads are instances of DashboardLaunchpad
  });
});
