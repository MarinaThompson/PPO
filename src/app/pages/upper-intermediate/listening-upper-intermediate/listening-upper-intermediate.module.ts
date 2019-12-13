import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeningUpperIntermediatePage } from './listening-upper-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: ListeningUpperIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeningUpperIntermediatePage]
})
export class ListeningUpperIntermediatePageModule {}
