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
    let tag = new Tag(0, name, 0, "", "", "");
    this.tags.push(tag);
  }

  removeTag(tag){
    let index = this.tags.indexOf(tag);
    this.tags.splice(index,1);
  }

}
