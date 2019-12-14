import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.page.html',
  styleUrls: ['./numbers.page.scss'],
})
export class NumbersPage implements OnInit {

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

  oneToSpeech(text) {
    this.tts.speak({
      text: "One",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  twoToSpeech(text) {
    this.tts.speak({
      text: "Two",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  threeToSpeech(text) {
    this.tts.speak({
      text: "Three",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fourToSpeech(text) {
    this.tts.speak({
      text: "Four",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fiveToSpeech(text) {
    this.tts.speak({
      text: "Five",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sixToSpeech(text) {
    this.tts.speak({
      text: "Six",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sevenToSpeech(text) {
    this.tts.speak({
      text: "Seven",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  eightToSpeech(text) {
    this.tts.speak({
      text: "Eight",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  nineToSpeech(text) {
    this.tts.speak({
      text: "Nine",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  tenToSpeech(text) {
    this.tts.speak({
      text: "Ten",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  elevenToSpeech(text) {
    this.tts.speak({
      text: "Eleven",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  twelveToSpeech(text) {
    this.tts.speak({
      text: "Twelve",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thirteenToSpeech(text) {
    this.tts.speak({
      text: "Thirteen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fourteenToSpeech(text) {
    this.tts.speak({
      text: "Fourteen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fifteenToSpeech(text) {
    this.tts.speak({
      text: "Fifteen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sixteenToSpeech(text) {
    this.tts.speak({
      text: "Sixteen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  seventeenToSpeech(text) {
    this.tts.speak({
      text: "Seventeen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  eighteenToSpeech(text) {
    this.tts.speak({
      text: "Eighteen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  nineteenToSpeech(text) {
    this.tts.speak({
      text: "Nineteen",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  twentyToSpeech(text) {
    this.tts.speak({
      text: "Twenty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  twenty1ToSpeech(text) {
    this.tts.speak({
      text: "Twenty-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thirtyToSpeech(text) {
    this.tts.speak({
      text: "Thirty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thirty1ToSpeech(text) {
    this.tts.speak({
      text: "Twenty-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fortyToSpeech(text) {
    this.tts.speak({
      text: "Forty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  forty1ToSpeech(text) {
    this.tts.speak({
      text: "Forty-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fiftyToSpeech(text) {
    this.tts.speak({
      text: "Fifty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  fifty1ToSpeech(text) {
    this.tts.speak({
      text: "Fifty-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sixtyToSpeech(text) {
    this.tts.speak({
      text: "Sixty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  sixty1ToSpeech(text) {
    this.tts.speak({
      text: "Sixty-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  seventyToSpeech(text) {
    this.tts.speak({
      text: "Seventy",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  seventy1ToSpeech(text) {
    this.tts.speak({
      text: "Seventy-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  eightyToSpeech(text) {
    this.tts.speak({
      text: "Eighty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  eighty1ToSpeech(text) {
    this.tts.speak({
      text: "Eighty-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ninetyToSpeech(text) {
    this.tts.speak({
      text: "Ninety",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  ninety1ToSpeech(text) {
    this.tts.speak({
      text: "Ninety-one",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hundredToSpeech(text) {
    this.tts.speak({
      text: "A hundred",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hundred5ToSpeech(text) {
    this.tts.speak({
      text: "A hundred and five",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hundred55ToSpeech(text) {
    this.tts.speak({
      text: "Five hundred",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  hundred6ToSpeech(text) {
    this.tts.speak({
      text: "Six hundred and ninety-five",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thousandToSpeech(text) {
    this.tts.speak({
      text: "A thousand",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  thousand1ToSpeech(text) {
    this.tts.speak({
      text: " One thousand, two hundred and fifty",
      locale: 'en-US',
      rate: 0.50
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }




  ngOnInit() {
  }

}
