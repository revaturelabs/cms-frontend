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

  tags: Array<Tag>;

  ngOnInit() {
  }

  addTag(name) {
    const tag = new Tag(0, 0, 'type',  name, 0, null, null, null, null);
    this.tags.push(tag);
    console.log(this.tags);
    this.searchService.postContentsByTag(this.tags);
  }

  removeTag(tag) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
    console.log(this.tags);
    this.searchService.postContentsByTag(this.tags);
  }

}
