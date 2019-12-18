import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-feelings',
  templateUrl: './feelings.page.html',
  styleUrls: ['./feelings.page.scss'],
})
export class FeelingsPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  offendedToSpeech(text) {
    this.tts.speak({
      text: "offended",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  homesickToSpeech(text) {
    this.tts.speak({
      text: "homesick",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  disappointedToSpeech(text) {
    this.tts.speak({
      text: "disappointed",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  proundToSpeech(text) {
    this.tts.speak({
      text: "pround",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  nervousToSpeech(text) {
    this.tts.speak({
      text: "nervous",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  gratefulToSpeech(text) {
    this.tts.speak({
      text: "grateful",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  shockedToSpeech(text) {
    this.tts.speak({
      text: "shocked",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  relievedToSpeech(text) {
    this.tts.speak({
      text: "relieved",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  guiltyToSpeech(text) {
    this.tts.speak({
      text: "guilty",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lonelyToSpeech(text) {
    this.tts.speak({
      text: "lonely",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
