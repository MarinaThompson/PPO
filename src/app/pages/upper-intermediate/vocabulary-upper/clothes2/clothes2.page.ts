import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-clothes2',
  templateUrl: './clothes2.page.html',
  styleUrls: ['./clothes2.page.scss'],
})
export class Clothes2Page implements OnInit {

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

  checkedToSpeech(text) {
    this.tts.speak({
      text: "Ckecked",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hoodedToSpeech(text) {
    this.tts.speak({
      text: "Hooded",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  longToSpeech(text) {
    this.tts.speak({
      text: "Long sleeve",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  looseToSpeech(text) {
    this.tts.speak({
      text: "Loose",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  patternedToSpeech(text) {
    this.tts.speak({
      text: "Patterned",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  plainToSpeech(text) {
    this.tts.speak({
      text: "Plain",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sleeveToSpeech(text) {
    this.tts.speak({
      text: "Sleeveless",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stripedToSpeech(text) {
    this.tts.speak({
      text: "Striped",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tightToSpeech(text) {
    this.tts.speak({
      text: "Tight",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  neckToSpeech(text) {
    this.tts.speak({
      text: "V-neck",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
