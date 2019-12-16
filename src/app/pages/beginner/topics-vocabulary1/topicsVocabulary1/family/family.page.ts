import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  parentToSpeech(text) {
    this.tts.speak({
      text: "parent",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fatherToSpeech(text) {
    this.tts.speak({
      text: "father",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  motherToSpeech(text) {
    this.tts.speak({
      text: "mother",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sonToSpeech(text) {
    this.tts.speak({
      text: "son",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  daughterToSpeech(text) {
    this.tts.speak({
      text: "daughter",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  husbandToSpeech(text) {
    this.tts.speak({
      text: "husband",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  brotherToSpeech(text) {
    this.tts.speak({
      text: "brother and sister",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  siblingsToSpeech(text) {
    this.tts.speak({
      text: "siblings",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  grandparentsToSpeech(text) {
    this.tts.speak({
      text: "grandparents",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  grandfatherToSpeech(text) {
    this.tts.speak({
      text: "grandfather",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  grandmotherToSpeech(text) {
    this.tts.speak({
      text: "grandmother",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  grandchildrenToSpeech(text) {
    this.tts.speak({
      text: "grandchildren",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  grandsonToSpeech(text) {
    this.tts.speak({
      text: "grandson",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  uncleToSpeech(text) {
    this.tts.speak({
      text: "uncle",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  auntToSpeech(text) {
    this.tts.speak({
      text: "aunt",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  cousinToSpeech(text) {
    this.tts.speak({
      text: "cousin",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  granddaughterToSpeech(text) {
    this.tts.speak({
      text: "granddaughter",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  nephewToSpeech(text) {
    this.tts.speak({
      text: "nephew",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  nieceToSpeech(text) {
    this.tts.speak({
      text: "niece",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  greatgrandfatherToSpeech(text) {
    this.tts.speak({
      text: "great grandfather",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  greatgrandmotherToSpeech(text) {
    this.tts.speak({
      text: "great grandmother",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }



  ngOnInit() {
  }

}
