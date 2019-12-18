import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PpContinuousPage } from './pp-continuous.page';

const routes: Routes = [
  {
    path: '',
    component: PpContinuousPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PpContinuousPage]
})
export class PpContinuousPageModule {}
