import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TestsIntermediatePage } from './tests-intermediate.page';

const routes: Routes = [
  {
    path: '',
    component: TestsIntermediatePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TestsIntermediatePage]
})
export class TestsIntermediatePageModule {}
