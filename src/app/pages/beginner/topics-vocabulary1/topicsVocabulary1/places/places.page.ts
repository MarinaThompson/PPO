import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
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

  bridgeToSpeech(text) {
    this.tts.speak({
      text: "A bridge",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  busstationToSpeech(text) {
    this.tts.speak({
      text: "A bus station",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  carparkToSpeech(text) {
    this.tts.speak({
      text: "A car park",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  castleToSpeech(text) {
    this.tts.speak({
      text: "A castle",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  churchToSpeech(text) {
    this.tts.speak({
      text: "A church",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  departmentToSpeech(text) {
    this.tts.speak({
      text: "A department",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  galleryToSpeech(text) {
    this.tts.speak({
      text: "An art gallery",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  hospitalToSpeech(text) {
    this.tts.speak({
      text: "A hospital",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  mallToSpeech(text) {
    this.tts.speak({
      text: "A shopping centre / a mall",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  marketToSpeech(text) {
    this.tts.speak({
      text: "A market",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  mosqueToSpeech(text) {
    this.tts.speak({
      text: "A mosque",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  museumToSpeech(text) {
    this.tts.speak({
      text: "A museum",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  pharmacyToSpeech(text) {
    this.tts.speak({
      text: "A chemist's / a pharmacy",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  policeToSpeech(text) {
    this.tts.speak({
      text: "A police station",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  postToSpeech(text) {
    this.tts.speak({
      text: "A post office",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  railwayToSpeech(text) {
    this.tts.speak({
      text: "A railway",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  riverToSpeech(text) {
    this.tts.speak({
      text: "A river",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  roadToSpeech(text) {
    this.tts.speak({
      text: "A road",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  squareToSpeech(text) {
    this.tts.speak({
      text: "A square",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  streetToSpeech(text) {
    this.tts.speak({
      text: "A street",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  supermarketToSpeech(text) {
    this.tts.speak({
      text: "A supermarket",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  templeToSpeech(text) {
    this.tts.speak({
      text: "A temple",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  theatreToSpeech(text) {
    this.tts.speak({
      text: "A theatre",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  townToSpeech(text) {
    this.tts.speak({
      text: "A town hall",
      locale: 'en-US',
      rate: 0.70
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
