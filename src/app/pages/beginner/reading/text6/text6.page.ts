import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text6',
  templateUrl: './text6.page.html',
  styleUrls: ['./text6.page.scss'],
})
export class Text6Page implements OnInit {
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
      text: "Today Mrs. Jenkins has a problem - she has no milk in the fridge. What to do? How to make cereal without milk for the family? Her husband, Mr. Jenkins, always eats cereal for breakfast. Her daughter, Lisa, likes cereal in the mornings too. So Mrs. Jenkins decides to cook cereal with water. She puts outmeal into the pan and adds some water to it. She puts sugar into the cereal to make it sweeter. Finally the cereal is ready. How to make it better? Mrs. Jenkins decides to add some fruit to each plate of cereal. She adds some sweet yellow bananas and red strawberries. Now her special cereal is ready.",
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
