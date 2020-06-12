import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  public constructor(
    private location: Location,
    private scroll: ViewportScroller,
    private router: Router
  ) {
  }

  public ngOnInit(): void {
  }

  public scrollTo(anchor) {
    if (this.location.path() !== '/home') {
      this.router.navigate(['/home'], {queryParams: { scroll: anchor}});
    } else {
      this.scroll.scrollToAnchor(anchor);
    }
  }
}
