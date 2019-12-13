import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text29',
  templateUrl: './text29.page.html',
  styleUrls: ['./text29.page.scss'],
})
export class Text29Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Few people would choose a prison as the location for a special evening out. However, Italy has launched its first restaurant to be located in a real jail. At the Ingalera Restaurant in Bollate prison, Milan, there are four prisoners working as waiters and five others cooking in the kitchen, headed by a professional chef and a maître. It is a ground-breaking project, which allows prisoners to be gradually included into society. The reataurant has had great reviews: everyone says the food is worth going to prison for.",
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
