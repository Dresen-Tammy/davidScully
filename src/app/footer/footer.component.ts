import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.less']
})
export class FooterComponent implements OnInit {

  public constructor(private scroll: ViewportScroller) { }

  public ngOnInit(): void {
  }

  public scrollToTop() {
    this.scroll.scrollToPosition([0, 0]);
  }

}
