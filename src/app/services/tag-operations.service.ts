import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import { API_URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {Content} from '../model/content';
import {InputContentDTO} from '../model/content.dto';

@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(private http: HttpClient) { }

   // Sends a get request to retrieve an array of tags

  retrieveAllTags() {

    return this.http.get<Tag[]>(`${API_URL}/tags/getall`);

  }

  retrieveAllModules() {
    return this.http.get<string[]>(`${API_URL}/module/alltags`);

  }

  retrieveAllContents() {
    // return this.http.get<Content[]>(`${API_URL}/tags`);
    return this.http.get<Content[]>(`${API_URL}/content/findall`);

  }

  //  * Sends a delete request to remove a tag by
  //  * @param id
    deleteTag(id) {
    // return this.http.delete(`${API_URL}/tags/${id}`);
    return this.http.delete(`${API_URL}/tags/delete/${id}`);
  }

  // /**
  //  * Sends a get request to retrieve a tag and prints a message to the console
  //  * @param id
  //  */
  retrieveTag(id) {
    // console.log('inside retrieve employee');
    // return this.http.get<Tag>(`${API_URL}/tags/${id}`);
    return this.http.get<Tag>(`${API_URL}/tags/getid/${id}`);
  }

  updateTag(id) {
    return this.http.put<Tag>(`${API_URL}/tags/id/${id}`, id);
  }

  createTag(Tag): Observable<Tag> {
    // return this.http.post<Tag>(`${API_URL}/tags`, Tag);
    return this.http.post<Tag>(`${API_URL}/tags/create`, Tag);

  }

  createContent(inputContent: InputContentDTO) {
    return this.http.post(`${API_URL}/content/register`, inputContent);
  }
}
