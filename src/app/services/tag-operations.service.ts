import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import {API_URL} from '../app.constants';
import {Content} from '../model/content';
import {Module} from '../model/module';
import {InputContentDTO} from '../model/content.dto';

@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTags() {
    return this.http.get<Tag[]>(`${API_URL}tags/getall`);

  }

  retrieveAllModules() {
    return this.http.get<string[]>(`${API_URL}module/alltags`);

  }

  retrieveAllContents() {
    return this.http.get<Content[]>(`${API_URL}/tags`);

  }

  deleteTag(id) {
    return this.http.delete(`${API_URL}/tags/id/${id}`);
  }

  retrieveTag(id) {
    console.log('inside retrieve employee');
    return this.http.get<Tag>(`${API_URL}/tags/id/${id}`);
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

  createContent(inputContent: InputContentDTO) {
    return this.http.post(`${API_URL}content/register`, inputContent);
  }
}
