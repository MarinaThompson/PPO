import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teste6',
  templateUrl: './teste6.page.html',
  styleUrls: ['./teste6.page.scss'],
})
export class Teste6Page implements OnInit {

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
    if (this.resposta1 == 'lost') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta1 != 'lost') {
      this.wrongAlert();
    }
  }

  question2() {
    if (this.resposta2 == 'has gone') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta2 != 'has gone') {
      this.wrongAlert();
    }
  }

  question3() {
    if (this.resposta3 == 'Have they arrived') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta3 != 'Have they arrived') {
      this.wrongAlert();
    }
  }

  question4() {
    if (this.resposta4 == 'have been cleaning') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta4 != 'have been cleaning') {
      this.wrongAlert();
    }
  }

  question5() {
    if (this.resposta5 == 'arrive') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta5 != 'arrive') {
      this.wrongAlert();
    }
  }

  question6() {
    if (this.resposta5 == 'will text') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta5 != 'will text') {
      this.wrongAlert();
    }
  }

  question7() {
    if (this.resposta5 == 'will be') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta5 != 'will be') {
      this.wrongAlert();
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
