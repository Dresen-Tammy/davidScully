import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Location, ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.less']
})
export class MobileNavComponent implements OnInit {
  @Output() openNav: EventEmitter<any> = new EventEmitter<any>();
  @Output() closeNav: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private location: Location,
    private scroll: ViewportScroller,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public toggleOpen() {
    this.openNav.emit();
  }

  public toggleClose() {
    this.closeNav.emit();
  }

  public scrollTo(anchor) {
    if ( ! this.location.path().includes('/home')) {
      this.router.navigate(['/home'], {queryParams: { scroll: anchor}});
    } else {
      setTimeout(() => {
        this.scroll.scrollToAnchor(anchor);
      }, 500 );
    }
  }
}
