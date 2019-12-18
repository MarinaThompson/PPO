import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-extreme-weather',
  templateUrl: './extreme-weather.page.html',
  styleUrls: ['./extreme-weather.page.scss'],
})
export class ExtremeWeatherPage implements OnInit {

  constructor(private tts: TextToSpeech) { }

  heatwaveToSpeech(text) {
    this.tts.speak({
      text: "Heatwave",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  droughtToSpeech(text) {
    this.tts.speak({
      text: "Drought",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hailToSpeech(text) {
    this.tts.speak({
      text: "Hail",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lightningToSpeech(text) {
    this.tts.speak({
      text: "Lightning",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thunderToSpeech(text) {
    this.tts.speak({
      text: "Thunder",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  blizzardToSpeech(text) {
    this.tts.speak({
      text: "Blizzard",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  floodToSpeech(text) {
    this.tts.speak({
      text: "Flood",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hurricaneToSpeech(text) {
    this.tts.speak({
      text: "Hurricane",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  monsoonToSpeech(text) {
    this.tts.speak({
      text: "Monsoon",
      locale: 'en-US',
      rate: 0.90
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
