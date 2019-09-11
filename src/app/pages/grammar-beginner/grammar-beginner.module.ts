import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrammarBeginnerPage } from './grammar-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: GrammarBeginnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GrammarBeginnerPage]
})
export class GrammarBeginnerPageModule {}
