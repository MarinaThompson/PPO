import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text2',
  templateUrl: './text2.page.html',
  styleUrls: ['./text2.page.scss'],
})
export class Text2Page implements OnInit {

  slides: any;

  slideText = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: false,
    pagination: {
      el: '.swiper-pagination',
    }
  };

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Lily goes to school. Lily is so glad! Today it is her first day of school. She can already write and read. Lily puts on her new green dress. Mom makes sandwiches for Lily. Cucumber sandwiches are her favorite. Lily goes to school with her friend Jim. Jim lives next door to Lily. They meet at the corner and go school together. Jim wears a new white shirt and black trousers. Lily has a heavy school bag. Jim helps Lily to carry her bag. Lily and Jim like their school.",
      locale: 'en-US',
      rate: 0.60
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }

  textToPause() {
    this.tts.speak({
      text: "",
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));

  }



  ngOnInit() {
  }

}
