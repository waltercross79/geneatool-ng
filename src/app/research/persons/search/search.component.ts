import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../../records/filters/filters.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSelectedFilters(filters: SearchCriteria) {
    // run the search
    console.log(filters);
  }
}
