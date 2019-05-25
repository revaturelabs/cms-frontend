import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../model/content';
import { Tag } from '../model/tag';
import { API_URL } from 'src/environments/environment'; 

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token' // This is supposed to be a key, not quite sure what ours will be, mysteries abound!
  })
};

/**
 * Provides get and post request methods to retrieve all contents, retrieve contents by tags, category, or tags and category
 */
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  /**
   * Sends a get request for retrieving all contents
   */
  getAllContents(): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL, httpOptions);
  }

  /**
   * Sends a post request for retrieving all contents
   * throws an error if unsuccessful
   */
  postAllContents(): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL, { /* NOTHING */ }, httpOptions)
      .pipe(
        // catchError(this.handleError('getContentsByTag', tagName))
      );
  }

  /**
   * Sends a get request for retrieving all contents by tag name
   */
  getContentsByTag(tagName: Tag[]): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL + '/findByTags/' + tagName, httpOptions);
  }

  /**
   * Sends a post request for retrieving all contents by tag name
   * throws an error if unsuccessful
   */
  postContentsByTag(tagName: Tag[]): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL + '/findByTags', { tagName }, httpOptions)
      .pipe(
        // catchError(this.handleError('getContentsByTag', tagName))
      );
  }

  /**
   * Sends a get request for retrieving all contents by category
   */
  getContentsByCategory(categoryName: string): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL + '/findByCategory/' + categoryName, httpOptions);
  }

  /**
   * Sends a post request for retrieving all contents by category
   * throws an error if unsuccessful
   */
  postContentsByCategory(categoryName: string): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL + '/findByCategory/', { categoryName }, httpOptions)
      .pipe(
        // catchError(this.handleError('getContentsByTag', tagName))
      );
  }

  /**
   * Sends a get request for retrieving all contents by given category and tags array
   */
  getContentsByTagAndCategory(tags: Tag[], category: string): Observable<Content[]> {
    return this.http.get<Content[]>(API_URL + '/findbytagsandcategory/' + tags + ',' + category, httpOptions);
  }

  /**
   * Sends a post request for retrieving all contents by given category and tags array
   * throws an error if unsuccessful
   */
  postContentsByTagAndCategory(tags: Tag[], category: string): Observable<Content[]> {
    return this.http.post<Content[]>(API_URL + '/findbytagsandcategory?category=' + category, { tags }, httpOptions)
      .pipe(
        // catchError(this.handleError('getContentsByTag', tagName))
      );
  }
  
}
