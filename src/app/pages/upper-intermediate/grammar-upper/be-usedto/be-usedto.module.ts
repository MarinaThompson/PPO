import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BeUsedtoPage } from './be-usedto.page';

const routes: Routes = [
  {
    path: '',
    component: BeUsedtoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BeUsedtoPage]
})
export class BeUsedtoPageModule {}
