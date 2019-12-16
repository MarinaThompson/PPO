import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-things',
  templateUrl: './things.page.html',
  styleUrls: ['./things.page.scss'],
})
export class ThingsPage implements OnInit {
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

  bookToSpeech(text) {
    this.tts.speak({
      text: "A book",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  coinToSpeech(text) {
    this.tts.speak({
      text: "A coin",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  creditToSpeech(text) {
    this.tts.speak({
      text: "A credit card",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  dictionaryToSpeech(text) {
    this.tts.speak({
      text: "A dictionary",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  diaryToSpeech(text) {
    this.tts.speak({
      text: "A diary",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  glassesToSpeech(text) {
    this.tts.speak({
      text: "Glasses",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  headphonesToSpeech(text) {
    this.tts.speak({
      text: "Headphones",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  identityToSpeech(text) {
    this.tts.speak({
      text: "An identity card",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  iPodToSpeech(text) {
    this.tts.speak({
      text: "An iPod",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  keyToSpeech(text) {
    this.tts.speak({
      text: "A key",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  laptopToSpeech(text) {
    this.tts.speak({
      text: "A laptop",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  magazineToSpeech(text) {
    this.tts.speak({
      text: "A magazine",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  mobileToSpeech(text) {
    this.tts.speak({
      text: "A mobile (phone)",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  newspaperToSpeech(text) {
    this.tts.speak({
      text: "A newspaper",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  photoToSpeech(text) {
    this.tts.speak({
      text: "A photo",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  paperToSpeech(text) {
    this.tts.speak({
      text: "A piece of paper",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  purseToSpeech(text) {
    this.tts.speak({
      text: "A purse",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  scissorsToSpeech(text) {
    this.tts.speak({
      text: "A scissors",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stampToSpeech(text) {
    this.tts.speak({
      text: "A stamp",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sunglassesToSpeech(text) {
    this.tts.speak({
      text: "Sunglasses",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  umbrellaToSpeech(text) {
    this.tts.speak({
      text: "An umbrella",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  walletToSpeech(text) {
    this.tts.speak({
      text: "A wallet",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  penToSpeech(text) {
    this.tts.speak({
      text: "A pen",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  pencilToSpeech(text) {
    this.tts.speak({
      text: "A pencil",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  watchToSpeech(text) {
    this.tts.speak({
      text: "A watch",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ticketToSpeech(text) {
    this.tts.speak({
      text: "A ticket",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
