import { Project } from './../models/project';
import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  public current: Project;
  public list: Job[] = [
    {
      h3: "GLOBAL CREATIVE DIRECTOR",
      h4: "Since January 2016, I have been leading all Creative Direction for product and digital design for HP Print.",
      text: "Working with a team of cross-discipline designers, I manage all creative, while defining and implementing innovative design strategies and brand solutions. Our work is focused on elevating customer experiences across HP Print.",
      class: "light-section",
      projects: [
        {
          id: 'global-0',
          title: 'Print Design Strategy',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381913/daviddresen/print_design_strategy_cmh4ji.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-1',
          title: 'Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591383320/daviddresen/ink_package_624_2_dsk64y.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-2',
          title: 'Multi-Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591383320/daviddresen/ink_package_624_2_dsk64y.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-3',
          title: 'Continuous Print Package',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381885/daviddresen/ink_package_15_sljxae.jpg',
          category: 'global-creative'
        }
      ]
    },
    {
      h3: "HEAD OF GLOBAL CREATIVE",
      h4: "From 2010-2015, I led all Creative for product and digital design for HP Print.",
      text: "I worked with a team of cross-discipline designers, managing all creative, while defining and implementing innovative design strategies and brand solutions, focused on elevating customers' experiences across HP Print. The below work is a sampling of both strategic exploration and in-market solutions.",
      class: "dark-section",
      projects: [
        {
          id: 'head-0',
          title: 'Multicolor Ink Package 1',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591384198/daviddresen/ink_package_all_colors_dark_eh8nem.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-1',
          title: 'Multicolor Ink Packaging 2',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591384195/daviddresen/ink_package_all_colors_laza9p.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-2',
          title: 'Single Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591383300/daviddresen/ink_package_1300_g2oaw4.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-3',
          title: '2 Color Print Package',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381890/daviddresen/ink_package_1321_combo_dtkp3p.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-4',
          title: 'Mobile UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381925/daviddresen/ui_hpSmart_yygt8v.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-5',
          title: 'Printer Design',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381881/daviddresen/hp_printer_environment_egffv9.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-6',
          title: 'Desktop UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381921/daviddresen/ui_hp_instant_morxap.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-7',
          title: 'Design System Color Theory',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381875/daviddresen/color_theory_ekbitn.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-4',
          title: 'Design System Color Alignment',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381869/daviddresen/color_aligned_n1mmx3.jpg',
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
          id: 'head-0',
          title: 'Multicolor Ink Package 1',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591384198/daviddresen/ink_package_all_colors_dark_eh8nem.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-1',
          title: 'Multicolor Ink Packaging 2',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591384195/daviddresen/ink_package_all_colors_laza9p.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-2',
          title: 'Single Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591383300/daviddresen/ink_package_1300_g2oaw4.jpg',
          category: 'head-creative'
        }
      ],
      logos: [
        {
          id: 'glacier-logo-0',
          title: 'Fonataine Vineyards',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637201/daviddresen/FontaineBarn_jozimn.jpg',
          category: 'glacier-logo'
        },
        {
          id: 'glacier-logo-1',
          title: 'Rockwell Marshals',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637262/daviddresen/Rockwell_eipgwa.jpg',
          category: 'glacier-logo'
        },
        {
          id: 'glacier-logo-2',
          title: 'Northwind',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637292/daviddresen/Northwind_qshz6b.jpg',
          category: 'glacier-logo'
        },
        {
          id: 'glacier-logo-3',
          title: 'Advanced Health Chiropractic',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637506/daviddresen/advancedHealth_wt99jv.jpg',
          category: 'glacier-logo'
        },
        {
          id: 'glacier-logo-4',
          title: 'Sleepy Ridge Golf',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637539/daviddresen/sleepy_zzjkka.jpg',
          category: 'glacier-logo'
        },
        {
          id: 'glacier-logo-5',
          title: 'SSP',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637420/daviddresen/SSP_khdrgt.jpg',
          category: 'glacier-logo'
        },
        {
          id: 'glacier-logo-6',
          title: 'Rizex',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637568/daviddresen/Risex2_s650pt.jpg',
          category: 'glacier-logo',
          award: true
        },
        {
          id: 'glacier-logo-7',
          title: 'Landspin',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637583/daviddresen/Landspin_tj2xkv.jpg',
          category: 'glacier-logo'
        }
      ]
    },
    {
      h3: "SENIOR DESIGNER, DESIGN DIRECTOR",
      h4: "From 2005-2010, I worked as a Senior Designer, and then Design Director at Logoworks, one of the first successful online design companies, that was eventually acquired by Hewlett Packard.",
      text: "This was one of the most exhausting and rewarding jobs I have had. I worked side by side with a group of 25+ designers, producing UI and print design solutions across every business landscape from startups to corporations across the globe. Some of our top clients included Nestle, Hewlett Packard, Costco, American Express, Kinkos, Intuit and the Dubai Chamber of Commerce.",
      class: "logo-section",
      projects: [
        {
          id: 'logoworks-0',
          title: 'Nestle Candy Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381908/daviddresen/nestle_zm9faj.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-1',
          title: 'Website Kingfish',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381929/daviddresen/website_kingfish_dz5p9f.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-2',
          title: 'Barron Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591384805/daviddresen/brochure_barron_ohlend.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591472752/daviddresen/brochure_baron_modal_rhizuz.jpg',
          description: 'description',
          category: 'logoworks'
        },
        {
          id: 'logoworks-3',
          title: 'Broughton Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381793/daviddresen/brochure_broughton_qlsnyu.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591472752/daviddresen/brochure_broughton_modal_fvcnbu.jpg',
          description: 'description',
          category: 'logoworks'
        },
        {
          id: 'logoworks-4',
          title: 'Structured Investment Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591383293/daviddresen/brochure_structured_investment_tewtck.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591472752/daviddresen/brochure_structured_modal_p142hb.jpg',
          description: 'Description goes here.',
          category: 'logoworks'
        },
        {
          id: 'logoworks-5',
          title: 'Tokyo Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381917/daviddresen/tokyo_tsperj.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591472752/daviddresen/brochure_tokyo_modal_uxym9r.jpg',
          description: 'Description goes here.',
          category: 'logoworks'
        },
        {
          id: 'logoworks-6',
          title: 'Honerkamp Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591381796/daviddresen/brochure_honerkamp_ru27kt.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591472752/daviddresen/brochure_honerkamp_modal_jzfzjl.jpg',
          description: 'Description goes here',
          category: 'logoworks'
        }
      ]
    }
  ];

  public constructor() { }

  public ngOnInit(): void {
  }

  public openModal(project: Project) {
    this.current = project;
  }
}

