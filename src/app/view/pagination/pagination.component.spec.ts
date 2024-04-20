// File: src/app/components/pagination/pagination.component.spec.ts

import { TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
import { DashboardViewModel } from '../../viewmodel/dashboard.viewmodel'; // Update the path accordingly

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let dashboardViewModelSpy: jasmine.SpyObj<DashboardViewModel>;

  beforeEach(() => {
    const dashboardViewModelSpyObj = jasmine.createSpyObj('DashboardViewModel', ['fetchLaunchpads', 'filterLaunchpads']);
    
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      providers: [
        { provide: DashboardViewModel, useValue: dashboardViewModelSpyObj }
      ]
    });
    
    component = TestBed.createComponent(PaginationComponent).componentInstance;
    dashboardViewModelSpy = TestBed.inject(DashboardViewModel) as jasmine.SpyObj<DashboardViewModel>;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
