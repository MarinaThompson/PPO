import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestslisIntermediatePage } from './testslis-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: TestslisIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestslisIntermediatePage]
})
export class TestslisIntermediatePageModule {}
