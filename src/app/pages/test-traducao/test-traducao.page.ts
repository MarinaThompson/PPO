import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-test-traducao',
  templateUrl: './test-traducao.page.html',
  styleUrls: ['./test-traducao.page.scss'],
})
export class TestTraducaoPage implements OnInit {

  params = {
    name: 'Simon'
  };

  constructor(private popoverCtrl: PopoverController, private alertCtrl: AlertController, private translate: TranslateService) { }

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: this.translate.instant('ALERT.header'),
      message: this.translate.instant('ALERT.msg'),
      buttons: ['OK']
    });
    alert.present();
  }

  ngOnInit() {
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }

}
