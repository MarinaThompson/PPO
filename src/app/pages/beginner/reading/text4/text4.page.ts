import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text4',
  templateUrl: './text4.page.html',
  styleUrls: ['./text4.page.scss'],
})
export class Text4Page implements OnInit {

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
      text: "Lizzy and Alice are twins. They look alike. They are eleven years old. They are tall and slim. They have short fair hair and blue eyes. They love to dance and sing. Lizzy and Alice have many friends. They go to school together. Tonight they have a song contest at school. Lizzy and Alice want to win in this contest. Lizzy plays the piano and sings. And Alice sings and dances. Their parents look at them and clap their hands. How lucky they are! They win first place in the contest.",
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
