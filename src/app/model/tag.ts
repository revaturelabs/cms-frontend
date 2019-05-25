export class Tag {
  constructor(
    public id: number,
    public contentId: number,
    public type: string,
    // public category: string, // this is what the backend calls "category" of content
    public tagName: string,
    public moduleId: number,
    // public contentIds: Content[],
    // public modules: Module[],
    public created: Date,
    public updated: Date
  ) {
  }
}
