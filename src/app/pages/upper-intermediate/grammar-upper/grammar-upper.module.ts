import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GrammarUpperPage } from './grammar-upper.page';

const routes: Routes = [
  {
    path: '',
    component: GrammarUpperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GrammarUpperPage]
})
export class GrammarUpperPageModule {}
