import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './Components/book-list/book-list.component';
import { CreateComponent } from './Components/create/create.component';

const routes: Routes =
  [
    {
      path: "book-list", component: BookListComponent
    },
    {
      path: "create", component: CreateComponent
    },
    /*{ path: '**', component: FormComponent }*/
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
