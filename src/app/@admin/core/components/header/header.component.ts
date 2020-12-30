import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggledValue = true;
  @Output() toggleChange = new EventEmitter<Boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  toggled() {
    // if (!this.toggledValue) {
    //   this.toggledValue = true;
    // }
    this.toggledValue = !this.toggledValue;
    this.toggleChange.emit(this.toggledValue);
  }
}
