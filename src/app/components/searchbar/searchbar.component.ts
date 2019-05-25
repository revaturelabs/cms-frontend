import { Component, OnInit } from '@angular/core';
import { Tag } from '../../model/tag';
import { SearchService } from '../../services/search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Content } from 'src/app/model/content';

/**
 * Component for handling the search bar functionality
 */
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
  
})
export class SearchbarComponent implements OnInit {

  //dummy data to pass from searchbar to result component . Work
  // public results:Content[] = [ new Content(1, 
  //   "2", 
  //   "Description of Sample Content Goes Here", 
  //   "Sample Content Name", 
  //   "http://urlgoeshere.com", 
  //   [ 0, 1,2,3,4,5], new Date(1), new Date(0))];
  public results: Content[];

  constructor(private searchService: SearchService) {
    this.tags = [];
  }

  tags: Array<Tag>;
  contents:Content[]

  ngOnInit() {
  }

  //  Adds a tag with default data to the tags array
  //  @param name name

  addTag(name) {
    const tag = new Tag(0, name, '', 0, 0, null, null, null, null);
    this.tags.push(tag);
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

  postContentsByTag(tagName: Tag[]){this.searchService.postContentsByTag(tagName).subscribe(
    results => this.contents = results ); 
  }
 
  // postContentsByCategory(categoryName: string){this.searchService.postContentsByCategory(categoryName).subscribe(
  //   results => this.contents = results ); 
  // }
  getContentsByCategory(categoryName: string){this.searchService.getContentsByCategory(categoryName).subscribe(
    results => this.contents = results ); 
  }


  postContentsByTagAndCategory(tags: Tag[], category: string){
    this.searchService.postContentsByTagAndCategory(tags, category).subscribe(
      results => this.contents = results ); 
    }
}
