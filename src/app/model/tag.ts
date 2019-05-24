import { Content } from './content';
import { Module } from './module';

export class Tag {
  constructor(
    public id: number,
    public contentId: number,
    public category:string, // this is what the backend calls "category" of content
    public name: string,
    public url: string,
    public moduleId:number,
    public contentIds:Content[],
    public modules:Module[]
    //public description: Date,
    //public category: Date
  ) {
  }
}
