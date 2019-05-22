import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Result } from '../model/result.model';
import { API_URL } from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http:HttpClient) { }

  getAllResults():Observable<Result[]>{
    return this.http.get<Result[]>(API_URL);
  }

  getResultsByTag(tagId:string):Observable<Result[]>{
    return this.http.get<Result[]>(API_URL + "/findByTags/tagId");
  }

  getResultsByTagAndCategory(tagsAndCategory:string):Observable<Result[]>{
    return this.http.get<Result[]>(API_URL + "/findByTagsAndCategory/tagsAndCategory");
  }
}
