import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PossessivePronounsPage } from './possessive-pronouns.page';

const routes: Routes = [
  {
    path: '',
    component: PossessivePronounsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PossessivePronounsPage]
})
export class PossessivePronounsPageModule {}
