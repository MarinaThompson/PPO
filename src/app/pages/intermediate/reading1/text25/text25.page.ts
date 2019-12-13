import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text25',
  templateUrl: './text25.page.html',
  styleUrls: ['./text25.page.scss'],
})
export class Text25Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Ten years ago, most adults had regular cell phones. Now people have smartphones. With smartphones, you can not onlycall people, but you can also go online, download new games,calculate a math problem, organize your schedule, and more.Smartphones are really helpful. Even kids have cell phones now. People use their phones a lot these days, especially whenthey are waiting. People do not like to be bored, so they go on their phones. A lot of news reports are saying that people are looking at their phones way too much. People look at their phones when they are with others, and that is bad. Being addicted to something is never good. When you go into a restaurant and look at other customers,most of them have phones in their hands. They would rathertext, play a game, or go online than talk to the people around them. Some restaurants have even offered a free meal or a discount if customers are willing not to use their phones for an entire hour! People also use their phones before they sleep.This is bad for them, because it makes it harder for them to go to sleep. The light from the phone tricks our bodies into thinkingwe need to be awake.",
      locale: 'en-US',
      rate: 0.80
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
