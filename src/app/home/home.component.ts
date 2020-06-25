import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit, AfterViewInit {
  public anchor: string;

  public constructor(
    private scroll: ViewportScroller,
    private route: ActivatedRoute,
    public auth: AuthService
  ) {
    this.getAnchor();
   }

  public ngOnInit(): void {
    this.getAnchor();
    if (this.anchor) {
      setTimeout(() => {

        this.scroll.scrollToAnchor(this.anchor);
      }, 500);
    }
  }

  public ngAfterViewInit() {
  }

  private getAnchor(): void {
    this.anchor = this.route.snapshot.queryParamMap.get('scroll');
  }
}
