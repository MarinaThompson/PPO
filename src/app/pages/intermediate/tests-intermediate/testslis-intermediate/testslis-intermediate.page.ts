import { Component, OnInit, ViewChild } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonSlides, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testslis-intermediate',
  templateUrl: './testslis-intermediate.page.html',
  styleUrls: ['./testslis-intermediate.page.scss'],
})
export class TestslisIntermediatePage implements OnInit {

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
    private _Router: Router,
    private tts: TextToSpeech
  ) { }

  question1() {
    if (this.resposta1 == 'Could you speak louder please?') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta1 != 'Could you speak louder please?') {
      this.wrongAlert();
    }
  }

  question2() {
    if (this.resposta2 == 'Could you spell that for me please?') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta2 != 'Could you spell that for me please?') {
      this.wrongAlert();
    }
  }

  question3() {
    if (this.resposta3 == 'Easy come, easy go') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta3 != 'Easy come, easy go') {
      this.wrongAlert();
    }
  }

  question4() {
    if (this.resposta4 == 'Where can I find a pay phone?') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta4 != 'Where can I find a pay phone?') {
      this.wrongAlert();
    }
  }

  question5() {
    if (this.resposta5 == 'I have nothing to declare.') {
      this.score++;
      this.presentAlert();
      console.log(this.score);
    }
    else if (this.resposta5 != 'I have nothing to declare.') {
      this.wrongAlert();
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

  listenToSpeech(text) {
    this.tts.speak({
      text: "Could you speak louder please?",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen1ToSpeech(text) {
    this.tts.speak({
      text: "Could you spell that for me please?",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen2ToSpeech(text) {
    this.tts.speak({
      text: "Easy come, easy go",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen3ToSpeech(text) {
    this.tts.speak({
      text: "Where can I find a pay phone?",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen4ToSpeech(text) {
    this.tts.speak({
      text: "I have nothing to declare.",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
