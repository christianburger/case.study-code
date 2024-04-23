import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  searchTerm: string = ''; 
  @Output() filterChange: EventEmitter<string> = new EventEmitter<string>(); 
 
  constructor() {}

  applyFilter(): void {
    this.filterChange.emit(this.searchTerm); 
  }
}
