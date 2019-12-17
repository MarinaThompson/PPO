import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-personality1',
  templateUrl: './personality1.page.html',
  styleUrls: ['./personality1.page.scss'],
})
export class Personality1Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  competitiveToSpeech(text) {
    this.tts.speak({
      text: "Competitive",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  selfishToSpeech(text) {
    this.tts.speak({
      text: "Selfish",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  spoilToSpeech(text) {
    this.tts.speak({
      text: "Spoil",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  agressiveToSpeech(text) {
    this.tts.speak({
      text: "Agressive",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  charmingToSpeech(text) {
    this.tts.speak({
      text: "Charming",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sensibleToSpeech(text) {
    this.tts.speak({
      text: "Sensible",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sociableToSpeech(text) {
    this.tts.speak({
      text: "Sociable",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  moodyToSpeech(text) {
    this.tts.speak({
      text: "Moody",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  anxiousToSpeech(text) {
    this.tts.speak({
      text: "Anxious",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  independentToSpeech(text) {
    this.tts.speak({
      text: "Independent",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  bossyToSpeech(text) {
    this.tts.speak({
      text: "Bossy",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  affectionateToSpeech(text) {
    this.tts.speak({
      text: "Affectionate",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  jealousToSpeech(text) {
    this.tts.speak({
      text: "Jealous",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sensitiveToSpeech(text) {
    this.tts.speak({
      text: "Sensitive",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ambitiousToSpeech(text) {
    this.tts.speak({
      text: "Ambitious",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  reliableToSpeech(text) {
    this.tts.speak({
      text: "Reliable",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  rebelliousToSpeech(text) {
    this.tts.speak({
      text: "Rebellious",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  stubbornToSpeech(text) {
    this.tts.speak({
      text: "Stubborn",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
