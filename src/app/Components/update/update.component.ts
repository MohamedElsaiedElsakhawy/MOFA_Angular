import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../Services/book.service';
import { Book } from '../book-list/models/book.model';

@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent
{
  books: Book[];

  constructor(private service: BookService) {
    this.service = service;
  }

  updateBookForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    numberOfPages: new FormControl('', [Validators.required]),
    publishedAt: new FormControl('', [Validators.required]),
  });

  book: any;

  updateBook()
  {
    this.book = this.updateBookForm.value;
    this.service.put(this.book).subscribe((response: any) => {
      alert("Updated Successfully..!");
      console.log(response);
      this.service.get().subscribe(response => { this.books = response });
    });
  }
}
