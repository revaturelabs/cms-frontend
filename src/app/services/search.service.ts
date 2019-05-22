import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url:string = "urlGoesHereGibby";
  constructor(private http:HttpClient) { }

  getAllResults():Observable<Result[]>{
    return this.http.get<Result[]>(this.url);
  }
}
