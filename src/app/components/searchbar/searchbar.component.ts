import { Component, OnInit } from '@angular/core';
import { Tag } from '../../model/tag';
import { SearchService } from '../../services/search.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private searchService: SearchService) { 
    this.tags = [];
  }

  ngOnInit() {
  }

  tags : Array<Tag>;

  addTag(name){
    let tag = new Tag(0, 0, "type",  "name", "url", 0, null, null); 
    this.tags.push(tag);
  }

  searchByTag(name){
    // Call Service instead
  }

  removeTag(tag){
    let index = this.tags.indexOf(tag);
    this.tags.splice(index,1);
  }

}
