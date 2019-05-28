import { Component, OnInit } from '@angular/core';
import { SearchTag } from '../../model/SearchTag';
import { SearchService } from '../../services/search.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Content } from '../../model/content';

/**
 * Component for handling the search bar functionality
 */
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
  
})
export class SearchbarComponent implements OnInit {

  // categoryForm: FormGroup;
  // categories = ['notes', 'exercise', 'code', 'all'];

  constructor(
    private searchService: SearchService,
    // private fb: FormBuilder
    ) {
    this.tags = [];
  }
  
  tags: Array<SearchTag>;
  contents: Content[];

  

  ngOnInit() {
    // this.categoryForm = this.fb.group({
    //   categoryControl: ['all']
    // })
  }

  //  Adds a tag with default data to the tags array
  //  @param name name

  addTag(name) {
    const tag = new SearchTag(name);
    if(this.tags.length < 1){
      this.tags.push(tag);
    }
    for (let tag of this.tags){
      if(name === tag.tagName){
        console.log("Term already searched");
      } else {
        this.tags.push(tag);
      }
    }    
    console.log(this.tags);
    this.postContentsByTag(this.tags);
  }

  /**
   * Takes a tag parameter and removes that tag from tags array
   * @param tag tag
   */
  removeTag(tag) {
    const index = this.tags.indexOf(tag);
    this.tags.splice(index, 1);
    console.log(this.tags);
    this.postContentsByTag(this.tags);
  }

  // postAllContents(){this.searchService.postAllContents().subscribe(
  //   results => this.contents = results ); 
  // }

  postContentsByTag(tagName: SearchTag[]){this.searchService.postContentsByTag(tagName).subscribe(
    response => {
      console.log(response);
      this.contents = response;
    }
    );
  }
 
  // postContentsByCategory(categoryName: string){this.searchService.postContentsByCategory(categoryName).subscribe(
  //   results => this.contents = results ); 
  // }
  getContentsByCategory(categoryName: string){this.searchService.getContentsByCategory(categoryName).subscribe(
    results => this.contents = results ); 
  }


  postContentsByTagAndCategory(tags: SearchTag[], category: string){
    this.searchService.postContentsByTagAndCategory(tags, category).subscribe(
      results => this.contents = results ); 
    }
}
