import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text3',
  templateUrl: './text3.page.html',
  styleUrls: ['./text3.page.scss'],
})
export class Text3Page implements OnInit {

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
      text: "Mr. Henderson is a dentist. He has worked at a hospital for twenty years. He has many patients. He loves to treat people. Today Mr. Henderson has a special patient. His name is Luke. He is five years old. Luke is afraid of dentists. Luke is cries and doesn't let Mr. Henderson look at his tooth. But Mr. Henderson is a good dentist. He starts talking to little Luke. He tells him a funny story. Luke stars smiling and laughing. Mr. Henderson looks at Luke's tooth. Everything is alright. Luke can go home. Mr. Henderson and Luke shake hands.",
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
