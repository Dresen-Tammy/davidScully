import { ModalComponent } from './modal/modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';



@NgModule({
  declarations: [PortfolioComponent, ModalComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
