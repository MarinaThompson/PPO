import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text39',
  templateUrl: './text39.page.html',
  styleUrls: ['./text39.page.scss'],
})
export class Text39Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "My worst birthday party was when I was 8 years old. It was supposed to be very fun. I invited all of my friends and everyone came. At first, we were all enjoying. Then, a lot of bad things happened. First of all, one of my friend got hit by the baseball ball when we were playing. He started to bleed a lot. My mother had to call his mom so that she can pick kim up. Then, he went to the hospital. Not too long after this incident, we ate the cake. Another friend started to be very sick. We will never know if it was caused by the cake or the food my mother cooked that day, but that friend of mine started to vomit a lot. Maybe it was caused by something he had cooked before the birthday party. Just when I thought nothing could get worse, another of my friends got stung by a bee. He is really allergic to bee. Happily, he was fine because we took him to the hospital. Over all though, that birthday was an awful one.",
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
