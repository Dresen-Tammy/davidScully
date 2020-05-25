import { Project } from './../models/project';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  @Input() public h3: string;
  @Input() public h4: string;
  @Input() public text: string;
  @Input() public portfolio: string; // name of portfolio section
  public items: Project[] = [
    {
      id: '0',
      title: 'Ink Packaging',
      src: '../../assets/images/projects/combo-pack-1b-design.png',
      category: 'global-creative'
    },
    {
      id: '1',
      title: 'Ink Packaging',
      src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
      category: 'global-creative'
    },
    {
      id: '2',
      title: 'Ink Packaging',
      src: '../../assets/images/projects/narrow-blue3-white-blister.png',
      category: 'global-creative'
    },
  ];

  public constructor() { }

  public ngOnInit(): void {
  }

}

