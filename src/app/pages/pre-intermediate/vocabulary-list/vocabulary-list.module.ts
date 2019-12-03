import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VocabularyListPage } from './vocabulary-list.page';

const routes: Routes = [
  {
    path: '',
    component: VocabularyListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VocabularyListPage]
})
export class VocabularyListPageModule {}
