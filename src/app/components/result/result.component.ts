import { Component, OnInit, Input } from '@angular/core';
import { Router} from '@angular/router';
import { ResultList } from '../../model/result-list.model';
import { ResultService } from '../../services/result.service';
import { Result } from '../../model/result.model';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: Result[] = ResultList;
//   public results: ResultList = new ResultList([]);
//   public clientMessage: ClientMessage = new ClientMessage('No information to display.');
//   router: Router;
//  constructor(router: Router,private resultService: ResultService){
//  this.router = router;
//  }
//  displayResult(): void{
//   console.log("Work");
//   this.resultService.displayResult()
//   .subscribe( 
//     data => {this.results = data,
//     console.log(this.results)},
//     responseError => this.clientMessage = responseError.error
//   );
ngOnInit(){
  // this.displayResult();
}
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
// ngOnInit(){
//   this.displayResult();
// }

  // }


