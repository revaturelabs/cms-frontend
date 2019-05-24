import { Content } from './content';
import { Module } from './module';

export class Tag {
  constructor(
    public id: number,
    public contentId: number,
    public type: string,
    public name: string,
    public moduleId: number,
    public contentIds: Content[],
    public modules: Module[],
    public created: Date,
    public updated: Date
  ) {
  }
}
