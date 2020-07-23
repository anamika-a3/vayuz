import { Component } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Vayuz";

  constructor(private route: Router) {}

  emailFormControl = new FormControl("", [
    Validators.required,
    Validators.email,
  ]);

  submit() {
    alert("Form submitted!! Going to Blog List");
    this.route.navigateByUrl("/blogList");
  }
}
