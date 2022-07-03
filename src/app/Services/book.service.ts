import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GenericService } from 'src/app/Services/generic.service';
import { Book } from '../Components/book-list/models/book.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class BookService extends GenericService<Book>
{
  constructor(http: HttpClient) {
    super("https://localhost:7079/api/Books", http);
  }

  //constructor(private http: HttpClient) { }

  //public saveUser(user: Book): Observable<any> {
  //  const url = 'https://localhost:7079/api/Books';
  //  return this.http.post<any>(url, user);
  //}

  //public saveBook(book: Book): Observable<any> {
  //  const url = 'https://localhost:7079/api/Books';
  //  return this.post(book);
  //}
}
