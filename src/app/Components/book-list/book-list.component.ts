import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/book.service';
import { Book } from './models/book.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})

export class BookListComponent implements OnInit {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};

  books: Book[];


  constructor(private service: BookService) {
    //#region DataTable
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      processing: true
    };
    //#endregion

    this.service = service;
  }

  ngOnInit(): void {
    this.service.get().subscribe(response => { this.books = response });
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
      this.service.get().subscribe(response => { this.books = response });
    });
  }
}
