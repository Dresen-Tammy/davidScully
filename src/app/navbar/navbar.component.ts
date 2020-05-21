import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollToAbout() {
    // TODO: Scroll to about section
  }

  public scrollToWork() {
    // TODO: Scroll to work section
  }
}
