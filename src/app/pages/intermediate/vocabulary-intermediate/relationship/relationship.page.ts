import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-relationship',
  templateUrl: './relationship.page.html',
  styleUrls: ['./relationship.page.scss'],
})
export class RelationshipPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  coupleToSpeech(text) {
    this.tts.speak({
      text: "Couple",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  partnerToSpeech(text) {
    this.tts.speak({
      text: "Partner",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fianceToSpeech(text) {
    this.tts.speak({
      text: "Fiancé",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  flatmateToSpeech(text) {
    this.tts.speak({
      text: "Flatmate",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  colleagueToSpeech(text) {
    this.tts.speak({
      text: "Colleague",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  exToSpeech(text) {
    this.tts.speak({
      text: "Ex",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  closeToSpeech(text) {
    this.tts.speak({
      text: "Close friend",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  classmateToSpeech(text) {
    this.tts.speak({
      text: "Classmate",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
