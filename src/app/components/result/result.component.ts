import { Component, OnInit, Input } from '@angular/core';
// import { resultList } from '../model/result-list.model';
import { Result } from '../model/result.model';
import { Router} from '@angular/router';
import { ResultList } from '../model/result-list.model';
import { ClientMessage } from '../model/client-message.model';
import { ResultService } from '../service/result.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  public results: ResultList = new ResultList([]);
  public clientMessage: ClientMessage = new ClientMessage('No information to display.');
  router: Router;
 constructor(router: Router,private resultService: ResultService){
 this.router = router;
 }
 displayResult(): void{
  console.log("Work");
  this.resultService.displayResult()
  .subscribe( 
    data => {this.results = data,
    console.log(this.results)},
    responseError => this.clientMessage = responseError.error
  );
}

  // public results: Result = new Result("","","","","","","","");
  // public contentId:string;
  // public createdDate:string;
  // public updatedDate:string;
  // public label:string;
  // public description:string;
  // public name:string;
  // public tag: string;
  // public link: string;
  //dummy data
  // result = resultList;
ngOnInit(){
  this.displayResult();
}

  }


