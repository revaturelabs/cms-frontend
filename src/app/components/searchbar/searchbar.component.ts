import { Component, OnInit } from '@angular/core';
import { Tag } from '../../model/tag';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

}
