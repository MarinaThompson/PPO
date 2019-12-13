import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PresentContinuousPage } from './present-continuous.page';

const routes: Routes = [
  {
    path: '',
    component: PresentContinuousPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PresentContinuousPage]
})
export class PresentContinuousPageModule {}
