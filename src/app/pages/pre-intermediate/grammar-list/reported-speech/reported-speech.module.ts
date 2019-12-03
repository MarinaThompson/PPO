import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReportedSpeechPage } from './reported-speech.page';

const routes: Routes = [
  {
    path: '',
    component: ReportedSpeechPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReportedSpeechPage]
})
export class ReportedSpeechPageModule {}
