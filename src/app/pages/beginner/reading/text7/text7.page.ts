import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text7',
  templateUrl: './text7.page.html',
  styleUrls: ['./text7.page.scss'],
})
export class Text7Page implements OnInit {
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
      text: "Today my class and I went on a school trip. We went to the History Museum and saw many interesting things there. We saw skeletons of dinosaurs, skulls of prehistoric humans and their weapons. We also saw warriors from the Middle Ages. I could even hold a real sword in my hands. It was very heavy! We came out of the museum and saw a big beautiful garden. There were a lot of different trees and flowers. There were oaks, birches and sycamores. And there were a wide range of flowers: roses, peonies, liles. And there were butterflies of various colors. Butterflies sat on the flowers or flew in the air around us. It was a really good day!",
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
