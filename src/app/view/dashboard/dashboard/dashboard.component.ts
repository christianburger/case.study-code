import { Component, OnInit } from '@angular/core';
import { LaunchpadApiService } from '../../../model/services/launchpad-api.service';
import { DashboardViewModel } from '../../../viewmodel/dashboard.viewmodel';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  viewModel!: DashboardViewModel;
  currentPage: number = 1;
  itemsPerPage: number = 5;

  constructor(private launchpadApiService: LaunchpadApiService, private dashboardViewModel: DashboardViewModel) {
    this.viewModel = this.dashboardViewModel;
  }

  ngOnInit(): void {
    this.viewModel.fetchLaunchpads().subscribe(() => {
      // Ensure consistency between view model and services
      console.log('Launchpads fetched:', this.viewModel.launchpads);
    });
  }

  get totalPages(): number {
    return Math.ceil(this.viewModel.launchpads.length / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

}
