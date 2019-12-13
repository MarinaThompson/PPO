import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text11',
  templateUrl: './text11.page.html',
  styleUrls: ['./text11.page.scss'],
})
export class Text11Page implements OnInit {

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
      text: "Jenna is a professional cook and today is her first day in a new restaurant. She is very excited, but also nervous because she doesn't want to get late for her first day. She has to be there at 8 o'clock and it is already 7. She is not ready yet and she is unsure how she should go to work. She is thinking maybe it is too late to take her car. She might get stuck in traffic and then for sure, she will be late. The same thing will happen if she calls a taxi. Instead, she thinks she should take the metro. She gets dressed quickly; she grabs some coffee and a sandwich from the coffee shop down the road and gets in the next metro going towards the direction of the restaurant . Time is running out and she is getting more and more anxious. When the doors open to the metro station, she starts running. Happily, she arrives right on time for her first day.",
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
