import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text18',
  templateUrl: './text18.page.html',
  styleUrls: ['./text18.page.scss'],
})
export class Text18Page implements OnInit {
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
      text: "Tatiana has a cat named Chocolate. Chocolate is brown and chubby, that's why she picked that name. One day, she went to the pet stores to buy a step pet. She was hoping that with that cat toy, Chocolate would lose some pounds. She was very surprised by the price of these. They were around $100. It was more than what she could afford. She went back home, upset. Then she had a idea. She called her father who happens to be a carpenter. She was thinking perhaps he could build one step pet in wood for Chocolate. This way, she would sabe a lot of money. Her dad thinks this is a funny idea, but he accepts because he knows Tatiana would be happy. It required only few days for him to build it. It was perfect. It was exactly what Tatiana was looking for. She covered the step pet with some carpet and then it was even better. Chocolate was really happy with his toy, but he didn't lose too much pounds. At least, he could play with his claws.",
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
