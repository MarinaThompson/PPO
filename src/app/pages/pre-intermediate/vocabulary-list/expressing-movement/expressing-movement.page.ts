import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-expressing-movement',
  templateUrl: './expressing-movement.page.html',
  styleUrls: ['./expressing-movement.page.scss'],
})
export class ExpressingMovementPage implements OnInit {

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

  acrossToSpeech(text) {
    this.tts.speak({
      text: "Across (the road)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  alongToSpeech(text) {
    this.tts.speak({
      text: "Along (the street)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  downToSpeech(text) {
    this.tts.speak({
      text: "Down (the steps)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  inttoToSpeech(text) {
    this.tts.speak({
      text: "Into (the shop)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  outToSpeech(text) {
    this.tts.speak({
      text: "Out of (the shop)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  overToSpeech(text) {
    this.tts.speak({
      text: "Over (the bridge)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  pastToSpeech(text) {
    this.tts.speak({
      text: "Past (the church)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  roundToSpeech(text) {
    this.tts.speak({
      text: "Round / Around",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  throughToSpeech(text) {
    this.tts.speak({
      text: "Through (the tunnel)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  towardsToSpeech(text) {
    this.tts.speak({
      text: "Towards (the lake)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  underToSpeech(text) {
    this.tts.speak({
      text: "Under (the bridge)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  upToSpeech(text) {
    this.tts.speak({
      text: "Up (the steps)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
