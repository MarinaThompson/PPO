import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text15',
  templateUrl: './text15.page.html',
  styleUrls: ['./text15.page.scss'],
})
export class Text15Page implements OnInit {

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
      text: "Florence loves to travel. She has been to many places around the globe including some of the best destinations. Actually, she has been to more than 23 countries. Whenever someone asks her what is her favorite place though, she will always answer the same thing. Her favourite place isn't a country, but a city. It is not thousands of kilometers away from her home, but only a two hours drive. Her favorite place is New York, which she called her 'beautiful city'. She loves how that city never sleeps, how it is the land of all dreams coming true. When she goes there, she feels like everything is possible, she feels like there are no boundaries, no limits. Manhattan will always remain her favorite part. She likes to walk in Center Park and to look at the prestigious flatiron building. Going up to the top of the Empire State Building to see all the buildings from above is magical as well. Everything about this place thrills her. New York City, beautiful city.",
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
