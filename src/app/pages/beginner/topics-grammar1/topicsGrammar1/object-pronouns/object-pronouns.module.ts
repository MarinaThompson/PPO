import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObjectPronounsPage } from './object-pronouns.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectPronounsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObjectPronounsPage]
})
export class ObjectPronounsPageModule {}
