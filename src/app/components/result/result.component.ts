import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from 'src/app/model/content';
import { SearchService } from 'src/app/services/search.service';
import { ClientMessage } from 'src/app/model/client-message.model';
import { SearchbarComponent } from '../searchbar/searchbar.component';
/**
 * ResultComponent displays the results of searching for content
 */
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  router: Router;

  constructor(router: Router,private searchService : SearchService) {
    this.router = router;
  }
  @Input() contents: SearchbarComponent["contents"];
  

  
  public clientMessage: ClientMessage = new ClientMessage('');
  /**
   *  Populating with test data
   */
  // public results:Content[] = [ new Content(1,
  //   "2",
  //   "Description of Sample Content Goes Here",
  //   "Sample Content Name",
  //   "http://urlgoeshere.com",
  // public results:Content[] = [ new Content(1, 
  //   "2", 
  //   "Description of Sample Content Goes Here", 
  //   "Sample Content Name", 
  //   "http://urlgoeshere.com", 
  // public results:Content[] = [ new Content(1,
  //   "2",
  //   "Description of Sample Content Goes Here",
  //   "Sample Content Name",
  //   "http://urlgoeshere.com",
  //   [ 0, 1,2,3,4,5], new Date(1), new Date(0))];

  /**
   * Displays the result of searching for contents
   */
  //display all the result
  // displayAllResult(): void {
  //   this.searchService.getAllContents()
  //   .subscribe(data => this.contents = data,
  //     responseError => {
  //       this.contents = null;
  //       this.clientMessage = responseError.error;
  //     } ) 

  // }
  /**
   * On initialization call the displayResult method
   */

  // public name: string;         // The tagName user gave content
  // public url: string;          // The url user supplied that links to the content
  // public tags: number[];        // Array of every tag user assigned to this content
  // // public createdDate: number  //placeholder for created date
  // // public updatedDate: number  //placeholder for updated date
  //
  // // Populating with test data
  // public results: Content[] = [ new Content(1, '2', 'Description of Sample Content Goes Here',
  //   'Sample Content Name', 'http://urlgoeshere.com', [ 0, 1, 2, 3, 4, 5], null, null)];
  //

  ngOnInit() {
  }
}
