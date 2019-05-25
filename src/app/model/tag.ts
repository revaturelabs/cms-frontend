import { Content } from './content';
import { Module } from './module';

export class Tag {
  constructor(
    public id: number,              // Primary key of tag
    public contentId: number,       // Foreign key to content table
    public category:string,         // this is what the backend calls "category" of content
    public name: string,            // Name of tag. Displays to user should show this
    public moduleId: number,        // Foreign key to module table
    public contentIds: Content[],   // Array of content objects that have this tag as part of them
    public modules: Module[],       // Array of module objects that have this tag as part of them
    public created: Date,           // Date object representing when tag was originally created
    public updated: Date            // Date object representing last time the tag was updated
  ) {
  }
}
