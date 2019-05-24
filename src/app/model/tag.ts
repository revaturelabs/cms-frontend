import { Content } from './content';
import { Module } from './module';

export class Tag {
  constructor(
    public id: number,
    public tagName: string,
    public type: string,
    public contentId: number,
    public moduleId: number,
    public dateCreated: Date,
    public dateUpdated: Date,
    public content: Content[],
    public modules: Module[]    
    
  ) {
  }
}
