import { Component, OnInit } from '@angular/core';
import { Tag } from '../../model/tag';
import { SearchService } from '../../services/search.service';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * Component for handling the search bar functionality
 */
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private searchService: SearchService) {
    this.tags = [];
  }

  tags: Tag[];

  ngOnInit() {
  }

  //  Adds a tag with default data to the tags array
  //  @param name name

  addTag(name) {
    const tag = new Tag(0, name, '', 0, 0, null, null, null, null);
    this.tags.push(tag);
    console.log(this.tags);
    this.searchService.postContentsByTag(this.tags);
  }

  /**
   * Takes a tag parameter and removes that tag from tags array
   * @param tag tag
   */
  removeTag(tag) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
    console.log(this.tags);
    this.searchService.postContentsByTag(this.tags);
  }

}
