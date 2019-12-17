import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-food1',
  templateUrl: './food1.page.html',
  styleUrls: ['./food1.page.scss'],
})
export class Food1Page implements OnInit {
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

  aubergineToSpeech(text) {
    this.tts.speak({
      text: "Aubergine",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  beetrootToSpeech(text) {
    this.tts.speak({
      text: "Beetroot",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cabbageToSpeech(text) {
    this.tts.speak({
      text: "Cabbage",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cherriesToSpeech(text) {
    this.tts.speak({
      text: "Cherries",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  courgetteToSpeech(text) {
    this.tts.speak({
      text: "Courgette",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  crabToSpeech(text) {
    this.tts.speak({
      text: "Crab",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cucumberToSpeech(text) {
    this.tts.speak({
      text: "Cucumber",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  grapesToSpeech(text) {
    this.tts.speak({
      text: "Grapes",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  greenBeansToSpeech(text) {
    this.tts.speak({
      text: "Green beans",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lemonToSpeech(text) {
    this.tts.speak({
      text: "Lemon",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  mangoToSpeech(text) {
    this.tts.speak({
      text: "Mango",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  melonToSpeech(text) {
    this.tts.speak({
      text: "Melon",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  musselsToSpeech(text) {
    this.tts.speak({
      text: "Mussels",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  peachToSpeech(text) {
    this.tts.speak({
      text: "Peach",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  pearToSpeech(text) {
    this.tts.speak({
      text: "Pear",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  prawnsToSpeech(text) {
    this.tts.speak({
      text: "Prawns",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  raspberryToSpeech(text) {
    this.tts.speak({
      text: "Raspberry",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  redpepperToSpeech(text) {
    this.tts.speak({
      text: "Red pepper",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  salmonToSpeech(text) {
    this.tts.speak({
      text: "Salmon",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  squidToSpeech(text) {
    this.tts.speak({
      text: "Squid",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tunaToSpeech(text) {
    this.tts.speak({
      text: "Tuna",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
