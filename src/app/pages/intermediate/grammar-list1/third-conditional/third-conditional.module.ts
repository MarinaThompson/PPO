import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ThirdConditionalPage } from './third-conditional.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdConditionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ThirdConditionalPage]
})
export class ThirdConditionalPageModule {}
