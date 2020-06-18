import { Job } from './../models/job';
import { Project } from './../models/project';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public readonly currentProject$: Observable<Project>;
  public readonly first$: Observable<boolean>;
  public readonly last$: Observable<boolean>;
  private currentProjectBS: BehaviorSubject<Project>;
  private firstBS: BehaviorSubject<boolean>;
  private lastBS: BehaviorSubject<boolean>;

  private defaultProject: Project;
  private currentJob: Job;
  public constructor() {
    this.defaultProject = new Project();
    this.defaultProject.id = 'default';
    this.defaultProject.title = 'David Dresen';
    this.defaultProject.src = 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592331594/daviddresen/d2_m3tcni.jpg';
    this.defaultProject.modalSrc = 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592331594/daviddresen/d2_m3tcni.jpg';
    this.defaultProject.category = 'default';
    this.currentProjectBS = new BehaviorSubject<Project>(this.defaultProject);
    this.firstBS = new BehaviorSubject<boolean>(false);
    this.lastBS = new BehaviorSubject<boolean>(false);
    this.currentProject$ = this.currentProjectBS.asObservable();
    this.first$ = this.firstBS.asObservable();
    this.last$ = this.lastBS.asObservable();
  }

  public list: Job[] = [
    {
      id: 'global',
      h3: 'GLOBAL CREATIVE DIRECTOR',
      h4: 'Since January 2016, I have been leading all Creative Direction for product and digital design for HP Print.',
      text: `Working with a team of cross-discipline designers, I manage all creative, while defining and implementing
      innovative design strategies and brand solutions. Our work is focused on elevating customer experiences across HP Print.`,
      text2: `In 2018, I started to define and build a new HP Pan-Print Identity System that will enable a true holistic design
      experience across all digital and physical touch points. This is still being worked on, and has not launched, so I cannot
      share any more specific details...but stay tuned.`,
      class: 'light-section',
      projects: [
        {
          id: 'global-project-0',
          title: 'Print Design Strategy',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/ecosystem_w34wsq.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/ecosystem_modal_yhbua7.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-1',
          title: 'Tango Printer',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/tango-1_vhgiol.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/tango_modal_tqmhtc.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-2',
          title: 'Printer UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/printer_yjov9f.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/printer_2x_qgeosk.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-3',
          title: 'Ink Packaging Lineup',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592279756/daviddresen/Packaging_lineup_ehc5ws.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592424529/daviddresen/MarcoPolo_lineup_2x_rcsgdd.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-4',
          title: 'Multi-Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153195/daviddresen/ink-wide-2_hzqt5c.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153195/daviddresen/ink-wide-2_modal_i7ggot.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-5',
          title: 'Color Field Strategy',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592280287/daviddresen/LabelStrategy3_x6fmln.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592279185/daviddresen/LabelStrategy3_2_56x_vs1ny9.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-6',
          title: 'Light Mode/Dark Mode UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/light-dark_cyy8ys.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/light_dark-modal_rhbpib.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-7',
          title: 'Continuous Print Package',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-large_cmetmm.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-large_modal_pxtudr.jpg',
          category: 'global-creative'
        },
        {
          id: 'global-project-8',
          title: '3D Jet Fusion',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592278742/daviddresen/3D_JetFusion400_egscjp.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592278742/daviddresen/3D_JetFusion1024_aqpa5n.jpg',
          category: 'global-creative'
        }
      ]
    },
    {
      id: 'head',
      h3: 'HEAD OF GLOBAL CREATIVE',
      h4: 'From 2010-2015, I led all Creative for product and digital design for HP Print.',
      text: `I worked with a team of cross-discipline designers, managing all creative, defining
      and implementing innovative design strategies and brand solutions, and focusing on elevating
      customers\' experiences across HP Print. Here is a sampling of both strategic exploration and in-market solutions.`,
      class: 'dark-section',
      projects: [
        {
          id: 'head-project-0',
          title: 'Multicolor Ink Package 1',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/white-ink_kafwx8.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/white-ink-modal_wzkrhi.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-1',
          title: 'Multicolor Ink Packaging 2',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/ink-light_bbdk3u.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/ink-light_modal_zcaauz.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-2',
          title: 'Single Color Print Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-double_s725mq.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/ink-double-modal_d5a4qx.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-3',
          title: 'Three Package Types',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592278157/daviddresen/allthree-1a-white-blister400_vmzblw.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592278157/daviddresen/allthree-1a-white-blister_plbpew.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-4',
          title: 'Mobile UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/HPSmart_1x_kn5evs.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/HPSmart_2_56x_bkjeaz.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-5',
          title: 'HP Smart App',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592280588/daviddresen/hpsmart_400_tenod0.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592280588/daviddresen/hpsmart_1024_as3yus.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-6',
          title: 'Pagewide Printer',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281006/daviddresen/Pagewide400_wyqiug.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281007/daviddresen/Pagewide1024_klnuzf.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-7',
          title: 'Design System Color Theory',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/hp-color-theory_p7mtob.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153192/daviddresen/ink-color-theory_modal_vkmwpq.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-8',
          title: 'Iconography',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281133/daviddresen/HPIconography240_g44eiw.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281133/daviddresen/HPIconography1024_nmzcjr.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-9',
          title: 'Desktop UI',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281232/daviddresen/PhotoBook_new400_qd4lth.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281232/daviddresen/PhotoBook_new1024_xmaqni.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-10',
          title: 'Photo Book',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281431/daviddresen/PhotobookSpread_400_v3bcuh.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281437/daviddresen/PhotobookSpread_1024_rdyygk.jpg',
          category: 'head-creative'
        },
        {
          id: 'head-project-11',
          title: 'HP ePrint Center',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281649/daviddresen/ePrintCenter400_qd7iov.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281644/daviddresen/ePrintCenter1024_gam2v4.jpg',
          category: 'head-creative'
        },
      ]
    },
    {
      id: 'glacier',
      h3: 'CO-FOUNDER, CREATIVE DIRECTOR',
      h4: 'Glacier Marketing is an independent design and marketing studio I co-founded with my brother in 2009.',
      text: `My brother and I started Glacier Marketing as an opportunity to work together in a field we both love.
      Although most of our clients are located in the North West, we have done work across the U.S. for clients of all
      sizes. We focus on providing user-centric design and marketing solutions at a great price that are both competitive and successful.`,
      class: 'light-section',
      projects: [
        {
          id: 'glacier-project-0',
          title: 'Tallman Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592155516/daviddresen/Tallman_home_vdi1oz.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894218/daviddresen/Tallman_home_modal_ibo25d.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-1',
          title: 'Austin Kade Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592320598/daviddresen/Austinkade_Responsive_home_jadlpn.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592320598/daviddresen/Austinkade_Responsive_home_2_56x_flx3gw.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-2',
          title: 'TxtWire Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592320884/daviddresen/Txtwire_mockup_qa20si.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592320884/daviddresen/Txtwire_mockup_2_56x_zocwpd.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-3',
          title: 'TxtWire White Paper',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592321227/daviddresen/txtwire_whitpaper_zgbhu0.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592321226/daviddresen/txtwire_whitpaper_lg_fjvgr6.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-4',
          title: 'TxtWire Infographic',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592321063/daviddresen/Txtwire_Infographic_2_t4ikk3.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592433893/daviddresen/Txtwire_Infographic_400_cdvakf.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-5',
          title: 'TxtWire Ads',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592323167/daviddresen/txtwire_ad__evprlz.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592323167/daviddresen/txtwire_ad__2_56x_iptyz8.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-6',
          title: 'Lawntech Printed Materials',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/LawnTech_home_ortmbe.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/LawnTech_home_modal_ytjprg.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-7',
          title: 'Liljenquist Magazine Spreads',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/Lillenquist-spreads_Home_a5fjom.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1591894206/daviddresen/Lillenquist-spreads_Home_modal_artgn2.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-8',
          title: 'Fontaine Wine Label',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592321509/daviddresen/fontaineWineLabel_gnho7f.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592434058/daviddresen/FontaineWine_home_500_awrgqy.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-9',
          title: 'Foxstone Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592325246/daviddresen/Foxstone_exec2_htdhxq.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592325246/daviddresen/Foxstone_exec2_2_56x_hoizn5.jpg',
          category: 'glacier'
        },
        {
          id: 'glacier-project-10',
          title: 'Summit Billboards',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592329212/daviddresen/StepUP_Billboard_zde4mn.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592329239/daviddresen/summit_lg_eu152o.jpg',
          category: 'glacier'
        }
      ],
      logos: [
        {
          id: 'glacier-logo-0',
          title: 'B One Logo',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592363852/daviddresen/B_one_wpks6a.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592363852/daviddresen/B_one_2x_oj8ogv.jpg',
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
      h3: 'SENIOR DESIGNER, DESIGN DIRECTOR',
      h4: `From 2005-2010, I worked as a Senior Designer, and then Design Director at Logoworks. One of the first
      successful online design companies, LogoWorks was eventually acquired by Hewlett Packard.`,
      text: `This job one of the most exhausting and rewarding experiences I have had. Working side by side with a
      group of 25+ designers, we produced UI and print design solutions across every business landscape from startups
      to corporations across the globe. Some of our top clients included Nestle, Hewlett Packard, Costco, American Express,
      Kinkos, Intuit and the Dubai Chamber of Commerce.`,
      class: 'logo-section',
      projects: [
        {
          id: 'logoworks-project-0',
          title: 'Website Kingfish',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592154710/daviddresen/KingFish_thumb_pxm34l.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592441003/daviddresen/KingFish_modal_xdwupx.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-1',
          title: '8670 Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281745/daviddresen/8760_400_ovopaj.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281746/daviddresen/8760_1024_z8lfc4.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-2',
          title: 'Dubai Chamber of Commerce Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281865/daviddresen/Dubai_400_vsdlnd.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281858/daviddresen/Dubai_1024b_lujvus.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-3',
          title: 'Green Events Website',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592281926/daviddresen/greenevents400_ffojqx.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592432385/daviddresen/greenevents1024_nwhtvg.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-4',
          title: 'Nestle Candy Packaging',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/goobers_eoemrw.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/goobers_modal_fvb6zx.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-5',
          title: 'Nestle Logo Exploration',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592282016/daviddresen/Nestle400_vydnyh.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592282017/daviddresen/Nestle1024_eyxprl.jpg',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-6',
          title: 'Barron Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/barron_j42nna.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/barron_modal_dbtehu.jpg',
          description: 'description',
          category: 'logoworks',
          award: true
        },
        {
          id: 'logoworks-project-7',
          title: 'Broughton Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/broughton_c9o2oe.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153191/daviddresen/broughton_modal_y2er5p.jpg',
          description: 'description',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-8',
          title: 'Structured Investment Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/structured_ynwo8m.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153193/daviddresen/structured_modal_xfymzj.jpg',
          description: 'Description goes here.',
          category: 'logoworks'
        },
        {
          id: 'logoworks-project-9',
          title: 'Tokyo Brochure',
          src: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/tokyo_s9caan.jpg',
          modalSrc: 'https://res.cloudinary.com/dbgufprxr/image/upload/v1592153194/daviddresen/tokyo_modal_xjezms.jpg',
          description: 'Description goes here.',
          category: 'logoworks',
          award: true
        },
        {
          id: 'logoworks-project-10',
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

  public getJobs(): Array<Job> {
    return this.list;
  }

  public setCurrentProject(jobId: string, projectId: number, category: string) {
    let project: Project;
    let arr: [];
    if (!this.currentJob || this.currentJob.id !== jobId ) {
      this.list.forEach((job: Job) => {
        if (job.id === jobId) {
          this.currentJob = job;
        }
      });
    }
    arr = this.currentJob[category];
    project = arr[projectId];
    if (project) {
      this.currentProjectBS.next(project);
      this.checkFirst(projectId, category);
      this.checkLast(projectId, category);
    }
  }

  // set currentProject$ to next project
  public nextProject() {
    // tslint:disable-next-line: prefer-const
    let [jobId, category, projectId] = this.currentProjectBS.getValue().id.split('-');
    let pid = Number(projectId) + 1;
    category += 's';

    if (category === 'projects' && pid >= this.currentJob.projects.length) {
      category = 'logos';
      pid = 0;
      // change class of project
    }

    if (category === 'logos' && pid >= this.currentJob.logos.length) {
      return;
    }

    this.setCurrentProject(jobId, pid, category);
  }

  // set currentProject to previous project
  public previousProject(): void {
    let jobId;
    let category;
    let projectId;
    [jobId, category, projectId] = this.currentProjectBS.getValue().id.split('-');
    let pid = Number(projectId) - 1;
    category += 's';

    if (category === 'logos' && pid < 0) {
      category = 'projects';
      pid = this.currentJob.projects.length - 1;
    }

    if (category === 'projects' && pid < 0) {
      return;
    }

    this.setCurrentProject(jobId, pid, category);
  }

  // check if current project is first in job
  public checkFirst(projectId: number, category: string): void {
    let result = false;
    if (projectId === 0 && category === 'projects') {
      result = true;
    }
    this.firstBS.next(result);
  }

  // check if current project is last in job
  public checkLast(projectId: number, category: string): void {
    let result = false;
    if (
      category === 'projects' &&
      projectId >= this.currentJob.projects.length - 1 &&
      !this.currentJob.logos) {
      result = true;
    }
    if (category === 'logos' && projectId >= this.currentJob.logos.length - 1) {
      result = true;
    }
    this.lastBS.next(result);
  }
}
