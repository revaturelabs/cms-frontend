export class Result{
    contentId:string;
    createdDate:string;
    updatedDate:string;
    label:string;
    description:string;
    name:string;
    tag: string;
    link: string;
    //add constructor if want to pass from backend
    constructor(name:string,tag:string, link:string, contentId:string,createdDate:string,
                updatedDate:string, label:string, description:string){
        this.contentId = contentId;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
        this.label = label;
        this.description = description;
        this.name = name;
        this.tag = tag;
        this.link = link
    }
}