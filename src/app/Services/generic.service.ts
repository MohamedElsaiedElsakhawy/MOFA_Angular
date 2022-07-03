import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T>
{
  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  get(): Observable<T[]> {
    return this.http.get<T[]>(this.url);
  }

  post(request: T) {
    return this.http.post<T>(this.url, request);
  }

  put(request: any) {

    return this.http.put(`${this.url}/${request.id}`, request);
  }

  delete(request: any) {
    return this.http.delete(`${this.url}/${request.id}`);
  }

  getById(request: any): Observable<T>
  {
    return this.http.get<T>(`${this.url}/${request.id}`);
  }
}
