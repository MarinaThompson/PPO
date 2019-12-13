import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text9',
  templateUrl: './text9.page.html',
  styleUrls: ['./text9.page.scss'],
})
export class Text9Page implements OnInit {

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
      text: "My name is Lisa. I am a schoolgirl. I am in third grade. I have a big family: a mother, a father, a sister, a brother. We live in a large house with our grandparents. Also we have a dog and cat. I like to walk and play with my grandmother and grandfather. For this birthday my grandparents gave me a bicycle. It is very beautiful; white with little pink flowers. But I can't ride a bicycle yet. My grandma wants to teach me how to ride a bike. She has a bike too; it is big and green. Today we go to the park to ride our bike. Grandma shows me how to sit and spin the pedals. It is so easy! I love cycling with grandma!",
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
