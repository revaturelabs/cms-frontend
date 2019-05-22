export class Result{
    contentId:string;
    created:string;
    updated:string;
    label:string;
    description:string;
    name:string;
    tag: string;
    link: string;
    //add constructor if want to pass from backend
    constructor(name:string,tag:string, link:string, contentId:string,created:string,
                updated:string, label:string, description:string){
        this.contentId = contentId;
        this.created = created;
        this.updated = updated;
        this.label = label;
        this.description = description;
        this.name = name;
        this.tag = tag;
        this.link = link
    }
}