import { AppComponent } from "./app.component";
import { BlogListingComponent } from "./blog-listing/blog-listing.component";
import { CreateBlogComponent } from "./create-blog/create-blog.component";
import { EditBlogComponent } from "./edit-blog/edit-blog.component";
import { ViewBlogComponent } from "./view-blog/view-blog.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "home", component: AppComponent },
  { path: "blogList", component: BlogListingComponent },
  { path: "createBlog", component: CreateBlogComponent },
  { path: "editBlog", component: EditBlogComponent },
  { path: "viewBlog", component: ViewBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  AppComponent,
  BlogListingComponent,
  CreateBlogComponent,
  EditBlogComponent,
  ViewBlogComponent,
];

