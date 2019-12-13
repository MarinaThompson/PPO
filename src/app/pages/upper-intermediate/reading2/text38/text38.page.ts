import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

@Component({
  selector: 'app-text38',
  templateUrl: './text38.page.html',
  styleUrls: ['./text38.page.scss'],
})
export class Text38Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Sandy is a little puppy. She lives in the countryside far of the city, with her owner Sammy. Every day, Sandy plays outside for 5 hours while Sammy is gardening. She loves it. When it rains, she has to stay inside and it makes her sad. She wouldn't mind playing under the pouring rain, but Sammy won't let her do so because otherwise, she gets all wet and dirty. One day, when it was raining heavily, Sandy decides to go anyways. She had a lot of fun. She played in the grass, then in the dirt. It was really nice. When she came back home, Sammy was upset with her. He had to clean her in the bath. Sandy hates taking bath so she suddenly regretted going outside. Next time it's going to rain, she is going to listen to Sammy and she will stay in, even if it's boring. She'd rather be bored than having to take a bath.",
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
