import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExpressingMovementPage } from './expressing-movement.page';

const routes: Routes = [
  {
    path: '',
    component: ExpressingMovementPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExpressingMovementPage]
})
export class ExpressingMovementPageModule {}
