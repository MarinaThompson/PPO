import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeningPreIntermediatePage } from './listening-pre-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: ListeningPreIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeningPreIntermediatePage]
})
export class ListeningPreIntermediatePageModule {}
