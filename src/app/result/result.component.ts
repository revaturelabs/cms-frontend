import { Component, OnInit, Input } from '@angular/core';
import { resultList } from '../model/result-list.model';
import { Result } from '../model/result.model';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public results: Result = new Result("","","","","","","","");
  public contentId:string;
  public createdDate:string;
  public updatedDate:string;
  public label:string;
  public description:string;
  public name:string;
  public tag: string;
  public link: string;
  
displayResult(): void{


}
ngOnInit(){
  this.displayResult;
}

  }


