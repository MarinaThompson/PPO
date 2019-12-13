import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-teste-nivelamento',
  templateUrl: './teste-nivelamento.page.html',
  styleUrls: ['./teste-nivelamento.page.scss'],
})
export class TesteNivelamentoPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  score: number = 0;
  slideOptions: any;



  constructor(private toastCtrl: ToastController, private navCtrl: NavController, private alertCtrl: AlertController) { }

  acerto() {
    this.score++;
    console.log(this.score);
  }

  next() {
    this.slides.slideNext();
  }

  async beginnerAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Parabéns!',
      subHeader: 'Total de acertos: ' + this.score,
      message: 'É recomendado que você comece pelo nível "Beginner"',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            href: '/pages/teste-nivelamento'
          }
        },
      ]
    });

    await alert.present();
  }

  async preAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Parabéns!',
      subHeader: 'Total de acertos: ' + this.score,
      message: 'É recomendado que você comece pelo nível "Pre-intermediate."',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            href: '/pages/pre-intermediate'
          }
        },
      ]
    });

    await alert.present();
  }

  async intermediateAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Parabéns!',
      subHeader: 'Total de acertos: ' + this.score,
      message: 'É recomendado que você comece pelo nível "Intermediate."',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            href: '/pages/intermediate'
          }
        },
      ]
    });

    await alert.present();
  }

  async upperAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Parabéns! ',
      subHeader: 'Total de acertos: ' + this.score,
      message: 'É recomendado que você comece pelo nível "Upper-intermediate."',
      buttons: [
        {
          text: 'Fechar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
          }
        },
      ]
    });

    await alert.present();
  }


  showResult(presentAlert) {
    if (this.score == 10) {
      this.upperAlert();
      console.log("It is recommended that you start at the Upper-intermediate level.")
    }
    else if (this.score <= 3) {
      this.beginnerAlert();
      console.log("It is recommended that you start at the Beginner level.")
    }
    else if (this.score > 3 && this.score <= 5) {
      this.preAlert();
      console.log("It is recommended that you start at the pre-intermediate level.")
    }
    else if (this.score >= 6 && this.score <= 9) {
      this.intermediateAlert();
      console.log("It is recommended that you start at the Intermediate level.")
    }
  }



  ngOnInit() { }

}

