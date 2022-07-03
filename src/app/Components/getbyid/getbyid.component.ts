import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../Services/book.service';

@Component({
  selector: 'getbyid',
  templateUrl: './getbyid.component.html',
  styleUrls: ['./getbyid.component.scss']
})
export class GetbyidComponent  {

  title = 'datatables';
  dtOptions: DataTables.Settings = {};

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

  getByIdBookForm = new FormGroup({
    id: new FormControl('', [Validators.required])
  });

  book: any;

  getByIdBook() {
    this.book = this.getByIdBookForm.value;
    this.service.getById(this.book).subscribe((response: any) => {
      console.log(response);
      this.book = response;
    },
      error => alert("Not Exist"));
  }

}
