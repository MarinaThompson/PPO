import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text36',
  templateUrl: './text36.page.html',
  styleUrls: ['./text36.page.scss'],
})
export class Text36Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Celine is still very young, but she wants to learn how to swim. Her family has a pool in the backyard but she never learned how to swim so she never had the chance to enjoy the pool. Her parents decided to play for some private swimming classes. During the beginning of the summer, twice a week, on Tuesday and Thursdays, Gabriella the swimming teacher would come at Celine's house to teach her. They would practise in Celine's pool. Learning how to swim is harder than Celine thought. It requires a lot of practice. She asks her parents to have more classes. Her parents accepts to pay Gabriella for one more day of the week, on the Friday. For the rest of the summer, Celine has three classes a week, which is more than enough. At the end of the summer, she is a really good swimmer and she feels confident about her skills. These swimming classes were really helpful.",
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
