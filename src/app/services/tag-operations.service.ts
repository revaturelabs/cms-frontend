import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Tag} from '../model/tag';
import {API_URL} from '../app.constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagOperationsService {

  constructor(private http: HttpClient) { }

  retrieveAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${API_URL}/tags`);
  }

  deleteTag(id) {
    return this.http.delete<Tag>(`${API_URL}/tags/id/${id}`, id);
  }

  retrieveTag(id): Observable<Tag> {
    console.log('inside retrieve employee');
    return this.http.get<Tag>(`${API_URL}/tags/id/${id}`);
  }

  updateTag(id) {
    return this.http.put<Tag>(`${API_URL}/tags/id/${id}`, id);
  }

  createTag(Tag): Observable<Tag> {
    return this.http.post<Tag>(`${API_URL}/tags`, Tag);
  }
}
