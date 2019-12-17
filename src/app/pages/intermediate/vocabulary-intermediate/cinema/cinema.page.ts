import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.page.html',
  styleUrls: ['./cinema.page.scss'],
})
export class CinemaPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  castToSpeech(text) {
    this.tts.speak({
      text: "Cast",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  starToSpeech(text) {
    this.tts.speak({
      text: "Star",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  soundtrackToSpeech(text) {
    this.tts.speak({
      text: "Soundtrack",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  plotToSpeech(text) {
    this.tts.speak({
      text: "Plot",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sceneToSpeech(text) {
    this.tts.speak({
      text: "Scene",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  audienceToSpeech(text) {
    this.tts.speak({
      text: "Audience",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sequelToSpeech(text) {
    this.tts.speak({
      text: "Sequel",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  specialToSpeech(text) {
    this.tts.speak({
      text: "Special effects",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  subtitlesToSpeech(text) {
    this.tts.speak({
      text: "Subtitles",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  scriptToSpeech(text) {
    this.tts.speak({
      text: "Scipt",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  extraToSpeech(text) {
    this.tts.speak({
      text: "Extra",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  reviewToSpeech(text) {
    this.tts.speak({
      text: "Review",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }



  ngOnInit() {
  }

}
