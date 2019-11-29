import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { User } from '../../../interfaces/user';
import { AlertController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-testvoc',
  templateUrl: './testvoc.page.html',
  styleUrls: ['./testvoc.page.scss'],
})
export class TestvocPage implements OnInit {

  @ViewChild(IonSlides) slides: IonSlides;

  constructor(
    private toastCtrl: ToastController,
    private alertController: AlertController,
    private actionSheet: ActionSheetController
  ) { }


  async presentAlert() {
    const alert = await this.alertController.create({
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
    const alert = await this.alertController.create({
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


  ngOnInit() {
  }

}
