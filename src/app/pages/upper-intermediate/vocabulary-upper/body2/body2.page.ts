import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-body2',
  templateUrl: './body2.page.html',
  styleUrls: ['./body2.page.scss'],
})
export class Body2Page implements OnInit {

  slides: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    }
  };

  constructor(private tts: TextToSpeech) { }

  ankleToSpeech(text) {
    this.tts.speak({
      text: "Ankle",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  calfToSpeech(text) {
    this.tts.speak({
      text: "Calf",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  chestToSpeech(text) {
    this.tts.speak({
      text: "Chest",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  elbowToSpeech(text) {
    this.tts.speak({
      text: "Elbow",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fistToSpeech(text) {
    this.tts.speak({
      text: "Fist",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  heelToSpeech(text) {
    this.tts.speak({
      text: "Heel",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  nailsToSpeech(text) {
    this.tts.speak({
      text: "Nails",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  palmToSpeech(text) {
    this.tts.speak({
      text: "Palm",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thighToSpeech(text) {
    this.tts.speak({
      text: "Thigh",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  waistToSpeech(text) {
    this.tts.speak({
      text: "Waist",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  wristToSpeech(text) {
    this.tts.speak({
      text: "Wrist",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
