import { Component } from '@angular/core';
import { menuAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
  animations: [menuAnimation]
})
export class AppComponent {
  public title = 'daviddresen';
  public navigation: {} = [
    {
      title: 'work',
      link: 'work'
    },
    {
      title: 'about',
      link: 'about'
    },
    {
      title: 'contact',
      link: 'about'
    }
  ];
  public opened: boolean = false;
  public openValue: string = 'close';

  public toggleOpen(): void {
    if (this.opened) {
      this.opened = false;
      this.openValue = 'close';
    } else {
      this.opened = true;
      this.openValue = 'open';
    }
  }

  public toggleClose(): void {
    if (this.opened) {
      this.opened = false;
      this.openValue = 'close';
    }
  }
}
