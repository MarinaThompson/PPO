import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text5',
  templateUrl: './text5.page.html',
  styleUrls: ['./text5.page.scss'],
})
export class Text5Page implements OnInit {

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
      text: "There's a small coffee shop that I love visiting nearly every day. It's situated in the city center but surrounded by old buildings that protect it from the city noise. This is the right place for you to relax, think about your life or just enjoy your routine. I also love this place for its remarkable scent - it's a mixture of coffee aroma and the smell of fresh pastry. Most of all I love having a cup of coffee with muffins. This coffee shop has a large variety of muffins, and you can choose whatever flavor you want. Today I saw a banana nut muffin in the window. It looked delicious. So I took a cup of cappuccino and asked for a couple of these muffins. I took a sip of coffee and a little bite of muffin. It seemed that all these gorgeous tastes burst in my mouth. It was a day in my private paradise!",
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
