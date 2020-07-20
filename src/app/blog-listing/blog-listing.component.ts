import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTableDataSource, MatPaginator } from "@angular/material";

export interface PeriodicElement {
  title: string;
  userName: string;
  createdOn: string;
  status: string;
  action: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    title: "Title1",
    userName: "Hydrogen",
    createdOn: "10/06/199",
    status: "active",
    action: "action",
  },
  {
    title: "Title1",
    userName: "Hydrogen",
    createdOn: "10/06/199",
    status: "active",
    action: "action",
  },
  {
    title: "Title1",
    userName: "Hydrogen",
    createdOn: "10/06/199",
    status: "active",
    action: "action",
  },
  {
    title: "Title1",
    userName: "Hydrogen",
    createdOn: "10/06/199",
    status: "active",
    action: "action",
  },
  {
    title: "Title1",
    userName: "Hydrogen",
    createdOn: "10/06/199",
    status: "active",
    action: "action",
  },
  {
    title: "Title1",
    userName: "Hydrogen",
    createdOn: "10/06/199",
    status: "active",
    action: "action",
  },
];

@Component({
  selector: "app-blog-listing",
  templateUrl: "./blog-listing.component.html",
  styleUrls: ["./blog-listing.component.css"],
})
export class BlogListingComponent implements OnInit {
  constructor() {}
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
  displayedColumns: string[] = [
    "title",
    "userName",
    "createdOn",
    "status",
    "action",
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
