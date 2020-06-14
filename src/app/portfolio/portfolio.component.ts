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
  public modalValue: string = 'closed';
  private defaultModal = {
    id: '',
    title: '',
    src: '',
    modalSrc: '',
    description: '',
    category: ''
  };
  private defaultPosition = {
    top: '50%',
    width: '0px',
    left: '50%'
  };
  public list: Job[] = [
    {
      id: "global",
      h3: "GLOBAL CREATIVE DIRECTOR",
      h4: "Since January 2016, I have been leading all Creative Direction for product and digital design for HP Print.",
      text: "Working with a team of cross-discipline designers, I manage all creative, while defining and implementing innovative design strategies and brand solutions. Our work is focused on elevating customer experiences across HP Print.",
      class: "light-section",
      projects: [
        {
          id: 'global-0',
          title: 'Print Design Strategy',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/ecosystem_w34wsq.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/ecosystem_modal_yhbua7.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-1',
          title: 'Tango Printer',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/tango-1_vhgiol.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/tango_modal_tqmhtc.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-2',
          title: 'Printer UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/printer_yjov9f.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/printer_2x_qgeosk.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-3',
          title: 'Multi-Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/ink-wide-1_ubq3ve.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153195/daviddresen/ink-wide-1_modal_paogj5.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-4',
          title: 'Multi-Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153195/daviddresen/ink-wide-2_hzqt5c.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153195/daviddresen/ink-wide-2_modal_i7ggot.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-5',
          title: 'Continuous Print Package',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-large_cmetmm.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-large_modal_pxtudr.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-6',
          title: 'Light Mode/Dark Mode UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/light-dark_cyy8ys.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/light_dark-modal_rhbpib.jpg',
          category: 'global-creative'
        }
      ]
    },
    {
      id: 'head',
      h3: "HEAD OF GLOBAL CREATIVE",
      h4: "From 2010-2015, I led all Creative for product and digital design for HP Print.",
      text: "I worked with a team of cross-discipline designers, managing all creative, defining and implementing innovative design strategies and brand solutions, and focusing on elevating customers' experiences across HP Print. Here is a sampling of both strategic exploration and in-market solutions.",
      class: "dark-section",
      projects: [
        {
          id: 'head-0',
          title: 'Multicolor Ink Package 1',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/white-ink_kafwx8.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/white-ink-modal_wzkrhi.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-1',
          title: 'Multicolor Ink Packaging 2',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/ink-light_bbdk3u.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/ink-light_modal_zcaauz.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-2',
          title: 'Single Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-double_s725mq.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-double-modal_d5a4qx.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-3',
          title: '2 Color Print Package',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/ink-duo_tff3t2.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-duo_modal_hkpqid.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-4',
          title: 'Mobile UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/HPSmart_1x_kn5evs.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/HPSmart_2_56x_bkjeaz.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-5',
          title: 'Desktop UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/smart-ui_hhdvin.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/smart-ui_modal_nqgzu1.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-6',
          title: 'Desktop UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592154361/daviddresen/lifesaver_kwbk3s.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592154361/daviddresen/lifesaver_modal_mpjcqr.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-7',
          title: 'Design System Color Theory',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/hp-color-theory_p7mtob.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/ink-color-theory_modal_vkmwpq.jpg',
          category: 'head-creative'
        }
      ]
    },
    {
      id: 'glacier',
      h3: "CO-FOUNDER, CREATIVE DIRECTOR",
      h4: "Glacier Marketing is an independent design and marketing studio I co-founded with my brother in 2009.",
      text: "My brother and I started Glacier Marketing as an opportunity to work together in a field we both love. Although most of our clients are located in the North West, we have done work across the U.S. for clients of all sizes. We focus on providing user-centric design and marketing solutions at a great price that are both competitive and successful.",
      class: "light-section",
      projects: [
        {
          id: 'glacier-0',
          title: 'Tallman Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592155516/daviddresen/Tallman_home_vdi1oz.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894218/daviddresen/Tallman_home_modal_ibo25d.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-1',
          title: 'Lawntech Printed Materials',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/LawnTech_home_ortmbe.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/LawnTech_home_modal_ytjprg.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-2',
          title: 'Liljenquist Magazine Spreads',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/Lillenquist-spreads_Home_a5fjom.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/Lillenquist-spreads_Home_modal_artgn2.jpg',
          category: 'glacier'
        }
      ],
      logos: [
        {
          id: 'glacier-logo-0',
          title: 'Fonataine Vineyards',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637201/daviddresen/FontaineBarn_jozimn.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972102/daviddresen/FontaineBarn_2x_ziacim.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-1',
          title: 'Rockwell Marshals',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637262/daviddresen/Rockwell_eipgwa.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972059/daviddresen/Rockwell_2x_x3cg5r.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-2',
          title: 'Northwind',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637292/daviddresen/Northwind_qshz6b.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972076/daviddresen/Northwind_2x_h1yrzt.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-3',
          title: 'Advanced Health Chiropractic',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637506/daviddresen/advancedHealth_wt99jv.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972021/daviddresen/Advanced1_2x_kz1ppv.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-4',
          title: 'Sleepy Ridge Golf',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894644/daviddresen/SR_w4q1b2.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972047/daviddresen/SR_2x_tvtla3.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-5',
          title: 'SSP',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637420/daviddresen/SSP_khdrgt.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972037/daviddresen/SSP_2x_ywl8wl.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-6',
          title: 'Rizex',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637568/daviddresen/Risex2_s650pt.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972065/daviddresen/Risex2_2x_ldlufv.jpg',
          category: 'logo'
        },
        {
          id: 'glacier-logo-7',
          title: 'Landspin',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591637583/daviddresen/Landspin_tj2xkv.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591972091/daviddresen/Landspin_2x_t1bhmo.jpg',
          category: 'logo',
          award: true
        }
      ]
    },
    {
      id: 'logoworks',
      h3: "SENIOR DESIGNER, DESIGN DIRECTOR",
      h4: "From 2005-2010, I worked as a Senior Designer, and then Design Director at Logoworks. One of the first successful online design companies, LogoWorks was eventually acquired by Hewlett Packard.",
      text: "This job one of the most exhausting and rewarding experiences I have had. Working side by side with a group of 25+ designers, we produced UI and print design solutions across every business landscape from startups to corporations across the globe. Some of our top clients included Nestle, Hewlett Packard, Costco, American Express, Kinkos, Intuit and the Dubai Chamber of Commerce.",
      class: "logo-section",
      projects: [
        {
          id: 'logoworks-0',
          title: 'Nestle Candy Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/goobers_eoemrw.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/goobers_modal_fvb6zx.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-1',
          title: 'Website Kingfish',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592154710/daviddresen/KingFish_thumb_pxm34l.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591896401/daviddresen/Kingfish-landing_modal_fikghd.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-2',
          title: 'Barron Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/barron_j42nna.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/barron_modal_dbtehu.jpg',
          description: 'description',
          category: 'logoworks',
          award: true
        },
        {
          id: 'logoworks-3',
          title: 'Broughton Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/broughton_c9o2oe.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/broughton_modal_y2er5p.jpg',
          description: 'description',
          category: 'logoworks'
        },
        {
          id: 'logoworks-4',
          title: 'Structured Investment Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/structured_ynwo8m.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/structured_modal_xfymzj.jpg',
          description: 'Description goes here.',
          category: 'logoworks'
        },
        {
          id: 'logoworks-5',
          title: 'Tokyo Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/tokyo_s9caan.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/tokyo_modal_xjezms.jpg',
          description: 'Description goes here.',
          category: 'logoworks',
          award: true
        },
        {
          id: 'logoworks-6',
          title: 'Honerkamp Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/honerkamp_gske7n.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/honerkamp_modal_xnd2ux.jpg',
          description: 'Description goes here',
          category: 'logoworks',
          award: true
        }
      ],
      logos: [
        {
          id: 'logoworks-logo-0',
          title: 'Northpoint Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067577/daviddresen/Northpoint_wxhlrn.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067577/daviddresen/Northpoint_2x_xguzwg.jpg',
          category: 'logo',
          award: true
        },
        {
          id: 'logoworks-logo-1',
          title: 'Greybeard Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067585/daviddresen/Graybeard_lradgu.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067585/daviddresen/Graybeard_2x_kftdxx.jpg',
          category: 'logo',
          award: true
        },
        {
          id: 'logoworks-logo-2',
          title: 'Athena Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067592/daviddresen/Athena_yoddyp.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067592/daviddresen/Athena_2x_sdodqb.jpg',
          category: 'logo',
          award: true
        },
        {
          id: 'logoworks-logo-3',
          title: 'Karaiya Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067635/daviddresen/Karaiya_rjtwtd.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067635/daviddresen/Karaiya_2x_sk2z4d.jpg',
          category: 'logo',
          award: true
        },
        {
          id: 'logoworks-logo-4',
          title: '49 North Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592070742/daviddresen/fortynine_y4gkxj.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068060/daviddresen/fortynine_2x_xpxnnf.jpg',
          category: 'logo',
          award: true
        },
        {
          id: 'logoworks-logo-5',
          title: 'Ufandi Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067655/daviddresen/Ufandi_hntzpg.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067655/daviddresen/Ufandi_2x_gonbxo.jpg',
          category: 'logo',
          award: true
        },
        {
          id: 'logoworks-logo-6',
          title: 'Golden Tigers Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067660/daviddresen/Tigers_l1v0g7.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592067660/daviddresen/Tigers_2x_s4ojp6.jpg',
          category: 'logo'
        },
        {
          id: 'logoworks-logo-7',
          title: 'Pickled Egg Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068099/daviddresen/PIckledEgg_gbptvk.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068100/daviddresen/PIckledEgg_2x_vzizq8.jpg',
          category: 'logo'
        },
        {
          id: 'logoworks-logo-8',
          title: 'US Figure Skating Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068111/daviddresen/SLC_l87cco.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068112/daviddresen/SLC_2x_ne2gjn.jpg',
          category: 'logo'
        },
        {
          id: 'logoworks-logo-9',
          title: 'Main Street Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068120/daviddresen/Mainstreet_wbeljj.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068120/daviddresen/Mainstreet_2x_jfxco6.jpg',
          category: 'logo'
        },
        {
          id: 'logoworks-logo-10',
          title: 'Fathom Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068129/daviddresen/Fathom_tdjoc1.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068129/daviddresen/Fathom_2x_ui2miq.jpg',
          category: 'logo'
        },
        {
          id: 'logoworks-logo-11',
          title: 'LegalZoom Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068139/daviddresen/LegalZoom_zvlmut.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592068139/daviddresen/LegalZoom_2x_khcdfh.jpg',
          category: 'logo'
        },
      ]
    }
  ];

  public constructor() {
    this.current = this.defaultModal;
  }

  public ngOnInit(): void {
  }

  public openModal(event: MouseEvent, project: Project) {
    this.current = project;
    if (this.current.category === 'logo') {
      this.modalValue = 'openlogo';
    } else {
      this.modalValue = 'open';
    }
  }

  public closeModal() {
    this.modalValue = 'closed';
  }
}

