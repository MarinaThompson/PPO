import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VocabularyIntermediatePage } from './vocabulary-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: VocabularyIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VocabularyIntermediatePage]
})
export class VocabularyIntermediatePageModule {}
