import { Content } from './content';
import { Module } from './module';

export class Tag {
  constructor(
    public id: number,
    public contentId: number,
<<<<<<< HEAD
    public type: string,
=======
    public category:string, // this is what the backend calls "category" of content
>>>>>>> f8c06fee327e681b364952a620e031b1ce9f492a
    public name: string,
    public moduleId: number,
    public contentIds: Content[],
    public modules: Module[],
    public created: Date,
    public updated: Date
  ) {
  }
}
