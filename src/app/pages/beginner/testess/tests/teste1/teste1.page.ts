import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';
import { User } from '../../../../../interfaces/user';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-teste1',
  templateUrl: './teste1.page.html',
  styleUrls: ['./teste1.page.scss'],
})
export class Teste1Page {
  @ViewChild(IonSlides) slides: IonSlides;


  constructor(private toastCtrl: ToastController, private alertController: AlertController, private actionSheet: ActionSheetController, private activatedRoute: ActivatedRoute) { }






  /*

  async presentAlert(header: string) {
    const alert = await this.alertController.create({
      header: header,
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

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    return toast.present();
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
*/



}
