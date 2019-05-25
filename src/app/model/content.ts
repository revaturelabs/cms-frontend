export class Content {
  constructor(
    public id: number,            // Primary key of content
    public category: string,      // The Category user gave content (ie. code example, notes)
    public description: string,   // The description user gave content
    public name: string,          // The tagName user gave content
    public url: string,           // The url user supplied that links to the content
    public tags: number[],        // Array of every tag user assigned to this content
    public createdDate: Date,  // placeholder for created date
    public updatedDate: Date  // placeholder for updated date
  ) {
  }

}

