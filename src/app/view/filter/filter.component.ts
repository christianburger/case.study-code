import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchTerm: string = ''; // Define searchTerm property

  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>(); // Emit event when filter changes

  constructor() {}

  applyFilter(): void {
    this.filterChange.emit(this.searchTerm); // Emit the searchTerm when applyFilter is called
  }
}
