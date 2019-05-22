//Object model for the Content table.
//Represents all metadata on content, and a link to that content.

export class Content {
    constructor(
    public id: number,            //Primary key of content
    public category: string,      //The Category user gave content
    public description: string,   //The description user gave content
    public name: string,          //The name user gave content
    public url: string,           //The url user supplied that links to the content
    public tags: number[],         //Array of every tag user assigned to this content
    ) {
    }
    //public createdDate: number        //placeholder: time of creation in millis
    //public updatedDate: number        //placeholder: time of update in millis
}