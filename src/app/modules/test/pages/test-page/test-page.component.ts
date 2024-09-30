import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-test-page',
    templateUrl: './test-page.component.html',
    styleUrls: ['./test-page.component.css'],
    standalone: true
})
export class TestPageComponent implements OnInit {
  data:any[] = [];
  dateValue: Date = new Date();

  constructor() { }

  ngOnInit(): void {


  }

}
