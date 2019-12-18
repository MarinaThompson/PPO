import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testvoc5',
  templateUrl: './testvoc5.page.html',
  styleUrls: ['./testvoc5.page.scss'],
})
export class Testvoc5Page implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  score: number = 0;
  slideOptions: any;


  resposta1: string = '';
  resposta2: string = '';
  resposta3: string = '';
  resposta4: string = '';
  resposta5: string = '';
  resposta6: string = '';
  resposta7: string = '';
  resposta8: string = '';

  constructor(
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private _Router: Router
  ) { }

  question1() {
    if (this.resposta1 == 'Lemon') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta1 != 'Lemon') {
      this.wrongAlert();
    }
  }

  question2() {
    if (this.resposta2 == 'Fist') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta2 != 'Fist') {
      this.wrongAlert();
    }
  }

  question3() {
    if (this.resposta3 == 'Agressive') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta3 != 'Agressive') {
      this.wrongAlert();
    }
  }

  question4() {
    if (this.resposta4 == 'Star') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta4 != 'Star') {
      this.wrongAlert();
    }
  }

  question5() {
    if (this.resposta5 == 'Palm') {
      this.score++;

      console.log(this.score);
    }
    else if (this.resposta5 != 'Palm') {

    }
  }




  question8(showResult) {
    if (this.resposta5 == 'has been working') {
      this.score++;

      console.log(this.score);
    }
    else if (this.resposta5 != 'has been working') {
      console.log("errou");
    }
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
    if (this.score <= 3) {
      this.badAlert();
      console.log("You should study a bit more!")
    }
    else if (this.score > 4) {
      this.goodAlert();
      console.log("Keep in this way!")
    }

  }

  ngOnInit() {
  }

}
