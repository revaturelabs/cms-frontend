import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import {API_URL} from '../app.constants';
import {Content} from "../model/content";
import {Module} from "../model/module";

@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(
    private http: HttpClient
  ) { }

  retrieveAllTags() {
    return this.http.get<Tag[]>(`${API_URL}/tags`);

  }

  retrieveAllModules() {
    return this.http.get<Module[]>(`${API_URL}/allmodules`);

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
}
