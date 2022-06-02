import { Component, OnInit } from '@angular/core';
import { listOfProducts } from './list';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {

  listOfItems:any[] = listOfProducts

  constructor() { }

  ngOnInit() {
  }

}
