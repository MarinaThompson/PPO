import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text14',
  templateUrl: './text14.page.html',
  styleUrls: ['./text14.page.scss'],
})
export class Text14Page implements OnInit {
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
      text: "Mylene is a dental assistant and she is stil single. Her friends as well as her co-workers have been trying to introduce her to new people, but she is being very picky. She knows exactly what she wants in a man and it seems like no one is corresponding to what she is looking for. One day, at work, she meets Mike, her new client. At first sight, Mike is not really her type og man. Actually, he is a little bit fat and he has dark hair. When she starts talking with him though, she realizes that they have a lot of things in common. Mike the fat boy was raised on a farm, in the country side, just like her. Also, he likes to watch hockey and he plays in a baseball league, just like her. Mylene is surprising her own self. She is starting to like him. ALthough she knows he is a client, she decides to ask him out. Mike the fat boy is happy and says yes. This is the beginning of a beautiful love story.",
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
