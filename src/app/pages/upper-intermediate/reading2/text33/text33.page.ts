import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text33',
  templateUrl: './text33.page.html',
  styleUrls: ['./text33.page.scss'],
})
export class Text33Page implements OnInit {

  constructor(private tts: TextToSpeech) { }


  textToSpeech(text) {
    this.tts.speak({
      text: "Harry is in love with his girlfriend Natasha. They do everything together. They go to the movie theater, they go for walks and they go for some shopping. The only problem is that Natasha is a jealous girlfriend. She is very dependant to Harry. She can't stand the idea of seeing him with other girls, even if they are only friends. The other day, Harry was walking on the phone for two hours. Natasha could hear it was the voice of a girl. Furious, she took the phone out his hands and started to yell at the person on the other line. Actually, it was Harry's sister. Natasha felt very bad and ashamed. She said she was sorry, but it was too late. Although Harry loved her, it was starting to be too much. He couldn't stand her behavior any longer. Unfortunately, they broke up the same day. Having a jealous girlfriend is unhealthy.",
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
