import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-days',
  templateUrl: './days.page.html',
  styleUrls: ['./days.page.scss'],
})
export class DaysPage implements OnInit {

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

  mondayToSpeech(text) {
    this.tts.speak({
      text: "Monday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tuesdayToSpeech(text) {
    this.tts.speak({
      text: "Tuesday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  wednesdayToSpeech(text) {
    this.tts.speak({
      text: "Wednesday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thursdayToSpeech(text) {
    this.tts.speak({
      text: "Thursday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fridayToSpeech(text) {
    this.tts.speak({
      text: "Friday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  saturdayToSpeech(text) {
    this.tts.speak({
      text: "Saturday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sundayToSpeech(text) {
    this.tts.speak({
      text: "Sunday",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
