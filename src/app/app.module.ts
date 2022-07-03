import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateComponent } from './Components/create/create.component';
import { RouterModule } from '@angular/router';
import { UpdateComponent } from './Components/update/update.component';
import { DeleteComponent } from './Components/delete/delete.component';
import { GetbyidComponent } from './Components/getbyid/getbyid.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavbarComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GetbyidComponent,
    //RouterModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DataTablesModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
