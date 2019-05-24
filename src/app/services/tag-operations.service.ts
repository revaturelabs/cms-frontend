import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import { API_URL } from 'src/environments/environment';
/**
 * Provides methods to retrieve all tags, delete a tag, retrieve a single tag by id, update a tag, and to create a tag
 */
@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Sends a get request to retrieve an array of tags 
   */
  retrieveAllTags() {
    return this.http.get<Tag[]>(`${API_URL}/tags`);
  }

  /**
   * Sends a delete request to remove a tag by
   * @param id 
   */
  deleteTag(id) {
    return this.http.delete(`${API_URL}/tags/id/${id}`);
  }

  /**
   * Sends a get request to retrieve a tag and prints a message to the console
   * @param id 
   */
  retrieveTag(id) {
    console.log('inside retrieve employee');
    return this.http.get<Tag>(`${API_URL}/tags/id/${id}`);
  }

  /**
   * Sends a put request to a tag with the provided id 
   * @param id 
   * @param tag 
   */
  updateTag(id, tag) {
    return this.http.put(
      `${API_URL}/tags/id/${id}`
      , tag);
  }

  /**
   * Sends a post request to add a new tag
   * @param tag 
   */
  createTag(tag) {
    return this.http.post(
      `${API_URL}/tags`
      , tag);
  }
}
