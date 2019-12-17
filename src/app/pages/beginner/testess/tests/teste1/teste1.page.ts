import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.page.html',
  styleUrls: ['./teste1.page.scss'],
})
export class Teste1Page {
  @ViewChild(IonSlides) slides: IonSlides;

  score: number = 0;
  slideOptions: any;

  constructor(private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private _Router: Router) { }

  acerto() {
    this.score++;
    console.log(this.score);
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Congratulations!',
      message: 'You got this question right!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Next question',
          handler: () => {
            this.slides.slideNext();
          }
        }
      ]
    });

    await alert.present();
  }

  async wrongAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Opss...!',
      message: 'You didn´t hit this question!',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Next question',
          handler: () => {
            this.slides.slideNext();
          }
        }
      ]
    });

    await alert.present();
  }

  async badAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Opss...',
      subHeader: 'Total de acertos: ' + this.score,
      message: 'You should study a bit more!',
      buttons: [
        {
          text: 'Voltar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this._Router.navigate(['/testess']);
          }
        },
      ]
    });

    await alert.present();
  }

  async goodAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Parabéns!',
      subHeader: 'Total de acertos: ' + this.score,
      message: 'Keep in this way!',
      buttons: [
        {
          text: 'Voltar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            this._Router.navigate(['/testess']);
          }
        },
      ]
    });

    await alert.present();
  }


  showResult(presentAlert) {
    if (this.score <= 6) {
      this.badAlert();
      console.log("You should study a bit more!")
    }
    else if (this.score >= 7) {
      this.goodAlert();
      console.log("Keep in this way!")
    }

  }

}
