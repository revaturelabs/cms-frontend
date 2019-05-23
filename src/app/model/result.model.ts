export class Result{
    contentId:string;
    name:string;
    tag: string;
    link: string;
    label:string;
    description:string;
    createdDate:string;
    updatedDate:string;
    
    
    
    //add constructor if want to pass from backend
    constructor(name:string,tag:string, link:string, contentId:string,createdDate:string,
                updatedDate:string, label:string, description:string){
        this.contentId = contentId;
        this.name = name;
        this.tag = tag;
        this.link = link
        this.label = label;
        this.description = description;
        this.createdDate = createdDate;
        this.updatedDate = updatedDate;
       
       
    }
}
