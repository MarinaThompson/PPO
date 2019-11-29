import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-teste-nivelamento',
  templateUrl: './teste-nivelamento.page.html',
  styleUrls: ['./teste-nivelamento.page.scss'],
})
export class TesteNivelamentoPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;



  constructor(private toastCtrl: ToastController) { }



  ngOnInit() { }

  next() {
    this.slides.slideNext();
  }

  mudaCor() {

  }
}

