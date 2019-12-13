import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text16',
  templateUrl: './text16.page.html',
  styleUrls: ['./text16.page.scss'],
})
export class Text16Page implements OnInit {
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
      text: "Some people likes online classes because you can learn anything from home. It's very flexible. Will doesn't like online classes. He has tried many different kind of classes, including French classes, literature classes, chemistry classes and mathematic classes. He hated all of them. He likes how he can work from home, but without the help of a teach in front of him, he feels like he is learning too slowly. Also, he is getting lazy. He keeps on waiting on the very last day to do his assignments and to read the pages he has to read. He accumulates the homework's and it becomes a true nightmare. This year, Will promised himself that he was going to take night classes only. This way, he is going to learn more. Also, it's surprisingly cheaper. Will will be saving money and he will be learning more. It's the perfect combination.",
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
