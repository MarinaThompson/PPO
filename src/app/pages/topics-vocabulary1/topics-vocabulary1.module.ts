import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopicsVocabulary1Page } from './topics-vocabulary1.page';

const routes: Routes = [
  {
    path: '',
    component: TopicsVocabulary1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopicsVocabulary1Page]
})
export class TopicsVocabulary1PageModule {}
