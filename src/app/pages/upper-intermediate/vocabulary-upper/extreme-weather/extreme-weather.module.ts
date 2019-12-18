import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ExtremeWeatherPage } from './extreme-weather.page';

const routes: Routes = [
  {
    path: '',
    component: ExtremeWeatherPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ExtremeWeatherPage]
})
export class ExtremeWeatherPageModule {}
