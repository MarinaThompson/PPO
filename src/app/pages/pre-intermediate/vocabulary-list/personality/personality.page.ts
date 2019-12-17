import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.page.html',
  styleUrls: ['./personality.page.scss'],
})
export class PersonalityPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  friendlyToSpeech(text) {
    this.tts.speak({
      text: "Friendly",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  unfriendlyToSpeech(text) {
    this.tts.speak({
      text: "unfriendly",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  talkativeToSpeech(text) {
    this.tts.speak({
      text: "Talkative",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  quiteToSpeech(text) {
    this.tts.speak({
      text: "quite",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  generousToSpeech(text) {
    this.tts.speak({
      text: "Generous",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  meanToSpeech(text) {
    this.tts.speak({
      text: "mean",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  kindToSpeech(text) {
    this.tts.speak({
      text: "Kind",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  unkindToSpeech(text) {
    this.tts.speak({
      text: "unkind",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lazyToSpeech(text) {
    this.tts.speak({
      text: "Lazy",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hardToSpeech(text) {
    this.tts.speak({
      text: "hard-working",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  funnyToSpeech(text) {
    this.tts.speak({
      text: "Funny",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  seriousToSpeech(text) {
    this.tts.speak({
      text: "serious",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cleverToSpeech(text) {
    this.tts.speak({
      text: "Clever",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  stupidToSpeech(text) {
    this.tts.speak({
      text: "stupid",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  shyToSpeech(text) {
    this.tts.speak({
      text: "Shy",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  extrovertToSpeech(text) {
    this.tts.speak({
      text: "extrovert",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
