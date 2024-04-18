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
  searchTerm: string = '';
  pagedLaunchpads: any[] = []; // Define pagedLaunchpads array

  constructor(private dashboardViewModel: DashboardViewModel) {
    this.viewModel = this.dashboardViewModel;
  }

  ngOnInit(): void {
    this.viewModel.fetchLaunchpads().subscribe(() => {
      console.log('Launchpads fetched:', this.viewModel.launchpads);
      this.applyFilter();
    });
  }

  get totalPages(): number {
    return Math.ceil(this.viewModel.filteredLaunchpads.length / this.itemsPerPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.applyFilter(); // Update the filtered launchpads when navigating
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.applyFilter(); // Update the filtered launchpads when navigating
    }
  }

  applyFilter(): void {
    this.viewModel.filterLaunchpads(this.searchTerm);
    this.updatePagedLaunchpads(); // Update the paged launchpads after filtering
  }

  onFilterChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.applyFilter();
  }

  onItemSelectionChange(event: any): void {
    console.log('Selected item:', event.option.value);
  }

  pageChanged(pageNumber: number): void {
    this.currentPage = pageNumber; // Update current page number
    this.updatePagedLaunchpads(); // Update the paged launchpads when page changes
    console.log('Page changed to:', pageNumber);
  }

  updatePagedLaunchpads(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.pagedLaunchpads = this.viewModel.filteredLaunchpads.slice(startIndex, endIndex);
  }
}
