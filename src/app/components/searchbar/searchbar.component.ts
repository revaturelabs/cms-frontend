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

  tags: Tag[];

  ngOnInit() {
  }

  addTag() {
    const tag = new Tag(0, 0, 'type',  'tagName', 0, null, null);
    this.tags.push(tag);
  }

  removeTag(tag) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
  }

}
