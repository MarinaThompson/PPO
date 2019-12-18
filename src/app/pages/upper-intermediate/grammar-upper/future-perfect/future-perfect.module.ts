import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FuturePerfectPage } from './future-perfect.page';

const routes: Routes = [
  {
    path: '',
    component: FuturePerfectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FuturePerfectPage]
})
export class FuturePerfectPageModule {}
