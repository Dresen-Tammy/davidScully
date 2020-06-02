import { Job } from './../../models/job';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.less']
})
export class PortfolioSectionComponent implements OnInit {
  @Input() public portfolio: Job; // name of portfolio section

  public constructor() { }

  public ngOnInit(): void {}

}
