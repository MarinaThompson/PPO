import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelativeClausesPage } from './relative-clauses.page';

const routes: Routes = [
  {
    path: '',
    component: RelativeClausesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RelativeClausesPage]
})
export class RelativeClausesPageModule {}
