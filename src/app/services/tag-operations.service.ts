import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';

/**
 * Provides methods to create a tag, update a tag, retrieve a tag by id, retrieve all tags, and delete a tag by id
 */
@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(private http: HttpClient) { }

  /**
   * Sends a get request to retrieve all tags
   */
  retrieveAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${API_URL}/tags`);
  }

  /**
   * Sends a delete request to remove a tag by id
   * @param id 
   */
  deleteTag(id) {
    return this.http.delete<Tag>(`${API_URL}/tags/id/${id}`, id);
  }

  /**
   * Sends a get request to retrieve a tag by id
   * @param id 
   */
  retrieveTag(id): Observable<Tag> {
    console.log('inside retrieve employee');
    return this.http.get<Tag>(`${API_URL}/tags/id/${id}`);
  }

  /**
   * Sends a put request to update a tag by id
   * @param id 
   */
  updateTag(id) {
    return this.http.put<Tag>(`${API_URL}/tags/id/${id}`, id);
  }

  /**
   * Sends a post request to create a new tag
   * @param Tag 
   */
  createTag(Tag): Observable<Tag> {
    return this.http.post<Tag>(`${API_URL}/tags`, Tag);
  }
}
