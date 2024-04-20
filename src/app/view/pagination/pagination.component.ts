import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DashboardViewModel } from '../../viewmodel/dashboard.viewmodel';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  @Input() totalItems: number = 0;
  @Input() itemsPerPage: number = 5;
  @Input() currentPage: number = 1;
  @Output() currentPageChange: EventEmitter<number> = new EventEmitter<number>(); // Add this line
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  get totalPages(): number {
    return this.viewModel.filteredLaunchpads ? Math.ceil(this.viewModel.filteredLaunchpads.length / this.itemsPerPage) : 0;
  }
  
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.currentPageChange.emit(this.currentPage); // Emit currentPageChange event
      this.pageChanged.emit(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.currentPageChange.emit(this.currentPage); // Emit currentPageChange event
      this.pageChanged.emit(this.currentPage);
    }
  }

  constructor(public viewModel: DashboardViewModel) {}
}
