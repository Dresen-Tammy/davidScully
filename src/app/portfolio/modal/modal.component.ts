import { Component, OnInit, Input } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less']
})
export class ModalComponent implements OnInit {

  @Input() public project: Project;

  public constructor() { }

  public ngOnInit(): void {
  }

}

/*
* At mobile size, no modal.
* Modal needs to know top, bottom, left and of clicked button
* It needs to open directly above clicked button.
* Then, it needs to check if close to bottom. If so grow up, if not, grow down
* It needs to check if left, center or right.
* Then it needs to grow left or right or both directions based on that.
*/
