import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';



@NgModule({
  declarations: [PortfolioComponent, PortfolioItemComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [PortfolioComponent]
})
export class PortfolioModule { }
