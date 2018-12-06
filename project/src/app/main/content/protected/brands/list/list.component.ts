import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //list table
  displayColumns: string[] = ['id','name'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.dataSource = ELEMENT_DATA;
  }

}

// data structure
export interface PeriodicElement {
  id: number;
  name: string;
}
// data
const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'a'},
  {id: 2, name: 'b'},
  {id: 3, name: 'c'},
  {id: 4, name: 'd'},
];
