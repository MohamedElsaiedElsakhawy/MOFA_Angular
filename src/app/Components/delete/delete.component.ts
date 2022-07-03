import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../Services/book.service';
import { Book } from '../book-list/models/book.model';

@Component({
  selector: 'delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(private service: BookService) {
    this.service = service;
  }

  deleteBookForm = new FormGroup({
    id: new FormControl('', [Validators.required])
  });

  book: any;

  deleteBook()
  {
    this.book = this.deleteBookForm.value;
    this.service.delete(this.book).subscribe((response: any) =>
    {
      alert("Deleted Success");
    });
  }
}
