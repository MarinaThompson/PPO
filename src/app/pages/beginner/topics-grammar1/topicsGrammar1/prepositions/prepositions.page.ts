import { Component, OnInit } from '@angular/core';
import { PopoverController, AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage } from 'src/app/pages/language-popover/language-popover.page';

@Component({
  selector: 'app-prepositions',
  templateUrl: './prepositions.page.html',
  styleUrls: ['./prepositions.page.scss'],
})
export class PrepositionsPage implements OnInit {

  constructor(private popoverCtrl: PopoverController, private alertCtrl: AlertController, private translate: TranslateService) { }

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
