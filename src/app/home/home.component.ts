import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public anchor: string;

  public constructor(
    private scroll: ViewportScroller,
    private route: ActivatedRoute
  ) {
    this.getAnchor();
   }

  public ngOnInit(): void {
  }

  public ngAfterViewInit() {
    this.getAnchor();
    if (this.anchor) {
      this.scroll.scrollToAnchor(this.anchor);
    }
  }

  private getAnchor(): void {
    this.anchor = this.route.snapshot.queryParamMap.get('scroll');
  }
}
