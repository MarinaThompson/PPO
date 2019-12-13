import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';


@Component({
  selector: 'app-text30',
  templateUrl: './text30.page.html',
  styleUrls: ['./text30.page.scss'],
})
export class Text30Page implements OnInit {

  constructor(private tts: TextToSpeech) { }

  textToSpeech(text) {
    this.tts.speak({
      text: "Grannies are very important for female elephants. A Behavioural Psychologist at the University of Stirling has been studying elephant herds in Kenya for decades. Her studies have found that the survival of female elephants and their success at reproducing is helped not only by having a mum but also by having a grandma. Female elephants support each other and protect and care for calves as a group and the grandmothers play an important role. Elephants and girls should never forget their gran.",
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
