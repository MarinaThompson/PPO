import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeningBeginnerPage } from './listening-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: ListeningBeginnerPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeningBeginnerPage]
})
export class ListeningBeginnerPageModule {}
