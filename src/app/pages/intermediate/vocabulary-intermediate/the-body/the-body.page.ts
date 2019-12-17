import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-the-body',
  templateUrl: './the-body.page.html',
  styleUrls: ['./the-body.page.scss'],
})
export class TheBodyPage implements OnInit {
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

  armsToSpeech(text) {
    this.tts.speak({
      text: "Arms",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  backToSpeech(text) {
    this.tts.speak({
      text: "Back",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  earsToSpeech(text) {
    this.tts.speak({
      text: "Ears",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  eyesToSpeech(text) {
    this.tts.speak({
      text: "Eyes",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  faceToSpeech(text) {
    this.tts.speak({
      text: "Face",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  feetToSpeech(text) {
    this.tts.speak({
      text: "Feet",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fingersToSpeech(text) {
    this.tts.speak({
      text: "Fingers",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  handsToSpeech(text) {
    this.tts.speak({
      text: "Hands",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  headToSpeech(text) {
    this.tts.speak({
      text: "Head",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  kneesToSpeech(text) {
    this.tts.speak({
      text: "Knees",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  legsToSpeech(text) {
    this.tts.speak({
      text: "Legs",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lipsToSpeech(text) {
    this.tts.speak({
      text: "Lips",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  mouthToSpeech(text) {
    this.tts.speak({
      text: "Mouth",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  neckToSpeech(text) {
    this.tts.speak({
      text: "Neck",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  noseToSpeech(text) {
    this.tts.speak({
      text: "Nose",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  shouldersToSpeech(text) {
    this.tts.speak({
      text: "Shoulders",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stomachToSpeech(text) {
    this.tts.speak({
      text: "Stomach",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  teethToSpeech(text) {
    this.tts.speak({
      text: "Teeth",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  toesToSpeech(text) {
    this.tts.speak({
      text: "Toes",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tongueToSpeech(text) {
    this.tts.speak({
      text: "Tongue",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
