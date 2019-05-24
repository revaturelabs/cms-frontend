import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import {API_URL} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTags() {
    return this.http.get<Tag[]>(`${API_URL}/tags/getall`);

  }

  deleteTag(id) {
    return this.http.delete(`${API_URL}/tags/${id}`);
  }

  retrieveTag(id) {
    // console.log('inside retrieve employee');
    return this.http.get<Tag>(`${API_URL}/tags/${id}`);
  }

  updateTag(id, tag) {
    return this.http.put(
      `${API_URL}/tags/id/${id}`
      , tag);
  }

  createTag(tag) {
    return this.http.post(
      `${API_URL}/tags`
      , tag);
  }
}
