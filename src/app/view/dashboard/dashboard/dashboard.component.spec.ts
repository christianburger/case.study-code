import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardViewModel } from '../../../viewmodel/dashboard.viewmodel';
import { FilterComponent } from '../../filter/filter.component';
import { PaginationComponent } from '../../pagination/pagination.component';
import { DashboardLaunchpad } from 'src/app/model/dashboard-launchpad.model';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';

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
      dashboardLaunchpads: mockLaunchpads,
      filteredLaunchpads: mockLaunchpads
    };

    await TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        FilterComponent,
        PaginationComponent,
      ],
      imports: [
        FormsModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatListModule,
        MatFormFieldModule,
      ],
      providers: [
        { provide: DashboardViewModel, useValue: mockDashboardViewModel }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component dashboard.', () => {
    console.log("START: should create component dashboard.");
    expect(component).toBeTruthy();
    console.log("END: should create component dashboard.");
  });

  it('should fetch launchpads on initialization', () => {
    console.log("START: should fetch launchpads on initialization");
    expect(mockDashboardViewModel.fetchLaunchpads).toHaveBeenCalled();
    expect(component.viewModel.dashboardLaunchpads.length).toBeGreaterThan(0);
    expect(component.viewModel.dashboardLaunchpads[0]).toBeInstanceOf(DashboardLaunchpad);
    console.log("END: should fetch launchpads on initialization");
  });

});
