import { modalAnimation } from '../../animations';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.less'],
  animations: [modalAnimation]
})
export class ModalComponent implements OnInit {

  @Input() public project: Project;
  @Input() public modalValue: string;
  @Output() public closeClicked: EventEmitter<any> = new EventEmitter<any>();

  public constructor() {
   }

  public ngOnInit(): void {
  }

  public closeModal() {
    this.closeClicked.emit();
  }
}
