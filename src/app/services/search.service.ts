import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Result } from '../model/result.model';
import { Tag } from '../model/tag';
import { API_URL } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getAllResults():Observable<Result[]>{
    // Get Method
    //return this.http.get<Result[]>(API_URL);
    // POST Method
    return this.http.post<Result[]>(API_URL, { /* NOTHING */ }, httpOptions  )
    .pipe(
      //catchError(this.handleError('getResultsByTag', tagName))
    );
  }

  getResultsByTag(tagName:Tag[]):Observable<Result[]>{
    // GET Method
    //return this.http.get<Result[]>(API_URL + "/findByTags/" + tagName);
    // POST Method
    return this.http.post<Result[]>(API_URL  + "/findByTags", { tagName } , httpOptions  )
    .pipe(
      //catchError(this.handleError('getResultsByTag', tagName))
    );
  }

  getResultsByCategory(categoryName:string):Observable<Result[]>{
    // GET Method    
    //return this.http.get<Result[]>(API_URL + "/findByTags/" + categoryName);
    // POST Method
    return this.http.post<Result[]>(API_URL+ "/findByCategory/", { categoryName }, httpOptions  )
    .pipe(
      //catchError(this.handleError('getResultsByTag', tagName))
    );
  }

  getResultsByTagAndCategory(tags:Tag[], category:string ):Observable<Result[]>{
    // GET Method
    //return this.http.get<Result[]>(API_URL + "/findByTagsAndCategory/" + tagsAndCategory);
    // POST Method
    return this.http.post<Result[]>(API_URL + "/findByTagsAndCategory/", { tags, category }, httpOptions  )
    .pipe(
      //catchError(this.handleError('getResultsByTag', tagName))
    );
  }
}
