import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { Routes, RouterModule } from '@angular/router';

const contactRoute: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ContactComponent
      }
    ]
  }
];


@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoute)
  ],
  exports: [RouterModule]
})
export class ContactModule { }
