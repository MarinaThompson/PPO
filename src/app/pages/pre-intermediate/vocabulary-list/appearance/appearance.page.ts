import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.page.html',
  styleUrls: ['./appearance.page.scss'],
})
export class AppearancePage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  baldToSpeech(text) {
    this.tts.speak({
      text: "He's bald",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  beardToSpeech(text) {
    this.tts.speak({
      text: "He has a beard and a moustache",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  blueToSpeech(text) {
    this.tts.speak({
      text: "She has big blue eyes",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  curlyToSpeech(text) {
    this.tts.speak({
      text: "She has curly red hair",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  overweightToSpeech(text) {
    this.tts.speak({
      text: "He is a bit overweight",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  longToSpeech(text) {
    this.tts.speak({
      text: "She has long straight hair",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tallToSpeech(text) {
    this.tts.speak({
      text: "He's very tall and thin",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  wavyToSpeech(text) {
    this.tts.speak({
      text: "She has dark wavy hair",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
