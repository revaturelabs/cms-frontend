export class Result{
    name:string;
    tag: string;
    link: string;
    //add constructor if want to pass from backend
    constructor(name:string,tag:string, link:string){
        this.name = name;
        this.tag = tag;
        this.link = link
    }
}