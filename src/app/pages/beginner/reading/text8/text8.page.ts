import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text8',
  templateUrl: './text8.page.html',
  styleUrls: ['./text8.page.scss'],
})
export class Text8Page implements OnInit {

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
      text: "Hello! Welcome to my home! This is my room. It is large and clean. There is a bed, a desk, two chairs and a wardrobe in my room. It is a typical teenager's room. But I have a secret box under my bed. This is a metal box with a lock on it. The box is red with three white stripes on both sides. I use this box to keep my sticker collection in. I open the lock with a key. Let's have a look at my collection! There are about six hundred stickers in my box. I am a big fan of soccer. I collect stickers of soccer players. I have stickers with all the famous players in history. There are also some stickers showing soccer stadiums of the world. I have collected stickers for a long time. And my collection grows every day.",
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
