import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../Services/book.service';
import { Book } from '../book-list/models/book.model';

@Component({
  selector: 'create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent  {

  books: Book[];

  constructor(private service: BookService) {
    this.service = service;
  }

  addBookForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    numberOfPages: new FormControl('', [Validators.required]),
    publishedAt: new FormControl('', [Validators.required]),
  });

  book: any;

  saveBook() {
    this.book = this.addBookForm.value;
    this.service.post(this.book).subscribe((response: any) => {
      alert("Success");
      console.log(response);
      this.service.get().subscribe(response => { this.books = response });
    });
  }

}
