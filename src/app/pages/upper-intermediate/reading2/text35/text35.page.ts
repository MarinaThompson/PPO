import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text35',
  templateUrl: './text35.page.html',
  styleUrls: ['./text35.page.scss'],
})
export class Text35Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Michael's passion is to collect cars. He has a lot of money so he can afford to buy many cars. Some are really old and antiques, but some are brand new. Some are black and very simple and others are colorful and extravagant. Sometimes, he participates in car expositions. This way, he can show his collection to people. Only few people have as many cars as he does. What he likes the most though, is to cruise down the boulevard with his cars. When he does so, he feels free. He feels like there are no limits. It's always funny to see people looking at him. They are always suprisedd to see these old cars cruising the boulevard. When he has the chance, he takes his children for a car ride. They go around the city, they go out for a ice cream cone and then they come back. It's always a lot of fun. Michael's passion amuse everyone.",
      locale: 'en-US',
      rate: 0.90
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
