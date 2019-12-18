import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NarrativeTensesPage } from './narrative-tenses.page';

const routes: Routes = [
  {
    path: '',
    component: NarrativeTensesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NarrativeTensesPage]
})
export class NarrativeTensesPageModule {}
