import { Tag } from './tag';

export class Content {
  constructor(
    public contentId: number,            // Primary key of content
    public tags: Tag[],        // Array of every tag user assigned to this content
    public description: string,   // The description user gave content
    public category: string,      // The Category user gave content (ie. code example, notes)
    
    public name: string,          // The tagName user gave content
    public url: string,           // The url user supplied that links to the content
    
    public dateCreated: Date,  // placeholder for created date
    public dateUpdated: Date  // placeholder for updated date
  ) {
  }

}

