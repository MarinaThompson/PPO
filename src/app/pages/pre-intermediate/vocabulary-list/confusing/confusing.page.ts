import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-confusing',
  templateUrl: './confusing.page.html',
  styleUrls: ['./confusing.page.scss'],
})
export class ConfusingPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  wearToSpeech(text) {
    this.tts.speak({
      text: "Wear",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  carryToSpeech(text) {
    this.tts.speak({
      text: "Carry",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  winToSpeech(text) {
    this.tts.speak({
      text: "Win",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  earnToSpeech(text) {
    this.tts.speak({
      text: "Earn",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  knowToSpeech(text) {
    this.tts.speak({
      text: "Know",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  meetToSpeech(text) {
    this.tts.speak({
      text: "Meet",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hopeToSpeech(text) {
    this.tts.speak({
      text: "Hope",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  waitToSpeech(text) {
    this.tts.speak({
      text: "Wait",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  watchToSpeech(text) {
    this.tts.speak({
      text: "Watch",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lookatToSpeech(text) {
    this.tts.speak({
      text: "Look at",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lookToSpeech(text) {
    this.tts.speak({
      text: "Look",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  looklikeToSpeech(text) {
    this.tts.speak({
      text: "Look like",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  missToSpeech(text) {
    this.tts.speak({
      text: "Miss",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  loseToSpeech(text) {
    this.tts.speak({
      text: "Lose",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  bringToSpeech(text) {
    this.tts.speak({
      text: "Bring",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  takeToSpeech(text) {
    this.tts.speak({
      text: "Take",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lookforToSpeech(text) {
    this.tts.speak({
      text: "Look for",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  findToSpeech(text) {
    this.tts.speak({
      text: "Find",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sayToSpeech(text) {
    this.tts.speak({
      text: "Say",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tellToSpeech(text) {
    this.tts.speak({
      text: "Tell",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lendToSpeech(text) {
    this.tts.speak({
      text: "Lend",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  borrowToSpeech(text) {
    this.tts.speak({
      text: "Borrow",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
