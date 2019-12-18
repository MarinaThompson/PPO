import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-illnesses',
  templateUrl: './illnesses.page.html',
  styleUrls: ['./illnesses.page.scss'],
})
export class IllnessesPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  throatToSpeech(text) {
    this.tts.speak({
      text: "a sore throat",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  diarrhoeaToSpeech(text) {
    this.tts.speak({
      text: "diarrhoea",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  sickToSpeech(text) {
    this.tts.speak({
      text: "feels sick",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  faintedToSpeech(text) {
    this.tts.speak({
      text: "fainted",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  blisterToSpeech(text) {
    this.tts.speak({
      text: "blister",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  coldToSpeech(text) {
    this.tts.speak({
      text: "a cold",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  fluToSpeech(text) {
    this.tts.speak({
      text: "flu",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  dizzyToSpeech(text) {
    this.tts.speak({
      text: "dizzy",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  cutToSpeech(text) {
    this.tts.speak({
      text: "cut",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
