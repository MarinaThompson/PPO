import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-housework',
  templateUrl: './housework.page.html',
  styleUrls: ['./housework.page.scss'],
})
export class HouseworkPage implements OnInit {

  slides: any;

  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    }
  };

  constructor(private tts: TextToSpeech) { }

  floorToSpeech(text) {
    this.tts.speak({
      text: "Clean the floor",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ironingToSpeech(text) {
    this.tts.speak({
      text: "Do the ironing",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  shoppingToSpeech(text) {
    this.tts.speak({
      text: "Do the shopping",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  washingToSpeech(text) {
    this.tts.speak({
      text: "Do the washing",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  washingupToSpeech(text) {
    this.tts.speak({
      text: "Do the washing up",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tableToSpeech(text) {
    this.tts.speak({
      text: "Lay the table (opposite clear)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  bedsToSpeech(text) {
    this.tts.speak({
      text: "Make the beds",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  lunchToSpeech(text) {
    this.tts.speak({
      text: "Make lunch",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  clothesToSpeech(text) {
    this.tts.speak({
      text: "Pick up dirty clothes (from the floor)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  clothesawayToSpeech(text) {
    this.tts.speak({
      text: "Put away your clothes",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  rubbishToSpeech(text) {
    this.tts.speak({
      text: "Take out the rubbish",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tidyroomToSpeech(text) {
    this.tts.speak({
      text: "Tidy your room",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
