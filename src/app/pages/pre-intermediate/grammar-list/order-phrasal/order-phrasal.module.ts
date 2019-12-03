import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OrderPhrasalPage } from './order-phrasal.page';

const routes: Routes = [
  {
    path: '',
    component: OrderPhrasalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrderPhrasalPage]
})
export class OrderPhrasalPageModule {}
