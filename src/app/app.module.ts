import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
} from "@angular/material";
import { BlogListingComponent } from "./blog-listing/blog-listing.component";
import { CreateBlogComponent } from "./create-blog/create-blog.component";
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [AppComponent, BlogListingComponent, CreateBlogComponent, EditBlogComponent, ViewBlogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
