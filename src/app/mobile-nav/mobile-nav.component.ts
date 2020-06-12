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
    console.log('open');
    this.openNav.emit();
  }

  public toggleClose() {
    console.log('close');
    this.closeNav.emit();
  }

  public scrollTo(anchor) {
    if ( ! this.location.path().includes('/home')) {
      console.log('navigating', this.location.path());
      this.router.navigate(['/home'], {queryParams: { scroll: anchor}});
    } else {
      setTimeout(() => {
        console.log('scrolling', this.location.path());
        this.scroll.scrollToAnchor(anchor);
      }, 500 );
    }
  }
}
