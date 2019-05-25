import { Tag } from './tag';

/**
 * Object model for the Content table.
 * Represents all metadata on content, and a link to that content.
 */


export class Content {
    constructor(
        public id: number,            // Primary key of content
        public tags: Tag[],        // Array of every tag user assigned to this content
        public description: string,   // The description user gave content
        public category: string,      // The Category user gave content (ie. code example, notes)        
        public name: string,          // The name user gave content
        public url: string,           // The url user supplied that links to the content       
        public dateCreated: Date,  // placeholder for created date
        public dateUpdated: Date  // placeholder for updated date
    ) {
    }

}
