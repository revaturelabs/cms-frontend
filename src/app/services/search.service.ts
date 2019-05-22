import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url:string = "urlGoesHereGibby";
  constructor(private http:HttpClient) { }

  getAllResults():Observable<Request[]>{
    return this.http.get<Request[]>(this.url);
  }
}
