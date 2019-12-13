import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeningIntermediatePage } from './listening-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: ListeningIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeningIntermediatePage]
})
export class ListeningIntermediatePageModule {}
