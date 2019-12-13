import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text19',
  templateUrl: './text19.page.html',
  styleUrls: ['./text19.page.scss'],
})
export class Text19Page implements OnInit {
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
      text: "According to Ruby, the best part about Christmas time is to decorate the Christmas tree. It's her favorite tradition of this lovely holiday. Every yea, one week before Christmas Eve, she decorates the tree with her family. Everyone has their own task. Her father is the one who has to go buy the tree. Ruby has to put to the lights on. They normally choose colorful lights. Her older brother Carlos has to put the Christmas balls. These are very beautiful. They are red and green with some glitters. Then, her younger brother Bradley puts the other ornaments. That includes the small golden stars and the fluffy and white snowflakes. Her mother puts the houses and the church under the tree. It's the village. All the little small building are handmade by their grandmother. Finally, the youngest of the family, which is her sister Rebecca, has to put on the star on the top of the tree. Every year, they do it the exact same way and every year, it's magical and amazing.",
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
