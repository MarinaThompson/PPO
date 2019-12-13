import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text10',
  templateUrl: './text10.page.html',
  styleUrls: ['./text10.page.scss'],
})
export class Text10Page implements OnInit {

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
      text: "Do you like movies? What is your favorite movie? I especially like scary movies very much. They are called horror movies. My sister likes comedies or romantic comedies. My mum likes dramas and my dad likes documentaries. A new scary movie is on this week. There are zombies, blood and many dead men. This is just what we like! My friends and I are going to buy tickets after school. But the cashier in the movie theater refuses to sell us tickets. He says this movie is too scary for kids and we are not allowed to watch it. Is that fair?",
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
