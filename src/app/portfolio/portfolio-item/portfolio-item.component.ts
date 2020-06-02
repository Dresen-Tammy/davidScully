import { Component, OnInit, Input } from '@angular/core';
import { Project } from './../../models/project';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.less']
})
export class PortfolioItemComponent implements OnInit {
  @Input() public project: Project;

  public constructor() { }

  public ngOnInit(): void {
  }

  public openModal(): void {
    // TODO: get info about project and open modal
  }
}
