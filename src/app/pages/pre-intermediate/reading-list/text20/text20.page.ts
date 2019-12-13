import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text20',
  templateUrl: './text20.page.html',
  styleUrls: ['./text20.page.scss'],
})
export class Text20Page implements OnInit {
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
      text: "Nadine has a nephew. He is the son of her older sister. Today is her nephew's birthday and she doesn't know what to get him as a gift. She went to the mall to buy something, but she couldn't find anything. She decided to call her sister. She asked her for her opinion on what she should get for her son. Her sister told her that he has been wanting a teddy bear for months. She thinks it's a good idea. Nadine goes back to the mall and she tries to look for a teddy bear. She finds one but it was a tiny one. She knows her nephew would prefer having a big one. It's a huge and blue teddy bear. She thinks it's perfect. She buys it. It was only $30. She goes directly to her sister's house and give him the teddy bear. It was the best gift he ever had. He decided to call him blueberry because of its color.",
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
