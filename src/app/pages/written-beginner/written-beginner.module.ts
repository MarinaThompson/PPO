import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { WrittenBeginnerPage } from './written-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: WrittenBeginnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WrittenBeginnerPage]
})
export class WrittenBeginnerPageModule {}
