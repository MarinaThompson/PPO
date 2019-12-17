import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.page.html',
  styleUrls: ['./animals.page.scss'],
})
export class AnimalsPage implements OnInit {


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

  batToSpeech(text) {
    this.tts.speak({
      text: "Bat",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  bearToSpeech(text) {
    this.tts.speak({
      text: "Bear",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  beeToSpeech(text) {
    this.tts.speak({
      text: "Bee",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  birdToSpeech(text) {
    this.tts.speak({
      text: "Bird",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  bullToSpeech(text) {
    this.tts.speak({
      text: "Bull",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  butterflyToSpeech(text) {
    this.tts.speak({
      text: "Butterfly",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  camelToSpeech(text) {
    this.tts.speak({
      text: "Camel",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  chickenToSpeech(text) {
    this.tts.speak({
      text: "Chicken",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  cowToSpeech(text) {
    this.tts.speak({
      text: "Cow",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  crocodileToSpeech(text) {
    this.tts.speak({
      text: "Crocodile",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  dolphinToSpeech(text) {
    this.tts.speak({
      text: "Dolphin",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  elephantToSpeech(text) {
    this.tts.speak({
      text: "Elephant",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  flyToSpeech(text) {
    this.tts.speak({
      text: "Fly",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  giraffeToSpeech(text) {
    this.tts.speak({
      text: "Giraffe",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  goatToSpeech(text) {
    this.tts.speak({
      text: "Goat",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  horseToSpeech(text) {
    this.tts.speak({
      text: "Horse",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  jellyfishToSpeech(text) {
    this.tts.speak({
      text: "Jellyfish",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  kangarooToSpeech(text) {
    this.tts.speak({
      text: "Kangaroo",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  lionToSpeech(text) {
    this.tts.speak({
      text: "Lion",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  monkeyToSpeech(text) {
    this.tts.speak({
      text: "Monkey",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  mosquitoToSpeech(text) {
    this.tts.speak({
      text: "Mosquito",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  mouseToSpeech(text) {
    this.tts.speak({
      text: "Mouse <br> (plural mice)",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  pigToSpeech(text) {
    this.tts.speak({
      text: "Pig",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  rabbitToSpeech(text) {
    this.tts.speak({
      text: "Rabbit",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  sharkToSpeech(text) {
    this.tts.speak({
      text: "Shark",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  sheepToSpeech(text) {
    this.tts.speak({
      text: "Sheep",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  snakeToSpeech(text) {
    this.tts.speak({
      text: "Snake",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  spiderToSpeech(text) {
    this.tts.speak({
      text: "Spider",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  tigerToSpeech(text) {
    this.tts.speak({
      text: "Tiger",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  whaleToSpeech(text) {
    this.tts.speak({
      text: "Whale",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ngOnInit() {
  }

}
