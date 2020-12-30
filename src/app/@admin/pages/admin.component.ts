import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  toggledValue = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggled($event) {
    debugger
    this.toggledValue = $event;
  }
}
