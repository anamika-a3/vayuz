import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";

export interface PeriodicElement {
  userName: string;
  contentTitle: string;
  description: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    userName: "Hydrogen",
    contentTitle: "contentTitle1",
    description: "abc",
    action: "",
  },
  {
    userName: "Hydrogen",
    contentTitle: "contentTitle1",
    description: "abc",
    action: "",
  },
  {
    userName: "Hydrogen",
    contentTitle: "contentTitle1",
    description: "abc",
    action: "",
  },
  {
    userName: "Hydrogen",
    contentTitle: "contentTitle1",
    description: "abc",
    action: "",
  },
  {
    userName: "Hydrogen",
    contentTitle: "contentTitle1",
    description: "abc",
    action: "",
  },
  {
    userName: "Hydrogen",
    contentTitle: "contentTitle1",
    description: "abc",
    action: "",
  },
];

@Component({
  selector: "app-view-blog",
  templateUrl: "./view-blog.component.html",
  styleUrls: ["./view-blog.component.css"],
})
export class ViewBlogComponent implements OnInit {
  constructor() {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = [
    "userName",
    "contentTitle",
    "description",
    "action",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
