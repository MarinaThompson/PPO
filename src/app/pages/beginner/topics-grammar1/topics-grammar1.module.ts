import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TopicsGrammar1Page } from './topics-grammar1.page';

const routes: Routes = [
  {
    path: '',
    component: TopicsGrammar1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TopicsGrammar1Page]
})
export class TopicsGrammar1PageModule {}
