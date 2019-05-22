import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import { ResultList } from '../model/result-list.model';
import { USER_URL } from 'src/environments/environment';

// @Injectable()
export class ResultService {

//   constructor(private http: HttpClient) { }
//   public displayResult(): Observable<ResultList> {
//     console.log("Inservice");
//     return this.http
//             .get<any>(`${USER_URL}/resultMethod`)
//             .catch(this.handleError);
//   }
//   private handleError(response: Response) {
//     return Observable.throw(response);
//   }
}
