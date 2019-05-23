import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.model';
import { Tag } from '../model/tag';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http:HttpClient) { }

  getAllResults():Observable<Result[]>{
    // Get Method
    //return this.http.get<Result[]>(API_URL);
    // POST Method
    return this.http.post<Result[]>(API_URL, { } );
  }

  getResultsByTag(tagName:Tag[]):Observable<Result[]>{
    // GET Method
    //return this.http.get<Result[]>(API_URL + "/findByTags/" + tagName);
    // POST Method
    return this.http.post<Result[]>(API_URL  + "/findByTags", { tagName } );
  }

  getResultsByCategory(categoryName:string):Observable<Result[]>{
    // GET Method    
    //return this.http.get<Result[]>(API_URL + "/findByTags/" + categoryName);
    // POST Method
    return this.http.post<Result[]>(API_URL+ "/findByTags/", {   categoryName} );
  }

  getResultsByTagAndCategory(tags:Tag[], category:string ):Observable<Result[]>{
    // GET Method
    //return this.http.get<Result[]>(API_URL + "/findByTagsAndCategory/" + tagsAndCategory);
    // POST Method
    return this.http.post<Result[]>(API_URL + "/findByTagsAndCategory/", { tags, category } );
  }
}
