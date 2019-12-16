import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.page.html',
  styleUrls: ['./continents.page.scss'],
})
export class ContinentsPage implements OnInit {

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

  northAmericaToSpeech(text) {
    this.tts.speak({
      text: "North America",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  southAmericaToSpeech(text) {
    this.tts.speak({
      text: "South America",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  asiaToSpeech(text) {
    this.tts.speak({
      text: "Asia",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  antarcticaToSpeech(text) {
    this.tts.speak({
      text: "Antarctica",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  africaToSpeech(text) {
    this.tts.speak({
      text: "Africa",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  europeToSpeech(text) {
    this.tts.speak({
      text: "Europe",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  oceaniaToSpeech(text) {
    this.tts.speak({
      text: "Oceania",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }


  ngOnInit() {
  }

}
