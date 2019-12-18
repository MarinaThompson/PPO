import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Testvoc5Page } from './testvoc5.page';

const routes: Routes = [
  {
    path: '',
    component: Testvoc5Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Testvoc5Page]
})
export class Testvoc5PageModule {}
