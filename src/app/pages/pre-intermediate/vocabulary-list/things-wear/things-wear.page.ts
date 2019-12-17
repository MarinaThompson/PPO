import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-things-wear',
  templateUrl: './things-wear.page.html',
  styleUrls: ['./things-wear.page.scss'],
})
export class ThingsWearPage implements OnInit {

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

  cardiganToSpeech(text) {
    this.tts.speak({
      text: "Cardigan",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  coatToSpeech(text) {
    this.tts.speak({
      text: "Coat",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  dressToSpeech(text) {
    this.tts.speak({
      text: "Dress",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  jacketToSpeech(text) {
    this.tts.speak({
      text: "Jacket",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  jeansToSpeech(text) {
    this.tts.speak({
      text: "Jeans",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  shirtToSpeech(text) {
    this.tts.speak({
      text: "Shirt",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  shortsToSpeech(text) {
    this.tts.speak({
      text: "Shorts",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  skirtToSpeech(text) {
    this.tts.speak({
      text: "Skirt",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  suitToSpeech(text) {
    this.tts.speak({
      text: "Suit",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sweaterToSpeech(text) {
    this.tts.speak({
      text: "Sweater",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  topToSpeech(text) {
    this.tts.speak({
      text: "Top",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tracksuitToSpeech(text) {
    this.tts.speak({
      text: "Tracksuit",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  trousersToSpeech(text) {
    this.tts.speak({
      text: "Trousers",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tshirtToSpeech(text) {
    this.tts.speak({
      text: "T-shirt",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
