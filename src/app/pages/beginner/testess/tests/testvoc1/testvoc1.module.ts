import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Testvoc1Page } from './testvoc1.page';

const routes: Routes = [
  {
    path: '',
    component: Testvoc1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Testvoc1Page]
})
export class Testvoc1PageModule {}
