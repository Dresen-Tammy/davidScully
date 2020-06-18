import { ProjectService } from './../services/project.service';
import { Project } from './../models/project';
import { Component, OnInit, HostListener } from '@angular/core';
import { Job } from '../models/job';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  public modalValue: string = 'closed';
  public isMobileSize: boolean = false;
  public viewWidth: number = 0;
  public viewHeight: number = 0;
  public list: Array<Job>;
  private defaultPosition = {
    top: '50%',
    width: '0px',
    left: '50%'
  };

  @HostListener('window:resize', ['$event'])
  public resizeCheck(event: Event): void {
    this.checkWindowSize();
  }

  public constructor(private project: ProjectService) {

  }

  public ngOnInit(): void {
    this.list = this.project.getJobs();
    this.checkWindowSize();
  }

  public openModal(projectId: string) {
      const [job, category, id] = projectId.split('-');
      const pId = Number(id);
      if (category === 'logo') {
        this.project.setCurrentProject(job, pId, 'logos');
      //   if (this.viewWidth > this.viewHeight) {
      //     this.modalValue = 'openlogowide';
      //  } else {
      //      this.modalValue = 'openlogo';
      //  }
      } else {
          this.project.setCurrentProject(job, pId, 'projects');
          // this.modalValue = 'open';
      }
      this.modalValue = 'open';
  }

  public closeModal() {
    this.modalValue = 'closed';
  }

  private checkWindowSize() {
    this.isMobileSize = window.innerWidth <= 800 || window.innerHeight <= 800;
    this.viewHeight = window.innerHeight;
    this.viewWidth = window.innerWidth;
  }
}

