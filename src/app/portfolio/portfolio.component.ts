import { Project } from './../models/project';
import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  public list: Job[] = [
    {
      h3: "GLOBAL CREATIVE DIRECTOR",
      h4: "Since January 2016, I have been leading all Creative Direction for product and digital design for HP Print.",
      text: "I have had the opportunity to work with a team of cross-discipline designers, managing all creative, while defining and implementing innovative design strategies and brand solutions, focused on elevating customers' experiences across HP Print.",
      class: "light-section",
      projects: [
        {
          id: 'global-0',
          title: 'Design Print Strategy',
          src: '../../assets/images/projects/combo-pack-1b-design.png',
          category: 'global-creative'
        },
        {
          id: 'global-1',
          title: 'Print Packaging',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'global-creative'
        },
        {
          id: 'global-2',
          title: 'Multi-Color Print Packaging',
          src: '../../assets/images/projects/narrow-blue3-white-blister.png',
          category: 'global-creative'
        },
        {
          id: 'global-3',
          title: 'Continuous Print Package',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'global-creative'
        }
      ]
    },
    {
      h3: "HEAD OF GLOBAL CREATIVE",
      h4: "I worked with a team of cross-discipline designers, managing all creative, while defining and implementing innovative design strategies and brand solutions, focused on elevating customers' experiences across HP Print. The below work is a sampling of both strategic exploration and in-market solutions.",
      text: "I worked with a team of cross-discipline designers, managing all creative, while defining and implementing innovative design strategies and brand solutions, focused on elevating customers' experiences across HP Print. The below work is a sampling of both strategic exploration and in-market solutions.",
      class: "dark-section",
      projects: [
        {
          id: 'head-0',
          title: 'Design Print Strategy',
          src: '../../assets/images/projects/combo-pack-1b-design.png',
          category: 'head-creative'
        },
        {
          id: 'head-1',
          title: 'Print Packaging',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'head-creative'
        },
        {
          id: 'head-2',
          title: 'Multi-Color Print Packaging',
          src: '../../assets/images/projects/proposal-two.png',
          category: 'head-creative'
        },
        {
          id: 'head-3',
          title: 'Continuous Print Package',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'head-creative'
        }
      ]
    },
    {
      h3: "CO-FOUNDER, CREATIVE DIRECTOR",
      h4: "Glacier Marketing is an independent design and marketing studio I co-founded with my brother in 2009.",
      text: "My brother and I started Glacier Marketing as an opportunity to not only work together, but do it in a field we both love. Although most of our clients are located in the North West, we have done work across the U.S., for clients of all sizes. Our focus is on providing user-centric design and marketing solutions that don't make you mortgage your farm to be both competitive and successful.",
      class: "light-section",
      projects: [
        {
          id: 'glacier-0',
          title: 'Design Print Strategy',
          src: '../../assets/images/projects/combo-pack-1b-design.png',
          category: 'glacier'
        },
        {
          id: 'glacier-1',
          title: 'Print Packaging',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'glacier'
        },
        {
          id: 'glacier-2',
          title: 'Multi-Color Print Packaging',
          src: '../../assets/images/projects/narrow-blue3-white-blister.png',
          category: 'glacier'
        },
        {
          id: 'glacier-3',
          title: 'Continuous Print Package',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'glacier'
        }
      ]
    },
    {
      h3: "SENIOR DESIGNER, DESIGN DIRECTOR",
      h4: "From 2005-2010, I worked as a Senior Designer, and then Design Director at Logoworks, one of the first successful online design companies, that was eventually acquired by Hewlett Packard.",
      text: "One of the most exhausting and rewarding jobs I have had. I worked side by side with a group of 25+ designers, producing UI and print design solutions across every business landscape from startups to corporations across the globe. Some of our top clients were; Nestle, Hewlett Packard, Costco, American Express, Kinkos, Intuit and the Dubai Chamber of Commerce.",
      class: "logo-section",
      projects: [
        {
          id: 'logoworks-0',
          title: 'Design Print Strategy',
          src: '../../assets/images/projects/combo-pack-1b-design.png',
          category: 'logoworks'
        },
        {
          id: 'logoworks-1',
          title: 'Print Packaging',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'logoworks'
        },
        {
          id: 'logoworks-2',
          title: 'Multi-Color Print Packaging',
          src: '../../assets/images/projects/narrow-blue3-white-blister.png',
          category: 'logoworks'
        },
        {
          id: 'logoworks-3',
          title: 'Continuous Print Package',
          src: '../../assets/images/projects/narrow-allcolors1-white-blister.png',
          category: 'logoworks'
        }
      ]
    }
  ]
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

