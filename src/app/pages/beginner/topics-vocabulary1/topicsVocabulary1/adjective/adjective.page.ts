import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-adjective',
  templateUrl: './adjective.page.html',
  styleUrls: ['./adjective.page.scss'],
})
export class AdjectivePage implements OnInit {


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

  badToSpeech(text) {
    this.tts.speak({
      text: "Bad; Good",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  bigToSpeech(text) {
    this.tts.speak({
      text: "Big; Small",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  safeToSpeech(text) {
    this.tts.speak({
      text: "Dangerous; Safe",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  dirtyToSpeech(text) {
    this.tts.speak({
      text: "Dirty; Clean",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  emptyToSpeech(text) {
    this.tts.speak({
      text: "Empty; Full",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cheapToSpeech(text) {
    this.tts.speak({
      text: "Expensive; Cheap",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  farToSpeech(text) {
    this.tts.speak({
      text: "Far; Near",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fastToSpeech(text) {
    this.tts.speak({
      text: "Fast; Slow",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  highToSpeech(text) {
    this.tts.speak({
      text: "High; Low",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hotToSpeech(text) {
    this.tts.speak({
      text: "Hot; Cold",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  oldToSpeech(text) {
    this.tts.speak({
      text: "Old; New",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  richToSpeech(text) {
    this.tts.speak({
      text: "Rich; Poor",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  strongToSpeech(text) {
    this.tts.speak({
      text: "Strong; Weak",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  wrongToSpeech(text) {
    this.tts.speak({
      text: "Wrong; Right",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  darkToSpeech(text) {
    this.tts.speak({
      text: "Blond; Dark",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  uglyToSpeech(text) {
    this.tts.speak({
      text: "Beautiful; Ugly",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fatToSpeech(text) {
    this.tts.speak({
      text: "Fat; Thin",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  youngToSpeech(text) {
    this.tts.speak({
      text: "Old; Young",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tallToSpeech(text) {
    this.tts.speak({
      text: "Tall; Short",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
