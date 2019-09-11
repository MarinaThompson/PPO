import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuBeginnerPage } from './menu-beginner.page';

const routes: Routes = [
  {
    path: '',
    component: MenuBeginnerPage,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuBeginnerPage]
})
export class MenuBeginnerPageModule { }
