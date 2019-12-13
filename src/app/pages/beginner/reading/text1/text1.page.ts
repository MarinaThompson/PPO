import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text1',
  templateUrl: './text1.page.html',
  styleUrls: ['./text1.page.scss'],
})
export class Text1Page implements OnInit {

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
      text: "Ben woke up early this morning. It's his tenth birthday today. He got out of bed. He smiled broadly. He did his morning exercises. He took a warm shower. After the shower he brushed his teeth. He combed his fair hair. Ben put on his fair hair. Ben put on his white shirt and dark blue trousers. Ben went down the stairs and saw his mom and dad. They are in the kitchen. Mom made a birthday cake for Ben. Dad lays the table. Mom and dad give him a present and kiss him. Ben is happy!",
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
