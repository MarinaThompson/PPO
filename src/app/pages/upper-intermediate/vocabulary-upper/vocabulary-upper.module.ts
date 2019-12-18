import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VocabularyUpperPage } from './vocabulary-upper.page';

const routes: Routes = [
  {
    path: '',
    component: VocabularyUpperPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VocabularyUpperPage]
})
export class VocabularyUpperPageModule {}
