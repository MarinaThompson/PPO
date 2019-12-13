import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerbsInfinitivePage } from './verbs-infinitive.page';

const routes: Routes = [
  {
    path: '',
    component: VerbsInfinitivePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerbsInfinitivePage]
})
export class VerbsInfinitivePageModule {}
