import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UpperIntermediatePage } from './upper-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: UpperIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [UpperIntermediatePage]
})
export class UpperIntermediatePageModule {}
