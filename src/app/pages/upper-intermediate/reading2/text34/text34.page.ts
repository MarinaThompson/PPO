import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text34',
  templateUrl: './text34.page.html',
  styleUrls: ['./text34.page.scss'],
})
export class Text34Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Fiona is doing ice skating competitions since she is six years old. When she was younger, she used to say that she was 'skating for glory'. She used to practice every day, sometimes for 3 hours in a row. Her parents were always supporting her. Actually, she won many trophies and different kind of awards. Now, she is 21 and she is better than she has ever been. She is doing very diffcult figures and it is very impressive. She is training for the Olympics. It requires a lot of discipline and a strict diet, but she doesn't mind. For Fiona, ice skating competitions are a piece of cake. She is very determined. She wants to win a medal and somehow, she knows she will. She still has to wait a couple more years, but soon enough, she will be skating for glory again. Until then, she is going to train very hard, every day, with the help of her coach.",
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
