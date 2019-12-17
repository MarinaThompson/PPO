import { Component, OnInit, ViewChild } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
import { IonSlides, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-listening2',
  templateUrl: './test-listening2.page.html',
  styleUrls: ['./test-listening2.page.scss'],
})
export class TestListening2Page implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  score: number = 0;
  slideOptions: any;

  constructor(private tts: TextToSpeech, private toastCtrl: ToastController, private navCtrl: NavController, private alertCtrl: AlertController, private _Router: Router) { }

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
    if (this.score <= 3) {
      this.badAlert();
      console.log("You should study a bit more!")
    }
    else if (this.score >= 4) {
      this.goodAlert();
      console.log("Keep in this way!")
    }

  }

  listenToSpeech(text) {
    this.tts.speak({
      text: "She got engaged yesterday",
      locale: 'en-US',
      rate: 0.80
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen1ToSpeech(text) {
    this.tts.speak({
      text: "She missed class",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen2ToSpeech(text) {
    this.tts.speak({
      text: "I don't go to Madrid",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen3ToSpeech(text) {
    this.tts.speak({
      text: "Did you go out last night?",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  listen4ToSpeech(text) {
    this.tts.speak({
      text: "I played tennis this morning",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
