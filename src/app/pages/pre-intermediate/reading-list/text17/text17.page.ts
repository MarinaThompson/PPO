import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text17',
  templateUrl: './text17.page.html',
  styleUrls: ['./text17.page.scss'],
})
export class Text17Page implements OnInit {
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
      text: "Xavier is a teenager. He loves to play different kind of sports. He is really good at hockey and at football, but his favorite sport is basketball. Xavier is a little ashamed though becayse he never learned how to ride a bike. He knows most people learned it when they were kids, but he never got the chance. One day, he asks his dad for some help. He wants to learn. His dad accepts to help him. They go to the store and they buy a bike. It was red. They go back home and Xavier started to practice in the street in front of the house. At first, he is not doing well. He keeps on falling and at one point, he hurts his knee. He is starting to lose his mind but his dad keeps on supporting him. After a couple of tries, Xavier is able to ride. It didn't take too long actually. His dad was impressed and pround. Since then, Xavier loves to ride around the city. Sometimes, he goes to school in bike.",
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
