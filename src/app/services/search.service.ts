import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../model/content';
import { Tag } from '../model/tag';
import { API_URL } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token' // This is supposed to be a key, not quite sure what ours will be, mysteries abound!
  })
};

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  getAllContents(): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL, httpOptions);
  }

  postAllContents(): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL, { /* NOTHING */ }, httpOptions)
      .pipe(
        //catchError(this.handleError('getContentsByTag', tagName))
      );
  }

  getContentsByTag(tagName: Tag[]): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL + "/findByTags/" + tagName, httpOptions);
  }

  postContentsByTag(tagName: Tag[]): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL + "/findByTags", { tagName }, httpOptions)
      .pipe(
        //catchError(this.handleError('getContentsByTag', tagName))
      );
  }

  getContentsByCategory(categoryName: string): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL + "/findByCategory/" + categoryName, httpOptions);
  }

  postContentsByCategory(categoryName: string): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL + "/findByCategory/", { categoryName }, httpOptions)
      .pipe(
        //catchError(this.handleError('getContentsByTag', tagName))
      );
  }

  getContentsByTagAndCategory(tags: Tag[], category: string): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL + "/findbytagsandcategory/" + tags + "," + category, httpOptions);
  }

  postContentsByTagAndCategory(tags: Tag[], category: string): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL + "/findbytagsandcategory?category=" + category, { tags }, httpOptions)
      .pipe(
        //catchError(this.handleError('getContentsByTag', tagName))
      );
  }
}
//change